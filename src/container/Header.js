import React from 'react';
import logo from '../img/logo.svg';
import cart from '../img/cart.png';
import user from '../img/user.png';

const Header = () => {
    return (
        <header>
            <div className="headerLeft">
                <img width={40} height={40} src={logo} alt=""/>
                <div className="headerInfo">
                    <h3>My Shop</h3>
                    <p>Магазин одежды</p>
                </div>
            </div>
            <ul className='headerRight'>
                <li className='mr'>
                    <img width={24} height={24} src={cart} alt=""/>
                    <span>1400 тенге</span>
                </li>
                <li>
                    <img width={25} height={25} src={user} alt=""/>
                </li>
            </ul>
        </header>

    )
};

export default Header;