import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import CodeBlock from "@theme/CodeBlock";
import { FeatureItem, FeatureList } from "./features";

function Feature({
  title,
  description,
  code,
  reverse,
}: FeatureItem & { reverse?: boolean }) {
  return (
    <div className={reverse ? styles.featureRight : styles.featureLeft}>
      <div className={styles.featureItem}>
        <div className={styles.featureInner}>
          {reverse ? (
            <>
              <div className="col col--5">
                <Heading as="h3" className={styles.title}>
                  {title}
                </Heading>
                <p>{description}</p>
              </div>

              <div className="col col--5">
                <CodeBlock language="xvr">{code}</CodeBlock>
              </div>
            </>
          ) : (
            <>
              <div className="col col--5">
                <CodeBlock language="xvr">{code}</CodeBlock>
              </div>

              <div className="col col--5">
                <Heading as="h3" className={styles.title}>
                  {title}
                </Heading>
                <p>{description}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.feature}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} reverse={idx % 2 === 1} {...props} />
      ))}
    </section>
  );
}
