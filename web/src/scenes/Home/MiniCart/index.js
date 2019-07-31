import React, { Component } from 'react';
import './style.scss';


class MiniCart extends Component {

    render() {

        const { miniCart } = this.props;

        return (
            <div className="my-cart-popup">
                <div className="my-cart-wrapper">
                    <div className="cart-head">
                        <h3>My Cart ({miniCart.length})</h3>
                        <a href="/" className="cart-close">X</a>
                    </div>
                    <div className="cart-body">
                        <ul>
                            {
                                miniCart.map((cart, index) => {
                                    return (
                                        <li key={cart.id}>
                                            <div className="product-img">
                                                <img src={cart.img} className="img-fluid"
                                                    alt="cart" />
                                            </div>
                                            <div className="product-details">
                                                <span className="product-date-time">Fri, 19 Apr- Sun, 19 May 2019</span>
                                                <h4 className="product-name">The Phantom Of The Opera</h4>
                                                <p className="product-desc">Sands Theatre, Marina Bay Sands</p>
                                                <span className="product-price">S$ 250 (Qty: 1)</span>
                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div className="cart-footer">
                        <div className="cart-timer">
                            <span className="timer-label">Time left</span>
                            <span className="timer-time">14:59</span>
                        </div>
                        <div className="cart-checkout-btn">
                            <button>Go to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MiniCart;