import DetailMenu from "@/module/DetailMenu";
import HeaderListFood from "@/module/HeaderListFood";
import { getData } from "src/services/fetchData";


const ListFood = async ({ data }) => {
  const products = await getData(`http://localhost:3000/api/products/${data.id}`);
  return (
    <>
     <HeaderListFood data = {data} />
     <DetailMenu products = {products} />
    </>
  )
}

export default ListFood;