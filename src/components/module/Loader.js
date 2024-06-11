import { ThreeDots } from "react-loader-spinner";

const Loader = ({color = "#000000", height, width}) => {
  return (
    <ThreeDots
        color = {color}
        visible = {true}
        height = {height}
        width = {width}
        ariaLabel="three-dots-loading"/>
  )
}

export default Loader;