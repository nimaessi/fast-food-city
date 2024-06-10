import Header from "@/module/admin/Header";
import MyTabs from "@/module/admin/MyTabs";
import { Container } from "react-bootstrap";

const ProfilePage = () => {
  return (
    <>
        <Header />
        <Container className = "bg-dark">
            <MyTabs />
        </Container>
    </>
  )
}

export default ProfilePage;