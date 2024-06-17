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
const FormEditPrice = ({data, handleClose}) => {
    const {prices,id} = data[0];
    const [inputs,setInputs] = useState([...prices]);
    const [selectPrice, setSelectPrice] = useState({});
    const handleSelect = (idSize) => {
        console.log(inputs[0])
        setSelectPrice(() =>inputs.filter((input) => input.id_size === +idSize));
    }
    return (
        <>
        <Row>
            <Col className = "mt-3 text-center">
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
        {selectPrice.length > 0 &&
        <Form>
            <Row className="mb-3 align-items-center">
                <Form.Group as={Col}>
                    <Form.Label>قیمت</Form.Label>
                    <Form.Control
                        value = {selectPrice[0]?.price || 0}
                        onChange={()=> console.log("click")}
                        placeholder ="قیمت"
                        name = "price" />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>State</Form.Label>
                    <Form.Select value = {selectPrice[0]?.size || "none"} onChange = {() => console.log("Size")}>
                        <option value = "none">انتخاب اندازه</option>
                        {Object.entries(dictionary).map(([key, value]) => (
                            <option key= {key} value = {key}>{value ? value : " بدون اندازه"}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Col xs="auto">
                    <Button variant = "warning" className = "mt-4" type="submit">
                        <Icon.CheckLg/>
                    </Button>
                </Col>
            </Row>
        </Form>
        }
        </>
    )
}

export default FormEditPrice;