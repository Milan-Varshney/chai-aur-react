import React from "react";
import { UserContext } from "../context/UserContext";

function Login(){
    const [username, setUsename] = React.useState('')
    const [password, setPassword] = React.useState('')
    const {setUser} = React.useContext(UserContext)
    const submit = ()=> {
        setUser({username, password})
    }
    return (
        <div>
            <h1>Welcome To Login Page</h1>
            <br />
            <input type="text" placeholder="User name" value={username} onChange={(e) => setUsename(e.target.value)} />
            <br />
            <input type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={submit}>Submit</button>
        </div>
    );
}

export default Login