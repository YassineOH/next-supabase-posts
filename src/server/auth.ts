'use server'
import { z } from "zod"
import { headers } from "next/headers"
import { createClient } from "~/utils/supabase/server"
import { signEmailSchema as schema } from "~/lib/schemas"
import { redirect } from "next/navigation"


export const signWithEmailAction = async (data: z.infer<typeof schema>) => {
    const parsedData =  schema.safeParse(data)

    if (parsedData.success) {
        const supabase =  createClient()
        const origin = headers().get('origin')
        const { error} = await supabase.auth.signInWithOtp({
            email: parsedData.data.email,
            options: {
                emailRedirectTo: `${origin}/auth/callback`
            }
        })
        const params = new URLSearchParams()
        if (error){
            params.set('message', 'Could not authenticate user')
            params.set('type', 'error')
    
        } else {
            params.set('message', 'Please check your mailbox')
            params.set('type', 'success')
        }

        return redirect(`/login?${params.toString()}`)
    } else {
        throw Error(parsedData.error.message)
    }
}