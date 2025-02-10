"use client";
import React, { useState } from "react";
import Image from "next/image";

interface GifModalProps {
  imagePath: string;
  altText: string;
}

const GifModal: React.FC<GifModalProps> = ({ imagePath, altText }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={togglePlay}>{isPlaying ? "停止" : "再生"}</button>
      <div
        style={{ width: "100%", position: "relative", paddingBottom: "50%" }}
      >
        <Image
          src={isPlaying ? `${imagePath}.gif` : `${imagePath}.png`}
          alt={altText}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default GifModal;
