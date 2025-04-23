// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PopularRoutes } from "@/components/popular-routes";
import { FlightAPI } from "@/lib/api-client";
import { FlightSearchForm } from "@/components/flight-search";
interface PopularRoute {
  departureCode: string;
  departureCity: string;
  arrivalCode: string;
  arrivalCity: string;
  flightCount: number;
}
export default function Home() {
  const [popularRoutes, setPopularRoutes] = useState<PopularRoute[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularRoutes = async () => {
      try {
        const routes = await FlightAPI.getPopularRoutes();
        setPopularRoutes(routes);
      } catch (error) {
        console.error("Failed to fetch popular routes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularRoutes();
  }, []);

  return (
    <div className="relative">
      {/* Hero section with background image */}
      <div className="relative -z-1  h-[500px] bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            Explore the World with SkyJet
          </h1>
          <p className="mb-8 max-w-2xl text-lg">
            Find and book flights to hundreds of destinations worldwide at the
            best prices
          </p>
        </div>
      </div>

      {/* Search box overlapping the hero section */}
      <div className="container mx-auto px-4">
        <Card className="mx-auto -mt-32 max-w-4xl shadow-lg">
          <CardContent className="p-6">
            <Tabs defaultValue="roundtrip">
              <TabsList className="mb-6 grid w-full grid-cols-3">
                <TabsTrigger value="roundtrip">Round Trip</TabsTrigger>
                <TabsTrigger value="oneway">One Way</TabsTrigger>
                <TabsTrigger value="multicity">Multi-City</TabsTrigger>
              </TabsList>
              <TabsContent value="roundtrip">
                <FlightSearchForm roundTrip={true} />
              </TabsContent>
              <TabsContent value="oneway">
                <FlightSearchForm roundTrip={false} />
              </TabsContent>
              <TabsContent value="multicity">
                <div className="flex flex-col items-center justify-center p-8 text-center">
                  <p className="text-lg text-muted-foreground">
                    Multi-city booking coming soon!
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Popular routes section */}
      <div className="container mx-auto mt-12 px-4 py-8">
        <h2 className="mb-6 text-2xl font-bold">Popular Routes</h2>
        <PopularRoutes routes={popularRoutes} loading={loading} />
      </div>
    </div>
  );
}