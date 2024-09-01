"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
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

