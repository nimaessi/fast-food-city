import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
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
            state.show = false,
            state.action = ""
        }
    },

});
export default modalSlice.reducer;
export const { editTitle, closeModal } = modalSlice.actions;
export const selectModal = (store) => store.modal;
