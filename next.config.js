/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: (() => {
    let compilerConfig = {
      styledComponents: true,
    };

    if (process.env.NODE_ENV === "production") {
      compilerConfig = {
        ...compilerConfig,
        // prd ではreact tresting library で使用する data-testid 属性を削除する
        reactRemoveProperty: { properties: ["^data-testid$"] },
      };
    }
    return compilerConfig;
  })(),
};

module.exports = nextConfig;
