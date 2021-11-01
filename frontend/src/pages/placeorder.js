import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Products from '../components/PlaceOrder';
import Navbar from '../components/PlaceOrder/Navbar';
import FilterButtons from '../components/PlaceOrder/buttons';
import PlaceOrderCart from '../components/PlaceOrder/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions'

const PlaceOrder = () => {
    // const [products, setProducts] = useState([]);
    // const [cart, setCart] = useState({});
    const productList = useSelector(state => state.productList)
    const { error, loading, products } = productList;
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProducts())

    }, [dispatch])

    return (
        <>
            <Navbar />
            <FilterButtons />
            <Products products={products} error={error} loading={loading}/>
        </>
    )
}

export default PlaceOrder
