import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const RegisterForm = () => {
  const style = {
    width: '400px',
    maxWidth: '600px'
  };

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <Container style={style} className=" mb-5">
      <h3>Register</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mt-1" controlId="formBasicPassword1">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mt-2" controlId="formBasicPassword2">
          <Form.Label>Re-Enter Password</Form.Label>
          <Form.Control type="password1" placeholder="Re- Enter Password" />
        </Form.Group>
        <Button
          className="mt-4"
          variant="primary"
          type="submit"
          onSubmit={handleSubmit}
        >
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterForm;
