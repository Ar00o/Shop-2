import { useState } from "react";


 export function Product({product, addToBasket}){

    const [flag, setFlag] = useState(false);

    return <div className="Product shadow-md p-4">
        <img src={product.image} alt={product.title} className=" h-[400px] mx-auto" />
        <div className=" font-bold italic text-xl">{product.title}</div>
        {
            product.description.length > 150 ? 
                <p>{product.description.slice(0, 150) } ...... </p>:
                <p>{product.description}</p>
        }
        <div className=" text-green-700 font-bold">{product.price}$</div>
        <button className=" bg-green-300 p-2" onClick={()=> addToBasket(product)}> ADD TO BASKET </button>
        <button className=" bg-red-300 p-2" onClick={()=> setFlag(true)}> DETAIL </button>

        {
            flag && <div className=" fixed top-0 right-0 bottom-0 left-0 bg-black/70 text-white flex justify-center items-center flex-col">
                 <img src={product.image} alt={product.title} className=" h-[400px] mx-auto" />
                 <div className=" font-bold italic text-xl">{product.title}</div>
                 <div className=" font-bold italic text-xl">{product.category}</div>
                 <p className=" max-w-[70%] mx-auto">{product.description}</p>
                 <div className=" text-green-700 font-bold">{product.price}$</div>
                 <button className=" bg-green-300 p-2" onClick={()=> addToBasket(product)}> ADD TO BASKET </button>
                 <div className=" cursor-pointer absolute top-4 left-4 text-3xl" onClick={()=> setFlag(false)}> X </div>
            </div>
        }

    </div>
}