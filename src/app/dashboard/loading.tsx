import { Skeleton } from '~/components/ui/skeleton';

async function LoadingPage() {
  return (
    <main className="container mx-auto space-y-10 py-12">
      <div className="flex w-full items-center justify-center py-2">
        <Skeleton className="w-30 bloc h-10" />
      </div>
      <div className="grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Array(9)
          .fill(0)
          .map((_, p) => (
            <Skeleton key={p} className="h-40 w-80" />
          ))}
      </div>
    </main>
  );
}
export default LoadingPage;
