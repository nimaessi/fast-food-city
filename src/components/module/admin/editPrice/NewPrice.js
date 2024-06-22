"use client"
import { Badge } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const NewPrice = ({setSelectPrice,id_product}) => {
    const handleClick = () => {
        setSelectPrice({id_size: 0, size: "none",id_product})
    }
  return (
    <Badge 
        bg = "warning" 
        text = "dark"
        className = "p-2 me-2 cursor-pointer" 
        onClick = {() => handleClick()}>
        <Icon.PlusCircle className = "me-1" />
        افزودن قیمت
    </Badge>
  )
}

export default NewPrice;