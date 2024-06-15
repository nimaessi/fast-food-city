import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  loading: false,
  error: ""
}
const fetchCategories = createAsyncThunk("category/fetchCategories",async() =>{
    return fetch("/api/category/getCategories")
    .then((res) => res.json())
    .then((data) => data);
});
const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategory(state,action){
            state.categories = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.loading = true;
            state.error = ""
        })
        .addCase(fetchCategories.fulfilled, (state, action) => {
            state.loading = false,
            state.categories = action.payload,
            state.error = ""
        })
        .addCase(fetchCategories.rejected, (state, action) => {
            state.loading = false,
            state.error = action.error.message
        })

    }
});
export default categorySlice.reducer;
export const { setCategory } = categorySlice.actions;
export const selectAllCategory = (store) => store.category;
export { fetchCategories };