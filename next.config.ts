import type { NextConfig } from "next";

/**
 * STATIC_EXPORT=1 → sito statico per GitHub Pages (cartella out/),
 * con NEXT_PUBLIC_BASE_PATH (es. /sos-casa-demo) e immagini servite così come sono.
 */
const isExport = process.env.STATIC_EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const securityHeaders = async () => [
  {
    source: "/:path*",
    headers: [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    ],
  },
];

const nextConfig: NextConfig = isExport
  ? {
      output: "export",
      basePath,
      trailingSlash: true,
      images: { loader: "custom", loaderFile: "./src/lib/static-image-loader.ts" },
      poweredByHeader: false,
    }
  : {
      images: {
        formats: ["image/avif", "image/webp"],
        deviceSizes: [640, 828, 1080, 1280, 1600, 1920, 2400],
      },
      poweredByHeader: false,
      headers: securityHeaders,
    };

export default nextConfig;
