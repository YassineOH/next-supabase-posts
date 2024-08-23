import { z } from 'zod';
import { createInsertSchema } from 'drizzle-zod';
import { postTable, userTable } from '~/db/schema';
export const signEmailSchema = z.object({
  email: z
    .string({ required_error: 'the email is required' })
    .email('Invalid email'),
});

export const registrationFormSchema = createInsertSchema(userTable, {
  email: z.string().email('invalid email'),
  name: z.string().trim().min(3,{message:'the name should contains at least 3 character'})
}).pick({email: true, name: true})



export const createPostSchema = createInsertSchema(postTable, {
  title: z.string().min(3, {message: 'the title is required'}),
  content: z.string().min(3, {message: 'the content is required'})
})

export type CreatePostType = z.infer<typeof createPostSchema>