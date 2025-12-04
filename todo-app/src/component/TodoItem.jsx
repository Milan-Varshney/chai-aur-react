import React from "react";
import '../styles.css'
export function TodoItem({itemName}){
    return (
        <>
        <li className="list-item">
        <span><input type="checkbox" name="" id="item" />
        {itemName}</span>
        <p>...</p>
        </li>
        </>
    )
}