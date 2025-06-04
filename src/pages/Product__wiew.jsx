import React, { useState } from 'react';
import { Heart, Share2, Star } from 'lucide-react';
import { FaCartShopping } from 'react-icons/fa6';
import { Home } from "lucide-react";

export default function ProductView() {
    const product = {
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
        <div className="max-w-6xl mx-auto px-4 ">
<div className="w-ful h-[66px]">
      <div className="flex items-center space-x-2 text-sm text-gray-500">
        <div className="flex items-center space-x-1 text-[#3BB77E] font-semibold">
          <Home size={16} />
          <span>Home</span>
        </div>

        <span className="text-gray-400">›</span>

        <span className="text-[#3BB77E] font-semibold">Vegetables & Tubers</span>

        <span className="text-gray-400">›</span>

        <span className="text-[#7E7E7E] font-medium">
          Seeds Of Change Organic
        </span>
      </div>
    </div>

            <div className="flex flex-col lg:flex-row gap-10 ">
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

                <div className="flex-1 space-y-4 ">
                    <div className="w-[80px] h-[30px] text-center pt-1 font-bold text-sm text-[#F74B81] bg-[#FDE0E9] rounded">Sale Off</div>
                    <h1 className="text-[40px] leading-[48px] font-bold text-[#253D4E]">{product.name}</h1>

                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-5">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-400" />
                        <span className="ml-2 text-[#B6B6B6]">({product.reviews} reviews)</span>
                    </div>
                    <div className="relative w-fit h-[60px] mt-[30px]">
                        <div className="flex items-center gap-3">
                            <span className="text-[58px] font-bold text-[#3BB77E] leading-none">
                                ${product.offerPrice}
                            </span>
                            <span className="text-[#FDC040] text-[14px] font-semibold leading-none relative top-[-12px]">
                                26% Off
                            </span>
                        </div>

                        <span className="absolute left-[110px] top-[22px] text-[#B6B6B6] text-[25px] line-through">
                            ${product.price}
                        </span>
                    </div>
                    <p className="text-[#7E7E7E] text-[17px]">{product.description}</p>


                    {/* Size */}
                    <div className="flex gap-4 items-center">
                        <p className="font-semibold text-[#7E7E7E]">Size / Weight:</p>
                        <div className="flex gap-2">
                            {product.sizeOptions.map((s) => (
                                <button
                                    key={s}
                                    className={`transition-all duration-150 w-[41px] h-[32px] rounded text-sm ${size === s
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
                    <div className="flex gap-3 items-center mt-4 flex-wrap ">
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
            <div className="max-w-6xl mx-auto mt-10 border-[#ECECEC] rounded-[15px] border-2  pl-12 pt-12 h-[1320px]">
                <div className="flex gap-6 text-[17px] leading-[17px]  font-semibold align-middle tracking-normal">
                    <button className=" w-[143px] h-[45px] rounded-[30px] shadow-md flex items-center justify-center text-[#7E7E7E] hover:text-[#3BB77E] transition-all duration-300">Description</button>
                    <button className=" w-[143px] h-[45px] rounded-[30px] shadow-md flex items-center justify-center text-[#7E7E7E] hover:text-[#3BB77E] transition-all duration-300">Additional info</button>
                    <button className=" w-[143px] h-[45px] rounded-[30px] shadow-md flex items-center justify-center text-[#7E7E7E] hover:text-[#3BB77E] transition-all duration-300">Vendor</button>
                    <button className=" w-[143px] h-[45px] rounded-[30px] shadow-md flex items-center justify-center text-[#7E7E7E] hover:text-[#3BB77E] transition-all duration-300">Reviews (3)</button>
                </div>

                <div className="mt-6  w-[1030px]">
                    <p className="mt-10 font-medium text-[16px] leading-[24px] text-[#7E7E7E]" >
                        Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. <br />
                        Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.
                    </p>

                    <div className="mt-7">
                        <ul className="space-y-4 list-disc list-inside">
                            <li className="text-[#7E7E7E] font-medium text-[14px] leading-[24px]">
                                <span>Type Of Packing:</span>
                                <span className="ml-[90px]">Bottle</span>
                            </li>
                            <li className="text-[#7E7E7E] font-medium text-[14px] leading-[24px]">
                                <span>Color:</span>
                                <span className="ml-[157px]">Green, Pink, Powder Blue, Purple</span>
                            </li>
                            <li className="text-[#7E7E7E] font-medium text-[14px] leading-[24px]">
                                <span>Quantity Per Case:</span>
                                <span className="ml-20">100ml</span>
                            </li>
                            <li className="text-[#7E7E7E] font-medium text-[14px] leading-[24px]">
                                <span>Ethyl Alcohol:</span>
                                <span className="ml-28">70%</span>
                            </li>
                            <li className="text-[#7E7E7E] font-medium text-[14px] leading-[24px]">
                                <span>Piece In One:</span>
                                <span className="ml-28">Carton</span>
                            </li>
                        </ul>
                    </div>



                    <p className="border-t-2 border-[#ECECEC] pt-6 mt-6 font-medium text-[16px] leading-[24px] text-[#7E7E7E] ">
                        Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes
                        minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the
                        raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective
                        limpet.
                    </p>

                    {/* Packaging & Delivery */}
                    <h2 className="text-[24px] leading-[28px] font-bold text-[#253D4E] mt-6">Packaging & Delivery</h2>
                    <p className="mt-3 border-t-2 border-[#ECECEC] pt-4 font-medium text-[16px] leading-[24px] text-[#7E7E7E]">
                        Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one
                        assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much
                        held one exuberantly sheep goodness so where rat wry well concomitantly.
                    </p>
                    <p className="mt-3 font-medium text-[16px] leading-[24px] text-[#7E7E7E]">
                        Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and
                        next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less
                        across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.
                    </p>

                    {/* Suggested Use */}
                    <h2 className="text-[24px] leading-[28px] font-bold text-[#253D4E] mt-7">Suggested Use</h2>
                    <p className="mt-6 text-[14px] leading-[24px] font-medium text-[#7E7E7E]">Refrigeration not necessary.</p>
                    <p className='mt-3 text-[14px] leading-[24px] font-medium text-[#7E7E7E]'>Stir before serving.</p>

                    {/* Other Ingredients */}
                    <h2 className="text-[24px] leading-[28px] font-bold text-[#253D4E] mt-6">Other Ingredients</h2>
                    <ul className=" list-inside mt-6 list-none">
                        <li className='text-[14px] leading-[24px] font-medium text-[#7E7E7E] mt-3 mb-3'>Organic raw pecans, organic raw cashews.</li>
                        <li className='text-[14px] leading-[24px] font-medium text-[#7E7E7E]'>This butter was produced using a LTG (Low Temperature Grinding) process</li>
                        <li className='text-[14px] leading-[24px] font-medium text-[#7E7E7E] mt-3'>Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy</li>
                    </ul>

                    {/* Warnings */}
                    <h2 className="text-[24px] leading-[28px] font-bold text-[#253D4E] mt-6 mb-9">Warnings</h2>
                    <p>Oil separation occurs naturally. May contain pieces of shell.</p>
                </div>
            </div>

        </div>
    );
}
