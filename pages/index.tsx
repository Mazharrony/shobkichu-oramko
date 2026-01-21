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
        <title>সবকিছু - প্রিমিয়াম ইলেকট্রিক কুকিং পট</title>
        <meta name="description" content="রান্না করুন আনন্দে ও স্টাইলে - সবকিছু-এর এলিগ্যান্ট মাল্টি-ফাংশনাল কুকিং পট" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <img src="/SHOBKICHU-LOGO.svg" alt="সবকিছু" className="h-10" />
            </a>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                পণ্যসমূহ
              </a>
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                বৈশিষ্ট্য
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                আমাদের সম্পর্কে
              </a>
            </nav>
            
            <button className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-2 rounded-lg hover:from-orange-700 hover:to-amber-700 transition-all">
              এখনই কিনুন
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative min-h-screen pt-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/hero-img.png)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 py-16 lg:py-32 relative z-10">
            <div className="max-w-2xl space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-4 py-2 bg-orange-600/90 text-white rounded-full text-sm font-medium">
                  প্রিমিয়াম কুকওয়্যার
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight" style={{ fontFamily: "'Alinur Showpnopuri', serif" }}>
                  রান্না করুন
                  <span className="block text-orange-300">আনন্দে ও স্টাইলে</span>
                </h1>
                <p className="text-lg md:text-xl text-white/80 max-w-lg leading-relaxed">
                  সবকিছু-এর এলিগ্যান্ট মাল্টি-ফাংশনাল কুকিং পট আবিষ্কার করুন। 
                  প্রতিটি খাবারের জন্য পারফেক্ট, আধুনিক রান্নাঘরের জন্য ডিজাইন করা।
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-xl font-medium hover:from-orange-700 hover:to-amber-700 transition-all shadow-lg">
                  কালেকশন দেখুন
                </button>
                <button className="border-2 border-white/50 text-white px-8 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-all">
                  আরও জানুন
                </button>
              </div>
              
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <p className="text-3xl font-semibold text-white" style={{ fontFamily: "'Alinur Showpnopuri', serif" }}>৪.৯</p>
                  <p className="text-sm text-white/70">স্টার রেটিং</p>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <p className="text-3xl font-semibold text-white" style={{ fontFamily: "'Alinur Showpnopuri', serif" }}>১০K+</p>
                  <p className="text-sm text-white/70">সন্তুষ্ট গ্রাহক</p>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <p className="text-3xl font-semibold text-white" style={{ fontFamily: "'Alinur Showpnopuri', serif" }}>ফ্রি</p>
                  <p className="text-sm text-white/70">সারা বাংলাদেশে ডেলিভারি</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                আমাদের কালেকশন
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4" style={{ fontFamily: "'Alinur Showpnopuri', serif" }}>
                আপনার পারফেক্ট পট বেছে নিন
              </h2>
              <p className="text-gray-600 text-lg">
                সুন্দরভাবে তৈরি কুকওয়্যার যা কার্যকারিতা ও এলিগ্যান্ট ডিজাইনের সমন্বয়। 
                ভাত, স্যুপ, তরকারি এবং স্টিমিংয়ের জন্য পারফেক্ট।
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute inset-0 bg-orange-100 rounded-3xl blur-3xl transform -translate-x-4 translate-y-4"></div>
                <Image 
                  src="/lifestyle_image/lifestyle-image (1).png"
                  alt="Oramko কুকিং পট - রান্নাঘরে"
                  width={600}
                  height={500}
                  className="relative rounded-3xl shadow-2xl w-full object-cover"
                />
              </div>
              
              <div className="space-y-10 order-1 lg:order-2">
                <div>
                  <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
                    কেন সবকিছু
                  </span>
                  <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4" style={{ fontFamily: "'Alinur Showpnopuri', serif" }}>
                    রান্না এখন
                    <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"> অনেক সহজ</span>
                  </h2>
                  <p className="text-gray-600 text-lg">
                    আমাদের ইলেকট্রিক কুকিং পট বহুমুখী ব্যবহার এবং সুবিধার জন্য ডিজাইন করা, 
                    প্রতিটি খাবারে রান্নার আনন্দ নিয়ে আসে।
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {copy.benefits.map((benefit, idx) => (
                    <div 
                      key={idx}
                      className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="text-4xl mb-3">{benefit.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: "'Alinur Showpnopuri', serif" }}>
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lifestyle Gallery Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
                লাইফস্টাইল
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4" style={{ fontFamily: "'Alinur Showpnopuri', serif" }}>
                আপনার রান্নাঘরের নতুন সঙ্গী
              </h2>
              <p className="text-gray-600 text-lg">
                দেখুন কিভাবে সবকিছু প্রতিদিনের রান্নাকে বিশেষ করে তোলে
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="col-span-2 row-span-2">
                <Image 
                  src="/lifestyle_image/lifestyle-image (2).png"
                  alt="Oramko কুকিং পট লাইফস্টাইল"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-lg w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="col-span-1">
                <Image 
                  src="/lifestyle_image/lifestyle-image (3).png"
                  alt="Oramko রান্না"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-lg w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="col-span-1">
                <Image 
                  src="/lifestyle_image/lifestyle-image (4).png"
                  alt="Oramko খাবার"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-lg w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="col-span-1">
                <Image 
                  src="/lifestyle_image/lifestyle-image (5).png"
                  alt="Oramko পট"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-lg w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="col-span-1">
                <Image 
                  src="/lifestyle_image/lifestyle-image (6).png"
                  alt="Oramko রান্নাঘর"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-lg w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="col-span-2">
                <Image 
                  src="/lifestyle_image/lifestyle-image (7).png"
                  alt="Oramko পরিবার"
                  width={600}
                  height={300}
                  className="rounded-2xl shadow-lg w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight" style={{ fontFamily: "'Alinur Showpnopuri', serif" }}>
                আপনার রান্নাঘর বদলে দিতে প্রস্তুত?
              </h2>
              <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto">
                হাজার হাজার সন্তুষ্ট গ্রাহকদের পছন্দ Oramko। সুস্বাদু খাবার রান্না করুন আর অর্ডার করলেই উপভোগ করুন ফ্রি ডেলিভারি!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:from-orange-700 hover:to-amber-700 transition-all shadow-lg">
                  কালেকশন দেখুন
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-gray-900 transition-all">
                  যোগাযোগ করুন
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-white border-t border-gray-200">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <img src="/SHOBKICHU-LOGO.svg" alt="সবকিছু" className="h-8 mb-2" />
                <p className="text-gray-600 text-sm mt-1">
                  রান্না এখন আনন্দময়
                </p>
                <a href="tel:01945383916" className="text-orange-600 font-semibold text-sm mt-2 inline-block hover:text-orange-700 transition-colors">
                  📞 ০১৯৪৫৩৮৩৯১৬
                </a>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900 transition-colors">গোপনীয়তা</a>
                <a href="#" className="hover:text-gray-900 transition-colors">শর্তাবলী</a>
                <a href="#" className="hover:text-gray-900 transition-colors">শিপিং</a>
                <a href="#" className="hover:text-gray-900 transition-colors">রিটার্ন</a>
              </div>
              
              <p className="text-gray-600 text-sm">
                ©সবকিছু ২০২৬ সর্বস্বত্ব সংরক্ষিত।
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
