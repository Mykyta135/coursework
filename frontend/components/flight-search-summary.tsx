// components/flight-search-summary.tsx
"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { ArrowRight, Calendar, Users, Edit } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type FlightSearchSummaryProps = {
  fromCode: string;
  toCode: string;
  date: string;
  returnDate?: string | null;
  passengers: number;
  seatClass: string;
};

export function FlightSearchSummary({
  fromCode,
  toCode,
  date,
  returnDate,
  passengers,
  seatClass,
}: FlightSearchSummaryProps) {
  const formatDate = (dateStr: string) => {
    try {
      return format(new Date(dateStr), "EEE, MMM d, yyyy");
    } catch (e) {
      return dateStr;
    }
  };

  const formattedClass = seatClass.replace("_", " ");

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-lg font-bold py-1.5">
                {fromCode}
              </Badge>
              <ArrowRight className="h-4 w-4" />
              <Badge variant="outline" className="text-lg font-bold py-1.5">
                {toCode}
              </Badge>
            </div>

            <Separator orientation="vertical" className="hidden md:block h-6" />

            <div className="flex items-center gap-1 text-sm">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(date)}</span>
              {returnDate && (
                <>
                  <span className="mx-1">-</span>
                  <span>{formatDate(returnDate)}</span>
                </>
              )}
            </div>

            <Separator orientation="vertical" className="hidden md:block h-6" />

            <div className="flex items-center gap-1 text-sm">
              <Users className="h-4 w-4" />
              <span>
                {passengers} {passengers === 1 ? "Passenger" : "Passengers"}
              </span>
              <span className="mx-1">•</span>
              <span>{formattedClass}</span>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            <Edit className="h-3.5 w-3.5" />
            <span>Modify Search</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
