

function Footer() {
  return (
    <div>



<footer class= "bg-blue-500 rounded-base shadow-xs">
  <div className="flex justify-center items-center p-10">
  <div className="flex  gap-4 justify-between items-center"> 
    <span className="text-3xl text-white flex">Wanderly</span>
    <p className="text-white text-sm mt-4">Crafting unforgettable journeys, curated experiences, <br /> and seamless travel adventures around the globe.</p>

    <div className=" gap-4 mt-4">
        <p className="text-xl text-white">Join our travel community</p>
        <div>
            <input type="text"  placeholder="Enter your email address" className="bg-white m-2 p-2 rounded-sm"/> <button className="bg-black text-white text-semibold m-2 p-2 rounded-sm">Subscribe</button>
        </div>
    </div>
  </div>

  {/* <div className="flex flex-col gap-4 ">
    <a href="" className="text-white text-semibold ">Instagram</a>
    <a href="" className="text-white text-semibold ">Facebook</a>
    <a href="" className="text-white text-semibold ">Twitter</a>
    <a href="" className="text-white text-semibold ">LinkedIn</a>
  </div> */}
  {/* <div><svg  className="w-40 h-40 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plane preview-icon"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg> </div> */}



  </div>


</footer>



    </div>
  )
}

export default Footer