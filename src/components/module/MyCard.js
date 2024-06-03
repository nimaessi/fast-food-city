"use client"
import { Card, Image } from "react-bootstrap";
import { useRouter } from "next/navigation";

const MyCard = ({pic, title, id, slug}) => {

  const router = useRouter();
  const handleClick = (id,slug) => {
    router.push(`ffc-menu/${slug}/${id}`);
  }
  return (
    <Card 
      className = "w-75 mt-5 mx-auto cursor-pointer" 
      data-bs-theme = "dark" 
      onClick={() => {handleClick(id,slug)}}>
        <Image 
          className = "mx-auto mt-3 img-fluid"
          alt = "product-category" 
          src = {pic} />
        <p className = "text-center mt-2 fs-5 card-title">{title}</p>
    </Card>
  )
}

export default MyCard