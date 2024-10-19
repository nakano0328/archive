import { siteTitle } from "@/app/metadata";

const Footer = () => {
  return (
    <footer
      style={{
        padding: "20px",
        backgroundColor: "#f1f1f1",
        textAlign: "center",
      }}
    >
      <p>&copy; 2024 {siteTitle}. 勉強頑張るそい</p>
    </footer>
  );
};

export default Footer;
