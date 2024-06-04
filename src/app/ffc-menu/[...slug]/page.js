import ListFood from "@/template/list-food/ListFood";

async function page({ params }) {

  ////api request ...
  //const data = categories.find((category) => category.slug === params.slug[0]);
  console.log(params);
  return (
    <h1>list</h1>
    /*<ListFood data = {data}  />*/
  )
}

export default page;

