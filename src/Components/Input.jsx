import { Form } from "react-bootstrap";

export default function Input({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <Form.Group className="mb-3" controlId={`form-${name}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(event) => onChange(event)}
      />
    </Form.Group>
  );
}
