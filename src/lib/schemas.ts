// 'use server'

import { z } from "zod";

export const signEmailSchema = z.object({
    email: z.string().email('provide valid email'),
  });