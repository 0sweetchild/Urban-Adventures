
function Navbar() {
  return (
    <div>

<nav className="flex justify-between items-center p-4 bg-gray-100">
 <span className="text-3xl"><span className="text-blue-500">W</span>anderly</span>
 <div className="text-lg flex gap-4">
  <a href="">Destination</a>
  <a href="">Packages</a>
  <a href="">Experiences</a>
  <a href="">About Us</a>
 </div>
 
 <div>
 <input type="text" placeholder="Search    "/>  
 <button>Sign In</button>
 <button>Plan My Trip</button>
 </div>

 

</nav>


        
    </div>
  )
}

export default Navbar