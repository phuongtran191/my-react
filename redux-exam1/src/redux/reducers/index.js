import { combineReducers } from 'redux';
import productReducer from './product.reducer';
import userReducer from './user.reducer';
import todolistReducer from './todolist.reducer';

export default combineReducers({
  productReducer: productReducer,
  userReducer: userReducer,
  todolistReducer: todolistReducer,
})
