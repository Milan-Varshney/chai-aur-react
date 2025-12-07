import React from "react";
import { UserContext } from "../context/UserContext";

export default function Profile(){
    const {user} = React.useContext(UserContext)
    return (
        <div>
            <h1>Welcome to profile Page</h1>
            <h2>Username: {user?.username}</h2>
            <h2>Password: {user?.password}</h2>
        </div>
    );
}