import { getMaxAge } from "next/dist/server/image-optimizer";
import { Protest_Revolution } from "next/font/google";

export default function Home() {
  return (
  <div className="">
<section className="flex flex-col justify-center items-center mt-40">

    <h1 className="text-7xl font-bold text-white">
  Welcome to Next JS!

    </h1>
    <p className="text-md w-1/2 text-center mt-2 text-zinc-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore vero maxime quasi modi ullam quaerat placeat harum explicabo sit quae.</p>
<button className="py-3 px-30 border border-amber-400 text-zinc-3000 mt-9 rounded-md hover:bg-amber-400 hover:text-black transition duration-300">
  Click me
</button>
</section>




    <div className="mt-10 px-20 py-5 flex gap-5 items-center justify-center ">
      <div className="bg-amber-400 w-64 h-64 rounded-full blur-2xl"></div>
     
    
     
    </div>
  </div>
  );
}
