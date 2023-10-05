import AddToCartButton from "Components/UI/AddToCartButton";
import ProductDetailImages from "./ProductDetailImages";
import { useSelector } from "react-redux";

const ProductDetailPage = ({ productID }) => {
    const selectedProduct = useSelector(state =>
        state.products.products.find(product => product.id === productID*1)
      );

      const discount_percentage = ((selectedProduct.regular_price - selectedProduct.discount_price)/selectedProduct.regular_price)*100

    //   console.log("hello")
    //   console.log(selectedProduct)

    return (

        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex-grow lg:px-8 mt-6 h-screen ">
            <div className="flex flex-col md:flex-row -mx-4 ">
                {selectedProduct && <ProductDetailImages product={selectedProduct} />}
                <div className="md:flex-1 px-4">
                    <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                        {selectedProduct.name}
                    </h2>
                    <p className="text-gray-500 text-sm">
                        By
                        <a href="#" className="text-indigo-600 hover:underline"> {selectedProduct?.user ? selectedProduct?.user : "Admin"} </a>
                    </p>

                    <div className="flex items-center space-x-4 my-4">
                        <div>
                            <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                                <span className="text-indigo-400 mr-1 mt-1">$</span>
                                <span className="font-bold text-indigo-600 text-3xl">{selectedProduct.regular_price}</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="text-green-500 text-xl font-semibold">Offer {discount_percentage.toFixed()}%
                                <small>Save up to {(selectedProduct.regular_price * selectedProduct.discount_price / 100).toFixed()} $</small>
                            </p>
                            <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                            {selectedProduct.total_stock && <p className="text-gray-500 text-sm font-bold">Total InStock {selectedProduct.total_stock} item.</p>}
                        </div>
                    </div>

                    <p className="text-gray-500">
                        {selectedProduct.description}
                    </p>

                    <div className="flex py-4 space-x-4">
                        <div className="relative">
                            <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Qty</div>
                            <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>

                            <svg className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>

                        <AddToCartButton />
                        {/* <button type="button" className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
                            Add to Cart
                        </button> */}
                    </div>
                </div>
            </div >
            <section className="flex-grow">
                <h2 className="uppercase tracking-wide text-xl font-semibold text-gray-700 my-4">
                    Product Information
                </h2>
                <div className="mb-3 bg-white shadow-lg rounded text-gray-600 p-4">
                    
                <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                            <span className="text-right font-bold px-10">Brand</span>
                            <div>...</div>
                </label>
                <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                            <span className="text-right font-bold px-10">Sizes</span>
                            <div>...</div>
                </label>
               
                <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                            <span className="text-right font-bold px-10">Weight </span>
                            <div>...</div>
                </label>
               
                <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                            <span className="text-right font-bold px-10">Dimension</span>
                            <div>...</div>
                </label>
                </div>
                {/* {selectedProduct?.attrubute.map(attrubute => (
                    <fieldset key={attrubute.id} className="mb-3 bg-white shadow-lg rounded text-gray-600">
                        <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                            <span className="text-right px-10">{attrubute.attrubute}</span>
                            <div>{attrubute.variant}</div>
                        </label>
                    </fieldset>
                ))} */}
            </section>
        </div >
    );
}

export default ProductDetailPage;