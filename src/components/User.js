import React from "react";

function User({name, user2}){
    return(
        <div>
            <p>{name}</p>
            <ul>
                <li>email: {user2.email}</li>
                <li>userame: {user2.username}</li>
            </ul>
        </div>
    )
}

export default User