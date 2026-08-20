export default function robots() {
  const baseUrl = "https://your-domain.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
