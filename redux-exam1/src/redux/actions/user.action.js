import { createAction } from '@reduxjs/toolkit';
import { USER_ACTION } from '../constants';

export const loginAction = createAction(USER_ACTION.LOGIN);
export const logoutAction = createAction(USER_ACTION.LOGOUT);
export const registerAction = createAction(USER_ACTION.REGISTER);

// export const loginAction = (params) => {
//   return {
//     type: USER_ACTION.LOGIN,
//     payload: params,
//   };
// }

// export const logoutAction = (params) => {
//   return {
//     type: USER_ACTION.LOGOUT,
//     payload: params,
//   };
// }

// export const registerAction = (params) => {
//   return {
//     type: USER_ACTION.REGISTER,
//     payload: params,
//   };
// }
