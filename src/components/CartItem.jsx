import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'
import { updateItem, removeItem } from '../redux/shopping-cart/cartItemsSlide'

import numberWithCommas from '../utils/numberWithCommas'
import { Link } from 'react-router-dom'

const CartItem = props => {

    const dispatch = useDispatch()

    const {item} = props

    const updateQuantity = (opt) => {
        if (opt === '+') {
            dispatch(updateItem({...item, quantity: item.quantity + 1}))
        }
        if (opt === '-') {
            dispatch(updateItem({...item, quantity: item.quantity - 1}))
        }
    }

    // const updateCartItem = () => {
    //     dispatch(updateItem({...item, quantity: quantity}))
    // }

    const removeCartItem = () => {
        console.log('removeCartItem')
        dispatch(removeItem(item))
    }

    return (
        item ? 
        <div className="cart__item" >
            <div className="cart__item__image">
                <img src={`${process.env.REACT_APP_IMAGEURL}${item.product.image}`} alt="" />
            </div>
            <div className="cart__item__info">
                <div className="cart__item__info__name">
                    <Link to={`/product/${item._id}`}>
                        {`${item.product.name} - ${item.quantity} ${item.product.unit}`}
                    </Link>
                </div>
                <div className="cart__item__info__price">
                    {numberWithCommas(item.soldPrice)}
                </div>
                <div className="cart__item__info__quantity">
                    <div className="product__info__item__quantity">
                        <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('-')}>
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="product__info__item__quantity__input">
                            {item.quantity}
                        </div>
                        <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('+')}>
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="cart__item__del">
                    <i className='bx bx-trash' onClick={() => removeCartItem()}></i>
                </div>
            </div>
        </div>
        : <div>loding</div>
    )
}

CartItem.propTypes = {
    item: PropTypes.object
}

export default CartItem
