"use client";
import { createProductAction } from "@/actions/product-actions";

import React from "react";
import { Alert, Button, Form } from "react-bootstrap";

import { useFormState } from "react-dom";
import { ButtonReturnBack } from "./button-return-back";

export const DashboradProductNew = () => {
  const initialState = { ok: false, message: "", errors: null };
  const [state, dispatch] = useFormState(createProductAction, initialState);
  //dispatch form a bilgileri gönderen yapı
  // state dönen bilgileri getirecek bir yapı

  console.log(state);
  return (
    <>
      {!state.ok && state.message ? (
        <Alert variant="danger"> {state.message}</Alert>
      ) : null}

      {state.ok && state.message ? (
        <Alert variant="success"> {state.message}</Alert>
      ) : null}
      <Form action={dispatch}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="title"
            isInvalid={!!state.errors?.title}
          />
          <Form.Control.Feedback type="invalid">
            {state.errors?.title}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            as="textarea"
            name="description"
            isInvalid={!!state.errors?.description}
          />
          <Form.Control.Feedback type="invalid">
            {state.errors?.description}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder=""
            name="price"
            isInvalid={!!state.errors?.price}
          />
          <Form.Control.Feedback type="invalid">
            {state.errors?.price}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="category"
            isInvalid={!!state.errors?.category}
          >
            <Form.Control.Feedback type="invalid">
              {state.errors?.category}
            </Form.Control.Feedback>
            <option value={""}>Select a categroy</option>
            <option value="Jewelery">Jewelery</option>
            <option value="Beauty">Beauty</option>
            <option value="Shoes">Shoes</option>
            <option value="Grocery">Grocery</option>
            <option value="Outdoors">Outdoors</option>
            <option value="Toys">Toys</option>
            <option value="Sports">Sports</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3 me-4">
          Create
        </Button>
        <ButtonReturnBack />
      </Form>
    </>
  );
};
