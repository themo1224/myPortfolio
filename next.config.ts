import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
// module.exports = {
//   webpackDevMiddleware: (config) => {
//     config.watchOptions = {
//       poll: 1000, // Check for changes every second
//       aggregateTimeout: 300, // Delay before rebuilding
//     };
//     return config;
//   },
// };
module.exports = {
  output: "standalone",
};

export default nextConfig;
