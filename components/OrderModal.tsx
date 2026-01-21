import { useState } from 'react';
import { copy } from '@/utils/copy';
import type { Product } from '@/data/products';

interface OrderModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function OrderModal({ product, onClose }: OrderModalProps) {
  const [formData, setFormData] = useState({
    product_name: product?.name || '',
    name: '',
    mobile: '',
    address: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'a2413fe2-017e-42e0-b8ff-264f1c2b51a2',
          'পণ্যের নাম': formData.product_name,
          'আপনার নাম': formData.name,
          'মোবাইল নম্বর': formData.mobile,
          'ঠিকানা': formData.address,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
          setFormData({
            product_name: product?.name || '',
            name: '',
            mobile: '',
            address: '',
          });
        }, 2000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
        <div className="bg-white rounded-3xl p-12 max-w-md w-full text-center shadow-2xl border border-gray-100">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-green-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative text-7xl bg-gradient-to-br from-green-500 to-emerald-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto text-white font-bold shadow-lg">
              ✓
            </div>
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4" style={{ fontFamily: "'Alinur Showpnopuri', serif" }}>
            অর্ডার সফল!
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            আপনার অর্ডার গ্রহণ করা হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
          </p>
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-4 border border-orange-100 mb-4">
            <p className="text-sm text-gray-700">ধন্যবাদ সবকিছু বেছে নেওয়ার জন্য! 🎉</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
            <p className="text-sm text-gray-700 mb-2">আরও তথ্যের জন্য যোগাযোগ করুন:</p>
            <a href="tel:01945383916" className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors">📞 ০১৯৪৫৩৮৩৯১৬</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "'Alinur Showpnopuri', serif" }}>অর্ডার ফর্ম</h2>
            <p className="text-gray-600 text-sm mt-1">আপনার তথ্য দিয়ে ফর্মটি পূরণ করুন</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-900 text-3xl transition-colors bg-gray-100 hover:bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Name (Read-only) */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-orange-600">📦</span> পণ্যের নাম
            </label>
            <input
              type="text"
              value={formData.product_name}
              disabled
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 font-semibold focus:outline-none"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-orange-600">👤</span> আপনার নাম <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="আপনার সম্পূর্ণ নাম লিখুন"
              required
              className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-orange-600">📱</span> মোবাইল নম্বর <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="01xxxxxxxxx"
              required
              pattern="[0-9]{11}"
              className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-orange-600">📍</span> ঠিকানা <span className="text-red-500">*</span>
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন"
              required
              rows={3}
              className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold py-4 rounded-2xl transition-all duration-300 hover:from-orange-700 hover:to-amber-700 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  <span>পাঠাচ্ছি...</span>
                </>
              ) : (
                <>
                  <span>অর্ডার নিশ্চিত করুন</span>
                  <span>✓</span>
                </>
              )}
            </span>
          </button>

          {/* Info */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-4 border border-orange-100">
            <p className="text-xs text-gray-700 text-center flex items-center justify-center gap-2 flex-wrap">
              <span className="flex items-center gap-1">
                <span>🚚</span> বিনামূল্যে ডেলিভারি
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span>🎁</span> কাঠের চামচ উপহার
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
