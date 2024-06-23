"use client"
import { dictionary } from '@/constants/dictionary';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as Icon from "react-bootstrap-icons";
import { useState } from 'react';
import { Badge } from 'react-bootstrap';
import { sp } from '@/utils/replaceNumber';
import { postData } from 'src/services/postData';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '@/features/products/productSlice';
import DeletePrice from './DeletePrice';
import NewPrice from './NewPrice';
const FormEditPrice = ({data, handleClose}) => {

    const {prices,id,id_category} = data[0];
    const [inputs,setInputs] = useState([...prices]);
    const [selectPrice, setSelectPrice] = useState({});
    const dispatch = useDispatch();

    const handleSelect = (idSize) => {
        const selectPriceObject = inputs.filter((input) => input.id_size === +idSize);
        setSelectPrice(selectPriceObject[0]);
    }
    const handleChange = (event) => {
        setSelectPrice((values) =>({...values, [event.target.name]:event.target.value}));
    }
    const saveChanges = async (event) => {
        event.preventDefault();
        if(selectPrice.size != "none" && selectPrice.price > 0){
            const res = await postData("/api/products/edit/price",selectPrice,"POST");
            toast.success(res.message);
            dispatch(fetchProducts(id_category));
            if(selectPrice.id_size === 0 && res.message){
                handleClose();
            }
            setInputs(() => (inputs.map(item => {
                if (item.id_size === selectPrice.id_size) {
                  return { ...item, price: selectPrice.price };
                }
                return item;
              })));
        }else{
            toast.error("لطفا سایز و قیمت محصول را مشخص کنید")
        }
    }
    return (
        <>
        <Row>
            <Col className = "mt-3 text-center">
                {inputs.length < 3 && 
                    <NewPrice 
                        setSelectPrice = {setSelectPrice} 
                        id_product = {id} />
                }
                {inputs?.map((price,index) => (
                    <Badge
                        onClick = {() => handleSelect(price.id_size)}
                        className = "p-2 me-3 cursor-pointer" 
                        bg = "warning" 
                        text = "dark" 
                        key = {index}>
                        <span>{sp(price.price)}</span>
                        <span className = "ms-2">{dictionary[price.size]}</span>
                    </Badge>
                ))}
            </Col>
        </Row>
        {Object.keys(selectPrice).length > 0 &&
        <Form onSubmit = {saveChanges}>
            <Row className="mb-3 align-items-center">
                <Form.Group as={Col}>
                    <Form.Label>قیمت</Form.Label>
                    <Form.Control
                        value = {selectPrice?.price || 0}
                        onChange={handleChange}
                        placeholder ="قیمت"
                        name = "price" />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>State</Form.Label>
                    <Form.Select name = "size" value = {selectPrice?.size || "none"} onChange = {handleChange}>
                        <option value = "none">انتخاب اندازه</option>
                        {Object.entries(dictionary).map(([key, value]) => (
                            <option key= {key} value = {key}>{value ? value : " بدون سایز"}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Col xs="auto">
                    <Button variant = "warning" className = "mt-4" type="submit">
                        <Icon.CheckLg/>
                    </Button>
                    {inputs.length > 1 &&
                    <DeletePrice 
                        id_size = {selectPrice.id_size}
                        inputs = {inputs}
                        setInputs = {setInputs}
                        setSelectPrice = {setSelectPrice}
                        id_category = {id_category} />
                    }
                </Col>
            </Row>
        </Form>
        }
        </>
    )
}

export default FormEditPrice;