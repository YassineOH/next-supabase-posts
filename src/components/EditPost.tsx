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
import { TbDotsVertical } from 'react-icons/tb';

function EditPost() {
  // to implement
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="px-1">
          <TbDotsVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-10">
        <DropdownMenuItem className="flex items-center justify-start gap-x-2">
          <FaEdit />
          <div>Edit</div>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center justify-start gap-x-2 text-destructive">
          <FaTrash />
          <div>delete</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default EditPost;
