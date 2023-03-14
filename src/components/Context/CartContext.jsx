import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, cantidad) => {
        if (isInCart(item.index)) {
            let posicion = cart.findIndex(x => x.index === item.index)
            cart[posicion].cantidad += cantidad
            setCart([...cart])
        } else {
            setCart([...cart, {...item, cantidad:cantidad}])
        }
    }

    const removeItem = (itemId) => {
        const items = cart.filter(item => item.index !== itemId)
        setCart([...items])
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(item => item.index === itemId)
    }

    const cartTotal = () => {
        return cart.reduce((accum, item) => accum += item.cantidad, 0)
    }

    const cartSum = () => {
        return cart.reduce((accum, item) => accum += item.cantidad * item.precio, 0)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartTotal, cartSum}}>
            {children} 
        </CartContext.Provider>
    )
}

export default CartContextProvider;