import { useState, useEffect } from "react";
import { Products } from "../components/Products";
import { Basket } from "../components/Basket";


 export function HomePage(){

    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [showBasket, setShowBasket] = useState(false);


    const addToBasket = (product) =>{
        const index = orders.findIndex(el=> el.id === product.id);
        if(index === -1){
            
            const newOrder = {
                ...product,
                quantity: 1
            };

            setOrders([...orders, newOrder]);
        }else{

            const newOrders = orders.map( (el, i)=>{
                if(i === index) el.quantity = el.quantity+1;
                return el; 
            })

            setOrders(newOrders);
        }
    }

    const removeOrder = (id)=>{

        const newOrders = orders.filter(el=> el.id !== id);
        setOrders(newOrders);
    }

    const plusOrder = (id)=>{
        const newOrders = orders.map(el => {
            if(el.id === id) el.quantity = el.quantity+1;
            return el;
        });

        setOrders(newOrders)
    }

    const minusOrder = (id)=>{
        const newOrder = orders.map(el=>{
            if(el.id === id) el.quantity = el.quantity>1 ? el.quantity-1: 0;
            return el;
        })
        setOrders(newOrder);
    }

    const removeAllOrders = ()=>{
        setOrders([]);
    }

    useEffect(()=>{

        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
            console.log(json);
            setProducts(json);
        })

    }, []);




    return <div className="HomePage container mx-auto">
        <button className=" fixed top-2 right-2 z-20" onClick={()=> setShowBasket(!showBasket)}>CART</button>
        {showBasket && 
            <Basket orders={orders} removeOrder={removeOrder} plusOrder={plusOrder} minusOrder={minusOrder} removeAllOrders={removeAllOrders} />
        }
        <Products products={products} addToBasket={addToBasket} />
    </div>
}

