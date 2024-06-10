"use client"
import { useCallback, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { e2p } from "@/utils/replaceNumber";
import Image from "next/image";

const DataTableCategory = () => {

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
                    <th className = "text-center"> نام دسته بندی </th>
                    <th className = "text-center">لینک صفحه</th>
                    <th className = "text-center">عکس</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item) => (
                    <tr key = {item.id}>
                        <td className = "text-center">{e2p(item.id)}</td>
                        <td className = "text-center">{item.label}</td>
                        <td className = "text-center">
                            {item.slug}
                        </td>
                        <td className = "text-center">
                            <Image 
                                src = {item.pic}
                                width = {120}
                                height ={90} />
                        </td>
                    </tr>
                ))}
            </tbody>
    </Table>
  )
}

export default DataTableCategory;