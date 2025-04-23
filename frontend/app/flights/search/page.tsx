// app/flights/search/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { format, parseISO } from "date-fns";
import { Loader2, Plane, ArrowRight, Calendar, Users, Filter } from "lucide-react";
import { FlightAPI } from "@/lib/api-client";
import { Flight } from "@/app/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FlightSearchSummary } from "@/components/flight-search-summary";

export default function FlightSearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("departure");

  // Parse search params
  const fromCode = searchParams.get("from") || "";
  const toCode = searchParams.get("to") || "";
  const dateStr = searchParams.get("date") || "";
  const returnDateStr = searchParams.get("returnDate");
  const passengers = parseInt(searchParams.get("passengers") || "1");
  const seatClass = searchParams.get("class") || "ECONOMY";

  useEffect(() => {
    const fetchFlights = async () => {
      if (!fromCode || !toCode || !dateStr) {
        setError("Missing required search parameters");
        setLoading(false);
        return;
      }

      try {
        const departureDate = new Date(dateStr);
        const returnDate = returnDateStr ? new Date(returnDateStr) : undefined;

        const results = await FlightAPI.search({
          departureAirportCode: fromCode,
          arrivalAirportCode: toCode,
          departureDate,
          returnDate,
          passengers,
          seatClass,
        });

        setFlights(results);
        setError(null);
      } catch (err) {
        console.error("Error fetching flights:", err);
        setError("Failed to fetch flights. Please try again.");
        setFlights([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, [fromCode, toCode, dateStr, returnDateStr, passengers, seatClass]);

  // Sort flights based on criteria
  const sortedFlights = [...flights].sort((a, b) => {
    switch (sortBy) {
      case "price":
        return (a.baseFare || 0) - (b.baseFare || 0);
      case "duration":
        return (
          (new Date(a.arrival.time).getTime() - new Date(a.departure.time).getTime()) -
          (new Date(b.arrival.time).getTime() - new Date(b.departure.time).getTime())
        );
      case "departure":
      default:
        return new Date(a.departure.time).getTime() - new Date(b.departure.time).getTime();
    }
  });

  // Calculate flight duration in hours and minutes
  const calculateDuration = (departureTime: string, arrivalTime: string) => {
    const departure = new Date(departureTime).getTime();
    const arrival = new Date(arrivalTime).getTime();
    const durationMs = arrival - departure;
    const hours = Math.floor(durationMs / (1000 * 60 * 60));
    const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  const handleSelectFlight = (flightId: string) => {
    router.push(`/flights/${flightId}/seats?passengers=${passengers}&class=${seatClass}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <FlightSearchSummary
        fromCode={fromCode}
        toCode={toCode}
        date={dateStr}
        returnDate={returnDateStr}
        passengers={passengers}
        seatClass={seatClass}
      />

      <div className="mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-2xl font-bold">Available Flights</h1>
              
              <div className="flex items-center gap-4">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="md:hidden">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Filter Flights</SheetTitle>
                      <SheetDescription>
                        Adjust your search parameters
                      </SheetDescription>
                    </SheetHeader>
                    <div className="mt-6 space-y-4">
                      {/* Mobile filters go here */}
                    </div>
                  </SheetContent>
                </Sheet>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Sort by:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-36">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="departure">Departure Time</SelectItem>
                      <SelectItem value="price">Price (Low to High)</SelectItem>
                      <SelectItem value="duration">Duration (Shortest)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center p-12">
          <Loader2 className="h-8 w-8 animate-spin mb-4" />
          <p>Searching for flights...</p>
        </div>
      ) : error ? (
        <div className="text-center p-12">
          <p className="text-red-500">{error}</p>
          <Button className="mt-4" onClick={() => router.push("/")}>
            Return to Search
          </Button>
        </div>
      ) : sortedFlights.length === 0 ? (
        <div className="text-center p-12">
          <p>No flights found for your search criteria.</p>
          <Button className="mt-4" onClick={() => router.push("/")}>
            Modify Search
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedFlights.map((flight) => (
            <Card key={flight.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <Plane className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">{flight.airline?.name || "Airline"}</p>
                      <p className="text-sm text-muted-foreground">{flight.flightNumber}</p>
                    </div>
                  </div>

                  <div className="flex flex-1 items-center justify-between md:justify-around">
                    <div className="text-center">
                      <p className="text-lg font-bold">
                        {format(new Date(flight.departure.time), "HH:mm")}
                      </p>
                      <p className="text-sm">{fromCode}</p>
                    </div>

                    <div className="flex flex-col items-center mx-4">
                      <p className="text-xs text-muted-foreground">
                        {calculateDuration(flight.departure.time, flight.arrival.time)}
                      </p>
                      <div className="relative w-16 md:w-24 lg:w-36">
                        <Separator className="my-2" />
                        <ArrowRight className="h-3 w-3 absolute top-1/2 right-0 -translate-y-1/2" />
                      </div>
                      <p className="text-xs text-muted-foreground">Direct</p>
                    </div>

                    <div className="text-center">
                      <p className="text-lg font-bold">
                        {format(new Date(flight.arrival.time), "HH:mm")}
                      </p>
                      <p className="text-sm">{toCode}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <p className="text-2xl font-bold">${(flight.baseFare || 0).toFixed(2)}</p>
                    <p className="text-sm text-muted-foreground">per passenger</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/50 p-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Badge variant={flight.status === "SCHEDULED" ? "outline" : "secondary"}>
                    {flight.status}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {format(new Date(flight.departure.time), "MMM d, yyyy")}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    {seatClass.replace("_", " ")}
                  </div>
                </div>
                <Button onClick={() => handleSelectFlight(flight.id)}>
                  Select Flight
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}