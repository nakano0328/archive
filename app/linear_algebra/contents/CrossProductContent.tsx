export default function CrossProductContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cross Product</h1>
      <div className="prose max-w-none">
        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
          <p>
            The cross product is a binary operation on vectors in
            three-dimensional space...
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Properties</h2>
          <ul className="list-disc pl-6">
            <li>Anti-commutative: a×b = -(b×a)</li>
            <li>Distributive: a×(b + c) = a×b + a×c</li>
            {/* その他のコンテンツ */}
          </ul>
        </section>
      </div>
    </div>
  );
}
