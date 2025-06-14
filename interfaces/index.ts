export interface PropertyProps {
    id:       string;
    name:     string;
    address:  Address;
    rating:   number;
    category: string[];
    price:    number;
    offers:   Offers;
    description: string;
    image:    string;
    discount: string;
    reviews:  Review[];
}

export interface Address {
    state:   string;
    city:    string;
    country: string;
}

export interface Offers {
    bed:       string;
    shower:    string;
    occupants: string;
}

export interface Review {
  avatar: string;
  name: string;
  rating: number;
  comment: string;
}