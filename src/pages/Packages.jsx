
import { Link } from "react-router";
import { ArrowRight, MapPin } from "lucide-react";

import packages from "../data/packages";

function Packages() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-16 md:px-10 ">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-12 mt-40 text-center">
          <p className="mb-3 text-sm font-semibold uppercase text-blue-600">
            Discover Nepal
          </p>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Explore Our Travel Packages
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
            Discover beautiful destinations, exciting adventures,
            and unforgettable experiences across Nepal.
          </p>
        </div>

        {/* Package cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Package image */}
              <Link
                to={`/packages/${item.id}`}
                aria-label={`View ${item.name}`}
                className="relative block overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm">
                  {item.category}
                </span>
              </Link>

              {/* Package information */}
              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-900">
                  {item.name}
                </h2>

                <p className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                  <MapPin size={17} className="text-blue-600" />
                  {item.location}
                </p>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>

                {/* View details button */}
                <div className="mt-5">
                  <Link
                    to={`/packages/${item.id}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-700"
                  >
                    View Details
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}

export default Packages;
