export type StayCategory =
  "All" | "Resort" | "Villa" | "Hotel" | "Cottage" | "Homestay" | "Guesthouse" | "Eco Lodge";

export interface StayItem {
  id?: string;
  image: string;
  images?: string[];
  name: string;
  place: string;
  price: string;
  rating?: string;
  category?: StayCategory;
}
