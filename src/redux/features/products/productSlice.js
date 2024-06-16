import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: ""
}
const fetchProducts = createAsyncThunk("product/fetchProducts",async(categoryId) =>{
    return fetch(`/api/products/${categoryId}`)
    .then((res) => res.json())
    .then((data) => data);
});
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProduct(state,action){
            state.products = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = ""
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false,
            state.products = action.payload,
            state.error = ""
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false,
            state.error = action.error.message
        })

    }

});
export default productSlice.reducer;
export const { setProduct } = productSlice.actions;
export const selectProduct = (store) => store.product;
export { fetchProducts };