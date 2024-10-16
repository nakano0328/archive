"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ImageModal.module.css";

interface ImageModalProps {
  imagePath: string;
}

const ImageModal = ({ imagePath }: ImageModalProps) => {
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
          alt="vector"
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
              alt="vector"
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
