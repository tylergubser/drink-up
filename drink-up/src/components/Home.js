import { NavLink } from "react-router-dom";
import React from "react";

function Home ({isAuthenticated}) {


    return(
        <div  className="bg-cover w-screen h-screen bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHpz9BUiRJ6ksJwvSmPOyprSq5be5DTjSXqA&usqp=CAU')]">
            <h1 className="text-white text-center text-2xl font-bold">Welcome To Drink Up!</h1>
            <div>
               { isAuthenticated ?
                <div>
                    <div>
                    {/* <li className="relative">
                         <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <NavLink to="/orders"><button
                                                        type="submit"
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
                                                    Orders
                                                    </button></NavLink>
                        </div>
                    </li> */}
                    </div>

                </div>
                :
                <div>
                    <div>
                    <li className="relative">
                        <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <NavLink to="/menu"><button
                                                        type="submit"
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
                          
                            
                        "
                                                    >
                                                    Menu
                                                    </button></NavLink>
                        </div>
                    </li>
                    </div>

                </div>}
            </div>
        </div>
    )

}

export default Home;