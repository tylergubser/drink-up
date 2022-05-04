import React, {useState, useEffect} from 'react';
import OrderItemCard from './OrderCard.js'

function OrderMenu({isUser}) {
    const [drinks1, setDrinks1] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/drinks')
        .then(resp => resp.json())
        .then(data => setDrinks1(data))
      },[])

      console.log(drinks1)
      const  drinks = drinks1.map(drink =>  <OrderItemCard key={drink.id}  isUser={isUser}/>)


    return(
        <div>
            <h1>Drinks</h1>
            <div>
                {drinks}
            </div>
        </div>
    )




}

export default OrderMenu;