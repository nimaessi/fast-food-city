import { Container, Row, Col } from "react-bootstrap";
import MyCard from "./MyCard";

const CategoryMenu = async () => {
  
  const response = await fetch("http://localhost:3000/api/category/getCategories",{ cache: 'no-store' });
  const categories = await response.json();
  console.log(categories);


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
                    title={item.slug}
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