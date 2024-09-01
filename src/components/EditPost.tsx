'use client';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from './ui/dropdown-menu';
import { useState } from 'react';
import PostForm from './PostForm';

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
} from './ui/dialog';

import { TbDotsVertical } from 'react-icons/tb';

interface Props {
  title: string;
  content: string;
  postId: number;
}
function EditPost({ content, title, postId }: Props) {
  const [open, setOpen] = useState(false);

  // to implement
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="px-1">
            <TbDotsVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-10">
          <DropdownMenuItem
            className="flex items-center justify-start gap-x-2"
            onClick={() => {
              setOpen(true);
            }}
          >
            <FaEdit />
            <div>Edit</div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center justify-start gap-x-2 text-destructive">
            <FaTrash />
            <div>delete</div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent aria-describedby="post form">
          <DialogHeader>
            <DialogTitle>Update Post</DialogTitle>
          </DialogHeader>
          <PostForm
            content={content}
            postId={postId}
            title={title}
            onCloseDialog={() => {
              setOpen(false);
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
export default EditPost;
