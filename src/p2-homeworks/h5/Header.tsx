import React from 'react'
import s from './pages/UniversalStyles.module.css'
import { NavLink } from 'react-router-dom'
import {PATH} from "./Rout";

type ActiveStyleType = {
    textDecoration: string
    color: string
    fontSize: number | string
}

function Header() {

    let activeStyle: ActiveStyleType = {
        textDecoration: "none",
        color: "orange",
        fontSize: 20 + 'px'
    }

    return (
        <div className={s.headWrapper}>
            <div className={s.item}>
                <NavLink to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.JUNIOR}>Junior</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink>
            </div>
        </div>
    )
}

export default Header
