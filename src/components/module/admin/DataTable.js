"use client"
import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { e2p } from "@/utils/replaceNumber";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, selectAllCategory } from "@/features/category/categorySlice";
import Loader from "../loading";

const DataTableCategory = () => {

    const dispatch = useDispatch();
    const {categories, error, loading } = useSelector(selectAllCategory);
    useEffect(() => {
        dispatch(fetchCategories());
    },[])
  return (
    <>
    {loading ? (<Loader/>) :(
    <Table striped bordered responsive variant = "dark" className = "mt-5">
            <thead>
                <tr>
                    <th className = "text-center">شماره</th>
                    <th className = "text-center"> نام دسته بندی </th>
                    <th className = "text-center">لینک صفحه</th>
                    <th className = "text-center">عکس</th>
                    <th className = "text-center">ویرایش</th>
                </tr>
            </thead>
            <tbody>
                {categories?.map((item) => (
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
    )}
    </>
  )
}

export default DataTableCategory;