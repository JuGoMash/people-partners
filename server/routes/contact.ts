import { RequestHandler } from "express";
import { z } from "zod";

const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof ContactFormSchema>;

export interface ContactResponse {
  success: boolean;
  message: string;
}

export const handleContactForm: RequestHandler<
  unknown,
  ContactResponse,
  unknown
> = (req, res) => {
  try {
    const data = ContactFormSchema.parse(req.body);

    // Log the contact form submission
    console.log("Contact form submission:", {
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    });

    // TODO: Implement email sending here
    // You can integrate with services like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Nodemailer with SMTP

    res.json({
      success: true,
      message:
        "Thank you for your message. We will get back to you within 24 hours.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: error.errors[0].message,
      });
    }

    console.error("Contact form error:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred. Please try again later.",
    });
  }
};
