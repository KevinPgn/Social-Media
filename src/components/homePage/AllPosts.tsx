import { Ellipsis, Heart, MessageCircle, Bookmark, Eye } from "lucide-react"

export const AllPosts = ({posts}: {posts: any}) => {
  return <>
    {posts.map((post: any) => {
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
                    <Ellipsis size={20} className="text-gray-400 cursor-pointer" />
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
    })}    
  </>
}