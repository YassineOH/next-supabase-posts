'use server'
import { z } from "zod"
import { signEmailSchema as schema } from "~/lib/schemas"
export const signWithEmailAction = async (data: z.infer<typeof schema>) => {
    const parsedData =  schema.safeParse(data)

    if (parsedData.success) {
        console.log(parsedData)
    } else {
        throw Error(parsedData.error.message)
    }
}