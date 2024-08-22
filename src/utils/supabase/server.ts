import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';

export const createClient = () => {
  const cookiesStore = cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => {
          return cookiesStore.getAll();
        },
        setAll: (cookiesToSet) => {
          try {
            cookiesToSet.forEach(({ name, options, value }) =>
              cookiesStore.set(name, value, options)
            );
          } catch (error) {
            console.log(error);
          }
        },
      },
    }
  );
};
