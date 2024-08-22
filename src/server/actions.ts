'use server'
import { redirect } from 'next/navigation'
import {z} from 'zod'

import { db } from '~/db'
import { userTable } from '~/db/schema'
import { registrationFormSchema } from "~/lib/schemas"

export const registerUser = async (data: z.infer<typeof registrationFormSchema>) =>{
    const user = await db.insert(userTable).values({
        email: data.email,
        name: data.name
    })
    console.log(user)
    return redirect('/dashboard')
}