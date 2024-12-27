import React, { useEffect, useState } from "react";
const  Livo=()=>{

    const [user, setUser] = useState(null);

    useEffect(() => {
      fetch(" https://randomuser.me/api/?page=1&results=1&seed=abc")
        .then((response) => response.json())
        .then((data) => {
          setUser(data.results[0]);
        })
        .catch((error) => console.error("Error fetching user:", error));
    }, []);
  
    if (!user) {
      return <div class="flex items-center justify-center h-screen">Loading...</div>;
    }
  return (
   
<div class="grid grid-cols-2 md:grid-cols-3 gap-2">
    <div class="flex p-10 border-black border-4 bg-gray-300">
    <img
          src={user.picture.large}
         />
            <div class="p-8 w-20">
          <h4 class="text-xl font-semi-bold text-gray-800 w-20">
            {user.name.first}{user.name.last}<br/>
            {user.gender} <br/>
            {user.location.street.number}
          </h4>
          </div>
    </div>  
    <div class="flex p-10 border-black border-4 bg-gray-300">
    <img
          src={user.picture.large}
         />
            <div class="p-8 w-20">
          <h4 class="text-xl font-semi-bold text-gray-800 w-20">
            {user.name.first}{user.name.last}<br/>
            {user.gender} <br/>
            {user.location.street.number}
          </h4>
          </div>
    </div> 
    <div class="flex p-10 border-black border-4 bg-gray-300">
    <img
          src={user.picture.large}
         />
            <div class="p-8 w-20">
          <h4 class="text-xl font-semi-bold text-gray-800 w-20">
            {user.name.first}{user.name.last}<br/>
            {user.gender} <br/>
            {user.location.street.number}
          </h4>
          </div>
    </div>
    <div class="flex p-10 border-black border-4 bg-gray-300">
    <img
          src={user.picture.large}
         />
            <div class="p-8 w-20">
          <h4 class="text-xl font-semi-bold text-gray-800 w-20">
            {user.name.first}{user.name.last}<br/>
            {user.gender} <br/>
            {user.location.street.number}
          </h4>
          </div>
    </div>
    <div class="flex p-10 border-black border-4 bg-gray-300">
    <img
          src={user.picture.large}
         />
            <div class="p-8 w-20">
          <h4 class="text-xl font-semi-bold text-gray-800 w-20">
            {user.name.first}{user.name.last}<br/>
            {user.gender} <br/>
            {user.location.street.number}
          </h4>
          </div>
    </div>
  
    <div class="flex p-10 border-black border-4 bg-gray-300">
    <img
          src={user.picture.large}
         />
            <div class="p-8 w-20">
          <h4 class="text-xl font-semi-bold text-gray-800 w-20">
            {user.name.first}{user.name.last}<br/>
            {user.gender} <br/>
            {user.location.street.number}
          </h4>
          </div>
    </div>
   
   
    
</div>

 )
}

export default Livo;