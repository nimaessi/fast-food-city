import { Col, Container, Row } from "react-bootstrap"
import * as Icon from 'react-bootstrap-icons';
import { e2p } from "@/utils/replaceNumber";
const ContactUs = () => {
  return (
    <Container className = "bg-black px-5 py-2 border border-2 border-warning border-top-0 border-opacity-50 rounded-bottom">
        <Row>
            <Col md = {4} className = "d-flex flex-row">
                <Icon.Stopwatch className = "me-2 mt-4 fs-3  text-light" />
                <p className = "fs-12 text-light my-3 mt-4">
                    ساعت کار : {e2p(12)} الی {e2p(24)}
                </p>
            </Col>
            <Col md = {4} className = "d-flex flex-row">
                <Icon.Telephone className = "me-2 mt-4 fs-3 text-light" />
                <p className = "fs-12 text-light my-3 mt-4">شماره تماس : {e2p("028")} - {e2p(33371900)}</p>
            </Col>
            <Col md = {4} className = "d-flex flex-row">
                    <Icon.GeoAltFill className = "me-2 mt-3 fs-1 text-light" />
                <p className = "fs-12 text-light my-3">
                    آدرس : قزوین چهارراه ولیعصر - بلوار خامنه ایی نبش کوچه شهید مهدی یعقوبی (گلستان پنجم)
                </p>
            </Col>
        </Row>
    </Container>
  )
}

export default ContactUs