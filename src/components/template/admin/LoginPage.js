"use client"
import { useState } from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import * as Icon from "react-bootstrap-icons";
import Form from 'react-bootstrap/Form';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';
import { ThreeDots } from "react-loader-spinner";

const LoginPage = () => {

  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const res = await signIn("credentials",{
      email: inputs.username,
      password: inputs.password,
      redirect: false,
    });
    if (res.error) {
      setLoading(false);
      toast.error(res.error);
    } else {
      setLoading(false);
      router.push("/dashboard/admin/profile");
    }
  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  return (
    <Container fluid className = "d-flex align-items-center justify-content-center vh-100 overflow-hidden">
        <Card data-bs-theme = "dark" className = "w-25">
            <Card.Header className = "text-center p-3">
                <Icon.BoxArrowInLeft className = "me-2 fs-5" />
                ورود پنل ادمین
            </Card.Header>
            <Card.Body>
              <Form onSubmit= {handleSubmit}>
                <Form.Floating className="mb-3">
                  <Form.Control
                    type = "text"
                    name = "username"
                    value={inputs.username || ""}
                    onChange={handleChange} 
                    placeholder = "نام کاربری"
                  />
                  <label htmlFor = "username">نام کاربری</label>
                </Form.Floating>
                <Form.Floating>
                  <Form.Control
                    type = "password"
                    name = "password"
                    value={inputs.password || ""} 
                    onChange={handleChange}
                    placeholder = "رمز عبور"
                  />
                  <label htmlFor="Password">رمز عبور</label>
                </Form.Floating>
                <Button
                  type = "submit" 
                  variant="warning" 
                  className = "mt-3 w-100 d-flex justify-content-center">
                    {loading ? (
                      <ThreeDots
                        color = "#000000"
                        visible = {true}
                        height = {20}
                        width = {50}
                        ariaLabel="three-dots-loading"/>
                        ) : ("ورود")
                    }
                  </Button>
                </Form>
            </Card.Body>
        </Card>
    </Container>
  )
}

export default LoginPage;