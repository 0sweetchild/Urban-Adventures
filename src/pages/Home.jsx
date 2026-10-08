import About from "./About"

function Home() {
  return (
    <div>
<div className="w-screen h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}>
  <span className="text-7xl font-semibold  ">EXPLORE THE WORLD</span>
  <h1 className="text-white bg-blue-500  p-2 mt-4 font-semibold text-lg">
    Your next great adventure starts here.
  </h1>
  <p className="text-black text-lg">
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

<About/>
    </div>
    
  )
}

export default Home