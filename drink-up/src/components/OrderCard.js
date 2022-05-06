import React from 'react';

function OrderCard({order, setOrders}) {


    // fetch(`http://localhost:3000/orders/${order.id}`, {
    //     method: "DELETE",
    //   })
    //   .then((r) => r.json())
    //   .then((data) => setOrders(data))
    function handleOrder(event) {
        event.preventDefault();
    
        let smsObj = {
            mobile_number: '1' + order.phone_number,
            message: `Your order is complete Order Number ${order.id}`,
        }
       
        fetch('http://localhost:3000/sms_messages/', {
            method:'POST',
            headers: {
                'content-type': 'application/json',
                accepts: "application/json"
            },
            body: JSON.stringify(smsObj)
        })
        .then(resp => resp.json())
        .then(resp => console.log(resp))
    }

return(
    <div className="relative block mb-4 bg-red-800 group rounded-lg flex space-y-6  flex-wrap p-10 box-border h-50 w-40  ">
        <div className="sm:inline-flex sm:items-center sm:shrink-0">
        <p className="text-2xl font-bold text-white">{order.drink.name}</p>
        </div>
        <div className="sm:inline-flex sm:items-center sm:shrink-0">
        <p className="text-2xl font-bold text-white">{order.name}</p>
        </div>
        <div className="sm:inline-flex sm:items-center sm:shrink-0">
        <p className="text-2xl font-bold text-white">{order.id}</p>
        </div>
        <button type="button" onClick={handleOrder}>Order Complete</button> 
    </div>


)




}

export default OrderCard;