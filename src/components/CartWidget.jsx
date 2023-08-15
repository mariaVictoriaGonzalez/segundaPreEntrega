import React from 'react'
import { LuShoppingCart } from "react-icons/lu";
import './CartWidget.css'

export const CartWidget = ()=> {
    return(
        <>
        <LuShoppingCart/>
        <span>0</span>
        </>
    )
}