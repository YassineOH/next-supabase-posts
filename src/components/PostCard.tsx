import { PostType } from '~/lib/schemas';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
          {canEdit ? <EditPost /> : null}
        </div>
        <CardDescription>
          <p>Posted by: {userInfo?.name}</p>
          <p>Created On: {format(post.createdOn!, 'PPpp')}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>{post.content}</CardContent>
    </Card>
  );
}
export default PostCard;
