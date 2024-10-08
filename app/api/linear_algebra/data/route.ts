import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface MetaData {
  title: string;
  description: string;
  updatedAt: string;
}

export async function GET() {
  try {
    const baseDir = path.join(process.cwd(), "app/linear_algebra");

    const directories = fs
      .readdirSync(baseDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map(async (dirent) => {
        const pageModulePath = path.join(baseDir, dirent.name, "page.tsx");
        if (fs.existsSync(pageModulePath)) {
          try {
            // 動的インポートに明示的に型を指定
            const pageModule: { metaData: MetaData } = await import(
              `@/app/linear_algebra/${dirent.name}/page`
            );
            const { metaData } = pageModule;
            return {
              name: dirent.name,
              ...metaData,
              path: `/linear_algebra/${dirent.name}`,
            };
          } catch (err) {
            console.error(`Error loading module for ${dirent.name}:`, err);
            return null; // エラーが発生したらnullを返す
          }
        }
        return null; // page.tsx が存在しない場合はnullを返す
      });

    const directoriesData = (await Promise.all(directories)).filter(Boolean);

    return NextResponse.json(directoriesData);
  } catch (error) {
    console.error("Error in API:", error);
    return NextResponse.json([]);
  }
}
