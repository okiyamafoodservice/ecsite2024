import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  // サイトのベースURLを設定
  base: "/06_ecsite",

  // ビルド出力ディレクトリを設定（デフォルトは 'dist'）
  outDir: "./dist/06_ecsite",

  // 必要に応じて他の設定を追加
});
