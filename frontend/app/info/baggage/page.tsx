// app/info/baggage/page.tsx
"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Luggage, AlertCircle, Info, PlaneTakeoff } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function BaggagePage() {
  const [activeTab, setActiveTab] = useState("allowance");

  return (
    <div className="container py-8 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-2">Baggage Information</h1>
      <p className="text-muted-foreground mb-6">
        Everything you need to know about baggage allowances, fees, and special items
      </p>

      <Tabs defaultValue="allowance" className="mb-8" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="allowance">Baggage Allowance</TabsTrigger>
          <TabsTrigger value="special">Special Items</TabsTrigger>
          <TabsTrigger value="restrictions">Restrictions</TabsTrigger>
        </TabsList>

        <TabsContent value="allowance" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Luggage className="h-5 w-5" /> Baggage Allowance by Class
              </CardTitle>
              <CardDescription>
                Each fare class comes with different baggage allowances
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Class</TableHead>
                    <TableHead>Carry-on</TableHead>
                    <TableHead>Checked Baggage</TableHead>
                    <TableHead>Max Weight (per bag)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Economy</TableCell>
                    <TableCell>1 bag + personal item</TableCell>
                    <TableCell>1 bag</TableCell>
                    <TableCell>23kg (50lbs)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Premium Economy</TableCell>
                    <TableCell>1 bag + personal item</TableCell>
                    <TableCell>2 bags</TableCell>
                    <TableCell>23kg (50lbs)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Business</TableCell>
                    <TableCell>2 bags + personal item</TableCell>
                    <TableCell>2 bags</TableCell>
                    <TableCell>32kg (70lbs)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">First</TableCell>
                    <TableCell>2 bags + personal item</TableCell>
                    <TableCell>3 bags</TableCell>
                    <TableCell>32kg (70lbs)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Alert className="mt-6">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Important</AlertTitle>
                <AlertDescription>
                  Size restrictions apply: Carry-on bags must not exceed 56cm x 36cm x 23cm (22in x 14in x 9in), and personal items must fit under the seat in front of you.
                </AlertDescription>
              </Alert>

              <Separator className="my-6" />

              <h3 className="text-lg font-semibold mb-4">Additional Baggage Fees</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Extra Bag</TableHead>
                    <TableHead>Short-haul</TableHead>
                    <TableHead>Medium-haul</TableHead>
                    <TableHead>Long-haul</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">First additional bag</TableCell>
                    <TableCell>$30</TableCell>
                    <TableCell>$50</TableCell>
                    <TableCell>$75</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Second additional bag</TableCell>
                    <TableCell>$50</TableCell>
                    <TableCell>$75</TableCell>
                    <TableCell>$100</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Each additional bag</TableCell>
                    <TableCell>$100</TableCell>
                    <TableCell>$150</TableCell>
                    <TableCell>$200</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Overweight fee (23-32kg)</TableCell>
                    <TableCell>$50</TableCell>
                    <TableCell>$75</TableCell>
                    <TableCell>$100</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="special" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5" /> Special Items
              </CardTitle>
              <CardDescription>
                Guidelines for traveling with special baggage items
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Sports Equipment</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>Most sports equipment can be transported as checked baggage with the following considerations:</p>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Item</TableHead>
                            <TableHead>Special Handling Fee</TableHead>
                            <TableHead>Notes</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>Golf Equipment</TableCell>
                            <TableCell>$30</TableCell>
                            <TableCell>One golf bag with clubs, balls, and shoes</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Ski/Snowboard Equipment</TableCell>
                            <TableCell>$30</TableCell>
                            <TableCell>One pair of skis/one snowboard, boots, and poles</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Bicycles</TableCell>
                            <TableCell>$50</TableCell>
                            <TableCell>Must be properly packed in a bike box or case</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Surfboards</TableCell>
                            <TableCell>$50</TableCell>
                            <TableCell>Maximum 2 boards per bag</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Musical Instruments</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>Musical instruments can be transported as follows:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Small instruments (violins, small wind instruments) can be brought as carry-on if they fit in the overhead bin</li>
                        <li>Medium-sized instruments (guitars, saxophones) may require a seat purchase</li>
                        <li>Large instruments (cellos, double basses) must be checked or transported as cargo</li>
                      </ul>
                      <p>All instruments should be in a hard case for protection during transport.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>Medical Equipment</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>Medical equipment is allowed free of charge in addition to your standard baggage allowance. This includes:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Mobility devices (wheelchairs, walkers)</li>
                        <li>CPAP machines</li>
                        <li>Portable oxygen concentrators (with proper documentation)</li>
                      </ul>
                      <p className="font-medium">Please notify our customer service at least 48 hours before your flight if you need to bring medical equipment.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>Strollers and Car Seats</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>One stroller and one car seat per child can be checked free of charge, in addition to your standard baggage allowance.</p>
                      <p>You may check these items at the ticket counter or gate. Car seats may also be used onboard if you purchased a seat for your child and the car seat is approved for aircraft use.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="restrictions" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" /> Baggage Restrictions
              </CardTitle>
              <CardDescription>
                Items that are restricted or prohibited in checked and carry-on baggage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Alert variant="destructive" className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Safety Notice</AlertTitle>
                <AlertDescription>
                  For safety and security reasons, certain items are restricted or prohibited from being carried aboard aircraft. Failure to comply with these regulations may result in confiscation of items, delays, and possible fines.
                </AlertDescription>
              </Alert>

              <h3 className="text-lg font-semibold mb-3">Prohibited Items</h3>
              <p className="mb-4">The following items are prohibited in both carry-on and checked baggage:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Explosives and fireworks</li>
                <li>Flammable items (gasoline, lighter fluid, etc.)</li>
                <li>Toxic substances</li>
                <li>Radioactive materials</li>
                <li>Strong acids and corrosives</li>
                <li>Self-defense items (pepper spray, tasers)</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3">Carry-on Restrictions</h3>
              <p className="mb-4">The following items are prohibited in carry-on baggage but may be transported in checked baggage:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Liquids, gels, and aerosols over 100ml (3.4oz)</li>
                <li>Sharp objects (knives, scissors with blades longer than 4 inches)</li>
                <li>Sporting goods (baseball bats, golf clubs)</li>
                <li>Tools longer than 7 inches</li>
                <li>Firearms and ammunition (subject to special packing requirements)</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3">Liquids Rule (3-1-1 Rule)</h3>
              <p className="mb-4">For carry-on baggage, liquids must follow the 3-1-1 rule:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>3.4 ounces (100ml)</strong>: Maximum container size for liquids, gels, and aerosols</li>
                <li><strong>1 quart</strong>: All containers must fit in a 1-quart sized, clear, plastic, zip-top bag</li>
                <li><strong>1 bag</strong>: Each passenger is allowed one plastic bag of liquids</li>
              </ul>
              
              <p className="mt-4">
                <strong>Exceptions:</strong> Medications, baby formula/food, and breast milk are allowed in reasonable quantities exceeding 100ml and are not required to be in the zip-top bag. These items must be declared at security checkpoints.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
