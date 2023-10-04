import React from 'react';
import rama from "../assets/rama.jpeg"

const Hero = () => {
  return (
    <>
    


<div class="m-auto max-w-6xl p-12">
   <div class="flex flex-col md:flex-row">
      <div class="md:w-1/2 max-w-md flex flex-col justify-center">
         <h1 class="md:text-5xl text-2xl  uppercase font-black">Brand New Single -  RINGA!!!</h1>
         <p id='para' class="text-xl mt-4">Karibu kuwa wa kwanza kuiona video yangu mpya ya muziki itakayotoka mwezi wa Oktoba! <br/> Nimeandaa kitu cha kipekee kabisa kwa ajili yako. <hr/> <b> "Utapata mchanganyiko wa sauti tamu, muziki wa kuvutia na picha zenye nguvu. <br/> Jiandae kusafiri katika ulimwengu wa muziki wenye kuburudisha na kusisimua!" </b> </p>
         <div class="my-5 h-16">
            <button class="shadow-md font-medium py-2 px-4 text-yellow-100
               cursor-pointer bg-[#191970] hover:bg-yellow-500 rounded text-lg text-center ml-20 w-48">Join us now</button>
         </div>
      </div>
      <div class="flex md:justify-end w-full md:w-1/2 -mt-5">
         <div class="bg-dots">
            <div class="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
               <img alt="card img" class="rounded" src={rama}/> 
               <p class="text-2xl p-10 bg-white"> "Najitahidi kuwapa burudani, mziki wa kweli na mafundisho mema!" - Cloud Galaxy. </p>
            </div>
         </div>
      </div>
   </div>
</div>
    
    </>
  );
};

export default Hero;