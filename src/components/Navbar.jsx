
function Navbar() {
  return (
    <div>

<nav className="flex justify-between items-center p-4 bg-white drop-shadow-sm position: fixed w-full z-10">
 <a href="/" className="text-3xl"><span className="text-blue-500">W</span>anderly</a>
 <div className="text-lg flex gap-6">
  <a href="/about">Destination</a>
  <a href="/packages">Packages</a>
  <a href="/experiences">Experiences</a>
  <a href="/about">About Us</a>
 </div>
 
 <div>
 <input type="text" placeholder="Search    "  className="border rounded-xl p-2 m-4"/>   
 <button className="m-4 p-2  font-semibold text-black rounded-xl"><a href="/Signin">Sign In</a> </button>
 <button className="m-4 p-2 bg-blue-500 font-semibold text-white rounded-xl">Plan My Trip</button>  
 </div>

 

</nav>


        
    </div>
  )
}

export default Navbar