import React, { createContext, useReducer } from 'react'
import shoppingCartReducer, { initialCartState } from './shoppingCartReducer'

export const ShoppingCartContext = createContext()
export default function ShoppingCartProvider({ children }) {
    const [state, dispatch] = useReducer(shoppingCartReducer, initialCartState)
    return (
        <ShoppingCartContext.Provider value={{ state, dispatch }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
