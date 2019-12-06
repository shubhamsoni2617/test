import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import MiniCartLogo from '../../../assets/images/cart.svg';
import exploreImg from '../../../assets/images/explore.png';
import moment from 'moment';
import CartTimer from './CartTimer';
import Constants from '../../../shared/constants';
import BackButton from '../../../assets/images/next.svg';
import Utilities from '../../../shared/utilities';

class MiniCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    // if (Utilities.mobilecheck()) {
    if (!this.state.isOpen) {
      window.addEventListener('click', this.handleOutsideClick, false);
      this.node.classList.add('active');
    } else {
      window.removeEventListener('click', this.handleOutsideClick, false);
      this.node.classList.remove('active');
    }
    this.setState({ isOpen: !this.state.isOpen });
    // }
  };
  handleOutsideClick = e => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.toggle();
  };

  render() {
    const { data, cartDataCount, timeLeft } = this.props;
    console.log(timeLeft);
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
              {Utilities.mobilecheck() && (
                <button
                  type="button"
                  onClick={() => this.node.classList.remove('active')}
                >
                  <img src={BackButton} alt="back" className="img-fluid"></img>
                </button>
              )}
              <h3>My Cart ({data.length})</h3>
              <a href="/" className="cart-close">
                X
              </a>
            </div>
            <div className="cart-body">
              <ul>
                {!cartDataCount && <h3>No Item in Shopping Cart</h3>}
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
                          {moment(cartElem.product.productDate).format('ddd')},{' '}
                          {moment(cartElem.product.productDate).format(
                            'DD MMMM  YYYY'
                          )}
                          <br />
                          {moment(cartElem.product.productDate).format(
                            'hh:mm A'
                          )}
                        </span>
                        <h4 className="product-name">
                          {cartElem.product.productName}
                        </h4>
                        <p className="product-desc">{cartElem.product.venue}</p>
                        <span className="product-price">
                          (Qty: {cartElem.quantity})
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            {cartDataCount ? (
              <div className="cart-footer">
                <div className="cart-timer">
                  <span className="timer-label">Time left</span>
                  {timeLeft > 0 ? (
                    <CartTimer timeLeft={timeLeft} />
                  ) : (
                    <span className="timer-time">00:00</span>
                  )}
                </div>
                <div className="cart-checkout-btn">
                  <a href={Constants.SISTIC_GO_TO_CART}>Go to Cart</a>
                  {/* <button>Go to Cart</button> */}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </li>
    );
  }
}

export default MiniCart;
