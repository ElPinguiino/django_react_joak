import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstant';

export const addToCart = (product_id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/product/${product_id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data.product_id,
            name: data.product_name,
            image: data.product_image,
            price: data.product_price,
            qty
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}