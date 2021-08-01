import { v4 as uuidv4 } from 'uuid';
import { CREATE_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, GET_PRODUCT_LIST } from '../const';

export const initProducts = {
    productList: [
        {
            id: uuidv4(),
            name: "iPhone 11",
            price: 16990000,
            image: "https://source.unsplash.com/random/200x250",
        },
        {
            id: uuidv4(),
            name: "iPhone 11 Pro",
            price: 28000000,
            image: "https://source.unsplash.com/random/200x250",
        },
        {
            id: uuidv4(),
            name: "iPhone 11 Pro Max",
            price: 26000000,
            image: "https://source.unsplash.com/random/200x250",
        },
        {
            id: uuidv4(),
            name: "iPhone 12 Mini",
            price: 17000000,
            image: "https://source.unsplash.com/random/200x250",
        },
        {
            id: uuidv4(),
            name: "iPhone 12",
            price: 23000000,
            image: "https://source.unsplash.com/random/200x250",
        },
        {
            id: uuidv4(),
            name: "iPhone 12 Pro",
            price: 30000000,
            image: "https://source.unsplash.com/random/200x250",
        },
        {
            id: uuidv4(),
            name: "iPhone 12 Pro Max",
            price: 33000000,
            image: "https://source.unsplash.com/random/200x250",
        },
        {
            id: uuidv4(),
            name: "iPhone 13",
            price: 46000000,
            image: "https://source.unsplash.com/random/200x250",
        },
    ],
    productDetail: {},
};
function productReducer(state = initProducts, action) {
    switch(action.type) {
        case GET_PRODUCT_LIST: {
            return state;
        }
        case CREATE_PRODUCT: {
            return {
                ...state,
                productList: [
                    action.payload,
                    ...state.productList,
                ],
            }
        }
        case EDIT_PRODUCT: {
            const { id } = action.payload;
            const newProductList = state.productList;
            const productIndex = newProductList.findIndex((product) => product.id === id);
            newProductList.splice(productIndex, 1, action.payload);
            return {
                ...state,
                productList: [...newProductList],
            };
        }
        case DELETE_PRODUCT: {
            const { id } = action.payload;
            const newProductList = state.productList;
            const productIndex = newProductList.findIndex((product) => product.id === id);
            newProductList.splice(productIndex, 1);
            return {
                ...state,
                productList: [...newProductList],
            };
        }
        default:
            return state;
    }
}
export default productReducer;