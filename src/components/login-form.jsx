"use client";
import {
  signInWithCredentials,
  signInWithSocial,
} from "@/actions/auth-actions";
import React from "react";
import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { TfiGithub, TfiGoogle } from "react-icons/tfi";
import { useFormState } from "react-dom";

export const LoginForm = () => {
  // initial state
  const initialState = { ok: false, message: "", errors: null };

  // dispatch form a bilgileri gönderen yapı
  const [state, dispatch] = useFormState(signInWithCredentials, initialState);
  // state dönen bilgileri getirecek bir yapı

//   //console.log(state);
  return (
    <Row className="justify-content-center my-5">
      <Col sm={9} md={7} lg={5} className="mx-auto my-5">
        <Card>
          <Card.Body>
            <Card.Title>Login</Card.Title>

            <Form action={dispatch}>

              <FloatingLabel
                controlId="username"
                label="Username"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="username"
                  isInvalid={!!state?.errors?.username}
                  defaultValue="emilys"
                />

                <Form.Control.Feedback type="invalid">
                  {state?.errors?.username}
                </Form.Control.Feedback>

              </FloatingLabel>
              
              
              <FloatingLabel
                controlId="password"
                label="Password"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Password"
                  name="password"
                  defaultValue={"emilyspass"}
                  isInvalid={!!state?.errors?.password}
                />


                <Form.Control.Feedback type="invalid">
                  {state?.errors?.password}
                </Form.Control.Feedback>
              </FloatingLabel>
              
              <Button
                variant="warning"
                type="submit"
                className="w-100 text-uppercase"
              >
                Login
              </Button>
            </Form>

            <hr className="my-5" />
            <div className="d-flex justify-content-center gap-3">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => signInWithSocial("github")}
              >
                <TfiGithub />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => signInWithSocial("google")}
              >
                <TfiGoogle />
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
