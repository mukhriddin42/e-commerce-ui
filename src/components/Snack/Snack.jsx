import { Home, X } from 'lucide-react';

export default function SnackFilter() {
  const categories = [
    'Cabbage',
    'Broccoli',
    'Artichoke',
    'Celery',
    'Spinach'
  ];

  return (
    <div className="w-full h-[237px] bg-[#E3F3EA]  pl-28 rounded-2xl flex items-center mb-10 ">
      <div className=" justify-between gap-48 flex items-center  ">
        <div className="mb-6 ">
          <h1 className="text-[48px] leading-[57.6px] font-bold text-[#253D4E] mb-2">Snack</h1>
          <div className="text-gray-600 text-sm flex items-center gap-2 cursor-pointer mt-5">
            <span className="text-green-600 flex items-center gap-1 hover:">
              <Home className="w-4 h-4" />   Home
            </span>
            <span>›</span>
            <span className="opacity-90 font-semibold">Shop</span>
            <span>›</span>
            <span className="font-semibold text-gray-600">Snack</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className='w-[135px] h-[46px] bg-white rounded-[30px] text-emerald-500 flex justify-center items-center gap-[8px] text-[17px] leading-[24px] font-semibold hover:text-[#253D4E] transition duration-400'>
              <X className="w-4 h-4 text-[#B6B6B6]" />
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}