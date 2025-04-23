// app/flights/[flightId]/seats/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { format } from "date-fns";
import { Loader2, Check, Plane, ArrowRight } from "lucide-react";
import { FlightAPI } from "@/lib/api-client";
import { Flight } from "@/app/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { useAuth } from "@/provider/AuthProvider";
import { toast } from "sonner";

type Seat = {
  id: string;
  seatNumber: string;
  seatClass: string;
  price: number;
  isAvailable: boolean;
};

export default function SeatSelectionPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const { isLoggedIn } = useAuth();
  const flightId = params.flightId as string;
  const passengerCount = parseInt(searchParams.get("passengers") || "1");
  const seatClass = searchParams.get("class") || "ECONOMY";

  const [flight, setFlight] = useState<Flight | null>(null);
  const [seats, setSeats] = useState<Seat[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFlightAndSeats = async () => {
      try {
        const flightData = await FlightAPI.getFlightById(flightId);
        setFlight(flightData);

        const seatsData = await FlightAPI.getFlightSeats(flightId, seatClass);
        setSeats(seatsData);
      } catch (err) {
        console.error("Error fetching flight data:", err);
        setError("Failed to load flight or seat information.");
      } finally {
        setLoading(false);
      }
    };

    fetchFlightAndSeats();
  }, [flightId, seatClass]);

  const handleSeatSelect = (seat: Seat) => {
    if (!seat.isAvailable) return;

    if (selectedSeats.some((s) => s.id === seat.id)) {
      // Remove seat if already selected
      setSelectedSeats(selectedSeats.filter((s) => s.id !== seat.id));
    } else if (selectedSeats.length < passengerCount) {
      // Add seat if not at max passengers
      setSelectedSeats([...selectedSeats, seat]);
    } else {
      // Replace the first selected seat if at max passengers
      toast(`You've replaced the first selected seat with ${seat.seatNumber}`);
      setSelectedSeats([...selectedSeats.slice(1), seat]);
    }
  };

  const calculateTotalPrice = () => {
    return selectedSeats.reduce((total, seat) => total + seat.price, 0);
  };

  const handleContinue = () => {
    if (!isLoggedIn) {
      // Store seat selection in session storage
      sessionStorage.setItem("selectedFlightId", flightId);
      sessionStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
      sessionStorage.setItem("passengerCount", passengerCount.toString());

      toast("Please login or create an account to continue with your booking");

      router.push(`/login?redirect=/flights/${flightId}/booking`);
      return;
    }

    if (selectedSeats.length < passengerCount) {
      toast(`Please select ${passengerCount} seats to continue`);
      return;
    }

    // Store selected seats and navigate to booking page
    sessionStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
    router.push(`/flights/${flightId}/booking`);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin mr-2" />
        <span>Loading flight and seat information...</span>
      </div>
    );
  }

  if (error || !flight) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p className="text-red-500 mb-6">{error || "Flight not found"}</p>
        <Button onClick={() => router.back()}>Go Back</Button>
      </div>
    );
  }

  // Group seats by row for better display
  const seatsByRow: Record<string, Seat[]> = {};
  seats.forEach((seat) => {
    // Extract row number from seat number (e.g., "12A" -> "12")
    const row = seat.seatNumber.replace(/[A-Z]/g, "");
    if (!seatsByRow[row]) {
      seatsByRow[row] = [];
    }
    seatsByRow[row].push(seat);
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Select Your Seats</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Flight Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <p className="font-medium">
                    {flight.airline?.name || "Airline"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {flight.flightNumber}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-lg font-bold">
                      {format(new Date(flight.departure.time), "HH:mm")}
                    </p>
                    <p className="text-sm">{flight.departure.code}</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="relative w-16 md:w-24">
                      <Separator className="my-2" />
                      <ArrowRight className="h-3 w-3 absolute top-1/2 right-0 -translate-y-1/2" />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {format(new Date(flight.departure.time), "MMM d")}
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-lg font-bold">
                      {format(new Date(flight.arrival.time), "HH:mm")}
                    </p>
                    <p className="text-sm">{flight.arrival.code}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                Select {passengerCount}{" "}
                {passengerCount === 1 ? "seat" : "seats"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 py-4 bg-muted/30 rounded flex items-center justify-center">
                <Plane className="h-6 w-6 mb-2" />
                <span className="text-sm font-medium ml-2">
                  FRONT OF AIRCRAFT
                </span>
              </div>

              <div className="space-y-4">
                {Object.entries(seatsByRow).map(([row, rowSeats]) => (
                  <div key={row} className="flex justify-center space-x-2">
                    <div className="w-8 flex items-center justify-center text-sm font-medium">
                      {row}
                    </div>
                    <div className="flex space-x-2">
                      {rowSeats
                        .sort((a, b) =>
                          a.seatNumber.localeCompare(b.seatNumber)
                        )
                        .map((seat) => {
                          const isSelected = selectedSeats.some(
                            (s) => s.id === seat.id
                          );
                          return (
                            <button
                              key={seat.id}
                              className={`w-10 h-10 rounded-md flex items-center justify-center text-sm font-medium transition-colors ${
                                !seat.isAvailable
                                  ? "bg-muted text-muted-foreground cursor-not-allowed"
                                  : isSelected
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-white border border-input hover:bg-accent hover:text-accent-foreground"
                              }`}
                              onClick={() => handleSeatSelect(seat)}
                              disabled={!seat.isAvailable}
                            >
                              {isSelected ? (
                                <Check className="h-4 w-4" />
                              ) : (
                                seat.seatNumber.replace(/[0-9]/g, "")
                              )}
                            </button>
                          );
                        })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-8 justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-white border border-input"></div>
                  <span className="text-sm">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-primary"></div>
                  <span className="text-sm">Selected</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-muted"></div>
                  <span className="text-sm">Unavailable</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium">Flight</p>
                  <p className="text-lg">{flight.flightNumber}</p>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(flight.departure.time), "EEE, MMM d")}
                  </p>
                </div>

                <Separator />

                <div>
                  <p className="text-sm font-medium">Passengers</p>
                  <p className="text-lg">
                    {passengerCount}{" "}
                    {passengerCount === 1 ? "passenger" : "passengers"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {seatClass.replace("_", " ")}
                  </p>
                </div>

                <Separator />

                <div>
                  <p className="text-sm font-medium">Selected Seats</p>
                  {selectedSeats.length > 0 ? (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedSeats.map((seat) => (
                        <div
                          key={seat.id}
                          className="px-2 py-1 bg-muted rounded text-sm font-medium"
                        >
                          {seat.seatNumber}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      No seats selected
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col border-t pt-6">
              <div className="flex justify-between w-full mb-4">
                <p className="text-sm font-medium">Base fare</p>
                <p className="text-sm">${(flight.baseFare || 0).toFixed(2)}</p>
              </div>
              <div className="flex justify-between w-full mb-4">
                <p className="text-sm font-medium">Seat selection</p>
                <p className="text-sm">
                  $
                  {(
                    calculateTotalPrice() -
                    (flight.baseFare || 0) * selectedSeats.length
                  ).toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between w-full mb-6">
                <p className="font-bold">Total</p>
                <p className="font-bold">${calculateTotalPrice().toFixed(2)}</p>
              </div>
              <Button
                className="w-full"
                onClick={handleContinue}
                disabled={selectedSeats.length === 0}
              >
                Continue to Booking
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
