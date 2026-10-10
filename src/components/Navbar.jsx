
function Navbar() {
  return (
    <div>

<nav className="flex justify-between items-center p-2  pr-5 pl-5 bg-white drop-shadow-sm position: fixed w-full z-10">
 <a href="/" className="text-3xl"><span className="text-blue-500">W</span>anderly</a>
 <div className="text-lg  gap-6 hidden md:flex ">
  <a href="/destination">Destination</a>
  <a href="/packages">Packages</a>
  <a href="/experience">Experiences</a>
  <a href="/about">About Us</a>
 </div>
 
 <div className="flex justify-between items-center gap-4">
 <input type="text" placeholder="Search    "  className="hidden md:flex border rounded-xl p-2 m-4"/>   
 <button className="m-4 p-2 pr-6 pl-6 hover:bg-blue-500 hover:text-white font-semibold text-black rounded-xl"><a href="/Signin">Sign In</a> </button>
 <button className="hidden md:flex m-4 p-2 bg-blue-500 font-semibold text-white rounded-xl"><svg  className="w-40 h-40 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plane preview-icon"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg> Plan My Trip </button>  
 </div>

 

</nav>


        
    </div>
  )
}

export default Navbar