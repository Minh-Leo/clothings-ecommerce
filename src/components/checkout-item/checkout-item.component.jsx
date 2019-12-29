import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>{quantity}</span>
    <span className='price'>${price * quantity}</span>
    <div className='remove-button'>&#10005;</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});
export default connect(mapStateToProps)(CheckoutItem);
