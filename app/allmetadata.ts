import { metadata as linearAlgebraMetadata } from "@/app/linear_algebra/metadata";
//import { metadata as geometryMetadata } from "@/app/geometry/metadata"; // 新しいメタデータをインポート

// メタデータにパスを追加して統合
const addPath = (metadata: Record<string, any>, basePath: string) => {
  const updatedMetadata: Record<string, any> = {};
  for (const key in metadata) {
    if (metadata.hasOwnProperty(key)) {
      updatedMetadata[key] = { ...metadata[key], path: `${basePath}/${key}` };
    }
  }
  return updatedMetadata;
};

export const metadata = {
  ...addPath(linearAlgebraMetadata, "/linear_algebra"),
  //...addPath(geometryMetadata, "/geometry"),
  // 他のメタデータも同様に追加
};
