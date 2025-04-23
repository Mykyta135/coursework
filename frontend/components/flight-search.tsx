import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { Calendar, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SeatClass } from '@/app/types';
import { FlightAPI } from '@/lib/api-client';

export default function FlightSearchForm() {
  const router = useRouter();
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  
  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [departureDate, setDepartureDate] = useState<Date | undefined>(undefined);
  const [returnDate, setReturnDate] = useState<Date | undefined>(undefined);
  const [passengers, setPassengers] = useState(1);
  const [seatClass, setSeatClass] = useState<SeatClass>(SeatClass.ECONOMY);
  
  // New state for airport search suggestions
  const [departureAirportOptions, setDepartureAirportOptions] = useState<any[]>([]);
  const [arrivalAirportOptions, setArrivalAirportOptions] = useState<any[]>([]);
  const [departureFocused, setDepartureFocused] = useState(false);
  const [arrivalFocused, setArrivalFocused] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [popularRoutes, setPopularRoutes] = useState<any[]>([]);

  // Fetch popular routes on component mount
//   useEffect(() => {
//     const fetchPopularRoutes = async () => {
//       try {
//         const routes = await FlightAPI.getPopularRoutes();
//         setPopularRoutes(routes);
//       } catch (err) {
//         console.error("Failed to fetch popular routes:", err);
//       }
//     };

//     fetchPopularRoutes();
//   }, []);

  // Search airports when user types
  const searchAirports = async (query: string, isForDeparture: boolean) => {
    if (query.length < 2) {
      if (isForDeparture) {
        setDepartureAirportOptions([]);
      } else {
        setArrivalAirportOptions([]);
      }
      return;
    }

    try {
      setIsSearching(true);
      const results = await FlightAPI.searchAirports(query);
      if (isForDeparture) {
        setDepartureAirportOptions(results);
      } else {
        setArrivalAirportOptions(results);
      }
    } catch (err) {
      console.error("Failed to search airports:", err);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearch = () => {
    if (!departureAirport || !arrivalAirport || !departureDate) {
      return;
    }

    const searchParams = new URLSearchParams();
    searchParams.append('from', departureAirport);
    searchParams.append('to', arrivalAirport);
    searchParams.append('date', departureDate.toISOString());
    
    if (isRoundTrip && returnDate) {
      searchParams.append('returnDate', returnDate.toISOString());
    }
    
    searchParams.append('passengers', passengers.toString());
    searchParams.append('class', seatClass);
    
    router.push(`/flights?${searchParams.toString()}`);
  };

  // Handle selection of an airport from suggestions
  const selectAirport = (airport: any, isForDeparture: boolean) => {
    if (isForDeparture) {
      setDepartureAirport(airport.code);
      setDepartureAirportOptions([]);
      setDepartureFocused(false);
    } else {
      setArrivalAirport(airport.code);
      setArrivalAirportOptions([]);
      setArrivalFocused(false);
    }
  };

  // Select a popular route
//   const selectPopularRoute = (route: any) => {
//     setDepartureAirport(route.departureCode);
//     setArrivalAirport(route.arrivalCode);
//   };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Find your flight</CardTitle>
        <CardDescription>Search for flights to your destination</CardDescription>
        <div className="flex space-x-4 mt-2">
          <Button 
            variant={isRoundTrip ? "outline" : "default"} 
            onClick={() => setIsRoundTrip(false)}
          >
            One Way
          </Button>
          <Button 
            variant={isRoundTrip ? "default" : "outline"} 
            onClick={() => setIsRoundTrip(true)}
          >
            Round Trip
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* {popularRoutes.length > 0 && (
          <div className="mt-2 mb-4">
            <p className="text-sm font-medium mb-2">Popular Routes:</p>
            <div className="flex flex-wrap gap-2">
              {popularRoutes.slice(0, 4).map((route, index) => (
                <Button 
                  key={index} 
                  variant="outline" 
                  size="sm"
                  onClick={() => selectPopularRoute(route)}
                >
                  {route.departureCode} → {route.arrivalCode}
                </Button>
              ))}
            </div>
          </div>
        )} */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2 relative">
            <Label htmlFor="departure">From</Label>
            <Input 
              id="departure" 
              placeholder="Enter airport code or city" 
              value={departureAirport}
              onChange={(e) => {
                setDepartureAirport(e.target.value);
                searchAirports(e.target.value, true);
              }}
              onFocus={() => setDepartureFocused(true)}
              onBlur={() => setTimeout(() => setDepartureFocused(false), 200)}
            />
            {departureFocused && departureAirportOptions.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
                {departureAirportOptions.map((airport) => (
                  <div 
                    key={airport.id} 
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => selectAirport(airport, true)}
                  >
                    <div className="font-medium">{airport.name} ({airport.code})</div>
                    <div className="text-sm text-gray-500">{airport.city}, {airport.country}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="space-y-2 relative">
            <Label htmlFor="arrival">To</Label>
            <Input 
              id="arrival" 
              placeholder="Enter airport code or city" 
              value={arrivalAirport}
              onChange={(e) => {
                setArrivalAirport(e.target.value);
                searchAirports(e.target.value, false);
              }}
              onFocus={() => setArrivalFocused(true)}
              onBlur={() => setTimeout(() => setArrivalFocused(false), 200)}
            />
            {arrivalFocused && arrivalAirportOptions.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
                {arrivalAirportOptions.map((airport) => (
                  <div 
                    key={airport.id} 
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => selectAirport(airport, false)}
                  >
                    <div className="font-medium">{airport.name} ({airport.code})</div>
                    <div className="text-sm text-gray-500">{airport.city}, {airport.country}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="departureDate">Departure Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="departureDate"
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {departureDate ? format(departureDate, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <CalendarComponent
                  mode="single"
                  selected={departureDate}
                  onSelect={setDepartureDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          
          {isRoundTrip && (
            <div className="space-y-2">
              <Label htmlFor="returnDate">Return Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="returnDate"
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {returnDate ? format(returnDate, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <CalendarComponent
                    mode="single"
                    selected={returnDate}
                    onSelect={setReturnDate}
                    disabled={(date) => 
                      date < (departureDate || new Date())
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="passengers">Passengers</Label>
            <Select 
              value={passengers.toString()} 
              onValueChange={(value) => setPassengers(parseInt(value))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select number of passengers" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} Passenger{num > 1 ? 's' : ''}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="class">Class</Label>
            <Select 
              value={seatClass} 
              onValueChange={(value) => setSeatClass(value as SeatClass)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={SeatClass.ECONOMY}>Economy</SelectItem>
                <SelectItem value={SeatClass.PREMIUM_ECONOMY}>Premium Economy</SelectItem>
                <SelectItem value={SeatClass.BUSINESS}>Business</SelectItem>
                <SelectItem value={SeatClass.FIRST}>First Class</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full" onClick={handleSearch}>
          <Search className="mr-2 h-4 w-4" />
          Search Flights
        </Button>
      </CardFooter>
    </Card>
  );
}