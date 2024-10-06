import { PageHeader } from "@/components/page-header";
import { Redirect } from "@/components/redirect";
import React from "react";

const Page = () => {
  return (
    <>
      <PageHeader title="Login" />
      <Redirect />
    </>
  );
};

export default Page;
