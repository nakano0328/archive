// app/allmetadata.ts
import { metadata as linearAlgebraMetadata } from "@/app/linear_algebra/metadata";
import { metadata as machineLearningMetadata } from "@/app/machine_learning/metadata";
//import { metadata as geometryMetadata } from "@/app/geometry/metadata";

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

export const metadata = {
  ...addPath(linearAlgebraMetadata, "/linear_algebra"),
  ...addPath(machineLearningMetadata, "/machine_learning"),
  //...addPath(geometryMetadata, "/geometry"),
};
