import type { ConfigEnv } from "vite";
import { defineConfig, loadEnv } from "vite";

export default ({ mode }: ConfigEnv) => {
  const currentEnv = loadEnv(mode, process.cwd());

  return defineConfig({
    base: currentEnv.VITE_PUBLIC_PATH,
    mode: mode,
    css: {
      modules: {
        localsConvention: "camelCase",
        generateScopedName: `[name]__[local]__[hash:base64:2]`,
      },
    },
    resolve: {
      alias: {
        "@": "/src",
        "@app": "/src/app",
        "@pages": "/src/pages",
        "@widgets": "/src/widgets",
        "@features": "/src/features",
        "@entities": "/src/entities",
        "@shared": "/src/shared",
      },
    },
  });
};
