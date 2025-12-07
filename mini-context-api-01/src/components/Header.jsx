import React from "react";
import {NavLink} from "react-router-dom"

export default function Header(){
    return (
    <header >
        <nav>
            <div className="flex flex-wrap space-between items-center mx-auto max-w-screen-xl">
                <h3>Milan Varshney</h3>
                <div>
                    <ul>
                        <li>
                            <NavLink to="" className={ ({isActive})=> ` ${isActive ? 'text-orange-700': 'text-gray-700'}`}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile" className={ ({isActive})=> ` ${isActive ? 'text-orange-700': 'text-gray-700'}`}>
                                Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" className={ ({isActive})=> ` ${isActive ? 'text-orange-700': 'text-gray-700'}`}>
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);
}