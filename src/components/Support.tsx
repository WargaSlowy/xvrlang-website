import React from "react";
import styles from "./Support.module.css";
import shared from "./shared.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Support() {
  const { siteConfig } = useDocusaurusContext();
  const discordId = siteConfig.customFields.discordServerID;
  return (
    <section data-stripe className={styles.section}>
      <div className={shared.mid}>
        <div className={styles.supportCols}>
          <div>
            <h2 className={styles.title}>Help &amp; Support</h2>
            <p>
              Join our community on <strong>Discord</strong> — ask questions,
              share, help others.
            </p>
          </div>
          <div className={styles.discordIframeWrap}>
            <iframe
              src={`https://discord.com/widget?id=${discordId}&theme=dark`}
              width="450"
              height="400"
              frameBorder={0}
              title="Discord"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
