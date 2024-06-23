"use client"
import { dictionary } from "@/constants/dictionary";
import { Badge, Button } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as Icon from "react-bootstrap-icons";
import { useState } from "react";
import { e2p } from "@/utils/replaceNumber";
import toast from "react-hot-toast";

const AddPrice = ({inputs,setInputs}) => {

    const [data,setData] = useState({size: "none", price: ""});
    const changeData = (event) => {
        setData((values) => ({...values,[event.target.name]:event.target.value}));
    }

    const clickHandler = () => {
        if(data.size !="none" && data.price > 0){
            const updatePrice = [...inputs.prices];
            updatePrice.push(data);
            setInputs((prevState) =>({...prevState, prices: updatePrice}));
            setData({});
        }else{
            toast.error("قیمت و سایز محصول را وارد کنید");
        }
    }

  return (
    <>
    <Row>
        <Col className = "d-flex justify-content-center">
        {inputs.prices.map((price,index) =>(
            <Badge 
                bg = "warning" 
                text = "dark"
                key = {index} 
                className = "ms-2 p-2">
                    {dictionary[price.size] === "" ? "بدون سایز": dictionary[price.size]}
                    {price.price > 0 ? e2p(price.price): ""}
            </Badge>
        ))}
        </Col>
    </Row>
    <Row className="mb-3 mt-5 align-items-center">
        <Form.Group as={Col} className = "mt-1" controlId="formGridZip">
            <Form.Label className = "text-muted ms-2">قیمت</Form.Label>
            <Form.Control 
                placeholder ="قیمت" 
                name="price"
                value = {data?.price || ""} 
                onChange={changeData}  />
        </Form.Group>
        <Form.Group as={Col} className = "mt-1" controlId="formGridState">
            <Form.Label className = "text-muted ms-2">سایز محصول</Form.Label>
            <Form.Select 
                value = {data?.size || "none"} 
                name = "size" 
                onChange={changeData}>
                <option value = "none">سایز محصول را انتخاب کنید</option>
                {Object.entries(dictionary).map(([key, value]) => (
                    <option key= {key} value = {key}>{value ? value : " بدون سایز"}</option>
                ))}
            </Form.Select>
        </Form.Group>
        <Col xs = "auto">
             <Button variant = "warning" className = "mt-5" onClick = {() => clickHandler()}>
                <Icon.Check />
             </Button>
        </Col>
    </Row>
    </>
  )
}

export default AddPrice;