'use client';

import React, { useEffect,useState} from "react";
import { PostMainCompTypes } from "../types";
import Link from "next/link";
import { ImMusic } from "react-icons/im";
import { AiFillHeart } from "react-icons/ai";
import PostMainLikes from "./PostMainLikes";
import useCreateBucketUrl from "../hooks/useCreateBucketUrl";

export default function PostMain({post} : PostMainCompTypes){

useEffect(() => {
    const video =document.getElementById(`video-${[post?.id]}`) as HTMLVideoElement;
    const postMainElement = document.getElementById(`PostMain-${post.id}`);
    if(postMainElement) {
        let observer = new IntersectionObserver((entries)=> {
            entries[0].isIntersecting ? video.play() : video.pause()
        }, {threshold : [0.6]})
        observer.observe(postMainElement)
    }
}, [])

    return (
        <>
        <div id={`PostMain-${post.id}`} className="flex border-b py-6">
            <div className="cursor-pointer">
                <img src={ useCreateBucketUrl( post?.profile?.image)} alt="" className="rounded-full max-h-[60px]" width="60" />
            </div>

            <div className="pl-3 w-full px-4">
                <div className="flex items-center justify-between pb-0.5">
                    <Link href={`/profile/${post.profile.user_id}`}>
                        <span className="font-bold hover:underline cursor-pointer">
                            {post.profile.name}
                        </span>
                    </Link>

                    <button
                    className="border text-[15px] px-[21px] py-0.5 border-[#F02C56] hover:bg-[#ffeef2] font-semibold rounded-md"
                    >
                        Follow
                    </button>
                </div>

<p className="text-[15px] pb-0.5 break-word md:max-w-[400px] max-w-[300px]"> {post.text}</p>
<p className="text-[14px] text-gray-500 pb-0.5">#fun #cool #dance #vibe</p>
<p className="text-[14px] pb-0.5 flex items-center font-semibold">
    <ImMusic size="17"/>
    <span className="px-1">original sound - Dil Chahta Hai</span>
    <AiFillHeart size="20"/>
</p>

<div className="mt-2.45 flex">
    <div className="relative min-h-[480px] max-h-[580px] max-w-[260px] flex items-center bg-black rounded-xl cursor-pointer">
<video 
id={`video-${post.id}`}
loop
controls
muted
autoPlay
className="rounded-xl object-cover mx-auto h-full"
src={ useCreateBucketUrl( post?.video_url)}
/>
<img src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" className="absolute right-2 bottom-10" width="90"  />
    </div>
    <PostMainLikes post = {post}/>
</div>
            </div>

        </div>
        </>
    );
}