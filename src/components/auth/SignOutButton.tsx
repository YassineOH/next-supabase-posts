'use client';
import { signOutAction } from '~/server/auth';
import { Button } from '../ui/button';
import { useSession } from '../UserProvider';

function SignOutButton() {
  const [session, setSession] = useSession();

  return (
    <Button
      variant="outline"
      onClick={async () => {
        setSession({ user: null });
        await signOutAction();
      }}
    >
      Logout
    </Button>
  );
}
export default SignOutButton;
