import React from "react";
import Layout from "@theme/Layout";

export default function LayoutWithoutFooter({ children, ...props }) {
  return (
    <Layout {...props} noFooter={true}>
      {children}
    </Layout>
  );
}
