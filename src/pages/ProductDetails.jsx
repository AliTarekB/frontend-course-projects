import { useState, useRef, useEffect, useContext } from "react";
import {  useParams } from "react-router-dom"
import Button from "../components/Button";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
   const {id} = useParams();
   const {additem}= useContext(CartContext);

  const handle = (e)=>{
    e.preventDefault();
    };


   const[DummyData,setDummyData] = useState();
const getProductData = async ()=>{
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  setDummyData(data);
};

let ref =useRef(true);
useEffect(() => {
  if(ref.current) getProductData();

  return ()=>{
    ref.current=false;
  }
} ,[]);
  if (!DummyData) {
    return <div className="text-center">Loading...</div>; 
  }
  return (
    <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="space-y-4">
                <img 
                src={DummyData.thumbnail}
                alt={DummyData.title}
                className="w-full h-96 object-cover rounded-xl shadow"
                />
                <div className="flex gap-3">
                    {DummyData.images?.map((img, idx)=>(
                        <img 
                        key={idx}
                        src={img}
                        alt={`img-${idx}`}
                        className="w-24 h-24 object-cover rounded-lg border hover:scale-105 transition"
                        />
                    ))}
                </div>
            </div>
            <div className="space-y-4">
                <h1 className="text-2xl font-bold text-gray-800">{DummyData.title}</h1>
                <p className="text-gray-600">{DummyData.description}</p>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-3xl font-semibold text-blue-800">
                            ${DummyData.price}
                        </p>
                        {DummyData.discountPercentage &&(
                            <span className="text-sm text-green-500">
                                -{Math.round(DummyData.discountPercentage)}% OFF
                            </span>
                        )}
                    </div>
                    <div className="flex items-center">
                        Rating
                        <span className="ml-1 text-gray-700">{DummyData.rating}</span>
                    </div>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                        <span className="font-semibold">Brand</span> {DummyData.brand}
                    </li>
                    <li>
                        <span className="font-semibold">Catagory</span> {DummyData.catagory}
                    </li>
                    <li>
                        <span className="font-semibold">Stock</span> {DummyData.stock}
                    </li>
                    <li>
                        <span className="font-semibold">Shipping</span>{" "}
                        {DummyData.shippingInformation}
                    </li>
                    <li>
                        <span className="font-semibold">Warranty</span>{" "}
                        {DummyData.warrantyInformation}
                    </li>
                    <li>
                        <span className="font-semibold">Return Policy</span>{" "}
                        {DummyData.returnPolicy}
                    </li>
                </ul>
               <Button name="Add to Cart" handle={(e)=>{
          handle(e)
        }} />
            </div>
        </div>
        <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
            <div className="space-y-4">
                {DummyData.reviews?.map((review,idx)=>(
                    <div
                      key={idx}
                      className="border p-4 rounded-xl shadow-sm hover:shadow-md transition"
                    >
                        <div className="flex items-center justify-between">
                            <p className="font-semibold">{review.reviewerName}</p>
                            <div className="flex items-center text-sm">
                                Rating
                                <span className="ml-1">{review.rating}</span>
                            </div>
                        </div>
                        <p className="text-gray-600 mt-2">{review.comment}</p>
                        <span className="text-xs text-gray-400">
                            {new Date(review.date).toLocaleDateString()}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default ProductDetails
