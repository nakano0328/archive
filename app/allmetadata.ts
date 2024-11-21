import { metadata as linearAlgebraMetadata } from "@/app/linear_algebra/metadata";
// import { metadata as geometryMetadata } from "@/app/geometry/metadata";

const addPath = (
  metadata: Record<
    string,
    { title: string; description: string; lastUpdated: string }
  >,
  basePath: string
) => {
  const updatedMetadata: Record<
    string,
    { title: string; description: string; lastUpdated: string; path: string }
  > = {};
  for (const key in metadata) {
    if (metadata.hasOwnProperty(key)) {
      updatedMetadata[key] = { ...metadata[key], path: `${basePath}/${key}` };
    }
  }
  return updatedMetadata;
};

export const allMetadata = {
  linear_algebra: addPath(linearAlgebraMetadata, "/linear_algebra"),
  // geometry: addPath(geometryMetadata, "/geometry"),
};
