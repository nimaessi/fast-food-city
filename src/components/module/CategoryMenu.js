"use client"
import { Container, Row, Col } from "react-bootstrap";

import pizza from "@/public/images/card-pizza.jpg";
import hamber from "@/public/images/hamber.jpg";
import salad from "@/public/images/salad.jpg";
import sand from "@/public/images/sand.jpg";
import drink from "@/public/images/drink.png";
import fried from "@/public/images/fried-chicken.png";

import MyCard from "./MyCard";

const categories = [
  {
    id: 1,
    title: "پیتزا",
    pic: pizza
  },
  {
    id: 2,
    title: "ویژه شهر فست فود",
    pic: hamber
  },
  {
    id: 3,
    title: "ساندویچ",
    pic: sand
  },
  {
    id: 4,
    title: "پیش غذا",
    pic: salad
  },
  {
    id: 5,
    title: "نوشیدنی",
    pic: drink
  },
  {
    id: 6,
    title: "سوخاری",
    pic: fried
  },

];

const CategoryMenu = () => {
  const rows = [];
  for (let i = 0; i < categories.length; i += 3) {
    rows.push(categories.slice(i, i + 3));
  }
  return (
    <Container fluid className = "px-3">
      {rows.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((item) => (
              <Col md={4} key={item.id}>
                <MyCard title={item.title} pic={item.pic} />
              </Col>
            ))}
          </Row>
        ))}
    </Container>
  )
}

export default CategoryMenu;