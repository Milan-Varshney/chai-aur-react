import React, {useState} from "react";

function CustomButton({text, bgColor, onClick}) {
    return (
        <>
        <button onClick={onClick} style={{backgroundColor: bgColor, borderRadius: "20px"}}>{text}</button>
        </>
    );
}

export default CustomButton