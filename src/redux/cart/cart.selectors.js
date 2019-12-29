import { createSelector } from 'reselect';

// iput selector: take the state and return only 1 needed slice from state
const selectCart = state => state.cart;

// createSelector take 2 arguments, 1st is array of input selector, 2nd is function return the value we want --> its now a memoized selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.price * cartItem.quantity,
    0
  )
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);
