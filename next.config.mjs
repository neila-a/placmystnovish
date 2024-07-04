import mdxWither from "@next/mdx";
const withMDX = mdxWither();
/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
    experimental: {
        mdxRs: false
    }
};
export default withMDX(nextConfig);
