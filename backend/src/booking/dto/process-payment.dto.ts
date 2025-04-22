// src/dto/process-payment.dto.ts
export class ProcessPaymentDto {
    paymentMethod: 'CREDIT_CARD' | 'DEBIT_CARD' | 'PAYPAL' | 'BANK_TRANSFER';
    cardNumber?: string; // Only for card payments
    cardHolderName?: string;
    expiryDate?: string;
    cvv?: string;
  }