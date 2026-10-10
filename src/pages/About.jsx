

function About() {
  return (
    <div>
<div className="p-30">
  <div className=""><span className="font-semibold">OUR STORY</span>
<h1  className="text-5xl text-blue-500">Redefining the way the world explores.</h1>
<p className=" mt-3 text-xl">Founded on the belief that travel should be deeply personal, seamless, and transformative, <br /> Wanderly turns dream itineraries into effortlessly curated adventures.</p>
</div>

<div>
  <h1 className="text-xl font-semibold text-blue-500 mt-20">Our Mission</h1> <br />
  <p className="italic font-medium text-xl">To connect curious travelers with authentic destinations, local experts, <br /> and unforgettable experiences through thoughtful design and seamless planning.</p>
</div>

<div className="text-center mt-20 md:flex justify-center items-center gap-10 w-60% bg-blue-100 h-full p-3" >
  <div>
  <h1 className="font-semibold text-blue-500 text-3xl">25,000+</h1>
   <p>Travelers Inspired</p>
   </div>

   <div>
  <h1 className="font-semibold text-blue-500 text-3xl">45+ </h1>
   <p>Countries Covered</p>
   </div>

   <div>
  <h1 className="font-semibold text-blue-500 text-3xl">1,200+ </h1>
   <p>Curated Experiences</p>
   </div>

   <div>
  <h1 className="font-semibold text-blue-500 text-3xl">4.9 / 5.0</h1>
   <p>Average Customer Rating</p>
   </div>
</div>

<div className="flex mt-10">
<div >
  <img className="w-80 h-full " src="https://i.pinimg.com/736x/74/80/22/748022256fe9719feb6d72571a455543.jpg" alt="" />
</div>
<div className="p-10">
  <h1 className="text-2xl text-blue-500 font-semibold">Ready to start your next adventure?</h1>
  <p className="text-xl">Tell us where you want to go, <br /> and let our travel designers handle the rest.</p>

  <div>
    <input type="text" placeholder="Where do you want to go?" className="mt-5 border p-2 w-full"/>
    <button className="bg-blue-500 text-white p-2 mt-5 w-full  ">Explore</button>
  </div>
  </div>
</div>


</div>

    </div>
    
  )
}

export default About