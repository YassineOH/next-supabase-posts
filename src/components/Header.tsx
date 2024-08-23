import { User } from '~/server/auth';
import SignOutButton from './auth/SignOutButton';

interface Props {
  userSession: User;
}

function Header({ userSession }: Props) {
  return (
    <header className="w-full bg-primary/20 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <p className="font-bold">Posts app</p>
        <div className="flex items-center justify-center gap-x-4">
          <p>{userSession?.email}</p>
          <SignOutButton />
        </div>
      </div>
    </header>
  );
}
export default Header;
