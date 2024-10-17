import Link from 'next/link';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>以下はipynbのテストです。</h1>
            <Link href="https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/linear_algebra/dotproduct/command1.ipynb">
                Go to About Page
            </Link>
        </div>
    );
};

export default HomePage;