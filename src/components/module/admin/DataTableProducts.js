"use client"
import { useCallback, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { e2p } from "@/utils/replaceNumber";
import Image from "next/image";
import Link from "next/link";

const DataTableProducts = () => {

    const [data, setData] = useState();
    const fetchData = useCallback(async() => {
        const res = await fetch("/api/category/getCategories");
        const result = await res.json();
        setData(result);
    },[])
    useEffect(() => {
        fetchData();
    },[fetchData])
  return (
    <Table striped bordered responsive variant = "dark" className = "mt-5">
            <thead>
                <tr>
                    <th className = "text-center">شماره</th>
                    <th className = "text-center"> نام محصول</th>
                    <th className = "text-center">توضیحات</th>
                    <th className = "text-center">اندازه</th>
                    <th className = "text-center">قیمت</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item) => (
                    <tr key = {item.id}>
                        <td className = "text-center align-content-center">{e2p(item.id)}</td>
                        <td className = "text-center align-content-center">{item.label}</td>
                        <td className = "text-center align-content-center">
                            <Link href = {`/ffc-menu/${item.slug}`} className = "text-light" target = "_blank">
                                مشاهده منو محصول
                            </Link>
                        </td>
                        <td className = "text-center">
                            <Image
                                alt = "image product" 
                                src = {item.pic}
                                width = {120}
                                height ={90} />
                        </td>
                        <td className = "text-center align-content-center">
                            <Button variant = "warning">ویرایش</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
    </Table>
  )
}

export default DataTableProducts;