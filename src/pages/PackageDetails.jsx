
import { Link, useParams } from "react-router";
import {   ArrowLeft,   Clock,   MapPin,   Users,   CheckCircle2,  XCircle,  } from "lucide-react";

import packages from "../data/packages";

function PackageDetails() {
  // Read the dynamic ID from /packages/:id
  const { id } = useParams();

  // Find the selected package
  const item = packages.find(
    (pkg) => pkg.id === Number(id)
  );

  // Handle an invalid package ID
  if (!item) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Package Not Found
        </h1>

        <p className="mt-3 text-gray-600">
          The travel package you requested does not exist.
        </p>

        <Link
          to="/packages"
          className="mt-6 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Browse Packages
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-10 ">
        {/* Back navigation */}
        <Link
          to="/packages"
          className=" mt-30 mb-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
        >
          <ArrowLeft size={18} />
          Back to Packages
        </Link>

        {/* Hero image */}
        <section className="relative overflow-hidden rounded-2xl">
          <img
            src={item.image}
            alt={item.name}
            className="h-[300px] w-full object-cover sm:h-[400px] md:h-[500px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8 md:p-12">
            <span className="rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold">
              {item.category}
            </span>

            <h1 className="mt-4 text-3xl font-bold sm:text-4xl md:text-6xl">
              {item.name}
            </h1>

            <p className="mt-3 flex items-center gap-2 text-sm sm:text-base">
              <MapPin size={19} />
              {item.location}
            </p>
          </div>
        </section>

        {/* Main content and booking sidebar */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                About This Package
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                {item.description}
              </p>
            </section>

           

            {/* Inclusions */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                What's Included
              </h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {item.includes.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Exclusions */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                What's Not Included
              </h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {item.excludes.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle
                      size={20}
                      className="mt-0.5 shrink-0 text-red-500"
                    />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Booking card */}
          <aside className="h-fit rounded-2xl border border-gray-100 p-6 shadow-lg lg:sticky lg:top-24">
            <p className="text-sm text-gray-500">
              Package price
            </p>

            <p className="mt-2 text-3xl font-bold text-blue-700">
              Rs. {item.price.toLocaleString("en-IN")}
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Sample price per person. Confirm the final price before booking.
            </p>

            <hr className="my-6 border-gray-100" />

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-semibold">{item.duration}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users size={20} className="text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Group Size</p>
                  <p className="font-semibold">{item.groupSize}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Destination</p>
                  <p className="font-semibold">{item.location}</p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                alert(
                  `Booking for ${item.name} will be implemented next.`
                );
              }}
              className="mt-8 w-full rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white transition duration-300 hover:bg-blue-700"
            >
              Book This Package
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-gray-500">
              Booking and payment are not enabled yet.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default PackageDetails;
