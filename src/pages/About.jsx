

function About() {
  return (
    <div>

 <div className="w-screen bg-gray-50 py-20 px-4">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
    
 
    <div className="w-full md:w-1/2">
      <img src="https://cdn.cosmos.so/b8fca00b-e7d3-41f5-b3d6-d9665b10b5c1?format=jpeg" alt="About Us" className="rounded-2xl shadow-lg w-full object-cover"
      />
    </div>

    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-4xl font-bold mb-4">About Us</h2>
      <p className="text-gray-700 mb-4 text-lg">
        At Karma Cosmetics, we believe that beauty starts with healthy, radiant skin. 
        Our products are crafted using natural ingredients and innovative formulas that 
        enhance your natural glow.
      </p>
      <p className="text-gray-700 mb-4 text-lg">
        From skincare to cosmetics, each product is designed to give you the confidence 
        to shine every day. We’re committed to cruelty-free practices and sustainability, 
        ensuring beauty that feels good inside and out.
      </p>
      <button className="bg-black text-white px-6 py-3 rounded-3xl hover:bg-gray-800">
        Learn More
      </button>
    </div>

  </div>
</div>

    </div>
  )
}

export default About