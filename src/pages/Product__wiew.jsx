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

                <div className="flex-1 space-y-4">
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
            <div className="max-w-5xl mx-auto mt-10 p-4">
                <div className="flex gap-6 border-b border-gray-200 text-[18px] font-medium">
                    <button className="pb-3 border-b-2 border-[#3BB77E] text-[#3BB77E]">Description</button>
                    <button className="pb-3 text-gray-500 hover:text-[#3BB77E]">Additional info</button>
                    <button className="pb-3 text-gray-500 hover:text-[#3BB77E]">Vendor</button>
                    <button className="pb-3 text-gray-500 hover:text-[#3BB77E]">Reviews (3)</button>
                </div>

                <div className="mt-6 text-[16px] w-[1020px] text-[#7E7E7E] leading-relaxed">
                    <p className="mb-4">
                        Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. <br />
                        Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.
                    </p>

                    <ul className="mb-6 list-disc list-inside text-[#7E7E7E]">
                        <li><strong>Type Of Packing:</strong > Bottle</li>
                        <li><strong>Color:</strong> Green, Pink, Powder Blue, Purple</li>
                        <li><strong>Quantity Per Case:</strong> 100ml</li>
                        <li><strong>Ethyl Alcohol:</strong> 70%</li>
                        <li><strong>Piece In One:</strong> Carton</li>
                    </ul>

                    <p className="mb-6">
                        Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes
                        minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the
                        raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective
                        limpet.
                    </p>

                    {/* Packaging & Delivery */}
                    <h2 className="text-[20px] font-semibold text-black mb-2">Packaging & Delivery</h2>
                    <p className="mb-4">
                        Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one
                        assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much
                        held one exuberantly sheep goodness so where rat wry well concomitantly.
                    </p>
                    <p className="mb-6">
                        Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and
next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less
across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.
                    </p>

                    {/* Suggested Use */}
                    <h2 className="text-[20px] font-semibold text-black mb-2">Suggested Use</h2>
                    <p className="mb-6">Refrigeration not necessary.<br />Stir before serving.</p>

                    {/* Other Ingredients */}
                    <h2 className="text-[20px] font-semibold text-black mb-2">Other Ingredients</h2>
                    <ul className="list-disc list-inside mb-6">
                        <li>Organic raw pecans, organic raw cashews.</li>
                        <li>This butter was produced using a LTG (Low Temperature Grinding) process</li>
                        <li>Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy</li>
                    </ul>

                    {/* Warnings */}
                    <h2 className="text-[20px] font-semibold text-black mb-2">Warnings</h2>
                    <p>Oil separation occurs naturally. May contain pieces of shell.</p>
                </div>
            </div>

        </div>
    );
}
