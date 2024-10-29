import { Product } from "./Product";



export function Products({products, addToBasket}){


    return <div className="Products grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {
            products.map(el=> <Product key={el.id} product={el} addToBasket={addToBasket} />)
        }
    </div>
}
