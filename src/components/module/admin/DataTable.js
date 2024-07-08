"use client"
import { useEffect } from "react";
import { Badge, Button, Table } from "react-bootstrap";
import { e2p } from "@/utils/replaceNumber";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, selectAllCategory } from "@/features/category/categorySlice";
import Loader from "../loading";
import { editCategory } from "@/features/modal/modalSlice";

const DataTableCategory = () => {

    const dispatch = useDispatch();
    const {categories, error, loading } = useSelector(selectAllCategory);
    useEffect(() => {
        dispatch(fetchCategories());
    },[]); 
    const clickHandler = (id_category, slug, label, disable, act = "category") => {
        if(act === "category"){
            dispatch(editCategory({category: {id_category,slug,label,disable}, act: "category" }));
        }
    }
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
                    <th className = "text-center">وضعیت</th>
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
                            <Button 
                                variant = "warning" 
                                onClick={() => clickHandler(item.id,item.slug,item.label,item.disable)}>
                                    ویرایش
                            </Button>
                        </td>
                        <td className = "text-center align-content-center">
                            {item.disable ? 
                                <Badge bg = "danger" className = "p-2">غیرفعال</Badge>: 
                                <Badge bg = "success" className = "p-2">فعال</Badge>
                            }
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