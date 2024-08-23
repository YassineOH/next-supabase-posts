'use client';

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
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default EditPost;
