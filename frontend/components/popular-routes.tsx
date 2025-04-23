// components/popular-routes.tsx
"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Plane } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

type Route = {
  departureCode: string;
  departureCity: string;
  arrivalCode: string;
  arrivalCity: string;
  flightCount: number;
};

type PopularRoutesProps = {
  routes: Route[];
  loading: boolean;
};

export function PopularRoutes({ routes, loading }: PopularRoutesProps) {
  const router = useRouter();

  const handleRouteClick = (route: Route) => {
    const params = new URLSearchParams();
    params.append("from", route.departureCode);
    params.append("to", route.arrivalCode);
    params.append("date", new Date().toISOString().split("T")[0]);
    params.append("passengers", "1");
    params.append("class", "ECONOMY");

    router.push(`/flights/search?${params.toString()}`);
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="p-4">
                <Skeleton className="h-6 w-24 mb-2" />
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 w-12" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (routes.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No popular routes available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {routes.map((route, index) => (
        <Card 
          key={index} 
          className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => handleRouteClick(route)}
        >
          <CardContent className="p-4">
            <div className="mb-2 text-sm font-medium text-muted-foreground">Popular Route</div>
            <div className="flex items-center justify-between text-lg font-semibold">
              <span>{route.departureCode}</span>
              <Plane className="h-4 w-4 mx-2 text-primary" />
              <span>{route.arrivalCode}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span>{route.departureCity}</span>
              <span>to</span>
              <span>{route.arrivalCity}</span>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              {route.flightCount} flights available
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}