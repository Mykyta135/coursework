// components/flight-search-form.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { FlightAPI } from "@/lib/api-client";
import { Airport } from "@/app/types";
import { AirportSearch } from "./airport-search";

const formSchema = z.object({
  departureAirportCode: z.string().length(3, "Please select a departure airport"),
  arrivalAirportCode: z.string().length(3, "Please select an arrival airport"),
  departureDate: z.date({
    required_error: "Please select a departure date",
  }),
  returnDate: z.date().optional(),
  passengers: z.number().int().min(1, "At least 1 passenger required").max(9, "Maximum 9 passengers"),
  seatClass: z.enum(["ECONOMY", "PREMIUM_ECONOMY", "BUSINESS", "FIRST"], {
    required_error: "Please select a seat class",
  }),
});

type FlightSearchFormProps = {
  roundTrip: boolean;
};

export function FlightSearchForm({ roundTrip }: FlightSearchFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      departureAirportCode: "",
      arrivalAirportCode: "",
      departureDate: new Date(),
      returnDate: roundTrip ? new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) : undefined,
      passengers: 1,
      seatClass: "ECONOMY",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // Build query string
      const params = new URLSearchParams();
      params.append("from", values.departureAirportCode);
      params.append("to", values.arrivalAirportCode);
      params.append("date", format(values.departureDate, "yyyy-MM-dd"));
      
      if (roundTrip && values.returnDate) {
        params.append("returnDate", format(values.returnDate, "yyyy-MM-dd"));
      }
      
      params.append("passengers", values.passengers.toString());
      params.append("class", values.seatClass);

      // Navigate to search results
      router.push(`/flights/search?${params.toString()}`);
    } catch (error) {
      console.error("Error navigating to search results:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Departure Airport */}
          <FormField
            control={form.control}
            name="departureAirportCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>From</FormLabel>
                <FormControl>
                  <AirportSearch 
                    value={field.value}
                    onChange={(airport: Airport) => {
                      field.onChange(airport.code);
                    }}
                    placeholder="Departure airport"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Arrival Airport */}
          <FormField
            control={form.control}
            name="arrivalAirportCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>To</FormLabel>
                <FormControl>
                  <AirportSearch 
                    value={field.value}
                    onChange={(airport: Airport) => {
                      field.onChange(airport.code);
                    }}
                    placeholder="Arrival airport"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Departure Date */}
          <FormField
            control={form.control}
            name="departureDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Departure Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date(new Date().setHours(0, 0, 0, 0))
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Return Date (only for round trip) */}
          {roundTrip && (
            <FormField
              control={form.control}
              name="returnDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Return Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value || undefined}
                        onSelect={field.onChange}
                        disabled={(date) => {
                          const departureDate = form.getValues("departureDate");
                          return (
                            date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                            (departureDate && date < departureDate)
                          );
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Passengers */}
          <FormField
            control={form.control}
            name="passengers"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Passengers</FormLabel>
                <FormControl>
                  <select
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={field.value}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Passenger" : "Passengers"}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Seat Class */}
          <FormField
            control={form.control}
            name="seatClass"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Class</FormLabel>
                <FormControl>
                  <select
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value as any)}
                  >
                    <option value="ECONOMY">Economy</option>
                    <option value="PREMIUM_ECONOMY">Premium Economy</option>
                    <option value="BUSINESS">Business</option>
                    <option value="FIRST">First Class</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Searching...
            </>
          ) : (
            "Search Flights"
          )}
        </Button>
      </form>
    </Form>
  );
}