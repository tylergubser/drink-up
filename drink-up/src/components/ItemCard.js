import React from "react";

function ItemCard({drink, isUser}) {
    function handleDelete() {

    }
    
   console.log(drink.image)
   console.log(isUser)

    
    return (
        <div className="relative block mb-4 bg-red-800 group rounded-lg flex space-y-6  flex-wrap p-10 box-border h-50 w-40  ">
            <div className="sm:inline-flex sm:items-center sm:shrink-0">
                <p className="text-2xl font-bold text-white">{drink.name}</p>
            </div>
            <div className="sm:inline-flex sm:items-center sm:shrink-0 py-3">
                <img src={drink.image}  className='w-10 h-10 object-center'/>
            </div>
            <div className="sm:inline-flex sm:items-center sm:shrink-0">
                <p className="text-2xl font-bold text-white">${drink.price}</p>
            </div>
            <button
                                                        type="button"
                                                        onClick={handleDelete}
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
                                                    Delete
                                                    </button>
        </div>
        
    )

}

export default ItemCard;