'use client'
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FlightSearchForm from "@/components/flight-search";
import FlightResults from "@/components/flight-result";

export default function Home() {
  const searchParams = useSearchParams();
  const isSearching = searchParams.has('from') && searchParams.has('to') && searchParams.has('date');

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Find Your Perfect Flight</h1>
        <p className="text-lg text-muted-foreground">
          Discover great deals on flights to destinations worldwide
        </p>
      </div>

      <Card className="mb-12 border-none shadow-lg">
        <CardContent className="p-6 mx-auto">
          {isSearching ? <FlightResults /> : <FlightSearchForm />}
        </CardContent>
      </Card>

      {!isSearching && (
        <>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Popular Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {popularDestinations.map((destination) => (
                <Card key={destination.city} className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={`/`}
                      alt={destination.city}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-medium">{destination.city}</h3>
                    <p className="text-muted-foreground">{destination.country}</p>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="font-semibold">From ${destination.price}</span>
                      <Button variant="outline" size="sm">Explore</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature) => (
                <Card key={feature.title} className="text-center p-6">
                  <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  );
}

const popularDestinations = [
  { city: "New York", country: "United States", price: 299 },
  { city: "Paris", country: "France", price: 349 },
  { city: "Tokyo", country: "Japan", price: 499 },
];

const features = [
  {
    title: "Best Price Guarantee",
    description: "We offer competitive prices on our 100+ destinations",
    icon: "💰", // Would use actual Lucide icons in real implementation
  },
  {
    title: "Easy Booking Process",
    description: "Book your flight with just a few clicks",
    icon: "✅",
  },
  {
    title: "24/7 Customer Support",
    description: "Our support team is always here to help",
    icon: "🛟",
  },
];