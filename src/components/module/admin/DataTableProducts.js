"use client"
import { useEffect, useState } from "react";
import { Badge, Button, Row, Table } from "react-bootstrap";
import { e2p, sp } from "@/utils/replaceNumber";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { dictionary } from "@/constants/dictionary";
import Loader from "../loading";
import EditModal from "./EditModal";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCategory } from "@/features/category/categorySlice";
import { fetchProducts, selectProduct } from "@/features/products/productSlice";
import { editTitle } from "@/features/modal/modalSlice";
const DataTableProducts = () => {

    const {categories} = useSelector(selectAllCategory);
    const {products, error, loading} = useSelector(selectProduct);
    const dispatch = useDispatch();

    const handleRequest = async(event) => {
        if(event.target.value > 0){
           dispatch(fetchProducts(event.target.value));
        }
    }
    const EditProducts = (productId) => {
        const editProduct = products.filter((product) => product.id === productId);
        dispatch(editTitle({product: editProduct,act: "title"}))
    }
  return (
    <>
    <EditModal />
    <Table striped bordered responsive variant = "dark" className = "mt-5">
            <thead>
                <tr>
                    <th className = "text-center">شماره</th>
                    <th className = "text-center"> نام محصول</th>
                    <th className = "text-center">توضیحات</th>
                    <th className = "text-center">اندازه و قیمت</th>
                    <th className = "text-center">ویرایش مشخصات</th>
                    <th className = "text-center">ویرایش قیمت </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={3}>
                        <FloatingLabel
                            data-bs-theme = "dark" 
                            controlId = "category" 
                            label = "دسته بندی محصول">
                            <Form.Select aria-label = "دسته بندی محصول" onChange = {handleRequest}>
                                <option key = "none" value = "none">دسته بندی محصول انتخاب کنید</option>
                                { categories?.map((item) => (
                                    <option 
                                        key = {item.id} 
                                        value = {item.id}>
                                        {item.label}
                                    </option>
                                ))}
                            </Form.Select>
                        </FloatingLabel>
                    </td>
                    <td colSpan={3} className = "d-flex justify-content-center">
                    {loading && <Loader /> }
                    </td>
                    <td></td>
                    <td></td>
                </tr>
                {products?.map((item) => (
                    <tr key = {item.id}>
                        <td className = "text-center align-content-center">{e2p(item.id)}</td>
                        <td className = "text-center align-content-center">{item.title}</td>
                        <td className = "text-center align-content-center">
                            <p className = "w-100">{e2p(item.details)}</p>
                        </td>
                        <td className = "text-center d-flex flex-column">
                            {item.prices.map((price,index) => (
                                <Badge key = {index} bg = "warning" text = "dark" className = "mt-2" pill>
                                    {dictionary[price.size]}{sp(price.price)}
                                </Badge>
                            ))}
                        </td>
                        <td className = "text-center align-content-center">
                            <Button 
                                variant = "warning"
                                onClick = {() => EditProducts(item.id)}>ویرایش
                            </Button>
                        </td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
    </Table>
    </>
  )
}

export default DataTableProducts;