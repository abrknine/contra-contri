import { useState } from "react" 
import google from '../public/google.png'      
 import Image from "next/image" 
 const Leftsign = () => { 
     const [email,setEmail]=useState('') 
   return ( 
     <div className="w-full sm:w-3/4 md:w-2/4 lg:w-1/3 xl:w-1/4 mx-auto px-4 md:px-0"> 
     <div className="flex flex-col items-center space-y-4"> 
         <h1 className="text-2xl font-semibold">Complete your profile</h1> 
         <p className="text-left">Sign up with email address</p> 
         <input 
             onChange={(e) => setEmail(e.target.value)} 
             required 
             type="email" 
             name="email" 
             id="" 
             value={email} 
             placeholder="name@email.com" 
             className="p-4 w-full rounded-xl border border-1 border-gray-300 focus:outline-none" 
         /> 
         <button 
             disabled={!email} 
             className="cursor-pointer bg-indigo-950 hover:bg-indigo-950/80 text-white w-full py-2 rounded-full" 
         > 
             Continue 
         </button> 
         <p className="text-xs">OR</p> 
         <button className="border border-1 border-gray-300 cursor-pointer flex justify-center gap-x-2 text-lg items-center rounded-full w-full py-2"> 
             <Image src={google} width={30} height={30} alt="google_img" /> 
             Continue with Google 
         </button> 
         <p className="text-base"> 
             Already a member?{' '} 
             <span className="text-base text-blue-700">Sign in here</span> 
         </p> 
     </div> 
 </div> 
  
   ) 
 } 
  
 export default Leftsign;