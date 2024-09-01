'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

import { db } from '~/db';
import { postTable, userTable } from '~/db/schema';
import { CreatePostType, registrationFormSchema } from '~/lib/schemas';
import { getUser } from './auth';
import { eq } from 'drizzle-orm';

export const registerUser = async (
  data: z.infer<typeof registrationFormSchema>,
) => {
  const userSession = await getUser();
  if (!userSession) {
    return redirect('/login');
  }
  await db.insert(userTable).values({
    email: data.email,
    name: data.name,
    id: userSession.id,
  });

  return redirect('/dashboard');
};

export const createPost = async (data: CreatePostType) => {
  await db.insert(postTable).values({
    content: data.content,
    title: data.title,
    userId: data.userId,
  });

  return revalidatePath('/dashboard');
};

export const updatePost = async (data: CreatePostType) => {
  if (!data.id) {
    throw Error("There's no post id");
  }

  const currentUser = await getUser();

  if (!currentUser || currentUser.id !== data.userId) {
    throw Error('Not authorized');
  }
  await db
    .update(postTable)
    .set({ content: data.content, title: data.title })
    .where(eq(postTable.id, data.id));

  return revalidatePath('/dashboard');
};

export const deletePost = async ({
  postId,
  userId,
}: {
  postId: number;
  userId: string;
}) => {
  const currentUser = await getUser();

  if (!currentUser || currentUser.id !== userId) {
    throw Error('Not authorized');
  }

  await db.delete(postTable).where(eq(postTable.id, postId));
  return revalidatePath('/dashboard');
};
