import { ok } from "assert";

export const transformYupErrors = (errors) => {

  const errObject = {};

  errors.forEach((e) => {
    errObject[e.path] = e.message;
  });

  return {
    ok: false,
    message: "Validation error",
    errors: errObject,
  };
};
