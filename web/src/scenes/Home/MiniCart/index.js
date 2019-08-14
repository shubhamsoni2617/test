import React, { Component } from 'react';
import './style.scss';
import MiniCartLogo from '../../../assets/images/cart.svg';
import exploreImg from '../../../assets/images/explore.png';

class MiniCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        if (!this.state.isOpen) {
            window.addEventListener('click', this.handleOutsideClick, false);
            this.node.classList.add("active");
        } else {
            window.removeEventListener('click', this.handleOutsideClick, false);
            this.node.classList.remove("active");
        }
        this.setState({ isOpen: !this.state.isOpen })
    }
    handleOutsideClick = (e) => {
        if (this.node.contains(e.target)) {
            return;
        }
        this.toggle();
    }

    render() {

        const { data } = this.props;
        const { isOpen } = this.state;

        return (
            <li className="cart-icon" onClick={this.toggle} ref={node => { this.node = node; }}>
                <a><img src={MiniCartLogo} className="img-fluid" alt="cart"/><span>{data.length}</span></a>
                <div className="my-cart-popup">
                    <div className="my-cart-wrapper">
                        <div className="cart-head">
                            <h3>My Cart ({data.length})</h3>
                            <a href="/" className="cart-close">X</a>
                        </div>
                        <div className="cart-body">
                            <ul>
                                {data.map((cart, index) => {
                                    return (
                                        <li key={cart.id}>
                                            <div className="product-img">
                                                <img src={exploreImg} className="img-fluid"
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
                                })}
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
            </li>
        );
    }
}

export default MiniCart;
