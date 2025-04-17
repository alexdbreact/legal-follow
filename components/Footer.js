



import Link from 'next/link'
import { IoDocumentsOutline } from "react-icons/io5";
import { PiFolderStarBold } from "react-icons/pi";

import { FaPeopleRoof } from "react-icons/fa6";







const Footer = () => {
  return (
    <div className="btm-nav ">
      
  <Link href={"../dashboard"} className="   border-blue-500 focus:border-blue-900 focus:outline-none bg-orange-200 text-orange-900 focus:bg-blue-700 focus:text-slate-100 hover:animate-pulse hover:animate-infinite 	 ">
  <IoDocumentsOutline fontSize="1.5em" />

  <span className="btm-nav-label text-center text-sm">متابعة موضوع </span>
   
  </Link>
 
 
 
  <Link href={"../dashboard/vipdashboard"} className="  focus:border-blue-900 focus:outline-none  bg-teal-200 text-teal-900 focus:bg-blue-700 focus:text-slate-100 ">
  <PiFolderStarBold fontSize="1.5em"/>

  <span className="btm-nav-label text-center text-sm"> الموضوعات الهامة  </span>
   
  </Link>
  

 
</div>
  )
}

export default Footer