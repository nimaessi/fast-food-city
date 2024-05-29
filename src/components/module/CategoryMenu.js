import { Container, Row, Col } from "react-bootstrap";
import MyCard from "./MyCard";
import { categories } from "@/utils/categories";

const CategoryMenu = () => {
  const rows = [];
  for (let i = 0; i < categories.length; i += 3) {
    rows.push(categories.slice(i, i + 3));
  }
  return (
      <Container fluid className = "px-3 my-categories">
        {rows.map((row, rowIndex) => (
            <Row key={rowIndex}>
              {row.map((item) => (
                <Col md={4} key={item.id}>
                  <MyCard
                    id = {item.id} 
                    title={item.title}
                    slug = {item.slug}
                    pic={item.pic} />
                </Col>
              ))}
            </Row>
          ))}
      </Container>
  )
}

export default CategoryMenu;