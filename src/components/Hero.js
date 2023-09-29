import React from 'react';
import rama5 from "../assets/rama5.jpeg"

const Hero = () => {
  return (
    <>
    


<div class="m-auto max-w-6xl p-12">
   <div class="flex flex-col md:flex-row">
      <div class="md:w-1/2 max-w-md flex flex-col justify-center">
         <div class="md:text-5xl text-2xl uppercase font-black">Brand New Single -  RINGA!!!</div>
         <div class="text-xl mt-4">Cloud Galaxy Entertainment is back with bigger and better music!.</div>
         <div class="my-5 h-16">
            <div class="shadow-md font-medium py-2 px-4 text-yellow-100
               cursor-pointer bg-yellow-600 hover:bg-yellow-500 rounded text-lg text-center w-48">Join us now</div>
         </div>
      </div>
      <div class="flex md:justify-end w-full md:w-1/2 -mt-5">
         <div class="bg-dots">
            <div class="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
               <img alt="card img" class="rounded" src={rama5}/> 
               <div class="text-2xl p-10 bg-white"> "Najitahidi kuwapa burudani, mziki wa kweli na mafanikio mema!" - Cloud Galaxy. </div>
            </div>
         </div>
      </div>
   </div>
</div>
    
    </>
  );
};

export default Hero;
