import { LoginForm } from "@/components/login-form";
import { PageHeader } from "@/components/page-header";
import { Redirect } from "@/components/redirect";
import React from "react";


export const metadata = {
  title: "Login ",
  description: "Cheap electronic devices",
};
const Page = () => {
  return (
    <>
      <PageHeader title="Login" />
      <LoginForm/>
    </>
  );
};

export default Page;
