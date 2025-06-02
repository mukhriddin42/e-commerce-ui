import React, { useState } from 'react';
import { Heart, Share2, Star } from 'lucide-react';
import { FaCartShopping } from 'react-icons/fa6';

export default function ProductView() {
    const product = {
        name: 'Seeds of Change Organic Quinoa, Brown',
        category: 'Vegetables & Tubers',
        price: 52,
        offerPrice: 38,
        rating: 4,
        reviews: 32,
        sizeOptions: ['50g', '60g', '80g', '100g', '150g'],
        selectedSize: '60g',
        images: [
            "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",
            "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png",
            "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png",
            "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage4.png"
        ],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.",
        details: {
            type: 'Organic',
            sku: 'FWM15VKT',
            mfg: 'Jun 4, 2022',
            tags: ['Snack', 'Organic', 'Brown'],
            stock: '8 Items In Stock',
            life: '70 days',
        },
    };

    const [thumbnail, setThumbnail] = useState(product.images[0]);
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState(product.selectedSize);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-500 mb-4">
                <span className="text-[#3BB77E] font-semibold">Home</span> &gt;{' '}
                <span className="text-[#3BB77E] font-semibold">{product.category}</span> &gt;{' '}
                <span className="text-[#7E7E7E] font-semibold">{product.name}</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
                {/* Images */}
                <div className="flex flex-col gap-5">
                    <div className="rounded-[15px] border-2 border-[#ECECEC] w-[500px] h-[500px] flex items-center justify-center">
                        <img src={thumbnail} alt="main" className="object-cover max-h-[480px] rounded" />
                    </div>
                    <div className="flex gap-4 pt-4">
                        {product.images.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                onClick={() => setThumbnail(img)}
                                className={`w-[100px] h-[100px] rounded-[15px] shadow border object-cover p-2 border-[#ECECEC] cursor-pointer ${thumbnail === img ? 'border-[#3BB77E]' : ''}`}
                                alt={`thumb-${i}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="flex-1 space-y-4">
                    <div className="w-[80px] h-[30px] text-center pt-1 font-bold text-sm text-[#F74B81] bg-[#FDE0E9] rounded">Sale Off</div>
                    <h1 className="text-[40px] font-bold text-[#253D4E]">{product.name}</h1>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-400" />
                        <span className="ml-2 text-[#B6B6B6]">({product.reviews} reviews)</span>
                    </div>

                    <div className="text-[32px] font-bold text-[#3BB77E]">
                        ${product.offerPrice}{' '}
                        <span className="text-[#FDC040] text-[16px] font-semibold">26% Off</span>
                    </div>
                    <div className="line-through text-[#B6B6B6] text-[20px]">${product.price}</div>
                    <p className="text-[#7E7E7E] text-[17px]">{product.description}</p>

                    {/* Size */}
                    <div className="flex gap-4 items-center">
                        <p className="font-semibold text-[#7E7E7E]">Size / Weight:</p>
                        <div className="flex gap-2">
                            {product.sizeOptions.map((s) => (
                                <button
                                    key={s}
                                    className={`transition-all duration-150 w-[41px] h-[32px] rounded text-sm ${
                                        size === s
                                            ? 'bg-[#3BB77E] text-white'
                                            : 'bg-white text-[#7E7E7E] hover:bg-[#3BB77E] hover:text-white'
                                    }`}
                                    onClick={() => setSize(s)}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity & Buttons */}
                    <div className="flex gap-3 items-center mt-4 flex-wrap">
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            min={1}
                            max={5}
                            className="border-2 border-[#3BB77E] rounded px-3 py-2 w-20 outline-0"
                        />
                        <button className="bg-[#3BB77E] text-white w-[160px] h-[50px] rounded-[6px] flex items-center justify-center gap-2 hover:bg-[#2a8f6b]">
                            <FaCartShopping /> Add to cart
                        </button>
                        <button className="border px-3 py-2 rounded text-gray-500 hover:text-red-500">
                            <Heart className="w-5 h-5" />
                        </button>
                        <button className="border px-3 py-2 rounded text-gray-500 hover:text-blue-500">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-6 mt-6 text-sm font-medium">
                        {Object.entries(product.details).map(([key, value]) => (
                            <div className='flex gap-2' key={key}>
                                <p className="text-[#7E7E7E]">{key.charAt(0).toUpperCase() + key.slice(1)}:</p>
                                <p className="text-[#3BB77E]">{Array.isArray(value) ? value.join(', ') : value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
