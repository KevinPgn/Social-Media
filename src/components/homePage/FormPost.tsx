"use client"
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea"
import { UserProps } from "@/lib/types"
import { Send } from "lucide-react"
import { createPost } from "@/server/Actions";
import { UploadButton } from "@/lib/uploadthing";
import { useForm } from "react-hook-form"

export const FormPost = ({user}: {user: UserProps}) => {
  const [image, setImage] = useState<string | null>(null);
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = async (data: any) => {
    const { content, image } = data;

    if (!content) return new Error("Content is required");

    try {
      const response = await createPost({ content, image });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setValue("image", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col rounded-lg bg-[#11100E]">
      {!user ? (
        <h2 className="text-white text-center text-xl font-bold">Your need to login to post</h2>
      ) : (
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-start gap-2 p-5">
            <img src={user.image} alt="user" width={40} height={40} className="rounded-full" />
            <Textarea
              {...register("content")}
              placeholder="What's on your mind?"
              className="rounded-t-lg h-[100px] text-white rounded-md p-3 text-md border-none resize-none bg-transparent"
            />
          </div>
          {image && (
            <div className="p-2">
              <img src={image} alt="uploaded" className="rounded-lg max-h-60" />
              <input type="hidden" {...register("image")} value={image} />
            </div>
          )}
          <div className="flex justify-between rounded-b-lg bg-[#1F1E1B] items-center p-1 px-3">
            <div className="flex gap-2">
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  if (res && res.length > 0) {
                    setImage(res[0].url);
                    setValue("image", res[0].url);
                  }
                }}
                onUploadError={(error) => {
                  console.error(error);
                }}
              />
              <label
                className="bg-transparent text-white p-2 rounded-full cursor-pointer"
                onClick={() => document.getElementById('file-upload')?.click()}
              >
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </div>
            <button type="submit" className="bg-transparent text-white p-2 rounded-full hover:bg-gray-700 duration-75">
              <Send />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}