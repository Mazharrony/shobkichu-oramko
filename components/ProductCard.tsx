import Image from "next/image";
import { copy, formatPrice, formatCapacity } from "@/utils/copy";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onOrder: () => void;
}

export default function ProductCard({ product, onOrder }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
      {/* Product Image */}
      <div className="relative h-80 bg-gradient-to-br from-orange-50 to-amber-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Free Gift Badge - Top Left */}
        <div className="absolute top-4 left-4 z-20">
          <div className="flex flex-col items-center gap-1">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 200'%3E%3Cellipse cx='50' cy='40' rx='35' ry='45' fill='%23d4a574'/%3E%3Crect x='40' y='75' width='20' height='120' rx='8' fill='%23d4a574'/%3E%3C/svg%3E"
              alt="ফ্রি উপহার"
              className="w-12 h-12 drop-shadow-lg hover:scale-110 transition-transform duration-300"
            />
            <p className="text-xs font-bold text-orange-600 text-center bg-white/95 px-3 py-1 rounded-full shadow-md">ফ্রি</p>
          </div>
        </div>
        
        {/* Badge - Top Right */}
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
            {copy.bestSeller}
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2" style={{ fontFamily: "'Alinur Showpnopuri', serif" }}>
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm">{copy.capacity}: {formatCapacity(product.capacityLiters)}</p>
        </div>
        
        {/* Price */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl py-4 px-6 text-center border border-orange-100">
          <p className="text-xs text-gray-600 mb-1">{copy.price}</p>
          <p className="text-3xl font-bold text-gray-900">{formatPrice(product.priceBdt)}</p>
        </div>

        {/* Features */}
        <div className="space-y-2">
          {copy.productFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
              <span className="text-xl">{feature.icon}</span>
              <span>{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Order Button */}
        <button
          onClick={onOrder}
          className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold py-4 rounded-xl hover:from-orange-700 hover:to-amber-700 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <span className="flex items-center justify-center gap-2">
            <span>{copy.orderButton}</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
        </button>
      </div>
    </div>
  );
}
