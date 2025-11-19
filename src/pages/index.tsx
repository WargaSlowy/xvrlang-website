import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import Logo from "../components/Logo";
import HomepageHeader from "../components/HomepageHeaaders";
import CodeBannerSection from "../components/CodeBannerSection";
import LayoutWithoutFooter from "../theme/LayoutWithoutFooter";
import Support from "../components/Support";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <LayoutWithoutFooter
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <CodeBannerSection />
      <main>
        <HomepageFeatures />
      </main>
      <Support />
    </LayoutWithoutFooter>
  );
}
