import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import cart from '../assets/images/icon/cart.png';
import heart from '../assets/images/icon/heart.png';


import { useSelector } from 'react-redux';

HeaderUserInfo.propTypes = {
    token: PropTypes.string,
    onLogout: PropTypes.func,
};

function HeaderUserInfo(props) {
    const { token, onLogout } = props
    const cartLength = useSelector((state) => state.cartItems.value.length)

    const history = useHistory()

    function handleLogout() {
        if (onLogout) {
            onLogout()
            history.push('/')
        }
    }

    return (
        <Dropdown.Menu>
            {
                token != undefined
                    ?
                    <>
                        <Dropdown.Item href="/user-info">Xem thông tin</Dropdown.Item>
                        <Dropdown.Item href="/order">Xem đơn hàng</Dropdown.Item>
                        <Dropdown.Item onClick={handleLogout}>
                            đăng xuất
                        </Dropdown.Item>
                    </>
                    :
                    <>
                        <Dropdown.Item href="/cart">
                            <img src={cart} alt="" /> Giỏ hàng ({cartLength})
                        </Dropdown.Item>
                        <Dropdown.Item href="/cart">
                            <img src={heart} alt="" /> Yêu thích
                        </Dropdown.Item>
                        <Dropdown.Item href="/login">
                            <FontAwesomeIcon className="userCircle" icon={faCircleUser} /> Đăng nhập
                        </Dropdown.Item>
                    </>
            }
        </Dropdown.Menu>

    );
}

export default HeaderUserInfo;