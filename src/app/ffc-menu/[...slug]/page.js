import ListFood from "@/template/list-food/ListFood";
import { categories } from "@/utils/categories";

function page({ params }) {

  ////api request ...
  const data = categories.find((category) => category.slug === params.slug[0]);
  return (
    <ListFood data = {data}  />
  )
}

export default page;

