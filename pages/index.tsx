import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
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
        <title>Oramko - প্রিমিয়াম ইলেকট্রিক কুকিং পট</title>
        <meta name="description" content="রান্না করুন আনন্দে ও স্টাইলে - Oramko-এর এলিগ্যান্ট মাল্টি-ফাংশনাল কুকিং পট" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <Image src="/logo/logo.svg" alt="Oramko" width={50} height={50} />
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
                  Oramko-এর এলিগ্যান্ট মাল্টি-ফাংশনাল কুকিং পট আবিষ্কার করুন। 
                  প্রতিটি খাবারের জন্য পারফেক্ট, আধুনিক রান্নাঘরের জন্য ডিজাইন করা।
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a href="#products" className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-xl font-medium hover:from-orange-700 hover:to-amber-700 transition-all shadow-lg">
                  কালেকশন দেখুন
                </a>
                <a href="https://wa.me/8801604074609" target="_blank" rel="noopener noreferrer" className="border-2 border-white/50 text-white px-8 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-all flex items-center gap-2">
                  <FaWhatsapp className="text-xl" />
                  আরও জানুন
                </a>
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

        {/* Product Details Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="space-y-12">
              {/* Section 1 */}
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900" style={{ fontFamily: "'Alinur Showpnopuri', serif" }}>
                  🔥 প্রতিদিনের রান্নার ঝামেলা থেকে মুক্তি চান?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  হঠাৎ গ্যাস শেষ হয়ে যাওয়া, আগুন বেশি বা কম হয়ে খাবার পুড়ে যাওয়া, রান্নায় অতিরিক্ত সময় ও কষ্ট—এই সমস্যাগুলো আমাদের সবারই পরিচিত।
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  এখন সময় এসেছে স্মার্ট সমাধানে যাওয়ার।<br/>
                  পরিচিত রান্নার স্বাদ বজায় রেখে, ঝামেলা ছাড়াই রান্না করার জন্য নিয়ে আসুন OramKo ইলেকট্রিক কুকার।
                </p>
              </div>

              {/* Section 2 */}
              <div className="bg-white p-8 rounded-xl shadow-md space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900" style={{ fontFamily: "'Alinur Showpnopuri', serif" }}>
                  🍲 একটি কুকার, অসংখ্য রান্নার সমাধান
                </h3>
                <p className="text-gray-700">এই কুকারটি দিয়ে আপনি সহজেই রান্না করতে পারবেন—</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="text-xl">✓</span>
                    <span>নরম ও ঝরঝরে ভাত</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-xl">✓</span>
                    <span>মজাদার ডাল ও ঝোল</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-xl">✓</span>
                    <span>সবজি ও মাংসের তরকারি</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-xl">✓</span>
                    <span>খিচুড়ি, স্যুপ ও আরও অনেক কিছু</span>
                  </li>
                </ul>
                <p className="text-gray-700 font-semibold">একটি মাত্র কুকারেই আপনার প্রতিদিনের রান্নার সব প্রয়োজন পূরণ হবে।</p>
              </div>

              {/* Image Section 1 */}
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/lifestyle_image/lifestyle-image (2).png"
                  alt="Oramko রান্নাঘরে ব্যবহার"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Section 3 */}
              <div className="bg-orange-50 p-8 rounded-xl space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900" style={{ fontFamily: "'Alinur Showpnopuri', serif" }}>
                  ⚡ কেন ইলেকট্রিক কুকারই সেরা সমাধান?
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-3">
                    <span className="text-xl text-orange-600">✔</span>
                    <span className="text-gray-700">গ্যাসের উপর নির্ভরতা নেই</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl text-orange-600">✔</span>
                    <span className="text-gray-700">আগুনের ভয় ছাড়াই নিরাপদ রান্না</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl text-orange-600">✔</span>
                    <span className="text-gray-700">সময় বাঁচায়, কষ্ট কমায়</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl text-orange-600">✔</span>
                    <span className="text-gray-700">রান্না সহজ ও কন্ট্রোলড</span>
                  </div>
                </div>
                <p className="text-gray-700 italic pt-4 border-t border-orange-200">
                  আপনি কাজ করুন, পড়াশোনা করুন বা পরিবারের সময় উপভোগ করুন—রান্নার দায়িত্ব সামলাবে OramKo।
                </p>
              </div>

              {/* Image Section 2 */}
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/lifestyle_image/lifestyle-image (3).png"
                  alt="Oramko কুকার বৈশিষ্ট্য"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Section 4 */}
              <div className="bg-white p-8 rounded-xl shadow-md space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900" style={{ fontFamily: "'Alinur Showpnopuri', serif" }}>
                  🌿 মান ও নিরাপত্তায় কোনো আপস নয়
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">🔹</span>
                    <span>স্বাস্থ্যসম্মত ও টেকসই স্টেইনলেস স্টিল পট</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">🔹</span>
                    <span>স্বচ্ছ গ্লাস ঢাকনা—রান্না দেখা যাবে সহজেই</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">🔹</span>
                    <span>তাপমাত্রা নিয়ন্ত্রণের সুবিধা</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">🔹</span>
                    <span>কম বিদ্যুৎ খরচে কার্যকর পারফরম্যান্স</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">🔹</span>
                    <span>মজবুত বডি ও আধুনিক ডিজাইন</span>
                  </li>
                </ul>
                <p className="text-gray-700 font-semibold pt-4 border-t border-gray-200">প্রতিটি দিক থেকেই এটি একটি নির্ভরযোগ্য রান্নার সঙ্গী।</p>
              </div>

              {/* Image Section 3 */}
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/lifestyle_image/lifestyle-image (4).png"
                  alt="আমাদের পণ্যের গুণমান"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Section 5 */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900" style={{ fontFamily: "'Alinur Showpnopuri', serif" }}>
                  👨‍👩‍👧‍👦 কারা ব্যবহার করবেন?
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "পরিবারিক রান্নার জন্য",
                    "ব্যাচেলর ও ছাত্রদের জন্য",
                    "হোস্টেল বা মেসে",
                    "অফিস বা ছোট আয়োজন"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">✔</span>
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 italic">যেখানেই রান্না প্রয়োজন, সেখানেই এটি কার্যকর।</p>
              </div>

              {/* Image Section 4 */}
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/lifestyle_image/lifestyle-image (5).png"
                  alt="বিভিন্ন ব্যবহারকারী"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Section 6 - Bonus */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900" style={{ fontFamily: "'Alinur Showpnopuri', serif" }}>
                  🎁 আজকের স্পেশাল বোনাস
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">🎉</span>
                    <span>ডেলিভারি চার্জ একদম ফ্রি</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">🎉</span>
                    <span>ফ্রি কাঠের চামচ / খুন্তি</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">🎉</span>
                    <span>সীমিত সময়ের জন্য বিশেষ মূল্য</span>
                  </li>
                </ul>
              </div>
              {/* Image Section 5 */}
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/lifestyle_image/lifestyle-image (6).png"
                  alt="বিশেষ বোনাস অফার"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Section 7 - Why Us */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900" style={{ fontFamily: "'Alinur Showpnopuri', serif" }}>
                  💯 কেন আমাদের থেকে কিনবেন?
                </h3>
                <div className="bg-blue-50 p-6 rounded-lg space-y-3">
                  {[
                    "বিশ্বস্ত ব্র্যান্ড – Everything Best Quality",
                    "মানসম্মত প্যাকেজিং",
                    "ব্যবহার সহজ ও নিরাপদ",
                    "দামের তুলনায় সর্বোচ্চ ভ্যালু"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-blue-600 font-bold">✔</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 italic">আমরা চাই আপনি নিশ্চিন্তে ব্যবহার করুন, ঝামেলাহীন রান্নার আনন্দ নিন।</p>
              </div>

              {/* Image Section 6 */}
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/lifestyle_image/lifestyle-image (7).png"
                  alt="চূড়ান্ত সিদ্ধান্ত"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Section 8 - CTA */}
              <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-8 rounded-xl text-white space-y-6 text-center">
                <h3 className="text-2xl font-semibold">🚀 এখনই সিদ্ধান্ত নিন</h3>
                <p className="text-lg">আজই অর্ডার করুন এবং</p>
                <div className="space-y-3">
                  <p className="flex items-center justify-center gap-2">
                    <span>👉</span>
                    <span>গ্যাসের চিন্তা থেকে মুক্ত হোন</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span>👉</span>
                    <span>রান্নার সময় ও কষ্ট কমান</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span>👉</span>
                    <span>পরিবারকে দিন সুস্বাদু খাবার</span>
                  </p>
                </div>
                <div className="pt-6 border-t border-white/30">
                  <h4 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Alinur Showpnopuri', serif" }}>OramKo ইলেকট্রিক কুকার</h4>
                  <p className="text-lg">✨ রান্না হোক সহজ, নিরাপদ ও আধুনিক।</p>
                </div>
              </div>
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
                  alt="Oramko কুকিং পট"
                  width={600}
                  height={500}
                  className="relative rounded-3xl shadow-2xl w-full object-cover"
                />
              </div>
              
              <div className="space-y-10 order-1 lg:order-2">
                <div>
                  <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
                    কেন Oramko
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
                হাজার হাজার সন্তুষ্ট গ্রাহকদের সাথে যোগ দিন যারা Oramko দিয়ে সুস্বাদু খাবার রান্না করছেন। 
                অর্ডার করলেই সারাদেশে ফ্রি হোম ডেলিভারি!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#products" className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:from-orange-700 hover:to-amber-700 transition-all shadow-lg">
                  কালেকশন দেখুন
                </a>
                <a href="https://wa.me/8801604074609" target="_blank" rel="noopener noreferrer" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-gray-900 transition-all flex items-center gap-2">
                  <FaWhatsapp className="text-xl" />
                  যোগাযোগ করুন
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-white border-t border-gray-200">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <Image src="/logo/logo.svg" alt="Oramko" width={50} height={50} />
                <p className="text-gray-600 text-sm mt-1">
                  রান্না এখন আনন্দময়
                </p>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900 transition-colors">গোপনীয়তা</a>
                <a href="#" className="hover:text-gray-900 transition-colors">শর্তাবলী</a>
                <a href="#" className="hover:text-gray-900 transition-colors">শিপিং</a>
                <a href="#" className="hover:text-gray-900 transition-colors">রিটার্ন</a>
              </div>
              
              <p className="text-gray-600 text-sm">
                © ২০২৬ সবকিছু সর্বস্বত্ব সংরক্ষিত।
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
