import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Logo from "../Logo";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title.split(" ").map((word, idx) =>
            word === "Xvr" ? (
              <span key={idx} className={styles.spanXvr} id="oke">
                {word}{" "}
              </span>
            ) : (
              word + " "
            ),
          )}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={`button button--secondary button--lg ${styles.customButton}`}
            to="/docs/tutorial/chapter1"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HomepageHeader;
