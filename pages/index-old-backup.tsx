import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import OrderModal from '@/components/OrderModal';
import { products } from '@/data/products';
import { copy } from '@/utils/copy';
import type { Product } from '@/data/products';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOrder = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Head>
        <title>শোবকিচু - প্রিমিয়াম ইলেকট্রिक কুকার</title>
        <meta name="description" content="বাংলাদেশের সেরা ইলেকট্রিক কুকার ব্র্যান্ড" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-orange-50 via-white to-pink-50">
          <header className="container mx-auto px-4 py-8 md:py-12">
            {/* Brand Logo */}
            <div className="mb-8">
              <h3 className="text-gray-700 text-lg md:text-xl font-semibold">OramKo</h3>
            </div>

            {/* Hero Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px] md:min-h-[600px]">
              {/* Left: Text Content */}
              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  প্রিমিয়াম ইলেকট্রিক কুকিং পট
                </h1>
                
                <p className="text-gray-600 text-base md:text-lg lg:text-xl">
                  পরিবার, পার্টি ও পিকনিকের সঙ্গে সেরা<br />আধুনিক ইলেকট্রিক পট
                </p>

                {/* CTA Button */}
                <div>
                  <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-semibold py-3 px-8 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg">
                    সব কুকার
                  </button>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-2">🚫</div>
                    <h3 className="font-semibold text-gray-900 mb-1">৩ ধাপে, নো আগুন</h3>
                    <p className="text-gray-600 text-sm">বিনা ঝামেলা ডিভার ধারলো খাকাই নিড দিলে যায়।</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-2">🥘</div>
                    <h3 className="font-semibold text-gray-900 mb-1">প্রিমিয়াম স্টীলের</h3>
                    <p className="text-gray-600 text-sm">কেম্পেবলের পুরিন সুখর থাবেতিস কোটির ইউগবার।</p>
                  </div>
                </div>
              </div>

              {/* Right: Hero Image */}
              <div className="relative order-first lg:order-last">
                <Image
                  src="/hero-img.png"
                  alt="OramKo Electric Cooker"
                  width={700}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </header>
        </div>

        {/* Headline Section */}
        <div className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              অনেক ভ্যদের রান্না এখন সহজের!
            </h2>
          </div>
        </div>

        {/* Products Section */}
        <main className="container mx-auto px-4 py-12 md:py-16 bg-gray-50">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {copy.productsTitle}
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              {copy.productsDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="transform hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard
                  product={product}
                  onOrder={() => handleOrder(product)}
                />
              </div>
            ))}
          </div>
        </main>

        {/* Features Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              দেব আমাকে পরকৃতিক্বর করান সএঢেন!
            </h2>
            <p className="text-center text-gray-600 mb-8 text-sm md:text-base">৭ খভারবাকন্টেরার লকিকেন থাতে তব অন্তরাপির</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {copy.benefits.map((benefit, idx) => (
                <div key={idx} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-md transition-all duration-300">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800 mt-12">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {copy.footerBrand}
              </h3>
              <p className="text-gray-400">{copy.footerDescription}</p>
              <div className="flex justify-center gap-6 pt-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">{copy.footerLinks.about}</a>
                <span className="text-gray-600">•</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">{copy.footerLinks.terms}</a>
                <span className="text-gray-600">•</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">{copy.footerLinks.privacy}</a>
              </div>
              <p className="text-sm text-gray-500 pt-6">
                {copy.footerCopyright}
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Order Modal */}
      {selectedProduct && (
        <OrderModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </>
  );
}
