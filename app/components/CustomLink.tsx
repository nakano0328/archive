import Image from 'next/image';
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
    onClick?: () => void;
};

const CustomLink: React.FC<CustomLinkProps> = ({ href, imageUrl, altText, siteName, description, target = "_self", onClick }) => {
    return (
        <Link href={href} target={target} rel="noopener noreferrer">
            <div className={styles.customLink} onClick={onClick}>
                <div className={styles.linkContainer}>
                    <Image src={imageUrl} alt={altText} className={styles.linkImage} width={100} height={100} />
                    <div className={styles.linkText}>
                        <p className={styles.siteName}>{siteName}</p>
                        <p className={styles.description}>{description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CustomLink;
