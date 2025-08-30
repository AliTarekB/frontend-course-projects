import { useContext ,useState } from "react";
import { CartContext } from "../context/CartContext";


const Cart = () => {
  const[DummyData,setDummyData] = useState([]);
  const getProductData = async ()=>{
  try{
    setIsLoading(true);
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  setDummyData(data.products);
 
  }
  catch (err){
    console.log(err);
  }
  finally{
    setIsLoading(false);
  }
};



  const {addToCart}= useContext(CartContext);
 
  const filteredCart=[...new Set(addToCart)];
  
  let filteredCartlocal=JSON.stringify(filteredCart); 
   
   localStorage.setItem("filteredCart",filteredCartlocal);


let filteredCartstored=JSON.parse(localStorage.getItem("filteredCart"));
console.log(filteredCartstored)
  if (!addToCart) {
    return <div className="text-center">Loading...</div>; 
  }
  return (
    <>
    {filteredCartstored.map((product) => {
        return(
      <div className="relative w-60 h-70 flex gap-10 items-center">
        <img 
        src={product.thumbnail} 
        alt= {product.title}
        className="w-40 h-40 object-cover"
        />
        {product.discountPercentage && (
            <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-lg">
                -{Math.round(product.discountPercentage)}%
            </span>
        )}
        <div className="flex gap-10"> 
          <div className="w-90 flex flex-col gap-10">
            {/* <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1> */}
                <p className=" font-bold text-gray-800">{product.description}</p> 
                <p className="text-green-600">{product.availabilityStatus}</p>
          </div>
                <div className="flex items-center justify-between">
                 
                    <div>
                        <p className="text-3xl font-semibold text-blue-800">
                            ${product.price}
                        </p>
                        {product.discountPercentage &&(
                            <span className="text-sm text-green-500">
                                -{Math.round(product.discountPercentage)}% OFF
                            </span>
                        )}
                    </div>
                    <div className="flex items-center">
                        Rating
                        <span className="ml-1 text-gray-700">{product.rating}</span>
                    </div>
                </div>
        </div>
        </div>
        );
      })}

      
    </>
  )
}

export default Cart
