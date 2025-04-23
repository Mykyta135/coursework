// components/airport-search.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Loader2 } from "lucide-react";
import { FlightAPI } from "@/lib/api-client";
import { Airport } from "@/app/types";
import { useDebouncedCallback } from "use-debounce";
type AirportSearchProps = {
  value: string;
  onChange: (airport: Airport) => void;
  placeholder?: string;
};

export function AirportSearch({
  value,
  onChange,
  placeholder,
}: AirportSearchProps) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [airports, setAirports] = useState<Airport[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedAirport, setSelectedAirport] = useState<Airport | null>(null);

  const debouncedSearch = useDebouncedCallback((searchQuery: string) => {
    if (!searchQuery || searchQuery.length < 2) {
      setAirports([]);
      return;
    }

    setLoading(true);
    FlightAPI.searchAirports(searchQuery)
      .then((results) => {
        setAirports(results);
      })
      .catch((error) => {
        console.error("Error searching airports:", error);
        setAirports([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, 300); // 300ms debounce delay

  // Trigger debounced search whenever searchTerm changes
  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  // If we have a value but no selected airport, show the code
  const displayValue = selectedAirport
    ? `${selectedAirport.city} (${selectedAirport.code})`
    : value
    ? value
    : "";

  return (
    <Command className="border rounded-md">
      <CommandInput
        placeholder={placeholder || "Search airports..."}
        value={searchTerm}
        onValueChange={(term) => {
          setSearchTerm(term);
          if (term) setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => {
          // Small delay to allow for selection
          setTimeout(() => setOpen(false), 200);
        }}
      />
      {open && (
        <CommandList>
          {loading && (
            <div className="flex justify-center p-2">
              <Loader2 className="h-4 w-4 animate-spin" />
            </div>
          )}

          {!loading && airports.length === 0 && searchTerm.length >= 2 && (
            <p className="p-2 text-sm text-muted-foreground text-center">
              No airports found
            </p>
          )}

          {!loading && searchTerm.length < 2 && (
            <p className="p-2 text-sm text-muted-foreground text-center">
              Type at least 2 characters to search
            </p>
          )}

          {airports.map((airport) => (
            <CommandItem
              key={airport.id}
              onSelect={() => {
                setSelectedAirport(airport);
                onChange(airport);
                setOpen(false);
              }}
            >
              <div>
                <p>
                  {airport.city} ({airport.code})
                </p>
                <p className="text-xs text-muted-foreground">
                  {airport.name}, {airport.country}
                </p>
              </div>
            </CommandItem>
          ))}
        </CommandList>
      )}
    </Command>
  );
}
