import React from "react";
import clsx from "clsx";
import styles from "./CodePreviewSection.module.css";

function CodePreviewSection() {
  return (
    <section className={styles.previewContainer}>
      {/* Kode xvr dalam format pre/code */}
      <pre className={styles.codeBlock}>
        <code>
          {`// Simple Fibonacci with loops
proc fibonacci(n: int): int {
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

for (var i: int = 0; i < 10; i++) {
    var hasil = fibonacci(i);
    print(hasil);
}`}
        </code>
      </pre>
    </section>
  );
}

export default CodePreviewSection;
