import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from "./Rout";

function Header() {
    return (
        <div>
            <div>
                <NavLink to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
            </div>
            <div>
                <NavLink to={PATH.JUNIOR}>Junior</NavLink>
            </div>
            <div>
                <NavLink to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink>
            </div>

        </div>
    )
}

export default Header
