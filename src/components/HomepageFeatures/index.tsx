import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import CodeBlock from "@theme/CodeBlock";

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
  code: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Typed Variables",
    Svg: require("@site/static/img/undraw_typewriter_d4km.svg").default, // ganti dengan SVG sesuai tema
    description: (
      <>
        Declare variables with explicit types like <code>int</code> and{" "}
        <code>string</code>
        for safer and clearer code.
      </>
    ),
    code: `// defining the variable
var name = "arfy";

// can explicitly with some data types
var other: string = "james";

// cannot using space if using long variable name
var someNumber: int  = 30;
var SomeFloating: float = 3.14;
var sOmeStRing: string = "wello";
var soMeboOlean: bool = true;
var somEArray: [int] = [1, 2, 3];
var sOmeData: [string: int] = ["pertama": 1, "kedua": 2];`,
  },
  {
    title: "Control Flow Support",
    Svg: require("@site/static/img/undraw_logic_bj1j.svg").default,
    description: (
      <>
        Use <code>if</code>, <code>while</code>, and <code>for</code> loops to
        build logic and handle repetitive tasks easily.
      </>
    ),
    code: `// let's we create some example
var today_raining: bool = false;

if (today_raining) {
    print("wear jacket or use umbrella");
} else {
    print("use sunglasses");
}

if (!today_raining) {
    print("use sunglasses");
} else {
    print("wear jacket");
}`,
  },
  {
    title: "Procedures & Recursion",
    Svg: require("@site/static/img/undraw_mind-map_i9bv.svg").default,
    description: (
      <>
        Define reusable procedures with <code>proc</code>, support parameters
        and return values, even recursive functions like Fibonacci.
      </>
    ),
    code: `proc call() {
    print("hello");
    print("we can make some procedure");
}

// call it
call();`,
  },
  {
    title: "Bytecode Interpreter",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        xvr compiles your code into an intermediate bytecode and interprets
        it—great for learning how interpreters and virtual machines work.
      </>
    ),
    code: `not found`,
  },
];

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
