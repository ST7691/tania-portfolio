
import "./globals.css";

const SITE_URL = "https://tania-portfolio-sigma.vercel.app";

const SITE_TITLE = "Tania Akter Farhana | Software Engineer & Full Stack Developer";

const SITE_DESCRIPTION =
  "Tania Akter Farhana is a Software Engineer and Full Stack Web Developer specializing in React.js, Next.js, JavaScript, Node.js, Express.js, PostgreSQL, Golang, Docker, AWS, REST APIs, and modern web application development.";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: "%s | Tania Akter Farhana",
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "Tania Akter Farhana",
    "Software Engineer",
    "Software Developer",
    "Full Stack Developer",
    "Full Stack Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "JavaScript Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js Developer",
    "Golang Developer",
    "Go Backend Developer",
    "Backend Software Engineer",
    "Docker",
    "AWS",
    "Cloud Computing",
    "DevOps Fundamentals",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "REST API Development",
    "API Development",
    "Database Design",
    "Next.js Developer Bangladesh",
    "Software Engineer Bangladesh",
    "Backend Developer Bangladesh",
    "Remote Software Engineer",
    "Remote Full Stack Developer",
    "Git",
    "GitHub",
    "Vercel",
  ],

  authors: [
    {
      name: "Tania Akter Farhana",
      url: SITE_URL,
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
    url: SITE_URL,
    siteName: "Tania Akter Farhana Portfolio",

    title: SITE_TITLE,
    description: SITE_DESCRIPTION,

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tania Akter Farhana - Software Engineer and Full Stack Developer",
      },
    ],
  },

twitter: {
  card: "summary_large_image",
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  images: ["/og-image.png"],
},
  alternates: {
    canonical: SITE_URL,
  },

  category: "technology",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Tania Akter Farhana",
    url: SITE_URL,

    jobTitle: [
      "Software Engineer",
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
    ],

    description: SITE_DESCRIPTION,

    sameAs: [
      "https://github.com/ST7691",
      "https://www.linkedin.com/in/tania-akter-farhana-0b67383b7",
    ],

    knowsAbout: [
      "Software Engineering",
      "Full Stack Web Development",
      "Frontend Development",
      "Backend Development",
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Golang",
      "Go Programming Language",
      "REST API Development",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Database Design",
      "Authentication",
      "Payment Integration",
      "Docker",
      "AWS",
      "Cloud Computing",
      "DevOps",
      "Git",
      "GitHub",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase",
      "TanStack Query",
      "Axios",
      "Framer Motion",
      "NextAuth",
      "Prisma",
      "Vercel",
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="IJzMcNML4owJ7yYvLO1T0BfI2-B0oW1CuehxhnH8754"
        />
      </head>

      <body>
        {children}

        {/* Person Structured Data for Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
