import AuthOptions from '~/components/auth/AuthOptions';

function LoginPage() {
  return (
    <main className="grid h-screen w-screen grid-cols-1 lg:grid-cols-2">
      <div className="hidden items-center justify-center bg-primary lg:flex"></div>
      <div className="hidden items-center justify-center bg-background lg:flex">
        <AuthOptions />
      </div>
    </main>
  );
}
export default LoginPage;
