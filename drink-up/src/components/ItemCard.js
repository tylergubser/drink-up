import React, {useState} from "react";
import { useHistory } from "react-router";

function ItemCard({drink, isUser, isAuthenticated, drinks, setDrinks}) {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    let history = useHistory();
    
        function handleOrder(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append('name', name)
        formData.append('phone_number', phone)
        formData.append('drink_id', drink.id)
        formData.append('user_id', 1)
        formData.append('made', false)
        fetch('http://localhost:3000/orders', {
            method: 'POST',
            body: formData
        })
        .then(resp => resp.json())
        .then(drink => console.log(drink))
        setName("");
        setPhone("");
        history.push("/complete");}

        function deleteOrder(e) {
            e.preventDefault();
            fetch(`http://localhost:3000/drinks/${drink.id}`, {
            method: "DELETE",
          })
          
          removeOrders(drink)}

        function removeOrders(drink) {
            const   newDrinklist = drinks.filter((thing) => thing.id !== drink.id)
            setDrinks(newDrinklist)
            }
    
   console.log(drink.image)
   console.log(isUser)

    
    return (
        <div className="relative block mb-4 bg-gradient-to-r from-slate-200 to-gray-500 group rounded-lg flex space-y-6 flex-col flex-wrap p-10 box-border h-50   ">
            {isAuthenticated ? <button  className="
                             font-bold
                            h-10
                            px-5
                            text-indigo-100
                            bg-red-900
                            rounded-lg
                            transition-colors
                            duration-150
                            uppercase
                            focus:shadow-outline
                            hover:bg-blue-800
                        " type="button" onClick={deleteOrder}>Delete</button> : null}
            <div className="sm:inline-flex sm:items-center sm:shrink-0">
                <p className="text-2xl font-bold text-black">{drink.name}</p>
            </div>
            <div className="sm:inline-flex sm:items-center sm:shrink-0 py-3 w-2/5  ">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiWVoa6O2RPcSgHIMCuEVNGG1kKxUlH9cXMQ&usqp=CAU" alt="" className='w-10 h-10 object-center'/>
            </div>
            <div className="sm:inline-flex sm:items-center sm:shrink-0">
                <p className="text-2xl font-bold text-black">${drink.price}</p>
            </div>
            <label className="block mb-6 w-full">
                        <span className="text-gray-700">Name</span>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}>
           
          </input>
          </label>
          <label className="block mb-6">
                        <span className="text-gray-700 w-full">Phone</span>
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}>

            </input>
                    </label>
            <button
                                                        type="button"
                                                        onClick={handleOrder}
                                                        className="
                             font-bold
                            h-10
                            px-5
                            text-indigo-100
                            bg-red-900
                            rounded-lg
                            transition-colors
                            duration-150
                            uppercase
                            focus:shadow-outline
                            hover:bg-blue-800
                        "
                                                    >
                                                    Place Order
                                                    </button>
        </div>
        
    )

}

export default ItemCard;