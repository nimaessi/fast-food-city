import posterLogo from "@/public/images/logo.png";
import Image from "next/image";
import { Button, Container, Row } from "react-bootstrap";

const Poster = () => {
  return (
    <Container fluid className = "bg-poster text-center">
        <div className = "blurOverlay"></div>
        <br/><br/>
        <Row>
            <Image
                src= {posterLogo}
                className = "poster-logo img-fluid z-1 mx-auto mt-5"
                alt = "Logo-FF" />
            <p className = "text-light z-1 fs-4">به شهر فست فود خوش آمدید</p>
            <Button 
              variant = "warning"
              className = "z-1 w-50 mx-auto p-2 slide-right mt-3">
                مشاهده منو
              </Button>
        </Row>
    </Container>
  )
}

export default Poster;