import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import type { Transporter } from "nodemailer";
import { env } from "@/env";

export async function sendContactEmail({
  name,
  email,
  message,
  transporter,
}: {
  name: string;
  email: string;
  message: string;
  transporter: Transporter;
}) {
  const mailOptions = {
    from: `"Contact Form" <noreply@elevenhats.it>`,
    to: env.GMAIL_USER,
    subject: `New contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    replyTo: email,
  };

  await transporter.sendMail(mailOptions);
}

export const postRouter = createTRPCRouter({
  createContact: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        message: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const success = true;

      if (!success) {
        throw new TRPCError({
          code: "TOO_MANY_REQUESTS",
          message: "You are being rate limited. Please try again later.",
        });
      }

      await sendContactEmail({
        name: input.name,
        email: input.email,
        message: input.message,
        transporter: ctx.transporter,
      });
    }),
});
