import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { UserProvider } from '~/components/UserProvider';
import { getUser } from '~/server/auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next + Supabase showcase',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userSession = await getUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider userSession={userSession}>{children}</UserProvider>
      </body>
    </html>
  );
}
