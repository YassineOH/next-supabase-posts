'use server'

import { db } from "~/db"

// data access layer


export const getAllPosts = async () => {
    const posts = await db.query.postTable.findMany()
    return posts
}

export const getUserInfo = async (userId: string) => {
    const user = await db.query.userTable.findFirst({
        where: (u, {eq}) => eq(u.id, userId),
        columns: {
            name: true
        }
    })
    return user
}