import React from 'react';
import { Heart, HomeIcon, Share2, Star } from 'lucide-react';
import { BsCart } from 'react-icons/bs';
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
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.`,
        details: {
            type: 'Organic',
            sku: 'FWM15VKT',
            mfg: 'Jun 4, 2022',
            tags: ['Snack', 'Organic', 'Brown'],
            stock: '8 Items In Stock',
            life: '70 days',
        },
    };

    const [thumbnail, setThumbnail] = React.useState(product.images[0]);
    const [quantity, setQuantity] = React.useState(1);
    const [size, setSize] = React.useState(product.selectedSize);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="text-sm text-gray-500 mb-4">
                <span className="text-[#3BB77E] font-semibold text-[14px] leading-[24px] "> Home </span> &gt; <span className='font-semibold text-[14px] leading-[24px] text-[#3BB77E]'>{product.category}</span> &gt;{' '}
                <span className=" font-semibold text-[14px] leading-[24px] text-[#7E7E7E]">{product.name}</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">

                <div className="flex flex-col lg:flex-row gap-5">

                    <div className=" rounded-[15px] border-[#ECECEC] border-2 w-[500px] h-[500px]">
                        <div className=''>
                            <img src={thumbnail} alt="main" className=" object-cover rounded flex justify-center items-center m-auto  " />
                        </div>
                        <div className="flex gap-4 pt-24 ">
                            {product.images.slice(1).map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt={`rel-${i}`}
                                    className="w-[100px] h-[100px] rounded-[15px] shadow border object-cover p-2 border-[#ECECEC]"
                                />
                            ))}
                        </div>
                    </div>
                </div>


                <div className="flex-1 space-y-4">
                    <div className="w-[80px] h-[30px] text-center pt-1 font-bold text-sm text-[#F74B81] bg-[#FDE0E9] rounded">Sale Off</div>
                    <h1 className="text-[40px] font-bold leading-[48px] text-[#253D4E] w-[445px]">{product.name}</h1>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Star className="w-4 h-4  text-yellow-500 fill-yellow-400" />
                        <span className='ml-10 font-medium text-[14px] text-[#B6B6B6]'>({product.reviews} reviews)</span>

                    </div>

                    <div className="text-[56px] leading[58px] font-bold text-[#3BB77E]">
                        ${product.offerPrice}{' '}
                        <span className="text-[#FDC040] text-[16px] font-semibold">26% Off</span>
                    </div>
                    <div className="line-through text-[#B6B6B6] text-[28px] leading-[28px] ">${product.price}</div>

                    <p className="text-[#7E7E7E] text-[17px] leading-[24px] font-medium w-[466px]">{product.description}</p>

                    {/* Sizes */}
                    <div className='flex gap-4 items-center'>
                        <p className="font-semibold text-[#7E7E7E] ">Size / Weight:</p>
                        <div  >
                            {product.sizeOptions.map((s) => (
                                <button
                                    key={s}
                                    className={` transition-all duration-150 w-[41px] h-[32px] rounded  ${size === s ? 'bg-[#3BB77E] text-white' : '#7E7E7E hover:bg-[#3BB77E] hover:text-white'
                                        }`}
                                    onClick={() => setSize(s)}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-3 items-center mt-4 flex-wrap ">
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            min={1}
                            max={5}
                            className="border-2 border-[#3BB77E] rounded px-3 py-2 w-20 outline-0"
                        />


                        <button className="bg-[#3BB77E] text-white w-[160px] h-[50px]  rounded-[6px] transition flex items-center justify-center gap-2 hover:bg-[#2a8f6b]">
                          <FaCartShopping />  Add to cart
                        </button>

                        <button className="border px-3 py-2 rounded text-gray-500 hover:text-red-500">
                            <Heart className="w-5 h-5" />
                        </button>

                        <button className="border px-3 py-2 rounded text-gray-500 hover:text-blue-500">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Product Details */}
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t mt-6 text-sm">
                        <div>
                            <p className="text-gray-500">Type</p>
                            <p className="text-gray-800 font-medium">{product.details.type}</p>
                        </div>
                        <div>
                            <p className="text-gray-500">SKU</p>
                            <p className="text-blue-600 font-medium">{product.details.sku}</p>
                        </div>
                        <div>
                            <p className="text-gray-500">MFG</p>
                            <p className="text-green-600 font-medium">{product.details.mfg}</p>
                        </div>
                        <div>
                            <p className="text-gray-500">Tags</p>
                            <p className="text-gray-800 font-medium">{product.details.tags.join(', ')}</p>
                        </div>
                        <div>
                            <p className="text-gray-500">Life</p>
                            <p className="text-gray-800 font-medium">{product.details.life}</p>
                        </div>
                        <div>
                            <p className="text-gray-500">Stock</p>
                            <p className="text-green-600 font-medium">{product.details.stock}</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
