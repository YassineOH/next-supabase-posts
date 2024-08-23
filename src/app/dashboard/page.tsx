import CreatePost from '~/components/CreatePost';

function DashboardPage() {
  return (
    <main className="container mx-auto py-12">
      <div className="flex w-full items-center justify-center py-2">
        <CreatePost />
      </div>
    </main>
  );
}
export default DashboardPage;
