import { z } from 'zod';
import { createInsertSchema } from 'drizzle-zod';
import { userTable } from '~/db/schema';
export const signEmailSchema = z.object({
  email: z
    .string({ required_error: 'the email is required' })
    .email('Invalid email'),
});

export const registrationFormSchema = createInsertSchema(userTable, {
  email: z.string().email('invalid email'),
  name: z.string().trim().min(3,{message:'the name should contains at least 3 character'})
}).pick({email: true, name: true})

