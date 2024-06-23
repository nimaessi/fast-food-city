"use client"
import { dictionary } from "@/constants/dictionary";
import { selectAllCategory } from "@/features/category/categorySlice";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { postData } from "src/services/postData";
import AddPrice from "./AddPrice";

const initialState = {
    title: "",
    details:"",
    prices: []
}

const FormNewProduct = () => {
    const {categories} = useSelector(selectAllCategory);
    const [inputs,setInputs] = useState(initialState);
    const handleChange = (event) => {
        setInputs((values) =>({...values, [event.target.name]:event.target.value}));
    }
    const handleSubmit = async(event) => {
        event.preventDefault();
        const res = await postData("/api/products/new",inputs,"POST");
        if(res.message){
            toast.success(res.message);
            setInputs(initialState);
        }else{
            toast.error(res.error);
        }
    }
    useEffect(() => {console.log(inputs)},[inputs])
  return (
    <Container fluid className = "py-5" >
        <Form 
            data-bs-theme = "dark" 
            className = "w-75 mx-auto" 
            onSubmit = {handleSubmit}>
            <Row className = "mb-3 mt-3">
                <Form.Group as = {Col} controlId="id_category">
                    <Form.Label className = "text-muted ms-2">دسته بندی محصول</Form.Label>
                    <Form.Select 
                        defaultValue = {0}
                        onChange = {handleChange} 
                        name = "id_category">
                        <option value = {0}>دسته بندی محصول را انتخاب کنید</option>
                        {categories?.map((category) =>(
                            <option key={category.id} value = {category.id}>{category.label}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row className="mb-3 mt-3">
                <Form.Group as = {Col} controlId="name">
                    <Form.Label className = "text-muted ms-2">نام محصول</Form.Label>
                    <Form.Control 
                        name ="title"
                        type = "text"
                        value = {inputs.title || ""}
                        onChange = {handleChange} 
                        placeholder = "نام محصول"
                        maxLength = {45} />
                </Form.Group>
            </Row>
            <Row className="mb-3 mt-5">
                <Form.Group as = {Col} controlId = "details">
                    <Form.Label className = "text-muted ms-2">توضیحات محصول</Form.Label>
                    <Form.Control 
                        name = "details"
                        as = "textarea" 
                        rows={3}
                        value = {inputs.details || ""}
                        onChange = {handleChange} 
                        placeholder = "توضیحات محصول"
                        maxLength = {350} />
                </Form.Group>
            </Row>
            <AddPrice inputs = {inputs} setInputs ={setInputs} />
            <div className="d-grid gap-2">
                <Button variant="warning" type = "submit">
                    ثبت محصول
                </Button>
            </div>
        </Form>
    </Container>
  )
}

export default FormNewProduct;