"use server"

import { signIn } from "@/auth"
import { transformYupErrors } from "@/helpers/form-validation";
import { AuthError } from "next-auth";
import * as Yup from "yup";


const FormSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
})


export const signInWithCredentials = async(prevState, formData) => {

    const credentials = Object.fromEntries(formData);

    try{
        FormSchema.validateSync(credentials, { abortEarly: false });
        await signIn("credentials", credentials);
    }
    catch(err){
        if(err instanceof Yup.ValidationError){
            const errors = transformYupErrors(err.inner);
            console.log(errors)
            return errors
        }
        else if(err instanceof AuthError){
            return{
                ok: false,
                message: err.message,
                errors: null
            }
        }

        throw err;
    }

}


export const signInWithSocial = async (provider) => {
    
    try{
        await signIn(provider)
    }
    catch(err){
        console.log(err)

        throw err;
    }
    
}