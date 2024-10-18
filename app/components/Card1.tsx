import React from "react";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  icon: string;
  backgroundColor: string;
  link: string; // 解説ページへのリンク
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  backgroundColor,
  link,
}) => {
  return (
    <Link href={link} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        style={{
          backgroundColor,
          padding: "20px",
          margin: "20px",
          borderRadius: "8px",
          textAlign: "center",
          transition: "transform 0.3s ease",
          height: "150px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <h3 style={{ fontSize: "2em", margin: "10px 0" }}>{icon}</h3>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Card;
