import { createSlice } from "@reduxjs/toolkit";

const initialPhotos = [
  {
    id: 1,
    categoryId: 5,
    photo: "https://picsum.photos/id/730/300/300",
    title: "Lorem 1"
  },
  {
    id: 2,
    categoryId: 3,
    photo: "https://picsum.photos/id/287/300/300",
    title: "Lorem 2"
  },
  {
    id: 3,
    categoryId: 1,
    photo: "https://picsum.photos/id/859/300/300",
    title: "Lorem 3"
  },
  {
    id: 4,
    categoryId: 2,
    photo: "https://picsum.photos/id/110/300/300",
    title: "Lorem 4"
  },
];

const photo = createSlice({
  name: "photo",
  initialState: initialPhotos,
  reducers: {
    addPhoto: (state, action) => {
      state.push(action.payload); // ko co return !!!
    },
    updatePhoto: (state, action) => {
      const newPhoto = action.payload;
      const photoIndex = state.findIndex(photo => photo.id === newPhoto.id);
      if (photoIndex >= 0) {
        state[photoIndex] = newPhoto;
      }
    },
    removePhoto: (state, action) => {
      const removedPhotoId = action.payload;
      const newState = [...state];
      const photoIndex = newState.findIndex(photo => photo.id === removedPhotoId)
      newState.splice(photoIndex, 1);
      return [...newState];
    }
  }
});

const { reducer, actions } = photo;
export const { addPhoto, updatePhoto, removePhoto } = actions;
export default reducer;

// const todolistReducer = createReducer(initialState, {
//   [TODO_ACTION.CREATE_TODO]: (state, action) => {
//       return {
//           ...state,
//           todoList: [
//               action.payload,
//               ...state.todoList,
//           ],
//       }
//   },
//   [TODO_ACTION.EDIT_TODO]: (state, action) => {
//       const { id } = action.payload;
//       const newTodoList = [...state.todoList];
//       const todoIndex = newTodoList.findIndex((todo) => todo.id === id);
//       newTodoList.splice(todoIndex, 1, action.payload);
//       return {
//           ...state,
//           todoList: [...newTodoList],
//       };
//   },
//   [TODO_ACTION.DELETE_TODO]: (state, action) => {
//       const { id } = action.payload;
//       const newTodoList = [...state.todoList];
//       const todoIndex = newTodoList.findIndex((todo) => todo.id === id);
//       newTodoList.splice(todoIndex, 1);
//       return {
//           ...state,
//           todoList: [...newTodoList],
//       };
//   },
// });