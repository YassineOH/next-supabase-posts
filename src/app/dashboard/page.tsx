import CreatePost from '~/components/CreatePost';
import { getAllPosts } from '~/server/dal';

async function DashboardPage() {
  const posts = await getAllPosts();
  return (
    <main className="container mx-auto py-12">
      <div className="flex w-full items-center justify-center py-2">
        <CreatePost />
      </div>
      {JSON.stringify(posts, null, 2)}
    </main>
  );
}
export default DashboardPage;
