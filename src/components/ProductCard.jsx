import { useContext } from "react";
import Button from "./Button";
import {CartContext} from "../context/CartContext.jsx";

const ProductCard = ({ product }) => {
  if (!product) {
    return <div className="text-center">Loading...</div>; 
  }
  const {additem}= useContext(CartContext);

  const handle = (e,product)=>{
    e.preventDefault();
    additem(product);
    };
  return (
    <div className="w-72 bg-white shadow-md rounded-2x1 overflow-hidden hover:shodow-x1 transition-shadow duration-300">
      <div className="relative w-full h-48">
        <img 
        src={product.thumbnail} 
        alt= {product.title}
        className="w-full h-full object-cover"
        />
        {product.discountPercentage && (
            <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-lg">
                -{Math.round(product.discountPercentage)}%
            </span>
        )}

      </div>
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-black-800 truncate">
            {product.title}
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2">
            {product.description}
        </p>
        <div className="flex items-center justify-between">
            <h5 className="text-blue-600 font-bold text-lg">
                ${product.price}
            </h5>
            <div className="flex items-center">
                <span className="ml-1 text-sm text-gray-600">Rating {product.rating}</span>
            </div>
        </div>
        <Button name="Add to Cart" handle={(e)=>{
          handle(e,product)
        }} />
      </div>
    </div>
  )
}

export default ProductCard;
