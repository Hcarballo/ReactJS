import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, cantidad) => {

        const subtotal = item.precio * cantidad;

        if (!isInCart(item.id)) {

            setCart(prod => [...prod, { ...item, cantidad, subtotal }])

        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removerItem = (itemId) => {
        console.log("Entreeee")
        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removerItem, clearCart, isInCart }}>
            {children}
        </CartContext.Provider>
    )
}