import { Container } from "react-bootstrap";

const Poster = ({ children }) => {
  return (
    <Container fluid className = "bg-poster text-center">
        <div className = "blurOverlay"></div>
        { children }
    </Container>
  )
}

export default Poster;