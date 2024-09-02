"use client"
import { useState, useEffect, useCallback, useRef } from "react"
import { Ellipsis, Heart, MessageCircle, Bookmark, Eye } from "lucide-react"
import { getPosts } from "@/server/Actions" // Assurez-vous que cette importation est correcte

export const AllPosts = ({ initialPosts, userid }: { initialPosts: any, userid: string }) => {
  const [posts, setPosts] = useState(initialPosts)
  const [loading, setLoading] = useState(false)
  const [skip, setSkip] = useState(initialPosts.length)
  const [hasMore, setHasMore] = useState(true) // Nouvel état pour suivre s'il y a plus de posts à charger
  const observer = useRef<IntersectionObserver | null>(null)

  const loadMorePosts = useCallback(async () => {
    setLoading(true)
    const newPosts = await getPosts(skip)
    if (newPosts.length === 0) {
      setHasMore(false) // Si aucun nouveau post n'est récupéré, arrêter le chargement
    } else {
      setPosts((prevPosts: any) => [...prevPosts, ...newPosts])
      setSkip((prevSkip: number) => prevSkip + newPosts.length)
    }
    setLoading(false)
  }, [skip])

  const lastPostRef = useCallback((node: any) => {
    if (loading || !hasMore) return // Ne pas observer si en cours de chargement ou s'il n'y a plus de posts
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMorePosts()
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore, loadMorePosts])

  return <>
    {posts.map((post: any, index: number) => {
      if (index === posts.length - 1) {
        return (
          <div ref={lastPostRef} className="w-full bg-[#1a1916] rounded-lg p-5 mt-5" key={post.id}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={post.author.image} alt={post.author.name} className="w-10 h-10 rounded-full" />
                <div>
                  <h1 className="text-gray-300 text-sm font-bold">{post.author.name}</h1>
                  <h3 className="text-gray-500 text-xs">{new Date(post.createdAt).toLocaleDateString()}</h3>
                </div>
              </div>
              {post.author.id === userid ? <Ellipsis size={20} className="text-gray-400 cursor-pointer" /> : null}
            </div>

            <p className="text-gray-300 text-md mt-3 px-5">{post.content}</p>
            {post.image && (
              <img src={post.image} alt={post.content} className="w-full h-[350px] object-cover mt-3 rounded-lg" />
            )}

            <div className="flex items-center justify-around mt-3">
              <div className="flex items-center w-[20%] text-center justify-center cursor-pointer gap-2 bg-[#21201E] px-5 rounded-lg p-2">
                <Heart size={20} className="text-gray-400 cursor-pointer" />
                <p className="text-gray-300 text-sm">{post._count.likes} Reacts</p>
              </div>
              <div className="flex items-center w-[20%] text-center justify-center cursor-pointer gap-2 bg-[#21201E] px-5 rounded-lg p-2">
                <MessageCircle size={20} className="text-gray-400 cursor-pointer" />
                <p className="text-gray-300 text-sm">{post._count.comments} Thread</p>
              </div>
              <div className="flex items-center w-[20%] text-center justify-center cursor-pointer gap-2 bg-[#21201E] px-5 rounded-lg p-2">
                <Bookmark size={20} className="text-gray-400 cursor-pointer" />
                <p className="text-gray-300 text-sm">0 Save</p>
              </div>
              <div className="flex items-center w-[20%] text-center justify-center cursor-pointer gap-2 bg-[#21201E] px-5 rounded-lg p-2">
                <Eye size={20} className="text-gray-400 cursor-pointer" />
                <p className="text-gray-300 text-sm">0 Views</p>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div className="w-full bg-[#1a1916] rounded-lg p-3 mt-5" key={post.id}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={post.author.image} alt={post.author.name} className="w-10 h-10 rounded-full" />
                <div>
                  <h1 className="text-gray-300 text-sm font-bold">{post.author.name}</h1>
                  <h3 className="text-gray-500 text-xs">{new Date(post.createdAt).toLocaleDateString()}</h3>
                </div>
              </div>
              {post.author.id === userid ? <Ellipsis size={20} className="text-gray-400 cursor-pointer" /> : null}
            </div>

            <p className="text-gray-300 text-md mt-3 px-5">{post.content}</p>
            {post.image && (
              <img src={post.image} alt={post.content} className="w-full h-[500px] object-cover mt-3 rounded-lg" />
            )}

            <div className="flex items-center justify-around mt-3">
              <div className="flex items-center w-[20%] text-center justify-center cursor-pointer gap-2 bg-[#21201E] px-5 rounded-lg p-2">
                <Heart size={20} className="text-gray-400 cursor-pointer" />
                <p className="text-gray-300 text-sm">{post._count.likes} Reacts</p>
              </div>
              <div className="flex items-center w-[20%] text-center justify-center cursor-pointer gap-2 bg-[#21201E] px-5 rounded-lg p-2">
                <MessageCircle size={20} className="text-gray-400 cursor-pointer" />
                <p className="text-gray-300 text-sm">{post._count.comments} Thread</p>
              </div>
              <div className="flex items-center w-[20%] text-center justify-center cursor-pointer gap-2 bg-[#21201E] px-5 rounded-lg p-2">
                <Bookmark size={20} className="text-gray-400 cursor-pointer" />
                <p className="text-gray-300 text-sm">0 Save</p>
              </div>
              <div className="flex items-center w-[20%] text-center justify-center cursor-pointer gap-2 bg-[#21201E] px-5 rounded-lg p-2">
                <Eye size={20} className="text-gray-400 cursor-pointer" />
                <p className="text-gray-300 text-sm">0 Views</p>
              </div>
            </div>
          </div>
        )
      }
    })}
    {loading && <p>Loading more posts...</p>}
    {!hasMore && <p>No more posts to load.</p>} {/* Message indiquant qu'il n'y a plus de posts */}
  </>
}