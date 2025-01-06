import { z } from 'zod';

export const bookingSchema = z.object({
    name: z.string().min(1, "Name is Required").max(255),
    email: z.string().email("Invalid Email").max(255),
    phone_number: z.string().min(10, "Invalid Phone Number").max(15, "phone number is too long"),
    booking_date: z.string().min(1, "Booking Date is Required"),
    booking_time: z.string().min(1, "Booking Time is Required"),
    total_sesi: z.number().int().min(1, "Total Sesi is Required"),
});

export const paymentSchema = z.object({
    proof: z.instanceof(File).refine((file) => file.size > 0, "Proof is Required"),
});

export const checkBookingSchema = z.object({
    trx_id: z.string().min(1, "Transaction ID is Required"),
    phone_number: z.string().min(10, "Invalid Phone Number").max(15, "phone number is too long"),
});