import { createContext, useState } from "react";

export const CartContext = createContext(null);


export const CartProvider = ({children}) => {

    const [addToCart,setaddToCArt] = useState([]);

    const additem = (product)=>{
        setaddToCArt((old)=>[...old,product])
    };
    const removeitem = ()=>{


    };
    const clearCart = ()=>{


    };



  return (
    <CartContext.Provider value={{
        addToCart,
        additem,
        removeitem,
        clearCart
    }}>{children}</CartContext.Provider>
  )
};

