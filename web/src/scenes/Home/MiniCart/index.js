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
import Image from '../../../shared/components/Image';
import HomeService from '../../../shared/services/HomeService';

class MiniCart extends Component {
  state = {
    isOpen: false,
    productImages: [],
    productImage: ''
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentDidUpdate(prevProp) {
    if (prevProp.data && prevProp.data.length !== this.props.data.length) {
      let images = [];

      this.props.data.map((cartElem, index) => {
        let params = {
          client: 1,
          pid: cartElem.product.productId
        };

        HomeService.getProductImage(params).then(res => {
          images.push(res.data.data.thumb_image);
          if (this.props.data.length - 1 == index) {
            this.setState({
              productImages: [...images]
            });
          }
        });
      });
    }
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
  }
  toggle = () => {
    window.removeEventListener('click', this.handleOutsideClick, false);
    this.node.classList.remove('active');

    this.setState({ isOpen: false });
  };
  handleOutsideClick = e => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.setState({ isOpen: false });
  };

  addFixedBody = () => {
    if (Utilities.mobilecheck()) {
      document.getElementsByTagName('body')[0].classList.add('fixed-body');
    }
  };
  removeFixedBody = () => {
    if (Utilities.mobilecheck()) {
      document.getElementsByTagName('body')[0].classList.remove('fixed-body');
    }
  };

  render() {
    const { data, cartDataCount, timeLeft } = this.props;

    return (
      <li
        ref={node => {
          this.node = node;
        }}
        className={`cart-icon ${this.state.isOpen ? 'active' : ''}`}
      >
        <a
          to="/"
          onClick={e => {
            e.preventDefault();
            this.setState(
              {
                isOpen: !this.state.isOpen
              },
              () => {
                this.addFixedBody();
              }
            );
          }}
        >
          <img src={MiniCartLogo} className="img-fluid" alt="cart" />
          <span>{data.reduce((el, val) => el + val.quantity, 0) || 0}</span>
        </a>
        <div className="my-cart-popup">
          <div className="my-cart-wrapper">
            <div className="cart-head">
              {Utilities.mobilecheck() && (
                <button
                  type="button"
                  onClick={() => {
                    this.setState(
                      {
                        isOpen: false
                      },
                      () => {
                        this.removeFixedBody();
                      }
                    );
                  }}
                >
                  <img src={BackButton} alt="back" className="img-fluid"></img>
                </button>
              )}
              <h3>
                My Cart ({data.reduce((el, val) => el + val.quantity, 0) || 0})
              </h3>
              <a href="/" className="cart-close">
                X
              </a>
            </div>
            <div className="cart-body">
              <ul>
                {!cartDataCount && (
                  <h3 className="no-items">No Item in Shopping Cart</h3>
                )}
                {data.map((cartElem, index) => {
                  console.log(this.state.productImages[index]);
                  return (
                    <li key={cartElem.product.productId}>
                      <div className="product-img">
                        <Image
                          src={
                            this.state.productImages[index]
                              ? this.state.productImages[index]
                              : ''
                          }
                          className="img-fluid"
                          alt="cart"
                          // type="Smaller"
                        />
                      </div>
                      <div className="product-details">
                        <span className="product-date-time">
                          {moment(cartElem.product.productDate).format('ddd')},{' '}
                          {moment(cartElem.product.productDate).format(
                            'DD MMMM  YYYY'
                          )}{' '}
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
                  <a
                    href={Constants.SISTIC_GO_TO_CART}
                    target="_blank"
                    onClick={() => {
                      this.setState(
                        {
                          isOpen: false
                        },
                        () => {
                          this.removeFixedBody();
                        }
                      );
                    }}
                  >
                    Go to Cart
                  </a>
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
