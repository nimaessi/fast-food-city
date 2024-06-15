"use client";
import { Col, Row } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <Row>
      <Col className = "text-center p-5">
        <Spinner animation ="grow" variant="warning" />
        <Spinner animation ="grow" variant="warning" className = "ms-2" />
        <Spinner animation ="grow" variant="warning" className = "ms-2" />
        <p className = "text-light fs-6 ms-2 mt-2">لطفا صبر کنید</p>
      </Col>
    </Row>
  )
}

export default Loader;