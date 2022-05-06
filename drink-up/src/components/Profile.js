import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";


function Profile ({menuButton, setMenuButton})  {
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
    <div>
      <div className="relative block mb-4 bg-green-300 group rounded-lg flex space-y-6  flex-wrap p-10 box-border h-50 w-40  ">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <div>
       
        </div>
        
                   
        </div>
        <li className="relative">
                        <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <NavLink to="/edit-menu">Edit Menu</NavLink>
                        </div>
                    </li>
                    <button onClick={()=>setMenuButton(!menuButton)}>{menuButton ? "Turn Menu Off" : "Turn Menu On"}</button>
        {/* {menuButton ?
                    <button type="button" onClick={setMenuButton(false)} className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">Turn Off Menu</button> :
                    <button type="button" onClick={setMenuButton(true)} className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">Turn On Menu</button> 
                    
                     
                    } */}
    </div>
    )
  );
};

export default Profile;