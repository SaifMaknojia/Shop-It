import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import SignInWithGoogle from './SignInWithGoogle';

const SignIn = () => {
  const style = {
    width: '400px',
    maxWidth: '600px'
  };

  const buttonStyle = {
    width: '200px'
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Container style={style} className="flex-grow mb-5 me-5">
      <h2>Please Sign In</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="d-flex justify-content-evenly">
          <Button
            variant="primary"
            type="submit"
            className="mt-4 me-5 "
            style={buttonStyle}
          >
            Sign In
          </Button>
          <SignInWithGoogle />
        </div>
      </Form>
    </Container>
  );
};

export default SignIn;
