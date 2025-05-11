"use client";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const Generate = () => {

  const searchParams = useSearchParams();

  // const [link, setlink] = useState("");
  // const [linktext, setlinktext] = useState("");
  const [links, setLinks] = useState([{link: "", linktext: ""}]);
  const [handle, sethandle] = useState(searchParams.get("handle"));
  const [pic, setpic] = useState("")
  const [desc, setdesc] = useState("")

  const handleChange = (index, link, linktext) => {
    setLinks((initialLinks) =>{
      return initialLinks.map((item, i) => {
        if (i == index) {
          return {link, linktext}
        }else{
          return item
        }
      })
    })
  }
  
  const addLink = () => {
    setLinks(links.concat([{link: "", linktext: ""}]));
  }

  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "links": links,
      "handle": handle,
      "pic": pic,
      "desc": desc
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const r = await fetch("http://localhost:3000/api/add", requestOptions);
    const result = await r.json();
    if(result.success){
      toast.success(result.message);
      setLinks([]);
      sethandle("");
      setpic("");
    }else{
      toast.error(result.message);
    }
  };

  return (
    <div className=" min-h-screen grid grid-cols-2 bg-[#EBC7EC] ">
      <div className="col1 flex items-center justify-center flex-col ml-25 mt-18 text-gray-700">
        <div className="flex flex-col gap-5 ">
          <h1 className="font-bold text-4xl text-gray-900 my-3 ">
            Create your BitTree
          </h1>
          <div className="item">
            <h2 className="font-semibold text-2xl">
              Step 1: Claim your Handles
            </h2>
            <div className="mx-4 ">
              <input
                value={handle || ""}
                onChange={(e) => {
                  sethandle(e.target.value);
                }}
                className="px-4 py-2 ml-2.5 bg-pink-50 my-2 rounded-full focus:outline-pink-500 "
                type="text"
                placeholder="Choose a Handle"
              />
            </div>
          </div>
          <div className="item my-1">
            <h2 className="font-semibold text-2xl">Step 2: Add Links</h2>
           {links && links.map((item, index) => {
            return (
             <div key={index} className="mx-4">
              <input
                value={item.link || ""}
                onChange={e => {
                  handleChange(index, e.target.value, item.linktext)
                }}
                className="px-4 py-2 bg-pink-50 mx-2 my-2 rounded-full focus:outline-pink-500"
                type="text"
                placeholder="Enter Link"
              />
              <input
                value={item.linktext || ""}
                onChange={(e) => {
                  handleChange(index,item.link, e.target.value);
                }}
                className="px-4 py-2 bg-pink-50 mx-2 my-2 rounded-full focus:outline-pink-500"
                type="text"
                placeholder="Enter Link text"
              />
            </div>
            );
           })}
              <button onClick={()=>addLink()} className="mx-2 hover:bg-slate-800 cursor-pointer p-5 py-2 bg-slate-900 text-white font-bold rounded-3xl">
               + Add Link
              </button>
          </div>
          <div className="item">
            <h2 className="font-semibold text-2xl">
              Step 3: Add Picture & Description
            </h2>
            <div className="mx-4 flex flex-col ">
              <input
                value={pic || ""}
                onChange={(e) => {
                  setpic(e.target.value);
                }}
                className="px-4 py-2 bg-pink-50 mx-2 my-2 rounded-full focus:outline-pink-500"
                type="text"
                placeholder="Enter Link to your Picture"
              />
              <input
                value={desc || ""}
                onChange={(e) => {
                  setdesc(e.target.value);
                }}
                className="px-4 py-2 bg-pink-50 mx-2 my-2 rounded-full focus:outline-pink-500"
                type="text"
                placeholder="Enter Description"
              />
              <button disabled={pic == "" || handle== "" || links[0].linktext == ""} onClick={()=> {submitLinks()}} className="mx-2 hover:bg-slate-800 cursor-pointer p-5 py-2 w-fit my-5 bg-slate-900 text-white font-bold rounded-3xl disabled:bg-slate-500">
                Create your BitTree
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col2 w-full h-screen">
        <img
          className="h-full mt-18 w-[800px] object-contain "
          src="/generate.gif"
          alt="Generate Your Links"
        />
        <ToastContainer />
      </div>
    </div>
  );
};

export default Generate;
