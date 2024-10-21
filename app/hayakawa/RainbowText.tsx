import React from 'react';
import styles from './rainbowStyles.module.css';

const RainbowText: React.FC = () => {
    return (
        <h1 className={styles.rainbowText}>
            ここはホームじゃないぜ！
        </h1>
    );
};

export default RainbowText;
