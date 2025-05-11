"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState("");
  const createTree = async () => {
    router.push(`/generate?handle=${text}`);
  }
  return (
    <main>
      <section className="bg-[#254F1A] min-h-[100vh] grid grid-cols-2">
      <div className=" flex items-center justify-center flex-col  ml-[10vw] ">
      <p className="text-[#D2E823] font-[1000] text-7xl mr-27 py-6 w-160">Everything you are. In one, simple link in bio.</p>
      <p className="text-white text-xl font-semibold ">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>

      <div className="flex gap-3 absolute top-170 left-48">
      <input value={text} onChange={(e)=> setText(e.target.value)} className="px-2 py-2 bg-white focus:outline-green-800 rounded-md" type="text" placeholder="Enter your Handle" />
      <button onClick={()=>createTree()} className="bg-pink-200 cursor-pointer  rounded-full px-4 py-4 font-semibold">Claim Your Bittree</button>
      </div>

      </div>
      <div className=" flex items-center justify-center flex-col  mr-[10vw]">
      <img className="mt-25 ml-25" src="/cardimg.jpg" alt="homepage Image" />
      </div>
      </section>
      <section className="bg-red-400 min-h-[100vh]">

      </section>
    </main>
  );
}