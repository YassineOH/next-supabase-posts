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
  DialogFooter,
} from './ui/dialog';

import { TbDotsVertical } from 'react-icons/tb';
import { DialogClose } from '@radix-ui/react-dialog';
import { deletePost } from '~/server/actions';

interface Props {
  title: string;
  content: string;
  postId: number;
  userId: string;
}
function EditPost({ content, title, postId, userId }: Props) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

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
              setOpenEdit(true);
            }}
          >
            <FaEdit />
            <div>Edit</div>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center justify-start gap-x-2 text-destructive"
            onClick={() => {
              setOpenDelete(true);
            }}
          >
            <FaTrash />
            <div>delete</div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={openEdit} onOpenChange={setOpenEdit}>
        <DialogContent aria-describedby="post form">
          <DialogHeader>
            <DialogTitle>Update Post</DialogTitle>
          </DialogHeader>
          <PostForm
            content={content}
            postId={postId}
            title={title}
            onCloseDialog={() => {
              setOpenEdit(false);
            }}
          />
        </DialogContent>
      </Dialog>
      <Dialog open={openDelete} onOpenChange={setOpenDelete}>
        <DialogContent aria-describedby="delete post">
          <DialogHeader>
            <DialogTitle>Delete Post Post</DialogTitle>
          </DialogHeader>
          <p>Are you sure of deleting post</p>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">Close</Button>
            </DialogClose>
            <Button
              variant="destructive"
              onClick={async () => {
                await deletePost({ postId, userId });

                setOpenDelete(false);
              }}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
export default EditPost;
