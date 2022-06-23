import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import CartItem from '../components/CartItem'
import Button from '../components/Button'

import numberWithCommas from '../utils/numberWithCommas'

const Cart = () => {

    const cartItems = useSelector((state) => state.cartItems.value)

    const [totalProducts, setTotalProducts] = useState(0)

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.soldPrice)), 0))
        setTotalProducts(cartItems.length)
    }, [cartItems])

    return (
        <Helmet title="Giỏ hàng">
            <div className="cart">
                <div className="cart__list">
                    {
                        cartItems.map((item) => (
                            <CartItem item={item} key={item._id}/>
                        ))
                    }
                </div>
                <div className="cart__info">
                    <div className="cart__info__txt">
                        <p>
                            Bạn đang có {totalProducts} sản phẩm trong giỏ hàng
                        </p>
                        <div className="cart__info__txt__price">
                            <span>Thành tiền:</span> <span>{numberWithCommas(Number(totalPrice))}</span>
                        </div>
                    </div>
                    <div className="cart__info__btn">
                        <Button size="block">
                            Đặt hàng
                        </Button>
                        <Link to="/catalog">
                            <Button size="block">
                                Tiếp tục mua hàng
                            </Button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </Helmet>
    )
}

export default Cart
