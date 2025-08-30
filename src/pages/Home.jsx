import { useState } from "react";
import"../App.css";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";


const Home=()=> {
  const[filterdData,isfilterdData] = useState([]);
  const[DummyData,IsLoading] =  useFetch("https://dummyjson.com/products");

if(IsLoading) return <h1 className="text-center">Loading...</h1>;

const search = (e)=>{
 const Search = e.target.value.toLowerCase();
 const filterV = DummyData.filter((data) => data.title.toLowerCase().includes(Search));
 isfilterdData(filterV);
};


  return (
    <>
   
    <main>
      <div className="flex items-center justify-between my-[50px] ">
        <input 
         type="text" 
         placeholder='Search products...'
         className='w-[500px] border border-gray-600 bg-blue-100 rounded-md p-2 text-center m-auto'
         onChange={search}
        />
      </div>
      <div className="flex justify-around items-center my-{100px} flex-wrap gap-10">
      {filterdData.map((product) => {
        return(
        <Link to={`/product/${product.id}`} key={product.id}>
             <ProductCard product={product}  />
        </Link>
        );
      })}
     </div>
    </main>
    </>
  )
}

export default Home;
