import React from 'react';
import Link from 'next/link';
import styles from './CustomLink.module.css';

type CustomLinkProps = {
    href: string;
    imageUrl: string;
    altText: string;
    siteName: string;
    description: string;
    target?: string;
};

const CustomLink: React.FC<CustomLinkProps> = ({ href, imageUrl, altText, siteName, description, target = "_self" }) => {
    return (
        <Link href={href} className={styles.customLink} target={target} rel="noopener noreferrer">
            <div className={styles.linkContainer}>
                <img src={imageUrl} alt={altText} className={styles.linkImage} />
                <div className={styles.linkText}>
                    <p className={styles.siteName}>{siteName}</p>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
        </Link>
    );
};

export default CustomLink;
