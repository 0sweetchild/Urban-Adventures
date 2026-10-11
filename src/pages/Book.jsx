import { useForm } from "react-hook-form"


export default function Book() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)


  return (
    <div>
    {/* <form onSubmit={handleSubmit(onSubmit)} >
      <input {...register("firstName")}  className="mt-40"/>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />




    </form> */}

    <div className="flex">
        <div className=" text-white p-10 h-screen w-1/3 bg-blue-500">
<h1 className="text-7xl font-semibold mt-40">Plan Your Trip</h1>
        </div>

        <div>
        <div className="mt-20 p-10   "><h1 className="text-2xl font-semibold text-blue-500">Lets get Started</h1>
        
        <div className="m-4 gap-10  ">
            <label htmlFor="firstName"> Name</label> <br />
            <input {...register("firstName")} placeholder="Enter your Name" className="border border-gray-600 m-4 p-2 pl-4" />
        </div>
        <div className="m-4 gap-10  ">
            <label htmlFor="email">Email</label><br />
            <input {...register("email")} placeholder="Enter your Email" className="border border-gray-600 m-4 p-2 pl-4" />
        </div>
        <div className="m-4 gap-10  ">
            <label htmlFor="destination">Destination</label><br />
            <input {...register("destination")} placeholder="Enter your Destination" className="border border-gray-600 m-4 p-2 pl-4" />
        </div>
        <div className="m-4 gap-10  ">
            <label htmlFor="Password">Password</label><br />
            <input {...register("Password")} placeholder="Enter your Password" className="border border-gray-600 m-4 p-2 pl-4" />

            <button type="submit" className="bg-blue-500 text-white p-2 rounded"><a href="/">Submit</a></button>
        </div>

        </div>
        </div>

    </div>
    </div>
  )
}