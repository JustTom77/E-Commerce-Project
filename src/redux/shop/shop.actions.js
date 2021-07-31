import ShopActionTypes from "./shop.types";

export const updateCollections = collectionsMap => ({
  type: ShopActionTypes.UPATE_COLLECTIONS,
  payload: collectionsMap,
});
