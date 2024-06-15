import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/redux/features/products/productSlice";
import categoryReducer from "@/redux/features/category/categorySlice";
const store = configureStore({
    reducer: {
        products: productReducer,
        category: categoryReducer
    }
});
export default store;