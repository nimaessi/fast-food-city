import { Col, Container, Row } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <Container fluid className = "bg-dark border-top border-warning mt-5 p-0">
        <footer className="d-flex justify-content-center pt-5">
            <ul className="list-unstyled d-flex">
              <li>
                <Icon.Instagram className = "text-light fs-3" />
              </li>
              <li className="ms-3">
                <Icon.Telegram className = "text-light fs-3" />
              </li>
              <li className="ms-3">
                <Icon.TwitterX className = "text-light fs-3" />
              </li>
              <li className="ms-3">
                <Icon.Youtube className = "text-light fs-3" />
              </li>
            </ul>
        </footer>
        <p className = "text-center text-light fs-12 py-2 m-0">طراحی و توسعه آدرین سافت</p>
    </Container>
  )
}

export default Footer;