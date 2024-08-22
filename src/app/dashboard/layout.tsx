import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import { db } from '~/db';
import { createClient } from '~/utils/supabase/server';

interface Props {
  children: ReactNode;
}

async function Layout({ children }: Props) {
  const supabase = createClient();

  const user = await supabase.auth.getUser();
  if (user.error || !user.data.user) {
    return redirect('/login');
  }
  const userEmail = user.data.user.email;

  if (!userEmail) {
    return redirect('/login');
  }
  const userDB = await db.query.userTable.findFirst({
    where: (u, { eq }) => eq(u.email, userEmail),
    columns: {
      id: true,
    },
  });
  console.log(userDB);
  if (!userDB || !userDB.id) {
    return redirect('/register');
  }

  return <>{children}</>;
}
export default Layout;
