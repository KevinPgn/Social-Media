"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
/*
model Post{
  id String @id @default(cuid())
  title String?
  content String?
  image String?

  authorId String
  author User @relation(fields: [authorId], references: [id], onDelete: Cascade)

  comments Comment[]
  likes Like[]
  savedPosts SavedPost[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Comment{
  id String @id @default(cuid())
  content String

  postId String
  post Post @relation(fields: [postId], references: [id], onDelete: Cascade)

  authorId String
  author User @relation(fields: [authorId], references: [id], onDelete: Cascade)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Like{
  id String @id @default(cuid())

  postId String
  post Post @relation(fields: [postId], references: [id], onDelete: Cascade)
  
  authorId String
  author User @relation(fields: [authorId], references: [id], onDelete: Cascade)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([postId, authorId])
}

model SavedPost{
  id String @id @default(cuid())

  postId String
  post Post @relation(fields: [postId], references: [id], onDelete: Cascade)
  
  authorId String
  author User @relation(fields: [authorId], references: [id], onDelete: Cascade)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([postId, authorId])
}

model Follow{
  id String @id @default(cuid())

  followerId String
  follower User @relation(name: "follower", fields: [followerId], references: [id], onDelete: Cascade)

  followingId String
  following User @relation(name: "following", fields: [followingId], references: [id], onDelete: Cascade)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([followerId, followingId])
}
*/

export const createPost = authenticatedAction
  .schema(z.object({
    title: z.string().min(1).optional(),
    content: z.string().min(1),
    image: z.string().url().nullable().optional(), // Ensure the image is a valid URL or null
  }))
  .action(async ({parsedInput: {content, image, title}, ctx:{userId}}) => {
    if(!userId) throw new Error("Unauthorized")
      
    await prisma.post.create({
      data: {
        title,
        content,
        image: image || null, // Handle the case where image is null
        authorId: userId,
      }
    })

    revalidatePath("/")
  })

export const getPosts = async () => {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
      comments: true,
      _count: {
        select: {
          comments: true,
          likes: true,
        }
      }
    },
    take: 10,
    orderBy: {
      createdAt: "desc"
    }
  })
  return posts
}