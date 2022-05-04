import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }



  return (
    isAuthenticated && (
      <div className="relative block mb-4 bg-green-300 group rounded-lg flex space-y-6  flex-wrap p-10 box-border h-50 w-40  ">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <div>
       
        </div>
      </div>
    )
  );
};

export default Profile;