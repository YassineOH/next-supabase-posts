import AuthOptions from '~/components/auth/AuthOptions';

interface Params {
  searchParams: {
    message?: string;
    type?: string;
  };
}

function LoginPage({ searchParams }: Params) {
  return (
    <main className="grid h-screen w-screen grid-cols-1 lg:grid-cols-2">
      <div className="hidden items-center justify-center bg-primary lg:flex"></div>
      <div className="flex items-center justify-center bg-background">
        <AuthOptions message={searchParams.message} type={searchParams.type} />
      </div>
    </main>
  );
}
export default LoginPage;
