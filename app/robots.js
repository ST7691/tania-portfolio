export default function robots() {
  const baseUrl = "https://tania-portfolio-sigma.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
