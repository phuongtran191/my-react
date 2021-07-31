import { createReducer } from '@reduxjs/toolkit';
import { PRODUCT_ACTION } from '../constants';

const initialState = {
  productList: [
    {
      id: 1,
      name: 'iPhone 12',
      price: 10000000
    },
    {
      id: 2,
      name: 'iPhone 12 Pro',
      price: 20000000
    },
    {
      id: 3,
      name: 'iPhone 12 Mini',
      price: 5000000
    },
    {
      id: 4,
      name: 'Galaxy S21',
      price: 10000000
    },
    {
      id: 5,
      name: 'Galaxy Note 20',
      price: 20000000
    },
    {
      id: 6,
      name: 'Galaxy S10',
      price: 5000000
    }
  ],
  productDetail: {},
}

const productReducer = createReducer(initialState, {
  [PRODUCT_ACTION.CREATE_PRODUCT]: (state, action) => {
    return {
      ...state,
      productList: [
        action.payload,
        ...state.productList,
      ],
    }
  },
  [PRODUCT_ACTION.EDIT_PRODUCT]: (state, action) => {
    const { id } = action.payload;
    const newProductList = [...state.productList];
    const productIndex = newProductList.findIndex((product) => product.id === id);
    newProductList.splice(productIndex, 1, action.payload);
    return {
      ...state,
      productList: [...newProductList],
    };
  },
  [PRODUCT_ACTION.DELETE_PRODUCT]: (state, action) => {
    const { id } = action.payload;
    const newProductList = [...state.productList];
    const productIndex = newProductList.findIndex((product) => product.id === id);
    newProductList.splice(productIndex, 1);
    return {
      ...state,
      productList: [...newProductList],
    };
  },
});


export default productReducer;
