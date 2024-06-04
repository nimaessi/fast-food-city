import ListFood from "@/template/list-food/ListFood";
import { getData } from "src/services/fetchData";

async function page({ params }) {

  const data = await getData(`http://localhost:3000/api/category/${params.slug[0]}`);
  return (
    <ListFood data = {data}  />
  )
}

export default page;

