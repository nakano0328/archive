"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ImageModal.module.css";

interface ImageModalProps {
  imagePath: string;
  altText: string; // alt用のテキストを受け取るプロパティを追加
}

const ImageModal = ({ imagePath, altText }: ImageModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* 通常の画像表示 */}
      <div style={{ position: "relative", width: "100%", height: "350px" }}>
        <Image
          src={imagePath}
          alt={altText} // 動的にaltを指定
          fill
          style={{ objectFit: "contain", cursor: "pointer" }} // styleでobjectFitを指定
          onClick={handleImageClick}
        />
      </div>

      {/* モーダル */}
      {isModalOpen && (
        <div className={styles.modal} onClick={handleCloseModal}>
          <div className={styles.modalContent}>
            <Image
              src={imagePath}
              alt={altText} // モーダルでも動的にaltを指定
              width={800} // 拡大時の画像の幅
              height={600} // 拡大時の画像の高さ
              style={{ objectFit: "contain" }} // styleでobjectFitを指定
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageModal;
