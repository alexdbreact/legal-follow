"use client";
import { useRouter } from "next/navigation";
import { GoSignIn } from "react-icons/go";
import Image from "next/image";
import intro from "../public/4.jpg"


import "./globals.css"


export default function page() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
 <Image
    className=" h-screen w-full absolute bg-center  "
      src={intro}
     
      alt="intro"
      
      >
        

      </Image>
   <div className=" z-50 py-12 px-4 mb-36 border border-amber-100 flex flex-col justify-center  items-center rounded-lg bg-gradient-to-b from-yellow-100 to-transparent">

     <h1 className="text-2xl font-bold mb-6 text-amber-800 text-center ">الإدارة العامة للشئون القانونية</h1>
      <button
        className="px-8 py-0 bg-amber-800 text-white font-bold text-lg	 rounded-xl"
        onClick={() => router.push("/login")}
      >
    
         <span className="flex flex-row justify-around font-bold items-center">
         <GoSignIn className="pr-4" fontSize="2.5em" />    تسجيل الدخول 
         </span>

     </button>
   </div>
     
    </div>
  );
}
