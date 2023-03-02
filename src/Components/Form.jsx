import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import * as Validator from "validatorjs";
import Input from "./Input";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    errors: [],
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = { ...form };
    let rules = {
      email: "required|email",
      password: "required|numeric|min:8",
    };

    let validation = new Validator(data, rules, {
      required: "Field tidak boleh kosong",
      email: "Format email salah",
      min: "Minimum input :attribute :min karakter",
      numeric: "Password hanya boleh angka",
    });

    validation.passes();

    setForm((values) => ({
      ...values,
      errors: [
        ...validation.errors.get("email"),
        ...validation.errors.get("password"),
      ],
    }));
  };
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: "30rem" }} bg="light">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Masukkan email anda"
              value={form.email || ""}
              onChange={handleChange}
            />

            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Masukkan email anda"
              value={form.password || ""}
              onChange={handleChange}
            />

            <ul>
              {form.errors.map((item, i) => (
                <li key={i} className="text-danger">
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
