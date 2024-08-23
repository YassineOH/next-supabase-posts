import CreatePost from '~/components/CreatePost';
import PostCard from '~/components/PostCard';
import { getAllPosts } from '~/server/dal';

async function DashboardPage() {
  const posts = await getAllPosts();
  return (
    <main className="container mx-auto space-y-10 py-12">
      <div className="flex w-full items-center justify-center py-2">
        <CreatePost />
      </div>
      <div className="grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </main>
  );
}
export default DashboardPage;
