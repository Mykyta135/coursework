// app/my-bookings/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Loader2, FileText, Calendar, Plane, AlertTriangle } from "lucide-react";
import { UserAPI } from "@/lib/api-client";
import { Booking, BookingStatus } from "@/app/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/provider/AuthProvider";
import { toast } from "sonner";

export default function MyBookingsPage() {
  const { isLoggedIn, loading } = useAuth();
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (loading) return;

    if (!isLoggedIn) {
      router.push("/login?redirect=/my-bookings");
      return;
    }

    const fetchBookings = async () => {
      try {
        const bookingsData = await UserAPI.getUserBookings();
        setBookings(bookingsData);
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setError("Failed to load booking information.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [isLoggedIn, loading, router]);

  const getStatusBadgeVariant = (status: BookingStatus) => {
    switch (status) {
      case BookingStatus.CONFIRMED:
        return "success";
      case BookingStatus.PENDING:
        return "outline";
      case BookingStatus.COMPLETED:
        return "secondary";
      case BookingStatus.CANCELLED:
        return "destructive";
      default:
        return "default";
    }
  };

  const viewBookingDetails = (bookingId: string) => {
    router.push(`/booking/${bookingId}`);
  };

  if (isLoading || loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin mr-2" />
        <span>Loading your bookings...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <AlertTriangle className="h-12 w-12 mx-auto text-amber-500 mb-4" />
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p className="text-red-500 mb-6">{error}</p>
        <Button onClick={() => router.push("/")}>Return to Home</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">My Bookings</h1>
          <p className="text-muted-foreground mt-1">
            Manage and view all your flight bookings
          </p>
        </div>
        <Button 
          className="mt-4 md:mt-0" 
          onClick={() => router.push("/")}
        >
          Book New Flight
        </Button>
      </div>

      {bookings.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="py-12 flex flex-col items-center justify-center text-center">
            <FileText className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-medium mb-2">No Bookings Found</h3>
            <p className="text-muted-foreground mb-6">
              You haven't made any flight bookings yet.
            </p>
            <Button onClick={() => router.push("/")}>
              Book Your First Flight
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {bookings.map((booking) => (
            <Card key={booking.id} className="overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center">
                      <span>Booking #{booking.bookingReference}</span>
                      <Badge 
                        className="ml-4" 
                        variant={getStatusBadgeVariant(booking.status) as any}
                      >
                        {booking.status.replace("_", " ")}
                      </Badge>
                    </CardTitle>
                    <CardDescription className="mt-1">
                      Booked on {format(new Date(booking.bookingDate), "MMMM d, yyyy")}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex flex-col md:flex-row gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Flight</p>
                    <p className="font-medium">{booking.flight.flightNumber}</p>
                    <p className="text-sm">
                      {booking.flight.airline?.name}
                    </p>
                  </div>

                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">Route</p>
                    <div className="flex items-center gap-3">
                      <div className="text-center">
                        <p className="font-medium">{booking.flight.departure.code}</p>
                        <p className="text-xs text-muted-foreground">
                          {booking.flight.departure.city}
                        </p>
                      </div>

                      <div className="flex-1 flex items-center justify-center">
                        <Plane className="h-4 w-4 text-muted-foreground" />
                        <Separator className="flex-1 mx-2" />
                      </div>

                      <div className="text-center">
                        <p className="font-medium">{booking.flight.arrival.code}</p>
                        <p className="text-xs text-muted-foreground">
                          {booking.flight.arrival.city}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Date</p>
                    <p className="font-medium">
                      {format(new Date(booking.flight.departure.time), "MMMM d, yyyy")}
                    </p>
                    <p className="text-sm">
                      {format(new Date(booking.flight.departure.time), "h:mm a")} - 
                      {format(new Date(booking.flight.arrival.time), "h:mm a")}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Passengers</p>
                    <p className="font-medium">{booking.tickets.length}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total</p>
                    <p className="font-medium">${booking.totalAmount.toFixed(2)}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/50 pt-4 pb-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {booking.status === BookingStatus.CANCELLED
                        ? "Booking cancelled"
                        : `Flight on ${format(new Date(booking.flight.departure.time), "EEE, MMM d")}`}
                    </span>
                  </div>
                  <Button onClick={() => viewBookingDetails(booking.id)}>
                    View Details
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}