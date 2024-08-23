'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Card, CardContent, CardTitle, CardHeader } from '../ui/card';
import { z } from 'zod';
import { registrationFormSchema } from '~/lib/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { registerUser } from '~/server/actions';

interface Props {
  email: string;
  name?: string;
}

function RegistrationForm({ email, name = '' }: Props) {
  const form = useForm<z.infer<typeof registrationFormSchema>>({
    defaultValues: {
      email,
      name,
    },
    resolver: zodResolver(registrationFormSchema),
  });

  const handleSubmit = async (data: z.infer<typeof registrationFormSchema>) => {
    await registerUser(data);
  };
  return (
    <Card className="space-y-8 p-4">
      <CardHeader>
        <CardTitle>Register your account</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="w-full space-y-4 rounded-md px-5 lg:w-96"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name:</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>Choose your username.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>email:</FormLabel>
                  <FormControl>
                    <Input {...field} disabled />
                  </FormControl>
                  <FormDescription>
                    Email cannot be changed here.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              register
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
export default RegistrationForm;
