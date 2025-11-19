import React from "react";
import clsx from "clsx";
import styles from "./CodeBannerSection.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

function CodeBannerSection() {
  const bannerUrl = useBaseUrl("/img/banner_xvr.svg");
  return (
    <section className={styles.bannerSection}>
      <div className="container">
        <div className={styles.bannerContainer}>
          <img
            src={bannerUrl}
            alt="XvrLang code example"
            className={styles.bannerImage}
          />
        </div>
      </div>
    </section>
  );
}

export default CodeBannerSection;
