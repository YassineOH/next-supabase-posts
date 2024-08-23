'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import {z} from 'zod'

import { db } from '~/db'
import { postTable, userTable } from '~/db/schema'
import { CreatePostType, registrationFormSchema } from "~/lib/schemas"
import { getUser } from './auth'

export const registerUser = async (data: z.infer<typeof registrationFormSchema>) =>{
    const userSession = await getUser()
    if (!userSession) {
        return redirect('/login')
    }
    await db.insert(userTable).values({
        email: data.email,
        name: data.name, 
        id: userSession.id
    })

    return redirect('/dashboard')
}


export const createPost = async (data: CreatePostType) => {

    const post = await db.insert(postTable).values({
        content: data.content,
        title: data.title,
        userId: data.userId,
    
    })
    console.log(post)
    return revalidatePath('/dashboard')
}