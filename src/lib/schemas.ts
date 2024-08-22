import { z } from "zod";

export const signEmailSchema = z.object({
    email: z.string({required_error:'the email is required'}).email('Invalid email'),
  });   