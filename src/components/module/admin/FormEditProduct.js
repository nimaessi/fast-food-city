"use client"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { postData } from 'src/services/postData';
import { useState } from 'react';
import toast from 'react-hot-toast';

const FormEditProduct = ({data, handleClose}) => {


  const [inputs, setInputs] = useState(...data);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const submitHandler = async (event) => {
    event.preventDefault();
    const res = await postData("/api/products/edit",{...inputs, id: data[0].id,},"PATCH");
    res.error ? toast.error(res.error) : toast.success(res.message);
    handleClose();
  }
  return (
    <Form onSubmit = {submitHandler}>
        <Form.Group className="mb-3">
            <Form.Label>نام محصول</Form.Label>
            <Form.Control
              type = "text"
              name = "title"
              placeholder = "نام محصول"
              defaultValue = {data[0].title || ""}
              onChange = {handleChange}
              autoFocus/>
        </Form.Group>
        <Form.Group className = "mb-3">
            <Form.Label>جزییات محصول</Form.Label>
            <Form.Control
              name = "details"
              placeholder = "جزییات محصول"
              defaultValue = {data[0].details || ""}
              onChange = {handleChange} 
              as = "textarea" rows={3} />
        </Form.Group>
        <div className="d-grid gap-2">
            <Button variant = "warning" type = "submit">ذخیره تغییرات</Button>
        </div>
    </Form>
  )
}

export default FormEditProduct;