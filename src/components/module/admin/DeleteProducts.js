"use client"
import { fetchProducts } from "@/features/products/productSlice";
import { Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { postData } from "src/services/postData";

const DeleteProducts = ({idProduct,idCategory}) => {

  const dispatch = useDispatch();
  const handleClick = async (id_pr) => {
    const res = await postData("/api/products/edit/deleteProduct",{id_product: id_pr},"DELETE");
    if(res.message){
      toast.success(res.message);
      dispatch(fetchProducts(idCategory));
    }else{
      toast.error(res.error);
    }
  }
  return (
    <Button 
      variant = "danger" 
      className = "fs-12"
      onClick={() => handleClick(idProduct)}>حذف محصول</Button>
  )
}

export default DeleteProducts;