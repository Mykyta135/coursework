
// src/services/ticket.service.ts
import { Injectable } from '@nestjs/common';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import QRCode from 'qrcode';
import { Ticket, Flight, Passenger, FlightSeat } from '@prisma/client';

interface TicketData {
  ticket: Ticket & { flightSeat: FlightSeat };
  flight: Flight & {
    airline: any;
    departureAirport: any;
    arrivalAirport: any;
  };
  passenger: Passenger;
}

@Injectable()
export class TicketService {
  async generateBoardingPass(ticket: Ticket): Promise<string> {
    // Generate a unique boarding pass code
    const boardingPass = `BP-${ticket.ticketNumber}-${Date.now().toString(36).toUpperCase()}`;
    
    // In a real application, this would include more sophisticated boarding pass generation
    return boardingPass;
  }

  async generateTicketPdf(data: TicketData): Promise<Buffer> {
    const { ticket, flight, passenger } = data;
    
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595.28, 841.89]); // A4 size
    
    // Get fonts
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    
    // Set page properties
    const { width, height } = page.getSize();
    
    // Generate QR code for the ticket
    const qrCodeUrl = await QRCode.toDataURL(`TICKET:${ticket.ticketNumber}`);
    const qrCodeImage = await pdfDoc.embedPng(qrCodeUrl);
    
    // Add airline logo placeholder
    page.drawText('AIRLINE LOGO', {
      x: 50,
      y: height - 50,
      size: 20,
      font: boldFont,
      color: rgb(0.1, 0.1, 0.5)
    });
    
    // Add ticket title
   // src/services/ticket.service.ts (continued)
    // Add ticket title
    page.drawText('ELECTRONIC TICKET / BOARDING PASS', {
      x: 50,
      y: height - 100,
      size: 18,
      font: boldFont,
      color: rgb(0, 0, 0)
    });
    
    // Draw QR code
    const qrDimension = 100;
    page.drawImage(qrCodeImage, {
      x: width - qrDimension - 50,
      y: height - qrDimension - 50,
      width: qrDimension,
      height: qrDimension
    });
    
    // Add flight information
    page.drawText('FLIGHT INFORMATION', {
      x: 50,
      y: height - 150,
      size: 14,
      font: boldFont,
      color: rgb(0, 0, 0)
    });
    
    const departureTime = new Date(flight.departureTime);
    const arrivalTime = new Date(flight.arrivalTime);
    
    const infoLines = [
      `Airline: ${flight.airline.name} (${flight.airline.code})`,
      `Flight: ${flight.flightNumber}`,
      `From: ${flight.departureAirport.city} (${flight.departureAirport.code})`,
      `To: ${flight.arrivalAirport.city} (${flight.arrivalAirport.code})`,
      `Date: ${departureTime.toLocaleDateString()}`,
      `Departure: ${departureTime.toLocaleTimeString()}`,
      `Arrival: ${arrivalTime.toLocaleTimeString()}`
    ];
    
    infoLines.forEach((line, index) => {
      page.drawText(line, {
        x: 50,
        y: height - 180 - (index * 25),
        size: 12,
        font: font,
        color: rgb(0, 0, 0)
      });
    });
    
    // Add passenger information
    page.drawText('PASSENGER INFORMATION', {
      x: 50,
      y: height - 350,
      size: 14,
      font: boldFont,
      color: rgb(0, 0, 0)
    });
    
    const passengerLines = [
      `Name: ${passenger.firstName} ${passenger.lastName}`,
      `Passport/ID: ${passenger.passportNumber || 'Not Provided'}`,
      `Ticket Number: ${ticket.ticketNumber}`,
      `Seat: ${ticket.flightSeat.seatNumber}`,
      `Class: ${ticket.flightSeat.seatClass}`
    ];
    
    passengerLines.forEach((line, index) => {
      page.drawText(line, {
        x: 50,
        y: height - 380 - (index * 25),
        size: 12,
        font: font,
        color: rgb(0, 0, 0)
      });
    });
    
    // Add boarding pass information if available
    if (ticket.boardingPass) {
      page.drawText('BOARDING PASS', {
        x: 50,
        y: height - 550,
        size: 14,
        font: boldFont,
        color: rgb(0, 0, 0)
      });
      
      page.drawText(`Boarding Pass: ${ticket.boardingPass}`, {
        x: 50,
        y: height - 580,
        size: 12,
        font: font,
        color: rgb(0, 0, 0)
      });
      
      // Draw a line to separate the ticket and boarding pass section
      page.drawLine({
        start: { x: 50, y: height - 520 },
        end: { x: width - 50, y: height - 520 },
        thickness: 1,
        color: rgb(0.5, 0.5, 0.5)
      });
    }
    
    // Add terms and conditions
    page.drawText('TERMS AND CONDITIONS', {
      x: 50,
      y: 200,
      size: 12,
      font: boldFont,
      color: rgb(0, 0, 0)
    });
    
    const termsLines = [
      '1. Please arrive at the airport at least 2 hours before the scheduled departure time.',
      '2. Check-in closes 45 minutes before departure.',
      '3. Boarding gate closes 15 minutes before departure.',
      '4. Valid ID is required for all passengers.',
      '5. Baggage allowance varies by ticket class, please check with the airline.',
      '6. This ticket is non-transferable.'
    ];
    
    termsLines.forEach((line, index) => {
      page.drawText(line, {
        x: 50,
        y: 170 - (index * 20),
        size: 10,
        font: font,
        color: rgb(0.3, 0.3, 0.3)
      });
    });
    
    // Add footer
    page.drawText(`Generated on: ${new Date().toLocaleString()}`, {
      x: 50,
      y: 50,
      size: 10,
      font: font,
      color: rgb(0.5, 0.5, 0.5)
    });
    
    // Serialize the PDFDocument to bytes
    const pdfBytes = await pdfDoc.save();
    
    return Buffer.from(pdfBytes);
  }
}