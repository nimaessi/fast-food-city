import Link from 'next/link'
import { Container } from 'react-bootstrap'
import * as Icon from "react-bootstrap-icons";
export default function NotFound() {
  return (
    <Container fluid className = "d-flex flex-column align-items-center justify-content-center vh-100 ">
        <p className = "text-light fs-1">صفحه مورد نظر یافت نشد :(</p>
        <Link href="/" className = "link-underline link-underline-opacity-0 text-light fs-5">
            <Icon.HouseFill className = "me-2" />
            صفحه اصلی
        </Link>
    </Container>
  )
}