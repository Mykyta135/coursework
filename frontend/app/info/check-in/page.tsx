// app/info/check-in/page.tsx
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Clock,
  CheckCircle,
  Smartphone,
  Laptop,
  Users,
  AlertCircle,
} from "lucide-react";
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";

export default function CheckInPage() {
  return (
    <div className="container py-8 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-2">Check-in Information</h1>
      <p className="text-muted-foreground mb-6">
        Learn about check-in options, timing, and requirements for your flight
      </p>

      <Tabs defaultValue="online" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="online">Online Check-in</TabsTrigger>
          <TabsTrigger value="airport">Airport Check-in</TabsTrigger>
          <TabsTrigger value="special">Special Assistance</TabsTrigger>
        </TabsList>

        <TabsContent value="online" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Laptop className="h-5 w-5" /> Online Check-in
              </CardTitle>
              <CardDescription>
                The fastest and most convenient way to check in for your flight
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">
                  When Can I Check In Online?
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <p>
                    Online check-in opens 24 hours before scheduled departure
                    and closes 1 hour before departure.
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-4">
                Online Check-in Process
              </h3>
              <Stepper defaultValue={1} orientation="vertical" className="mb-8">
                {[
                  {
                    step: 1,
                    title: "Find Your Booking",
                    description: "Enter your booking reference and last name",
                  },
                  {
                    step: 2,
                    title: "Select Seats",
                    description: "Choose or confirm your seat assignment",
                  },
                  {
                    step: 3,
                    title: "Add Baggage",
                    description: "Add extra baggage if needed",
                  },
                  {
                    step: 4,
                    title: "Complete Check-in",
                    description: "Review details and confirm",
                  },
                  {
                    step: 5,
                    title: "Get Boarding Pass",
                    description:
                      "Download, print, or save to your mobile device",
                  },
                ].map(({ step, title, description }) => (
                  <StepperItem
                    key={step}
                    step={step}
                    className="relative items-start not-last:flex-1"
                  >
                    <StepperTrigger className="items-start rounded pb-12 last:pb-0">
                      <StepperIndicator />
                      <div className="mt-0.5 space-y-0.5 px-2 text-left">
                        <StepperTitle>{title}</StepperTitle>
                        <StepperDescription className="max-sm:hidden">
                          {description}
                        </StepperDescription>
                      </div>
                    </StepperTrigger>
                    {step < 5 && (
                      <StepperSeparator className="absolute inset-y-0 top-[calc(1.5rem+0.125rem)] left-3 -order-1 m-0 -translate-x-1/2 group-data-[orientation=horizontal]/stepper:w-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=horizontal]/stepper:flex-none group-data-[orientation=vertical]/stepper:h-[calc(100%-1.5rem-0.25rem)]" />
                    )}
                  </StepperItem>
                ))}
              </Stepper>

              <h3 className="text-lg font-semibold mb-4">Check-in Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Laptop className="h-4 w-4" /> Web Check-in
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 text-sm">
                    <p>
                      Check in through our website from any device with internet
                      access.
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Navigate to "Manage Booking" section</li>
                      <li>Enter your booking reference and last name</li>
                      <li>Follow the steps to complete check-in</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Smartphone className="h-4 w-4" /> Mobile App Check-in
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 text-sm">
                    <p>
                      Check in through our mobile app for the most seamless
                      experience.
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Download our app from App Store or Google Play</li>
                      <li>Log in or access your booking</li>
                      <li>Tap on "Check-in" and follow instructions</li>
                      <li>Save boarding pass directly to your phone</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Alert className="mt-6">
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Benefits of Online Check-in</AlertTitle>
                <AlertDescription>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Skip the check-in counter lines at the airport</li>
                    <li>Select your preferred seat in advance</li>
                    <li>Add baggage without waiting in line</li>
                    <li>
                      Save time at the airport - just drop your bags if needed
                    </li>
                  </ul>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="airport" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" /> Airport Check-in
              </CardTitle>
              <CardDescription>
                Traditional check-in at airport counters and self-service kiosks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">
                  When Should I Arrive?
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <p>
                      <strong>Domestic flights:</strong> At least 90 minutes
                      before departure
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <p>
                      <strong>International flights:</strong> At least 3 hours
                      before departure
                    </p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <h3 className="text-lg font-semibold mb-4">
                Airport Check-in Options
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Counter Check-in</h4>
                  <p className="text-sm mb-2">
                    Visit our check-in counters where our staff will assist you:
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Present your booking reference or e-ticket</li>
                    <li>
                      Show valid identification (passport for international
                      flights)
                    </li>
                    <li>Check your baggage</li>
                    <li>Receive your printed boarding pass</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Self-Service Kiosks</h4>
                  <p className="text-sm mb-2">
                    Use our self-service kiosks for a faster experience:
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Scan your booking QR code or enter booking details</li>
                    <li>Select or change your seat</li>
                    <li>Print your boarding pass and baggage tags</li>
                    <li>Drop your tagged bags at the bag drop counter</li>
                  </ul>
                </div>
              </div>

              <Separator className="my-6" />

              <h3 className="text-lg font-semibold mb-4">Required Documents</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Domestic Flights</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Valid government-issued photo ID</li>
                    <li>Booking reference or e-ticket</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">International Flights</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>
                      Valid passport (valid for at least 6 months beyond your
                      travel date)
                    </li>
                    <li>Visa or travel authorization (if required)</li>
                    <li>Booking reference or e-ticket</li>
                    <li>Any required health documentation</li>
                  </ul>
                </div>
              </div>

              <Alert className="mt-6" variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Important Check-in Deadlines</AlertTitle>
                <AlertDescription>
                  <p className="mb-2">Check-in counters close:</p>
                  <ul className="list-disc pl-5">
                    <li>45 minutes before departure for domestic flights</li>
                    <li>
                      60 minutes before departure for international flights
                    </li>
                  </ul>
                  <p className="mt-2 font-medium">
                    Arriving after these deadlines may result in denied
                    boarding.
                  </p>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="special" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" /> Special Assistance
              </CardTitle>
              <CardDescription>
                Information for passengers requiring special assistance during
                check-in and travel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Alert className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Request in Advance</AlertTitle>
                <AlertDescription>
                  Please request any special assistance at least 48 hours before
                  your flight for optimal service. You can add special
                  assistance to your booking online or by contacting our
                  customer service.
                </AlertDescription>
              </Alert>

              <h3 className="text-lg font-semibold mb-4">
                Types of Special Assistance
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Mobility Assistance</h4>
                  <p className="text-sm mb-2">
                    For passengers with reduced mobility:
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Wheelchair service throughout the airport</li>
                    <li>Assistance boarding and disembarking the aircraft</li>
                    <li>Special seating arrangements</li>
                    <li>Transport of mobility devices</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Medical Requirements</h4>
                  <p className="text-sm mb-2">
                    For passengers with medical needs:
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Accommodation for medical equipment</li>
                    <li>Special meal requirements</li>
                    <li>Oxygen requirements (doctor's certificate required)</li>
                    <li>Support for medical conditions</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Traveling with Children</h4>
                  <p className="text-sm mb-2">Special services for families:</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Priority boarding for families with young children</li>
                    <li>Bassinet requests for infants</li>
                    <li>Assistance for unaccompanied minors</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Service Animals</h4>
                  <p className="text-sm mb-2">
                    Guidelines for traveling with service animals:
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>
                      Service dogs are allowed in the cabin free of charge
                    </li>
                    <li>Documentation requirements vary by destination</li>
                    <li>Pre-notification is required</li>
                  </ul>
                </div>
              </div>

              <Separator className="my-6" />

              <h3 className="text-lg font-semibold mb-4">
                Check-in Process for Special Assistance
              </h3>
              <p className="mb-4">
                When checking in with special assistance needs:
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  Arrive at the airport at least 30 minutes earlier than the
                  recommended time
                </li>
                <li>
                  Proceed to the dedicated Special Assistance counter or inform
                  a staff member at the regular check-in counter
                </li>
                <li>
                  Present your booking confirmation with the pre-requested
                  assistance
                </li>
                <li>
                  Our staff will guide you through the check-in process and
                  arrange for the requested assistance
                </li>
                <li>
                  For wheelchair assistance, you'll be escorted through security
                  and to your gate
                </li>
              </ol>

              <div className="mt-6 p-4 bg-muted rounded-md">
                <h4 className="font-medium mb-2">Contact Information</h4>
                <p className="text-sm">
                  For questions or to arrange special assistance:
                </p>
                <ul className="text-sm mt-2">
                  <li>
                    <strong>Phone:</strong> +1-800-555-1234
                  </li>
                  <li>
                    <strong>Email:</strong> special.assistance@skyjet.com
                  </li>
                  <li>
                    <strong>Online:</strong> Login to your booking and select
                    "Manage Special Requests"
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
