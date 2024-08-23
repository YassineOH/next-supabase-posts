'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FaGithub } from 'react-icons/fa6';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { signWithEmailAction, signWithGithubAction } from '~/server/auth';

import { signEmailSchema as schema } from '~/lib/schemas';
import { cn } from '~/lib/utils';

interface Props {
  message?: string;
  type?: string;
}

function AuthOptions({ message, type }: Props) {
  const form = useForm<z.infer<typeof schema>>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(schema),
  });

  const handleSubmit = async (data: z.infer<typeof schema>) => {
    await signWithEmailAction(data);
  };

  return (
    <div className="flex min-w-96 flex-col items-stretch justify-start gap-y-8 px-10">
      <div>
        <Button
          className="flex w-full items-center justify-center gap-x-6 bg-[#272b30] text-white hover:bg-[#272b30]/90"
          onClick={async () => {
            await signWithGithubAction();
          }}
        >
          <FaGithub size={24} />
          <span>Sign in with Github</span>
        </Button>
      </div>
      <div className="w-full text-center text-gray-500">OR</div>
      <div className="flex flex-col items-stretch justify-start">
        <Form {...form}>
          <form
            className="space-y-4"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email:</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>Provide your email.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Sign in with Magic link
            </Button>
          </form>
        </Form>
      </div>
      {message && type && (
        <div
          className={cn(
            'flex w-full items-center justify-center rounded-md p-4',
            {
              'bg-red-200': type === 'error',
              'bg-primary bg-opacity-20': type === 'success',
            },
          )}
        >
          {message}
        </div>
      )}
    </div>
  );
}
export default AuthOptions;
