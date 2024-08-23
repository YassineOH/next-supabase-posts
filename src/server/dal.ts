'use server'

import { db } from "~/db"

// data access layer


export const getAllPosts = async () => {
    const posts = await db.query.postTable.findMany()
    return posts
}