import React, {useState} from "react";

function ItemCard({drink, isUser}) {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    
        function handleOrder(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append('name', name)
        formData.append('phone_number', phone)
        formData.append('drink_id', drink.id)
        formData.append('user_id', 1)
        fetch('http://localhost:3000/orders', {
            method: 'POST',
            body: formData
        })
        .then(resp => resp.json())
        .then(drink => console.log(drink))
        setName("");
        setPhone("");
        
        




    }
    
   console.log(drink.image)
   console.log(isUser)

    
    return (
        <div className="relative block mb-4 bg-lime-600 group rounded-lg flex space-y-6  flex-wrap p-10 box-border h-50 w-40  ">
            <div className="sm:inline-flex sm:items-center sm:shrink-0">
                <p className="text-2xl font-bold text-white">{drink.name}</p>
            </div>
            <div className="sm:inline-flex sm:items-center sm:shrink-0 py-3">
                <img src={drink.image} alt="" className='w-10 h-10 object-center'/>
            </div>
            <div className="sm:inline-flex sm:items-center sm:shrink-0">
                <p className="text-2xl font-bold text-white">${drink.price}</p>
            </div>
            <label className="block mb-6">
                        <span className="text-gray-700">Name</span>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}>
           
          </input>
          </label>
          <label className="block mb-6">
                        <span className="text-gray-700">Phone Number</span>
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
                            bg-blue-600
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