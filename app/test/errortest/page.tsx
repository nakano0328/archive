interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Page({ searchParams }: PageProps) {
  const error = searchParams?.error;
  if (error) {
    throw new Error("ERROR!!!!!");
  }
  return <h1>Error Test</h1>;
}
