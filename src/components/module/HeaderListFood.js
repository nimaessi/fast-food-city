import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

const HeaderListFood = ({data}) => {
  return (
    <Container fluid className = "bg-poster-list-food d-flex flex-column align-items-center justify-content-center">
      <Row>
        <Col md = {12} className = "py-3 px-4">
          <Link href = "/" className = "text-light fs-6">
            <Icon.HouseFill className = "me-2" />
            صفحه اصلی
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className = "display-1 text-light text-shadow">{data.label}</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default HeaderListFood;