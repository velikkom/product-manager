"use server";

import { transformYupErrors } from "@/helpers/form-validation";
import { revalidatePath } from "next/cache";
import * as Yup from "yup";

const FormSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .required("Price is required"),
  category: Yup.string().required("Category is required"),
});

export const createProductAction = async (prevState, formData) => {
  //1-Get data and convert JSON
  const fields = Object.fromEntries(formData);

  try {
    //2-Validate data
    FormSchema.validateSync(fields, { abortEarly: false });

    //3-Mutation
    const res = await fetch(
      "https://66c39605d057009ee9c0b99e.mockapi.io/products",

      {
        method: "POST",
        body: JSON.stringify(fields),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    //4-Revalidation
    revalidatePath("/dashboard/products");
    revalidatePath("/products");

    return {
      ok: true,
      message: "Product created successfully",
      errors: null,
    };
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      return transformYupErrors(err.inner);
    }

    return {
      ok: false,
      message: err?.message || "Something went wrong",
      errors: null,
    };
  }
};

export const updateProductAction = async (prevState, formData) => {
  const fields = Object.fromEntries(formData);

  console.log(fields);

  try {
    FormSchema.validateSync(fields, { abortEarly: false });

    const res = await fetch(
      `https://66c39605d057009ee9c0b99e.mockapi.io/products/${fields.id}`,

      {
        method: "PUT",
        body: JSON.stringify(fields),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();

    console.log(data);

    if (!res.ok) throw new Error(data.message);

    revalidatePath("/dashboard/products");
    revalidatePath(`/dashboard/products/${fields.id}`);
    revalidatePath("/products");
    revalidatePath(`/products/${fields.id}`);

    return {
      ok: true,
      message: "Product updated successfully",
      errors: null,
    };
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      return transformYupErrors(err.inner);
    }

    return {
      ok: false,
      message: err?.message || "Something went wrong",
      errors: null,
    };
  }
};

export const deleteProductAction = async (id) => {
	try {
		if (!id) throw new Error("ID is required");

		const res = await fetch(
			`https://66c39605d057009ee9c0b99e.mockapi.io/products/${id}`,
			{
				method: "DELETE",
			}
		);
		const data = await res.json();

		if (!res.ok) throw new Error(data.message);

		revalidatePath("/dashboard/products");
		revalidatePath("/products");

		return {
			ok: true,
			message: "Product deleted successfully",
			errors: null,
		};
	} catch (err) {
		return {
			ok: false,
			message: err?.message || "Something went wrong",
			errors: null,
		};
	}
};