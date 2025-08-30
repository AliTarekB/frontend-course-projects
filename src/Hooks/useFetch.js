import { useEffect, useRef, useState } from "react";

export const useFetch =(link)=>{

const[DummyData,setDummyData] = useState([]);
const[IsLoading,setIsLoading] = useState(false);



const getProductData = async ()=>{
  try{
    setIsLoading(true);
  const res = await fetch(link);
  const data = await res.json();
  setDummyData(data.products);
  isfilterdData(data.products);
  }
  catch (err){
    console.log(err);
  }
  finally{
    setIsLoading(false);
  }
};
let ref =useRef(true);

useEffect(() => {
  if(ref.current) getProductData();

  return ()=>{
    ref.current=false;
  }
} ,[]);
if(IsLoading) return <h1 className="text-center">Loading...</h1>;

return(
    DummyData,
    IsLoading


);
};