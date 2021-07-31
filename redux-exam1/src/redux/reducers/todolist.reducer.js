import { createReducer } from '@reduxjs/toolkit';
import { TODO_ACTION } from '../constants';

const initialState = {
    todoList: [
        {
            title: "basic 1",
            description: "javascript can ban",
          }
    ],
    todoDetail: {},
}

const todolistReducer = createReducer(initialState, {
    [TODO_ACTION.CREATE_TODO]: (state, action) => {
        return {
            ...state,
            todoList: [
                action.payload,
                ...state.todoList,
            ],
        }
    },
    [TODO_ACTION.EDIT_TODO]: (state, action) => {
        const { id } = action.payload;
        const newTodoList = [...state.todoList];
        const todoIndex = newTodoList.findIndex((todo) => todo.id === id);
        newTodoList.splice(todoIndex, 1, action.payload);
        return {
            ...state,
            todoList: [...newTodoList],
        };
    },
    [TODO_ACTION.DELETE_TODO]: (state, action) => {
        const { id } = action.payload;
        const newTodoList = [...state.todoList];
        const todoIndex = newTodoList.findIndex((todo) => todo.id === id);
        newTodoList.splice(todoIndex, 1);
        return {
            ...state,
            todoList: [...newTodoList],
        };
    },
});


export default todolistReducer;