import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://tania-portfolio.vercel.app"),

  title: {
    default: "Tania Akter Farhana | Frontend Developer",
    template: "%s | Tania Akter Farhana",
  },

  description:
    "Tania Akter Farhana is a Frontend Web Developer specializing in React.js, Next.js, JavaScript, Tailwind CSS, and modern web application development.",

  keywords: [
    "Tania Akter Farhana",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Web Developer Bangladesh",
    "React Developer Bangladesh",
    "Next.js Developer Bangladesh",
    "Frontend Web Developer",
    "Full Stack JavaScript Developer",
  ],

  authors: [
    {
      name: "Tania Akter Farhana",
    },
  ],

  creator: "Tania Akter Farhana",
  publisher: "Tania Akter Farhana",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tania-portfolio.vercel.app",
    siteName: "Tania Akter Farhana Portfolio",
    title: "Tania Akter Farhana | Frontend Developer",
    description:
      "Explore Tania Akter Farhana's portfolio, projects, skills, and experience in React.js, Next.js, JavaScript, and modern web development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tania Akter Farhana - Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tania Akter Farhana | Frontend Developer",
    description:
      "Frontend Developer specializing in React.js, Next.js, JavaScript, and modern web development.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://tania-portfolio.vercel.app",
  },

  category: "technology",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tania Akter Farhana",
              jobTitle: "Frontend Web Developer",
              description:
                "Frontend Web Developer specializing in React.js, Next.js, JavaScript, and modern web development.",
              url: "https://your-domain.com",
              sameAs: ["https://github.com/ST7691"],
              knowsAbout: [
                "HTML",
                "CSS",
                "JavaScript",
                "React.js",
                "Next.js",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Firebase",
                "REST API",
                "Git",
                "GitHub",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
