import { ReactNode } from 'react';
import { createClient } from '~/lib/supabase/server';

interface Props {
  children: ReactNode;
}
async function SingedIn({ children }: Props) {
  const supabase = createClient();

  const user = await supabase.auth.getUser();

  if (!user.data.user) {
    return null;
  }

  return <>{children}</>;
}

export default SingedIn;
