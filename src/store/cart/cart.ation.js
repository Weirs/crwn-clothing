import { CART_ACTION_TYPES } from "./cart.type";
import { createAction } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((cartItem)=>cartItem.id===productToAdd.id)

    if(existingCartItem){
        return cartItems.map((cartItem)=>
        cartItem.id===productToAdd.id 
        ? {...cartItem, quantity:cartItem.quantity+1} 
        : cartItem)
    }
    return [...cartItems, {...productToAdd, quantity:1}];
} ;

const removeCartItem = (cartItems, cartItemToRemove) => {

    if(cartItemToRemove.quantity >1){
        return cartItems.map((cartItem)=>
            cartItem.id===cartItemToRemove.id 
            ? {...cartItemToRemove, quantity:cartItemToRemove.quantity -1}
            : cartItem
        )
    }

    return cartItems.filter((cartItem)=>cartItem.id !==cartItemToRemove.id)
} ;


const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem)=>cartItem.id !==cartItemToClear.id)
};

export const setIsCartOpen = (bool) => {
    return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);};


export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);

};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);

}