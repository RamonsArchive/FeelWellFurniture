"use server";
import { CreateEmailOptions, Resend } from "resend";
import { parseServerActionResponse } from "@/lib/utils";
import { checkRateLimit, getClientId } from "./rateLimiter";
import { getContactEmailTemplate } from "./emailTemplates";

const resend = new Resend(process.env.RESEND_API_KEY);



export const sendContactEmail = async (name: string, phone: string | undefined, email: string, subject: string, message: string) => {
    try {
        const success = await checkRateLimit("sendEmail");
        if (success.status === "ERROR") {
            return parseServerActionResponse({
                status: "ERROR",
                error: "Rate limit exceeded. Please try again later.",
                data: null,
            });
        }

        const contactEmail = process.env.CONTACT_EMAIL || "rmcdeem.m@gmail.com";
        
        const emailHtml = getContactEmailTemplate({
            name,
            phone,
            email,
            subject,
            message,
        });

        const data = {
            from: 'FeelWellFurniture <onboarding@resend.dev>',
            to: contactEmail,
            replyTo: email,
            subject: `New Contact Form: ${subject}`,
            html: emailHtml,
        };

        const response = await resend.emails.send(data as CreateEmailOptions);

        return parseServerActionResponse({
            status: "SUCCESS",
            error: "",
            data: response,
        });

    } catch (error) {
        console.error(error);
        return parseServerActionResponse({
            status: "ERROR",
            error: error instanceof Error ? error.message : 'An unknown error occurred',
            data: null,
        });
    }
}