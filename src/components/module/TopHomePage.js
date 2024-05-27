"use client"
import posterLogo from "@/public/images/logo.png";
import Image from "next/image";
import { Button, Row } from "react-bootstrap";
import pageScroll from 'page-scroll';

const TopHomePage = () => {
  return (
    <>
        <br/><br/>
        <Row>
            <Image
                src= {posterLogo}
                className = "poster-logo img-fluid z-1 mx-auto mt-5"
                alt = "Logo-FF" />
            <p className = "text-light z-1 fs-4">به شهر فست فود خوش آمدید</p>
            <Button
                onClick = {() => pageScroll( document.querySelector( '.my-categories' ) )}
                variant = "warning"
                className = "z-1 w-50 mx-auto p-2 slide-right mt-3">
                مشاهده منو
            </Button>
        </Row>
    </>
  )
}

export default TopHomePage;