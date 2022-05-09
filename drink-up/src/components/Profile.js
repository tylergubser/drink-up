import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";


function Profile ({menuButton, setMenuButton, menu, setMenu})  {
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log(menu)
  
  function handleMenu(e) {
    e.preventDefault()
    menu.active ? 
    
   
    fetch(`http://localhost:3000/menus/1`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        active: false
    }),
      }) 
      .then((r) => r.json())
      .then((data) => setMenu(data))

      :

      
    fetch(`http://localhost:3000/menus/1`,
  {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      active: true
  }),
    }) 
    .then((r) => r.json())
    .then((data) => setMenu(data))
    
  }

  return (
    isAuthenticated && (
    <div  className="  bg-cover w-screen h-screen bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiwr3iYj8YunS_bZDT1fhR82kE79_XFXAlAw&usqp=CAU')] ">
      <div className="relative block mb-4  group rounded-lg flex space-y-6  flex-wrap p-10 box-border h-50 w-40 text-2xl font-bold text-white text-center ">
        <img src={user.picture} alt={user.name} />
        <p>{user.email}</p>
        <div>
       
        </div>
        
                   
        </div>
        <div className="relative">
                        {/* <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"> */}
                            <div className="text-2xl font-bold text-white">
                            <NavLink to="/edit-menu">Edit Menu</NavLink>
                        </div>
                    </div>
                    {/* <button className="text-2xl font-bold text-white" onClick={()=>setMenuButton(!menuButton)}>{menuButton ? "Turn Menu Off" : "Turn Menu On"}</button> */}
                    <button className="text-2xl font-bold text-white" onClick={handleMenu}>{menu.active ? "Turn Menu Off" : "Turn Menu On"}</button>
        {/* {menuButton ?
                    <button type="button" onClick={setMenuButton(false)} className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">Turn Off Menu</button> :
                    <button type="button" onClick={setMenuButton(true)} className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">Turn On Menu</button> 
                    
                     
                    } */}
                    <div>
                    <NavLink className="text-red-500 text-2xl font-bold"to="/PrintMenu">Print QR code</NavLink>
                    </div>
    </div>
    )
  );
};

export default Profile;