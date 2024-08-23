'use client';

import { useState } from 'react';
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
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary">Add post</Button>
      </DialogTrigger>
      <DialogContent aria-describedby="post form">
        <DialogHeader>
          <DialogTitle>Create Post</DialogTitle>
        </DialogHeader>
        <PostForm
          onCloseDialog={() => {
            setOpen(false);
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
export default CreatePost;
