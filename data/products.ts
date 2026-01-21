export interface Product {
  id: number;
  name: string;
  capacityLiters: number;
  priceBdt: number;
  color: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "ওরামকো ইলেকট্রিক কুকার (সাদা)",
    capacityLiters: 7.9,
    priceBdt: 2200,
    color: "white",
    image: "/product_image/oramco cooking pot 7.9littre price bdt2200.png",
    description: "উচ্চমানের সাদা রঙের ইলেকট্রিক কুকার সর্বোচ্চ ধারণক্ষমতা সহ",
  },
  {
    id: 2,
    name: "ওরামকো ইলেকট্রিক কুকার (নীল)",
    capacityLiters: 7.2,
    priceBdt: 2000,
    color: "blue",
    image: "/product_image/Pastel blue Oramko cooking pot oramco cooking pot 7.2  litter price bdt 2000.png",
    description: "আকর্ষণীয় নীল রঙের ডিজাইন এবং শক্তিশালী পারফরম্যান্স",
  },
  {
    id: 3,
    name: "ওরামকো ইলেকট্রিক কুকার (সাদা মিনি)",
    capacityLiters: 6.5,
    priceBdt: 1800,
    color: "white",
    image: "/product_image/oramco cooking pot 6.5 litter price bdt 1800.png",
    description: "কমপ্যাক্ট সাইজ এবং চমৎকার কর্মক্ষমতা সহ পরিবারের জন্য আদর্শ",
  },
];
