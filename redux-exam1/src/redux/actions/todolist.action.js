import { createAction } from '@reduxjs/toolkit';
import { TODO_ACTION } from '../constants';

export const createToDoAction = createAction(TODO_ACTION.CREATE_TODO);
export const editToDoAction = createAction(TODO_ACTION.EDIT_TODO);
export const deleteToDoAction = createAction(TODO_ACTION.DELETE_TODO);
