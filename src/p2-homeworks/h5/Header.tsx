import React from 'react'
import s from './pages/UniversalStyles.module.css'
import { NavLink } from 'react-router-dom'
import {PATH} from "./Rout";



function Header() {

    let activeStyle: any = {
        textDecoration: "none",
        color: "orange",
        fontSize: 20 + 'px'
    }

    return (
        <div className={s.headWrapper}>
            <div className={s.item}>
                <NavLink to={PATH.PRE_JUNIOR} style={({isActive}) =>
                 isActive ? activeStyle : undefined }>PreJunior</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.JUNIOR} style={({isActive}) =>
                    isActive ? activeStyle : undefined }>Junior</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.JUNIOR_PLUS} style={({isActive}) =>
                    isActive ? activeStyle : undefined }>JuniorPlus</NavLink>
            </div>
        </div>
    )
}

export default Header
