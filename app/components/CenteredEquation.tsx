import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import React from "react";
import styles from "@/app/components/CenteredEquation.module.css"; // CSSモジュールのインポート

const CenteredEquation: React.FC<{ equation: string }> = ({ equation }) => (
  <div className={styles.container}>
    <BlockMath math={equation} />
  </div>
);

export default CenteredEquation;
