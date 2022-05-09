import React, { useState } from 'react'

function EditMenu() {
const [image, setImage] = useState(null)
const [name, setName] = useState("")
const [price, setPrice] = useState("")
const [menu, setMenu] = useState("")

function handleSubmit(e){
    e.preventDefault()
    const formData = new FormData();
    formData.append('name', name)
    formData.append('image', image)
    formData.append('price', price)
    formData.append('menu_id', menu)
    fetch('http://localhost:3000/drinks', {
        method: 'POST',
        body: formData
    })
    .then(resp => resp.json())
    .then(drink => console.log(drink))
    setName("");
    setImage(null);
    setPrice("");
    setMenu("");
    
}

// console.log(image)







return(
    <div  className="relative p-6 flex-auto bg-cover w-screen h-screen bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiwr3iYj8YunS_bZDT1fhR82kE79_XFXAlAw&usqp=CAU')]">
        <div className="w-full md:w-96 md:max-w-full mx-auto">
            <div  className="p-6 border border-black sm:rounded-md">
                <form onSubmit={handleSubmit}>
                    <label className="block mb-6">
                        <span className="text-2xl font-bold text-white">Drink Name</span>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            text-black
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "></input>
                    </label>
                    <label className="block mb-6">
                        <span className="text-2xl font-bold text-white">Drink Image</span>
                        <input type="file" accept="image/*"  onChange={(e) => setImage(e.target.files[0])} className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            text-black
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "></input>
                    </label>
                    <label className="block mb-6">
                        <span className="text-2xl font-bold text-white">Drink $</span>
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            text-black
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "></input>
                    </label>
                    <label className="block mb-6">
                        <span className="text-2xl font-bold text-white">Menu Number</span>
                        <input type="text" value={menu} onChange={(e) => setMenu(e.target.value)} className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            text-black
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "></input>
                    </label>
                               <button
                                                        type="submit"
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
                                                    Submit
                                                    </button>
                </form>
            </div>
        </div>
    </div>
    )



}

export default EditMenu;