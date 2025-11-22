import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import styles from "./downloads.module.css";

export default function Downloads() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout title="Downloads" description="Coming Soon page">
      <div className={styles.container}>
        <h1 className={styles.title}>Downloads</h1>
        <p className={styles.comingSoon}>Coming Soon{dots}</p>
      </div>
    </Layout>
  );
}
