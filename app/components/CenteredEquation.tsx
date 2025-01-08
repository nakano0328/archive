import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import React from "react";
import styles from "@/app/components/CenteredEquation.module.css";

const CenteredEquation: React.FC<{ equation: string }> = ({ equation }) => (
  <>
    <div className={styles.container}>
      <BlockMath math={equation} />
    </div>
    <div className={styles.scrollMessage}>
      数式が見切れてる場合は、横にスクロールしてください。
    </div>
  </>
);

export default CenteredEquation;
