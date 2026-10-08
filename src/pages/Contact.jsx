
function Contact() {
  return (
    <div>

 <div className="flex-wrap justify-center text-center w-full">
        <div className="p-30 mx-20 text-center ">
          <span className="text-xs">WE'RE HERE TO HELP YOU</span>
          <br />
          <span>
            <span className="text-3xl font-bold">Discuss</span>
            <span className="text-3xl"> Your <br /> Solution Needs</span>
          </span>
          <br />
          <span className="text-sm">
            Are you looking for top quality solutions tailored <br /> to your needs? Reach out to us
          </span>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="shadow-lg my-0 mx-20 rounded-2xl p-5 bg-white/70">
            <span className="font-bold text-2xl">FOR CONTACT</span>
            <hr className="my-2" />

            <div>
              <label htmlFor="name">Name</label> <br />
              <input type="text" placeholder="Your Name" className="my-2 bg-black text-white h-10 placeholder:text-center placeholder:text-white rounded-xl w-[22rem]" />
            </div>

            <div>
              <label htmlFor="email">Email</label> <br />
              <input type="text" placeholder="Your Email" className="my-2 bg-black text-white h-10 placeholder:text-center placeholder:text-white rounded-xl w-[22rem]" />
            </div>

            <div>
              <select defaultValue="" className="bg-black text-white h-10 my-5 rounded-2xl text-center w-[22rem]">
                <option value="" disabled>Select One Option</option>
                <option value="Product Inquiry">Product Inquiry</option>
                <option value="Order & Delivery">Order & Delivery</option>
                <option value="Collaboration / Partnership">Collaboration / Partnership</option>
                <option value="Feedback">Feedback</option>
                <option value="Returns & Exchanges">Returns & Exchanges</option>
              </select>
            </div>

            <button className="border-2 w-60 h-10 rounded-full hover:bg-black hover:text-white hover:duration-1000">
              Submit
            </button>
          </div>
        </div>
     </div>

    </div>
  )
}

export default Contact