import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  category: [],
  show: false,
  action: ""
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        editTitle(state,action){
            state.product = action.payload.product;
            state.show = true,
            state.action = action.payload.act
        },
        closeModal(state, action){
            state.product = [],
            state.category = [],
            state.show = false,
            state.action = ""
        },
        editCategory(state, action){
            state.category = action.payload.category;
            state.show = true,
            state.action = action.payload.act
        }
    },

});
export default modalSlice.reducer;
export const { editTitle, closeModal, editCategory } = modalSlice.actions;
export const selectModal = (store) => store.modal;
