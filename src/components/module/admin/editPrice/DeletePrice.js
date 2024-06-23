"use client"
import { fetchProducts } from "@/features/products/productSlice";
import { Button } from "react-bootstrap";
import * as Icon from"react-bootstrap-icons";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { postData } from "src/services/postData";

const DeletePrice = ({id_size,inputs,setInputs,setSelectPrice,id_category}) => {
    const dispatch = useDispatch();
    const handleDelete = async (id_size) => {
        if(id_size > 0){
            const res = await postData("/api/products/edit/price",{id_size},"DELETE");
            if(res.message){
                setInputs(() => (inputs.splice(inputs.findIndex((arrow) => arrow.id_size === id_size),1)));
                setSelectPrice({});
                dispatch(fetchProducts(id_category));
                toast.success(res.message);
            }else{
                toast.error(res.error);
            }
        }
    }
  return (
    <Button variant = "danger" className = "mt-4 ms-2" onClick = {() => handleDelete(id_size)}>
        <Icon.TrashFill/>
    </Button>
  )
}

export default DeletePrice;