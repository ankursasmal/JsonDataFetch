
// keep it in publlic

import Link from "next/link"

// import Image from "next/image";
// <Image
// src="/vercel.svg"
// alt="Vercel Logo"
// className="dark:invert"
// width={100}
// height={24}
// priority
// />


  
 function page() {
   return (
     <div>
      {/* className=" max-w-[140rem] " */}
       <nav  >
<div className="flex w-[100%] bg-slate-200 shadow-lg items-center justify-between px-3 py-2">
<Link href='/home'>Home</Link>
<div className="flex items-center gap-2">
<a>SignUp</a>
<a>Login</a>
<a>Card</a>
 </div>
</div>
       </nav>
     </div>
   )
 }
 
 export default page
 
