import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    let [total, setTotal] = useState(0);

    const addItem = (item, cantidad) => {

        const subtotal = item.precio * cantidad;

        if (!isInCart(item.id)) {

            total = total + subtotal;
            setTotal(total)
            setCart(prod => [...prod, { ...item, cantidad, subtotal }])

        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removerItem = (itemId) => {        
        const {subtotal} = cart.find(p => p.id === itemId)
        setTotal(total - subtotal)
        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
    }

    const clearCart = () => {
        setCart([])
        setTotal(0)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removerItem, clearCart, isInCart, total }}>
            {children}
        </CartContext.Provider>
    )
}