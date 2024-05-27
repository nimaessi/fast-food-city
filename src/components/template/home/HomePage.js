import Poster from "@/module/Poster";
import CategoryMenu from "@/module/CategoryMenu";
import ContactUs from "@/module/ContactUs";
import TopHomePage from "@/module/TopHomePage";

const HomePage = () => {
  return (
    <>
      <Poster>
        <TopHomePage />
      </Poster>
      <ContactUs />
      <CategoryMenu />
    </>
  )
}

export default HomePage;