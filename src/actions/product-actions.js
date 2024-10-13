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
      "https://66c395ffd057009ee9c0b957.mockapi.io/products",

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

  // id alanını kontrol edin
  if (!fields.id) {
    return {
      ok: false,
      message: "Product ID is missing",
      errors: null,
    };
  }

  try {
    // Validasyon
    FormSchema.validateSync(fields, { abortEarly: false });

    // PUT isteği
    const res = await fetch(
      `https://66c395ffd057009ee9c0b957.mockapi.io/products/${fields.id}`,
      {
        method: "PUT",
        body: JSON.stringify(fields),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();

    // Hata kontrolü
    if (!res.ok) {
      console.error("Error details:", data);
      throw new Error(data.message || "Unknown error occurred");
    }

    // Başarı durumu
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
      return {
        ok: false,
        message: "Validation failed",
        errors: transformYupErrors(err.inner),
      };
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
    const response = await deleteProductAction(id);

    if (response.ok) {
      // SWR cache'yi günceller ve verileri yeniden fetch eder
      mutate("/api/products");
    }

    const res = await fetch(
      `https://66c395ffd057009ee9c0b957.mockapi.io/products/${id}`,
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

// export const updateProductAction = async (prevState, formData) => {

//   //1-Get data and convert JSON
//   const fields = Object.fromEntries(formData);

//   //try catch icerisinde formun validasyonu yaptık
//   try {
//     FormSchema.validateSync(fields, { abortEarly: false });

//     //validasyon başarılı ise fetch yaptık
//     const res = await fetch(
//       `https://66c395ffd057009ee9c0b957.mockapi.io/products/${fields.id}`,
//       {
//         method: "PUT",
//         body: JSON.stringify(fields),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     //fetch başarılı değil ise hata fırlattık
//     const data = await res.json();

//     console.log(data);
//     if (!res.ok) throw new Error(data.message);
//     //başarılı ise revalidate ettik
//     revalidatePath("/dashboard/products");
//     revalidatePath(`/dashboard/products/${fields.id}`);
//     revalidatePath("/products");
//     revalidatePath(`/products/${fields.id}`);

//     //yapılan işlem başarılı mesajı döndürdük
//     return {
//       ok: true,
//       message: "Product updated successfully",
//       errors: null,
//     };
//     //hata durumunda yup mesajlarını döndürucek bir obje olusturduk
//   } catch (err) {
//     if (err instanceof Yup.ValidationError) {
//       return transformYupErrors(err.inner);
//     }
//     //yup tan kaynaklı değil ise hata mesajını döndürucek
//     return {
//       ok: false,
//       message: err?.message || "Something went wrong",
//       errors: null,
//     };
//   }
// };

// export const deleteProductAction = async (id) => {
//   try {
//     if (!id) throw new Error("ID is required");

//     const res = await fetch(
//       `https://66c39605d057009ee9c0b99e.mockapi.io/products/${id}`,

//       {
//         method: "DELETE",
//       }
//     );
//     const data = await res.json();

//     if (!res.ok) throw new Error(data.message);

//     revalidatePath("/dashboard/products");
//     revalidatePath("/products");

//     return {
//       ok: true,
//       message: "Product deleted successfully",
//       errors: null,
//     };
//   } catch (err) {
//     return {
//       ok: false,
//       message: err?.message || "Something went wrong",
//       errors: null,
//     };
//   }
// };
