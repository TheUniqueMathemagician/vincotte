import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  outExtension: 'js',
  presets: ['@pandacss/preset-base', '@park-ui/panda-preset'],
  include: [
    './app/**/*.{js,jsx,ts,tsx}',
    "./root.tsx",
    "./entry.client.tsx",
    "./entry.server.tsx",
  ],
  exclude: [],
  jsxFramework: 'react',
  outdir: "styled-system",
});
