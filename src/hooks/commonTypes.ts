import { ReactNode } from "react";

export type TChindrenProps = {
  children: ReactNode;
};

export type TCoursesContent = {
  id: number; // Unique identifier for the product
  name: string; // Name of the product/package
  designation: string; // Type or description of the program
  price: string; // Current price, formatted as a string (e.g., Bengali numerals)
  fakePrice: string; // Original or fake price for showing a discount
  details: string; // Additional information or link to details
  img_url: string; // URL for the product image
  category: string; // Category of the product (e.g., subject type)
  payload?: string;
};
