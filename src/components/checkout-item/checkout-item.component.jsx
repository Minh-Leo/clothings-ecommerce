import React from 'react';

import { connect } from 'react-redux';
import {
  addItem,
  removeItem,
  clearItemFromCart
} from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles';

const CheckoutItem = ({
  item,
  item: { imageUrl, name, price, quantity },
  addItem,
  removeItem,
  clearItemFromCart
}) => (
  <CheckoutItemContainer>
    <ImageContainer>
      <img src={imageUrl} alt='item' />
    </ImageContainer>
    <TextContainer>{name}</TextContainer>
    <QuantityContainer>
      <div onClick={() => removeItem(item)}>&#10094;</div>
      <span>{quantity}</span>
      <div onClick={() => addItem(item)}>&#10095;</div>
    </QuantityContainer>
    <TextContainer>{price * quantity}</TextContainer>
    <RemoveButtonContainer onClick={() => clearItemFromCart(item)}>
      &#10005;
    </RemoveButtonContainer>
  </CheckoutItemContainer>
);

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  clearItemFromCart: item => dispatch(clearItemFromCart(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
