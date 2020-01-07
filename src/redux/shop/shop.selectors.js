import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParams =>
  createSelector([selectCollections], collections =>
    collections ? collections[collectionUrlParams] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);
// the double bangs !!, return a boolean value with an object. If object is there (even if empty object) -> true
export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);
