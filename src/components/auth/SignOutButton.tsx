'use client';
import { signOutAction } from '~/server/auth';
import { Button } from '../ui/button';

function SignOutButton() {
  return (
    <Button
      variant="outline"
      onClick={async () => {
        await signOutAction();
      }}
    >
      Logout
    </Button>
  );
}
export default SignOutButton;
