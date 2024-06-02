import DetailMenu from "@/module/DetailMenu";
import HeaderListFood from "@/module/HeaderListFood";


const ListFood = ({ data }) => {
  return (
    <>
     <HeaderListFood data = {data} />
     <DetailMenu />
    </>
  )
}

export default ListFood;