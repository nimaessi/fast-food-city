import Footer from "@/layout/Footer";
import ListFood from "@/template/list-food/ListFood";
import { getData } from "src/services/fetchData";

async function page({ params }) {

  const data = await getData(`${process.env.BASE_URL_API}/category/${params.slug[0]}`);
  return (
    <>
      <ListFood data = {data}  />
      <Footer />
    </>
  )
}

export default page;

