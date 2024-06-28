"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button, Container, Navbar } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const Header = () => {
    const {data} = useSession();
  return (
    <Container fluid className = "p-0">
       <Navbar className = "bg-dark bg-opacity-75 border-bottom border-warning">
            <Container fluid>
                <Navbar.Brand
                    className = "text-light" 
                    as = {Link} 
                    href ="/" >
                        پنل ادمین شهر فست فود
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                { data &&
                    <Button variant = "warning" onClick = {signOut}>
                        خروج
                        <Icon.BoxArrowLeft className = "ms-2" />
                    </Button>
                }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </Container>
  )
}

export default Header;