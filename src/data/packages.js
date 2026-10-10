
const packages = [
  {
    id: 1,
    slug: "pokhara-adventure",
    name: "Pokhara Adventure",
    location: "Pokhara, Nepal",
    category: "Adventure",
    price: 8000,
    duration: "3 Days / 2 Nights",
    groupSize: "2–10 people",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa",
    description:
      "Discover the natural beauty of Pokhara, from peaceful lakes and mountain views to caves and local attractions. This package is ideal for travelers looking for a relaxing and adventurous getaway.",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Pokhara",
        description:
          "Arrive in Pokhara, check into your hotel, explore Lakeside, and enjoy an evening beside Phewa Lake.",
      },
      {
        day: "Day 2",
        title: "Sunrise and Sightseeing",
        description:
          "Enjoy an early morning mountain viewpoint visit, followed by local sightseeing and time to explore the city.",
      },
      {
        day: "Day 3",
        title: "Explore and Return",
        description:
          "Enjoy breakfast, explore any remaining attractions, and prepare for your return journey.",
      },
    ],
    includes: [
      "Hotel accommodation",
      "Local sightseeing",
      "Travel assistance",
      "Breakfast as specified by the hotel",
    ],
    excludes: [
      "Personal expenses",
      "Travel insurance",
      "Activities not listed in the itinerary",
    ],
  },
  {
    id: 2,
    slug: "chitwan-safari",
    name: "Chitwan Safari",
    location: "Chitwan, Nepal",
    category: "Wildlife",
    price: 6000,
    duration: "2 Days / 1 Night",
    groupSize: "2–8 people",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5",
    description:
      "Explore the natural landscapes and wildlife experiences of Chitwan. Enjoy a short getaway filled with nature, local culture, and guided activities.",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival and Nature Activities",
        description:
          "Arrive at your accommodation, settle in, and enjoy the activities available in your selected tour package.",
      },
      {
        day: "Day 2",
        title: "Wildlife Experience and Departure",
        description:
          "Enjoy scheduled nature activities with a local guide before beginning your return journey.",
      },
    ],
    includes: [
      "One night's accommodation",
      "Local guide for included activities",
      "Travel assistance",
    ],
    excludes: [
      "Transportation unless specified",
      "Personal expenses",
      "Additional activities",
    ],
  },
  {
    id: 3,
    slug: "everest-trek",
    name: "Everest Trek",
    location: "Everest Region, Nepal",
    category: "Trekking",
    price: 25000,
    duration: "7 Days",
    groupSize: "2–8 people",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    description:
      "Experience the incredible Himalayan landscape on a trekking adventure. Explore mountain trails, traditional settlements, and spectacular scenery with appropriate planning and local guidance.",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival and Preparation",
        description:
          "Meet your trip coordinator, review the itinerary, and prepare for the trek.",
      },
      {
        day: "Day 2",
        title: "Begin the Trek",
        description:
          "Start your trekking journey and explore the surrounding mountain landscape.",
      },
      {
        day: "Day 3–5",
        title: "Mountain Trail Exploration",
        description:
          "Continue along the planned route with appropriate rest, acclimatization, and overnight stops.",
      },
      {
        day: "Day 6",
        title: "Return Journey",
        description:
          "Begin the return leg according to the selected trekking route.",
      },
      {
        day: "Day 7",
        title: "Departure",
        description:
          "Complete the trip and make your departure arrangements.",
      },
    ],
    includes: [
      "Trekking guide as specified",
      "Accommodation as specified",
      "Trip coordination",
      "Pre-trip guidance",
    ],
    excludes: [
      "Personal trekking equipment",
      "Travel insurance",
      "Expenses not specified in the final itinerary",
    ],
  },
];

export default packages;
