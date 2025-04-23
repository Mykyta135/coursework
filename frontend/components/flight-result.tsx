import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { FlightAPI } from "@/lib/api-client";
import { Flight, SeatClass } from "@/app/types";
import { Plane, Clock, Users } from "lucide-react";

export default function FlightResults() {
  const searchParams = useSearchParams();
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        setLoading(true);

        // Parse search parameters
        const from = searchParams.get("from") || "";
        const to = searchParams.get("to") || "";
        const dateStr = searchParams.get("date");
        const seatClass = (searchParams.get("class") as SeatClass) || undefined;
        const passengersStr = searchParams.get("passengers");
        
        let date: Date | undefined;
        if (dateStr) {
          date = new Date(dateStr);
        }
        
        let passengers: number | undefined;
        if (passengersStr) {
          passengers = parseInt(passengersStr);
        }

        // Call API to search flights with all parameters
        const results = await FlightAPI.search({
          departureAirportCode: from,
          arrivalAirportCode: to,
          departureDate: date,
          seatClass,
          passengers
        });

        setFlights(results);
      } catch (err) {
        console.error("Failed to fetch flights:", err);
        setError("Failed to load flights. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="w-full">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-8 w-40" />
                </div>
                <Skeleton className="h-12 w-20" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Card className="w-full">
        <CardContent className="p-6 text-center">
          <p className="text-red-500">{error}</p>
          <Button className="mt-4" onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (flights.length === 0) {
    return (
      <Card className="w-full">
        <CardContent className="p-6 text-center">
          <p>No flights found for your search criteria.</p>
          <Button className="mt-4" onClick={() => window.history.back()}>
            Change Search
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {flights.map((flight) => (
        <Card
          key={flight.id}
          className="w-full hover:shadow-lg transition-shadow"
        >
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <div className="flex items-center">
                {flight.airline.logoUrl && (
                  <img 
                    src={flight.airline.logoUrl} 
                    alt={flight.airline.name}
                    className="h-6 mr-2"
                  />
                )}
                <span>
                  {flight.airline.name} {flight.flightNumber}
                </span>
                <span className="ml-2 text-sm text-muted-foreground">
                  ({flight.airline.code})
                </span>
              </div>
              {flight.lowestPrice !== undefined && (
                <span className="text-lg font-semibold text-primary">
                  {typeof flight.lowestPrice === 'number' ? 
                    flight.lowestPrice.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    }) : 
                    flight.lowestPrice
                  }
                </span>
              )}
            </CardTitle>
            <CardDescription className="flex items-center gap-2">
              <span>Status: {flight.status}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Users className="h-3 w-3" /> 
                <span>{flight.availableSeats || 0} seats available</span>
              </span>
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Departure</p>
                <p className="text-xl font-semibold">
                  {flight.departure && format(new Date(flight.departure.time), "h:mm a")}
                </p>
                <p className="text-sm">
                  {flight.departure && format(new Date(flight.departure.time), "MMM d, yyyy")}
                </p>
                <p className="text-sm mt-1">
                  {flight.departure?.airport} ({flight.departure?.code})
                </p>
                <p className="text-sm text-muted-foreground">
                  {flight.departure?.city}
                </p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <p className="text-sm text-muted-foreground mb-2 flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  Duration: {flight.duration}
                </p>
                <div className="relative w-full">
                  <Separator className="absolute top-1/2 w-full" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-1">
                    <Plane className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-1">Arrival</p>
                <p className="text-xl font-semibold">
                  {flight.arrival && format(new Date(flight.arrival.time), "h:mm a")}
                </p>
                <p className="text-sm">
                  {flight.arrival && format(new Date(flight.arrival.time), "MMM d, yyyy")}
                </p>
                <p className="text-sm mt-1">
                  {flight.arrival?.airport} ({flight.arrival?.code})
                </p>
                <p className="text-sm text-muted-foreground">
                  {flight.arrival?.city}
                </p>
              </div>
            </div>
          </CardContent>

          <CardFooter className="p-6">
            <Button
              asChild
              className="w-full"
              disabled={!flight.availableSeats || flight.availableSeats <= 0}
            >
              <a href={`/booking/${flight.id}`}>
                {flight.availableSeats && flight.availableSeats > 0
                  ? "Book Now"
                  : "No Available Seats"}
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}