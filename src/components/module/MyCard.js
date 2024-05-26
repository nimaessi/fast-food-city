import { Card } from "react-bootstrap";
import Image from "next/image";

const MyCard = ({pic, title}) => {
  return (
    <Card className = "w-75 mt-5 mx-auto" data-bs-theme = "dark">
        <Image 
          className = "mx-auto mt-3 img-fluid"
          alt = "product-category" 
          src = {pic} />
        <p className = "text-center mt-2 fs-5 card-title">{title}</p>
    </Card>
  )
}

export default MyCard