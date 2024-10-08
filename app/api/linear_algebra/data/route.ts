import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const baseDir = path.join(process.cwd(), "app/linear_algebra");

    // ベースディレクトリのパスをログに出力
    console.log("Base directory:", baseDir);

    const directories = fs
      .readdirSync(baseDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => {
        const pageModulePath = path.join(baseDir, dirent.name, "page.tsx");
        if (fs.existsSync(pageModulePath)) {
          const {
            metaData,
          } = require(`@/app/linear_algebra/${dirent.name}/page`);
          return {
            name: dirent.name,
            ...metaData,
            path: `/linear_algebra/${dirent.name}`,
          };
        }
        return null;
      });

    const directoriesData = directories.filter(Boolean);

    // ディレクトリデータをログに出力
    console.log("Directories data:", directoriesData);

    return NextResponse.json(directoriesData);
  } catch (error) {
    console.error("Error in API:", error);
    return NextResponse.json([]);
  }
}
