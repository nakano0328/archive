export default function Page({ params, searchParams }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const error = searchParams?.error;
  if (error) {
    throw new Error("ERROR!!!!!");
  }
  return <h1>Error Test</h1>;
}
