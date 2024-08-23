'use client';

import PostForm from './PostForm';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
} from './ui/dialog';

function CreatePost() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Add post</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Post</DialogTitle>
        </DialogHeader>
        <PostForm />
      </DialogContent>
    </Dialog>
  );
}
export default CreatePost;
