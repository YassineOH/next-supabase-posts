import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import Header from '~/components/Header';
import { db } from '~/db';
import { getUser } from '~/server/auth';

interface Props {
  children: ReactNode;
}

async function Layout({ children }: Props) {
  const userSession = await getUser();
  if (!userSession) {
    return redirect('/login');
  }

  const user = await db.query.userTable.findFirst({
    where: (u, { eq }) => eq(u.email, userSession.email!),
    columns: {
      id: true,
    },
  });

  if (!user || !user.id) {
    return redirect('/register');
  }

  return (
    <main>
      <Header userSession={userSession} />
      {children}
    </main>
  );
}
export default Layout;
