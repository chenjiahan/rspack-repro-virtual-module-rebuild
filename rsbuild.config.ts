import { defineConfig } from "@rsbuild/core";
import { RspackVirtualModulePlugin } from "rspack-plugin-virtual-module";

export default defineConfig({
  output: {
    distPath: {
      root: "./rsbuild-dist",
    },
  },
  tools: {
    rspack: {
      plugins: [
        new RspackVirtualModulePlugin({
          contents: 'export default "Hello World";',
        }),
      ],
    },
  },
});
