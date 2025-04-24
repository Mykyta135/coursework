// app/tickets/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Loader2, Download, RefreshCw, ArrowRight } from "lucide-react";
import { UserAPI, TicketAPI, FlightAPI } from "@/lib/api-client";
import { Flight, Ticket, TicketStatus } from "@/app/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/provider/AuthProvider";
import { toast } from "sonner";

export default function MyTicketsPage() {
  const { isLoggedIn, loading: authLoading } = useAuth();
  const router = useRouter();

  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [checkingInId, setCheckingInId] = useState<string | null>(null);
  const [requestingRefundId, setRequestingRefundId] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (authLoading) return;

    if (!isLoggedIn) {
      router.push("/login?redirect=/tickets");
      return;
    }

    const fetchTickets = async () => {
      try {
        const ticketsData = await UserAPI.getUserTickets();
        setTickets(ticketsData);
      } catch (err) {
        console.error("Error fetching tickets:", err);
        setError("Failed to load tickets. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, [isLoggedIn, authLoading, router]);

  const handleDownloadTicket = async (ticketId: string) => {
    setDownloadingId(ticketId);
    try {
      const fileUrl = await TicketAPI.downloadTicket(ticketId);
      // Open the file in a new tab
      window.open(fileUrl, "_blank");
    } catch (err) {
      console.error("Error downloading ticket:", err);
      toast.error("Failed to download ticket");
    } finally {
      setDownloadingId(null);
    }
  };

  const handleCheckIn = async (ticketId: string) => {
    setCheckingInId(ticketId);
    try {
      await TicketAPI.checkIn(ticketId);

      // Update the ticket status in the UI
      setTickets(
        tickets.map((ticket) =>
          ticket.id === ticketId ? { ...ticket, status: "CHECKED_IN" as TicketStatus} : ticket
        )
      );

      toast.success("Check-in successful");
    } catch (err) {
      console.error("Error checking in:", err);
      toast.error("Failed to check in");
    } finally {
      setCheckingInId(null);
    }
  };

  const handleRequestRefund = async (ticketId: string) => {
    setRequestingRefundId(ticketId);
    try {
      await TicketAPI.requestRefund(ticketId);

      // Update the ticket status in the UI
      setTickets(
        tickets.map((ticket) =>
          ticket.id === ticketId
            ? { ...ticket, status: "REFUND_REQUESTED" as TicketStatus}
            : ticket
        )
      );

      toast.success("Refund request submitted");
    } catch (err) {
      console.error("Error requesting refund:", err);
      toast.error("Failed to request refund");
    } finally {
      setRequestingRefundId(null);
    }
  };

  // Group tickets by status
  const upcomingTickets = tickets.filter((ticket) =>
    ["BOOKED", "CONFIRMED"].includes(ticket.status)
  );

  const checkedInTickets = tickets.filter(
    (ticket) => ticket.status === "CHECKED_IN"
  );

  const completedTickets = tickets.filter((ticket) =>
    ["COMPLETED", "REFUNDED", "CANCELLED", "REFUND_REQUESTED"].includes(
      ticket.status
    )
  );

  if (authLoading || loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin mr-2" />
        <span>Loading tickets...</span>
      </div>
    );
  }

  const renderTicketCard = async (ticket: Ticket) => {
    const flightId = ticket.flightSeat.flightId;
    const flight = await FlightAPI.getFlightById(flightId);
    const isUpcoming = ["BOOKED", "CONFIRMED"].includes(ticket.status);
    const isPastDeparture = flight?.departure?.time
      ? new Date(flight.departure.time) < new Date()
      : false;

    return (
      <Card key={ticket.id} className="mb-4">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-lg">
                {flight?.departure?.code} to {flight?.arrival?.code}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {flight?.airline?.name} - {flight?.flightNumber}
              </p>
            </div>
            <Badge
              variant={
                ticket.status === "CHECKED_IN"
                  ? "default"
                  : ticket.status === "COMPLETED"
                  ? "outline"
                  : ticket.status === "REFUNDED" ||
                    ticket.status === "CANCELLED"
                  ? "destructive"
                  : ticket.status === "REFUND_REQUESTED"
                  ? "secondary"
                  : "outline"
              }
            >
              {ticket.status.replace("_", " ")}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="grid grid-cols-2 gap-6 md:gap-12">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Departure
                </p>
                <p className="text-lg font-bold">
                  {flight?.departure?.time &&
                    format(new Date(flight.departure.time), "HH:mm")}
                </p>
                <p className="text-sm">{flight?.departure?.code}</p>
                <p className="text-xs text-muted-foreground">
                  {flight?.departure?.time &&
                    format(new Date(flight.departure.time), "MMM d, yyyy")}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Arrival
                </p>
                <p className="text-lg font-bold">
                  {flight?.arrival?.time &&
                    format(new Date(flight.arrival.time), "HH:mm")}
                </p>
                <p className="text-sm">{flight?.arrival?.code}</p>
                <p className="text-xs text-muted-foreground">
                  {flight?.arrival?.time &&
                    format(new Date(flight.arrival.time), "MMM d, yyyy")}
                </p>
              </div>
            </div>

            <div className="mt-4 md:mt-0">
              <p className="text-sm font-medium text-muted-foreground">Seat</p>
              <p className="text-lg font-bold">
                {ticket.flightSeat?.seatNumber}
              </p>
              <p className="text-sm">{ticket.flightSeat?.seatClass}</p>
            </div>
          </div>

          <Separator className="my-4" />

          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Passenger
            </p>
            <p className="font-medium">
              {ticket.passenger?.firstName} {ticket.passenger?.lastName}
            </p>
            <p className="text-sm text-muted-foreground">
              {ticket.passenger?.passportNumber &&
                `Passport: ${ticket.passenger.passportNumber}`}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleDownloadTicket(ticket.id)}
            disabled={downloadingId === ticket.id}
          >
            {downloadingId === ticket.id ? (
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
            ) : (
              <Download className="h-4 w-4 mr-2" />
            )}
            Download Ticket
          </Button>

          {isUpcoming && !isPastDeparture && (
            <>
              {ticket.status !== "CHECKED_IN" && (
                <Button
                  size="sm"
                  onClick={() => handleCheckIn(ticket.id)}
                  disabled={checkingInId === ticket.id}
                >
                  {checkingInId === ticket.id ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  ) : (
                    <RefreshCw className="h-4 w-4 mr-2" />
                  )}
                  Check In
                </Button>
              )}

              <Button
                variant="outline"
                size="sm"
                onClick={() => handleRequestRefund(ticket.id)}
                disabled={
                  requestingRefundId === ticket.id ||
                  ticket.status === "REFUND_REQUESTED"
                }
              >
                {requestingRefundId === ticket.id ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  "Request Refund"
                )}
              </Button>
            </>
          )}
        </CardFooter>
      </Card>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Tickets</h1>

      {error ? (
        <div className="p-4 border border-red-200 bg-red-50 rounded-md text-red-800 mb-6">
          {error}
        </div>
      ) : tickets.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">
            You don't have any tickets yet
          </p>
          <Button onClick={() => router.push("/")}>Search for Flights</Button>
        </div>
      ) : (
        <Tabs defaultValue="upcoming">
          <TabsList className="mb-6">
            <TabsTrigger value="upcoming">
              Upcoming ({upcomingTickets.length})
            </TabsTrigger>
            <TabsTrigger value="checked-in">
              Checked In ({checkedInTickets.length})
            </TabsTrigger>
            <TabsTrigger value="completed">
              Completed ({completedTickets.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            {upcomingTickets.length > 0 ? (
              upcomingTickets.map(renderTicketCard)
            ) : (
              <p className="text-center py-8 text-muted-foreground">
                No upcoming tickets found
              </p>
            )}
          </TabsContent>

          <TabsContent value="checked-in">
            {checkedInTickets.length > 0 ? (
              checkedInTickets.map(renderTicketCard)
            ) : (
              <p className="text-center py-8 text-muted-foreground">
                No checked-in tickets found
              </p>
            )}
          </TabsContent>

          <TabsContent value="completed">
            {completedTickets.length > 0 ? (
              completedTickets.map(renderTicketCard)
            ) : (
              <p className="text-center py-8 text-muted-foreground">
                No completed tickets found
              </p>
            )}
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
