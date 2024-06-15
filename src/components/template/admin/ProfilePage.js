import Header from "@/module/admin/Header";
import MyTabs from "@/module/admin/MyTabs";
import Providers from "@/redux/Providers";
import { Container } from "react-bootstrap";

const ProfilePage = () => {
  return (
    <Providers>
      <Header />
      <Container className = "bg-dark">
          <MyTabs />
      </Container>
    </Providers>
  )
}

export default ProfilePage;