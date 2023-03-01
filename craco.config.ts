/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const resolvePath = (p: string) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@assets": resolvePath("./src/assets"),
      "@components": resolvePath("./src/components"),
      "@store": resolvePath("./src/store"),
      "@styles": resolvePath("./src/styles"),
      "@utils": resolvePath("./src/utils"),
      "@api": resolvePath("./src/api"),
      "@interfaces": resolvePath("./src/interfaces"),
      "@hooks": resolvePath("./src/hooks"),
      "@constants": resolvePath("./src/constants"),
    },
  },
};

export {};
