import RegistrationForm from '~/components/auth/RegistrationForm';
import { getUser } from '~/server/auth';

async function RegisterPage() {
  const user = await getUser();

  return (
    <main className="grid h-screen w-screen grid-cols-1 lg:grid-cols-2">
      <div className="hidden items-center justify-center bg-primary lg:flex"></div>
      <div className="flex items-center justify-center bg-background">
        <RegistrationForm name="" email={user.email!} />
      </div>
    </main>
  );
}
export default RegisterPage;
