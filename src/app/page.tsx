import Link from 'next/link';
import SignedOut from '~/components/auth/SignedOut';
import SingedIn from '~/components/auth/SingedIn';
import { buttonVariants } from '~/components/ui/button';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start gap-y-24 p-24'>
      <h1 className='text-4xl'>Next.js + Supabase + Drizzle and more</h1>

      <div className='flex items-center justify-center gap-4'>
        <SingedIn>
          <Link href='/dashboard' className={buttonVariants()}>
            Go to dashboard
          </Link>
        </SingedIn>
        <SignedOut>
          <Link href='/login' className={buttonVariants()}>
            Sign in/up
          </Link>
        </SignedOut>
      </div>
    </main>
  );
}
