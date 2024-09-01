'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';

import { createPostSchema, CreatePostType } from '~/lib/schemas';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

import { createPost, updatePost } from '~/server/actions';
import { useSession } from './UserProvider';

interface Props {
  onCloseDialog?: () => void;
  content?: string;
  title?: string;
  postId?: number;
}

function PostForm({ onCloseDialog, content = '', title = '', postId }: Props) {
  const [session] = useSession();
  const form = useForm<CreatePostType>({
    defaultValues: { content, title, userId: session.user!.id },
    resolver: zodResolver(createPostSchema),
  });

  const handleSubmitPost = async (data: CreatePostType) => {
    console.log(data);
    if (postId) {
      await updatePost({ ...data, id: postId });
    } else {
      await createPost(data);
    }
    if (onCloseDialog) {
      onCloseDialog();
    }
  };

  return (
    <Form {...form}>
      <form
        className="space-y-4"
        onSubmit={form.handleSubmit(handleSubmitPost)}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title:</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content:</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          {postId ? 'Update' : 'Post'}
        </Button>
      </form>
    </Form>
  );
}
export default PostForm;
