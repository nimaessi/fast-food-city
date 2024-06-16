import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/redux/features/products/productSlice";
import categoryReducer from "@/redux/features/category/categorySlice";
import modalReducer from "@/features/modal/modalSlice";
const store = configureStore({
    reducer: {
        product: productReducer,
        category: categoryReducer,
        modal: modalReducer
    }
});
export default store;