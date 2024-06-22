"use client"
import Loader from "@/module/loading";
import { Container } from "react-bootstrap"

const loading = () => {
  return (
    <Container fluid className = "d-flex align-items-center justify-content-center vh-100 overflow-hidden">
        <Loader />
    </Container>
  )
}

export default loading;