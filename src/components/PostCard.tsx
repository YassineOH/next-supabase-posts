import { PostType } from '~/lib/schemas';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { getUserInfo } from '~/server/dal';
import { getUser } from '~/server/auth';
import { format } from 'date-fns';
import EditPost from './EditPost';
interface Props {
  post: PostType;
}

async function PostCard({ post }: Props) {
  const userInfo = await getUserInfo(post.userId);
  const currentUser = await getUser();
  const canEdit = post.userId === currentUser?.id;

  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <CardTitle>{post.title}</CardTitle>
          {canEdit ? (
            <EditPost
              title={post.title}
              content={post.content}
              postId={post.id}
              userId={post.userId}
            />
          ) : null}
        </div>
        <CardDescription>
          Posted by: {userInfo?.name} <br />
          Created On: {format(post.createdOn!, 'PPpp')}
        </CardDescription>
      </CardHeader>
      <CardContent>{post.content}</CardContent>
    </Card>
  );
}
export default PostCard;
