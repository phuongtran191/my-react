import { CREATE_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, GET_PRODUCT_LIST } from "../const"


export const actGetProductList = (params) => {
    return {
        type: GET_PRODUCT_LIST,
        payload: params,
    }
}
export const actCreateProduct = (params) => {
    return {
        type: CREATE_PRODUCT,
        payload: params,
    }
}
export const actEditProduct = (params) => {
    return {
        type: EDIT_PRODUCT,
        payload: params,
    }
}
export const actDeleteProduct = (params) => {
    return {
        type: DELETE_PRODUCT,
        payload: params,
    }
}