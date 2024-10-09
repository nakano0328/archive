import { metadata as linearAlgebraMetadata } from "@/app/linear_algebra/metadata";
//import { metadata as geometryMetadata } from "@/app/geometry/metadata"; // 新しいメタデータをインポート

// 全てのメタデータを1つのオブジェクトに統合
export const metadata = {
  ...linearAlgebraMetadata,
  //...geometryMetadata,
  // 他のメタデータをここに追加
};
