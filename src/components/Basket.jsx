
export function Basket({orders, removeOrder, minusOrder, plusOrder, removeAllOrders}){

    const total = orders.reduce( (sum, el) => sum + el.price*el.quantity, 0);
    


    return <div className="Basket fixed top-2 right-2 bg-slate-300 min-w-[400px] h-[500px] rounded-md p-4 shadow-md z-10 overflow-y-auto">

        {
            orders.map( order => <div key={order.id} className=" flex justify-around items-center shadow-md m-2">
                <img className=" w-10 h-10" src={order.image} alt={order.title} />
                <button className="border-2 bg-slate-300 px-2"  onClick={()=> minusOrder(order.id)}> - </button>
                <span>{order.quantity}</span>
                <button className="border-2 bg-slate-300 px-2" onClick={()=> plusOrder(order.id)}> + </button>       
                <span> = </span>         
                <span>{ (order.price * order.quantity).toFixed(2) }$</span>
                <button onClick={()=> removeOrder(order.id)}> X </button>
            </div>)
        }

        <div>Total: {total.toFixed(2)}</div>
        <button onClick={removeAllOrders}>REMOVE ALL</button>

    </div>
}