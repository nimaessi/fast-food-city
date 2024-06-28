"use client"
import { fetchCategories } from '@/features/category/categorySlice';
import { closeModal, selectModal } from '@/features/modal/modalSlice';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { postData } from 'src/services/postData';

const FormEditCategory = () => {

    const {category, show, action } = useSelector(selectModal);
    const [inputs,setInputs] = useState({...category});
    const dispatch = useDispatch();
    const handleChange = (event) => {
        if(event.target.name === "disable"){
            setInputs((values) =>({...values,[event.target.name]:event.target.checked}));
        }else{
            setInputs((values) =>({...values,[event.target.name]:event.target.value}));
        }
    }
    const saveChanges = async (event)=> {
        event.preventDefault();
        const res = await postData("/api/category/edit/label",inputs,"POST");
        if(res.message){
            toast.success(res.message);
            dispatch(fetchCategories());
            dispatch(closeModal());

        }else{
            toast.error(res.error);
        }
    }
  return (
    <Form data-bs-theme = "dark" onSubmit = {saveChanges}>
        <Row className="mb-3">
            <Form.Group as={Col}>
                <Form.Label className = "text-muted ms-1">نام دسته بندی</Form.Label>
                <Form.Control 
                    name = "label"
                    value = {inputs.label || ""}
                    onChange={handleChange}  
                    type="text" 
                    placeholder="نام دسته بندی" />
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col} className = "mt-4">
                <Form.Label className = "text-muted ms-1">نام دسته بندی به انگلیسی</Form.Label>
                <Form.Control  
                    name = "slug" 
                    type="text"
                    value = {inputs.slug || ""}
                    onChange={handleChange}   
                    placeholder="نام دسته بندی به انگلیسی" />
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col} className = "mt-5">
                <Form.Label className = "text-muted ms-1">غیرفعال کردن دسته بندی</Form.Label>
                <Form.Check
                    type = "switch"
                    name = "disable"
                    checked = {inputs.disable || false} 
                    onChange={handleChange}  
                    label = "غیرفعال کردن دسته بندی"
                />
            </Form.Group>
        </Row>
        <Row>
            <Button variant = "warning" type = "submit" className = "mt-3">ذخیره</Button>
        </Row>
    </Form>
  )
}

export default FormEditCategory;