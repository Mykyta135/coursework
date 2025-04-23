// app/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserAPI } from "@/lib/api-client";
import { Booking } from "@/app/types";
import { useAuth } from "@/provider/AuthProvider";

export default function DashboardPage() {
  const router = useRouter();
  const { user, isLoggedIn, logout } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }

    const fetchBookings = async () => {
      try {
        setLoading(true);
        const userBookings = await UserAPI.getUserBookings();
        setBookings(userBookings);
      } catch (err: any) {
        setError(err.message || "Failed to load bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button onClick={logout}>Log Out</Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Welcome, {user?.email}</CardTitle>
            <CardDescription>
              View your bookings and manage your profile
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <Button onClick={() => router.push("/flights/search")}>
                Search Flights
              </Button>
              <Button variant="outline" onClick={() => router.push("/profile")}>
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Bookings</CardTitle>
            <CardDescription>
              View and manage your flight bookings
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading && <p>Loading your bookings...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && bookings.length === 0 && (
              <p>You don't have any bookings yet.</p>
            )}
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="border rounded-lg p-4 mb-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => router.push(`/bookings/${booking.id}`)}
              >
                <div className="flex justify-between">
                  <div>
                    <p className="font-semibold">
                      {booking.flight.departure.code} to{" "}
                      {booking.flight.arrival.code}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {new Date(booking.flight.departure.time).toLocaleDateString()}{" "}
                      • {booking.bookingReference}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{booking.status}</p>
                    <p className="text-sm">
                      {booking.tickets.length} passenger
                      {booking.tickets.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}