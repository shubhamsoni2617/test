import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import MiniCartLogo from '../../../assets/images/cart.svg';
import exploreImg from '../../../assets/images/explore.png';

class MiniCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    if (!this.state.isOpen) {
      window.addEventListener('click', this.handleOutsideClick, false);
      this.node.classList.add('active');
    } else {
      window.removeEventListener('click', this.handleOutsideClick, false);
      this.node.classList.remove('active');
    }
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleOutsideClick = e => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.toggle();
  };

  render() {
    const { data, cartDataCount } = this.props;
    return (
      <li
        className="cart-icon"
        ref={node => {
          this.node = node;
        }}
      >
        <Link to="/" onClick={this.toggle}>
          <img src={MiniCartLogo} className="img-fluid" alt="cart" />
          <span>{cartDataCount || 0}</span>
        </Link>
        <div className="my-cart-popup">
          <div className="my-cart-wrapper">
            <div className="cart-head">
              <h3>My Cart ({data.length})</h3>
              <a href="/" className="cart-close">
                X
              </a>
            </div>
            <div className="cart-body">
              <ul>
                {data.map((cartElem, index) => {
                  return (
                    <li key={cartElem.product.productId}>
                      <div className="product-img">
                        <img
                          src={exploreImg}
                          className="img-fluid"
                          alt="cart"
                        />
                      </div>
                      <div className="product-details">
                        <span className="product-date-time">
                          {cartElem.product.productDate}
                        </span>
                        <h4 className="product-name">
                          {cartElem.product.productName}
                        </h4>
                        <p className="product-desc">{cartElem.product.venue}</p>
                        <span className="product-price">
                          S$ 250 (Qty: {cartElem.product.productName})
                        </span>
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
