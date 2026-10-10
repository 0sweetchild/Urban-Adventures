import About from "./About"
import Destination from "./Destination"
import Experience from "./Experience"
import Packages from "./Packages"

function Home() {
  return (
    <div>
<div className="w-screen h-screen bg-cover bg-center flex flex-col justify-center items-center text-black text-center"  >
  <span className="text-8xl font-bold  "><span className="text-blue-500">EXPLORE </span> <br />THE WORLD</span>
  <h1 className="text-blue-500  p-2 mt-8 font-semibold text-2xl">
    Your next great adventure starts here.
  </h1>
  <p className="text-black text-xl">
    Discover unforgettable destinations, curated experiences, and personalized <br /> journeys designed around the way you love to travel.
  </p>

  {/* <div>
    <div className="flex mt-10 gap-4">
      <div className=" z-40 bg-blue-400 border border-amber-50 w-10 h-10 rounded-3xl"></div>
      <div className="z-30 bg-blue-400 border border-amber-50 w-10 h-10 rounded-3xl"></div>
      <div className="z-20 bg-blue-400 border border-amber-50 w-10 h-10 rounded-3xl"></div>
     
    </div>
  </div> */}




</div>

<Destination/>
<Packages/>
<Experience/>
<About/>
    </div>
    
  )
}

export default Home