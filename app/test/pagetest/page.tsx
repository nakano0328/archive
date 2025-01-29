import Link from "next/link";
import GoogleForm from "@/app/components/GoogleForm";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>以下はipynbのテストです。</h1>
      <Link href="https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/linear_algebra/dotproduct/command1.ipynb">
        Go to About Page
      </Link>

      <br />
      <hr />
      <br />
      <h1>コメントフォーム</h1>
      <GoogleForm currentPath="/test/pagetest" underComment={true} />
    </div>
  );
};

export default HomePage;
