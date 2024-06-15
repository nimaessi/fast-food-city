"use client"
import { useEffect, useState } from "react";
import { Badge, Button, Row, Table } from "react-bootstrap";
import { e2p, sp } from "@/utils/replaceNumber";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { dictionary } from "@/constants/dictionary";
import Loader from "../Loader";
import EditModal from "./EditModal";
const DataTableProducts = ({ category, showModal, setShowModal }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editProduct, setEditProduct] = useState([{title: "", details: ""}]);
    const handleRequest = async(event) => {
        if(event.target.value > 0){
            setLoading(true);
            setData([]);
            const res = await fetch(`/api/products/${event.target.value}`);
            const result = await res.json();
            setData(result);
            setLoading(false);
        }
    }
    const EditProducts = (productId) => {
        setEditProduct(() => data.filter((product) => product.id === productId));
        setShowModal(true);
    }
    useEffect(() => {
        async function refetch () {
            if(!showModal & data.length > 0){
                setLoading(true);
                setData([]);
                const res = await fetch(`/api/products/${data[0]?.id_category}`);
                const result = await res.json();
                console.log("RES async",result)
                setData(result);
                setLoading(false);
            }
        }
        refetch();
    },[showModal])
  return (
    <>
    <EditModal 
        showModal = {showModal} 
        setShowModal = {setShowModal}
        setData = {setData}
        product = {editProduct}  />
    <Table striped bordered responsive variant = "dark" className = "mt-5">
            <thead>
                <tr>
                    <th className = "text-center">شماره</th>
                    <th className = "text-center"> نام محصول</th>
                    <th className = "text-center">توضیحات</th>
                    <th className = "text-center">اندازه و قیمت</th>
                    <th className = "text-center">ویرایش</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={2}>
                        <FloatingLabel
                            data-bs-theme = "dark" 
                            controlId = "category" 
                            label = "دسته بندی محصول">
                            <Form.Select aria-label = "دسته بندی محصول" onChange = {handleRequest}>
                                <option key = "none" value = "none">دسته بندی محصول انتخاب کنید</option>
                                { category?.map((item) => (
                                    <option 
                                        key = {item.id} 
                                        value = {item.id}>
                                        {item.label}
                                    </option>
                                ))}
                            </Form.Select>
                        </FloatingLabel>
                    </td>
                    <td className = "d-flex justify-content-center">
                    {loading && 
                        <Row>
                            <Loader color = "#FFC107" height = {40} width = {80} />
                            <p className = "text-light fs-6 mt-1">لطفا صبر کنید</p>
                        </Row>
                    }
                    </td>
                    <td></td>
                    <td></td>
                </tr>
                {data?.map((item) => (
                    <tr key = {item.id}>
                        <td className = "text-center align-content-center">{e2p(item.id)}</td>
                        <td className = "text-center align-content-center">{item.title}</td>
                        <td className = "text-center align-content-center">{e2p(item.details)}</td>
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
                    </tr>
                ))}
            </tbody>
    </Table>
    </>
  )
}

export default DataTableProducts;