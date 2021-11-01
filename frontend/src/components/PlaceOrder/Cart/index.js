import React, {useEffect} from 'react';
import { Link  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../actions/cartActions'

const PlaceOrderCart = ({ match, location, history}) => {
    return (
        <div>
            <h1>Cart</h1>
        </div>
    )
}

export default PlaceOrderCart
