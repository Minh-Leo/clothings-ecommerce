import React from 'react';

import { connect } from 'react-redux';
import {
  addItem,
  removeItem,
  clearItemFromCart
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({
  item,
  item: { imageUrl, name, price, quantity },
  addItem,
  removeItem,
  clearItemFromCart
}) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
      <div className='arrow' onClick={() => removeItem(item)}>
        &#10094;
      </div>
      <span className='value'>{quantity}</span>
      <div className='arrow' onClick={() => addItem(item)}>
        &#10095;
      </div>
    </span>
    <span className='price'>${price * quantity}</span>
    <div className='remove-button' onClick={() => clearItemFromCart(item)}>
      &#10005;
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  clearItemFromCart: item => dispatch(clearItemFromCart(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
