import { signOutAction } from '~/server/auth';
import { Button } from './ui/button';
import SignOutButton from './auth/SignOutButton';

interface Props {
  email: string;
}

function Header({ email }: Props) {
  return (
    <header className="w-full bg-primary/20 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <p className="font-bold">Posts app</p>
        <div className="flex items-center justify-center gap-x-4">
          <p>{email}</p>
          <SignOutButton />
        </div>
      </div>
    </header>
  );
}
export default Header;
