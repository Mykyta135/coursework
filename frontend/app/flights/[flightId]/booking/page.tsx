// // app/flights/[flightId]/booking/page.tsx
// "use client";

// import { useState, useEffect } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { format } from "date-fns";
// import { Loader2, CreditCard, Check } from "lucide-react";
// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { FlightAPI, BookingAPI, UserAPI } from "@/lib/api-client";
// import { Flight, Passenger } from "@/app/types";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { useToast } from "@/components/ui/use-toast";
// import { useAuth } from "@/provider/AuthProvider";

// const passengerSchema = z.object({
//   firstName: z.string().min(1, "First name is required"),
//   lastName: z.string().min(1, "Last name is required"),
//   email: z.string().email("Invalid email address"),
//   phone: z.string().optional(),
//   passportNumber: z.string().optional(),
//   dateOfBirth: z.string().optional(),
//   nationality: z.string().optional(),
// });

// const paymentSchema = z.object({
//   cardNumber: z.string().min(16, "Card number must be at least 16 digits"),
//   cardHolder: z.string().min(1, "Cardholder name is required"),
//   expiryDate: z.string().min(5, "Expiry date must be in MM/YY format"),
//   cvv: z.string().min(3, "CVV must be at least 3 digits"),
//   paymentMethod: z.enum(["CREDIT_CARD", "DEBIT_CARD", "PAYPAL"]),
// });

// // Combined schema for the booking
// const bookingSchema = z.object({
//   passengers: z.array(passengerSchema),
//   payment: paymentSchema,
// });

// type BookingFormValues = z.infer<typeof bookingSchema>;

// export default function BookingPage() {
//   const params = useParams();
//   const router = useRouter();
//   const { toast