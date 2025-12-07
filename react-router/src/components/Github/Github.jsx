import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/blabs-milan-varshney-127')
    //     .then(response => response.json())
    //     .then(response => {
    //         console.log({response})
    //         setData(data)
    //     })
    // }, [])
    return (
        <>
            {/* <div><h1>Github Followers: {data.followers ? data.followers : 'data nahi mila' }</h1></div> */}
            <div>
                <h1>Github Followers: {Number(data.followers) }</h1>
                <img src={data.avatar_url} alt="" /></div>

        </>
    );
}

export const fetchData = async ()=> {
    const response = await fetch('https://api.github.com/users/blabs-milan-varshney-127')
    return response.json()
}