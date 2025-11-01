import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, { message: "Name can only contain letters, spaces, hyphens, and apostrophes" }),
  
  email: z.string()
    .trim()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  
  userType: z.string()
    .min(1, { message: "Please select your role" })
    .refine((val) => ["Coffee Farmer", "Coffee Buyer", "Cooperative", "Exporter", "Other"].includes(val), {
      message: "Please select a valid role",
    }),
  
  message: z.string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(2000, { message: "Message must be less than 2000 characters" })
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Sensor request validation schema
export const sensorRequestSchema = z.object({
  farmerName: z.string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, { message: "Name can only contain letters, spaces, hyphens, and apostrophes" }),
  
  email: z.string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  
  phone: z.string()
    .trim()
    .min(1, { message: "Phone number is required" })
    .max(20, { message: "Phone number must be less than 20 characters" })
    .regex(/^[0-9+\-\s()]+$/, { message: "Invalid phone number format" }),
  
  farmSize: z.string()
    .trim()
    .min(1, { message: "Farm size is required" })
    .max(50, { message: "Farm size must be less than 50 characters" }),
  
  location: z.string()
    .trim()
    .min(1, { message: "Location is required" })
    .max(200, { message: "Location must be less than 200 characters" }),
  
  experience: z.string()
    .min(1, { message: "Please select your experience level" })
    .refine((val) => ["Less than 1 year", "1-3 years", "3-5 years", "5-10 years", "More than 10 years"].includes(val), {
      message: "Please select a valid experience level",
    }),
  
  additionalInfo: z.string()
    .trim()
    .max(1000, { message: "Additional information must be less than 1000 characters" })
    .optional()
});

export type SensorRequestData = z.infer<typeof sensorRequestSchema>;

// Career application validation schema
export const careerApplicationSchema = z.object({
  fullName: z.string()
    .trim()
    .min(1, { message: "Full name is required" })
    .max(100, { message: "Name must be less than 100 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, { message: "Name can only contain letters, spaces, hyphens, and apostrophes" }),
  
  email: z.string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  
  phone: z.string()
    .trim()
    .min(1, { message: "Phone number is required" })
    .max(20, { message: "Phone number must be less than 20 characters" })
    .regex(/^[0-9+\-\s()]+$/, { message: "Invalid phone number format" }),
  
  position: z.string()
    .trim()
    .min(1, { message: "Position is required" })
    .max(100, { message: "Position must be less than 100 characters" }),
  
  coverLetter: z.string()
    .trim()
    .min(50, { message: "Cover letter must be at least 50 characters" })
    .max(2000, { message: "Cover letter must be less than 2000 characters" })
});

export type CareerApplicationData = z.infer<typeof careerApplicationSchema>;

// Generic input sanitization
export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove < and > to prevent basic XSS
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, ''); // Remove event handlers like onclick=
};

// URL parameter encoder for external links (WhatsApp, etc.)
export const encodeForURL = (text: string): string => {
  return encodeURIComponent(sanitizeInput(text));
};
