import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/api/contato",
        headers: [
          {
            key: "Content-Type",
            value: "text/vcard",
          },
          {
            key: "Content-Disposition",
            value: 'attachment; filename="contato.vcf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
