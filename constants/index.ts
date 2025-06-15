import { PropertyProps } from "../interfaces";
export const BACKGROUND_IMAGE = "assets/images/hero-bg.svg";
export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: "1",
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    description: "A luxurious villa with ocean views, private pool, and free parking in the heart of Seminyak, Bali.",
    image: "/assets/list/list-1.svg",
    discount: "",
    reviews: [
      {
        avatar: "/assets/detailed-images/avatar-1.svg",
        name: "John Doe",
        rating: 4.5,
        comment: "Great place!"
      },
      {
        avatar: "/assets/detailed/avatar-2.svg",
        name: "Jane Smith",
        rating: 4.8,
        comment: "Very nice place!"
      }
    ]
  },
  {
    id: "2",
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA"
    },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    description: "A cozy mountain chalet in Aspen with a fireplace and self check-in, perfect for families and groups.",
    image: "/assets/list/list-2.svg",
    discount: "30",
    reviews: [
      {
        avatar: "/assets/detailed/avatar-3.svg",
        name: "Alice Johnson",
        rating: 4.7,
        comment: "Amazing mountain views and cozy atmosphere!"
      },
      {
        avatar: "/assets/detailed/avatar-4.svg",
        name: "Bob Lee",
        rating: 4.6,
        comment: "Loved the fireplace and easy check-in."
      }
    ]
  },
  {
    id: "3",
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA"
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    description: "A peaceful desert retreat in Palm Springs, pet friendly and ideal for couples or small families.",
    image: "/assets/list/list-3.svg",
    discount: "",
    reviews: []
  },
  {
    id: "4",
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA"
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    description: "A modern penthouse in New York with stunning city views, free WiFi, and 24-hour check-in.",
    image: "/assets/list/list-4.svg",
    discount: "15",
    reviews: []
  },
  {
    id: "5",
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand"
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6"
    },
    description: "A charming riverside cabin in Queenstown with a private dock and complimentary kayaks.",
    image: "/assets/list/list-5.svg",
    discount: "20",
    reviews: []
  },
  {
    id: "6",
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10"
    },
    description: "A modern beachfront villa in Sidemen, Bali, featuring a private pool and chef service.",
    image: "/assets/list/list-6.svg",
    discount: "",
    reviews: []
  },
  {
    id: "7",
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada"
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    description: "A lakeside chalet in Banff with mountain views and direct access to hiking trails.",
    image: "/assets/list/list-7.svg",
    discount: "10",
    reviews: []
  },
  {
    id: "8",
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand"
    },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6"
    },
    description: "A tropical garden villa in Koh Samui with lush gardens, free parking, and self check-in.",
    image: "/assets/list/list-8.svg",
    discount: "25",
    reviews: []
  },
  {
    id: "9",
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany"
    },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    description: "A stylish urban loft in the heart of Berlin with free WiFi and 24-hour check-in.",
    image: "/assets/list/list-9.svg",
    discount: "",
    reviews: []
  },
  {
    id: "10",
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada"
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    description: "A secluded forest cabin in Whistler with a hot tub and self check-in for ultimate privacy.",
    image: "/assets/list/list-10.svg",
    discount: "40",
    reviews: []
  },
  {
    id: "11",
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy"
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    description: "A stunning cliffside villa in Amalfi with an infinity pool and breathtaking sea views.",
    image: "/assets/list/list-11.svg",
    discount: "50",
    reviews: []
  },
  {
    id: "12",
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia"
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    description: "A coastal escape villa in Noosa, Australia, beachfront and pet friendly with free parking.",
    image: "/assets/list/list-12.svg",
    discount: "",
    reviews: []
  },
  {
    id: "13",
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy"
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    description: "A historical villa in Florence, Tuscany, with free breakfast and self check-in.",
    image: "/assets/list/list-13.svg",
    discount: "35",
    reviews: []
  },
  {
    id: "14",
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan"
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    description: "A modern downtown apartment in Tokyo with easy access to public transport and free WiFi.",
    image: "/assets/list/list-14.svg",
    discount: "",
    reviews: []
  },
  {
    id: "15",
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania"
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    description: "A luxury safari lodge in the Serengeti with guided tours and complimentary breakfast.",
    image: "/assets/list/list-15.svg",
    discount: "20",
    reviews: []
  },
  {
    id: "16",
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK"
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4"
    },
    description: "A cozy countryside cottage in the Cotswolds with a fireplace and self check-in.",
    image: "/assets/list/list-16.svg",
    discount: "25",
    reviews: []
  }
  // {
  //   id: "17",
  //   name: "Riverfront Mansion",
  //   address: {
  //     state: "Paris",
  //     city: "Île-de-France",
  //     country: "France"
  //   },
  //   rating: 4.86,
  //   category: ["Riverfront", "Private Garden", "Self Checkin"],
  //   price: 5000,
  //   offers: {
  //     bed: "4",
  //     shower: "3",
  //     occupants: "6-8"
  //   },
  //   description: "A grand riverfront mansion in Paris with a private garden and self check-in.",
  //   image: "/assets/detailed-images/image-17.svg",
  //   discount: "30",
  //   reviews: []
  // },
  // {
  //   id: "18",
  //   name: "Ski Chalet",
  //   address: {
  //     state: "Zermatt",
  //     city: "Valais",
  //     country: "Switzerland"
  //   },
  //   rating: 4.75,
  //   category: ["Mountain View", "Ski Access", "Fireplace"],
  //   price: 3900,
  //   offers: {
  //     bed: "3",
  //     shower: "3",
  //     occupants: "4-5"
  //   },
  //   description: "A ski chalet in Zermatt with mountain views, ski access, and a cozy fireplace.",
  //   image: "/assets/detailed-images/image-18.svg",
  //   discount: "",
  //   reviews: []
  // },
  // {
  //   id: "19",
  //   name: "Island Paradise Villa",
  //   address: {
  //     state: "Mahe",
  //     city: "Victoria",
  //     country: "Seychelles"
  //   },
  //   rating: 4.98,
  //   category: ["Beachfront", "Private Pool", "Chef Service"],
  //   price: 6500,
  //   offers: {
  //     bed: "5",
  //     shower: "5",
  //     occupants: "8-10"
  //   },
  //   description: "An island paradise villa in Seychelles with a private pool and chef service.",
  //   image: "/assets/detailed-images/image-19.svg",
  //   discount: "60",
  //   reviews: []
  // },
  // {
  //   id: "20",
  //   name: "Clifftop Retreat",
  //   address: {
  //     state: "Cape Town",
  //     city: "Western Cape",
  //     country: "South Africa"
  //   },
  //   rating: 4.78,
  //   category: ["Ocean View", "Private Pool", "Self Checkin"],
  //   price: 4100,
  //   offers: {
  //     bed: "3",
  //     shower: "3",
  //     occupants: "4-5"
  //   },
  //   description: "A clifftop retreat in Cape Town with ocean views, private pool, and self check-in.",
  //   image: "/assets/detailed-images/image-20.svg",
  //   discount: "",
  //   reviews: []
  // }
];