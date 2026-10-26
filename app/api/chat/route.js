import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 15;

/* ==========================================
   PORTFOLIO KNOWLEDGE BASE
========================================== */

const PORTFOLIO_KNOWLEDGE = {
  profile: {
    name: "Tania Akter Farhana",
    role: "Full-Stack Software Engineer & Web Developer",
    location: "Chhatak, Sunamganj, Sylhet, Bangladesh",
    summary:
      "A Full-Stack Software Engineer specializing in JavaScript, TypeScript, React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, MySQL, Golang, Docker, and Tailwind CSS.",
    links: {
      github: "https://github.com/ST7691",
      portfolio: "https://tania-portfolio-sigma.vercel.app",
      linkedin: "https://www.linkedin.com/in/tania-akter-farhana-0b67383b7",
      email: "tania7691a@gmail.com",
      whatsapp: "https://wa.me/8801704987691",
    },
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Golang",
      "Docker",
      "MongoDB",
      "PostgreSQL",
      "Tailwind CSS",
      "Prisma",
      "Stripe",
    ],
  },
  projects: {
    agroghor: { name: "AgroGhor", liveDemo: "https://agroghor.com" },
    madisonGrill: {
      name: "Madison Grill",
      liveDemo: "https://madison-grill.com",
    },
    team196Global: {
      name: "Team 196 Global",
      liveDemo: "https://team196global.com",
    },
    busgo: { name: "BusGo", liveDemo: "https://busgo-gold.vercel.app" },
    kidSection: {
      name: "Kids Section E-commerce",
      liveDemo: "https://kids-section.vercel.app",
    },
    restaurant: {
      name: "ST Restaurant",
      liveDemo: "https://st-etoile.vercel.app",
    },
  },
};

const SYSTEM_INSTRUCTIONS = `
You are Tania Akter Farhana's official AI portfolio assistant.
Answer accurately and concisely based strictly on this portfolio data:
${JSON.stringify(PORTFOLIO_KNOWLEDGE)}
Reply in the user's language (Bangla or English) with short, readable Markdown.
`;

/* ==========================================
   POST ROUTE HANDLER (FAST RESPONSE)
========================================== */

export async function POST(req) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: "API Key missing." },
        { status: 503 },
      );
    }

    const body = await req.json();
    const messages = body?.messages || [];

    if (messages.length === 0) {
      return NextResponse.json(
        { success: false, message: "No message provided." },
        { status: 400 },
      );
    }

    //
    const recentMessages = messages.slice(-4);
    const lastUserMsg =
      recentMessages[recentMessages.length - 1]?.content || "Hello";

    let answer = null;

    //  (gemini-2.5-flash)
    try {
      const ai = new GoogleGenAI({ apiKey });
      const contents = [
        { role: "user", parts: [{ text: SYSTEM_INSTRUCTIONS }] },
        { role: "model", parts: [{ text: "Understood!" }] },
      ];

      for (const msg of recentMessages) {
        contents.push({
          role: msg.role === "assistant" ? "model" : "user",
          parts: [{ text: msg.content || "" }],
        });
      }

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: contents,
      });

      if (response && response.text) {
        answer = response.text;
      }
    } catch (sdkError) {
      console.warn(
        "[Fast API] SDK failed, using direct fast fallback...",
        sdkError?.message,
      );
    }

    // Instant Response
    if (!answer) {
      const q = lastUserMsg.toLowerCase();
      if (q.includes("about") || q.includes("who")) {
        answer =
          "Hi! Tania Akter Farhana is a Full-Stack Software Engineer specializing in React, Next.js, Node.js, Golang, Docker, and databases like MongoDB & PostgreSQL.";
      } else if (q.includes("project") || q.includes("work")) {
        answer =
          "Tania built several high-profile applications including:\n- **AgroGhor** (https://agroghor.com)\n- **BusGo** (https://busgo-gold.vercel.app)\n- **Madison Grill** (https://madison-grill.com)\n- **Team 196 Global** (https://team196global.com)\n- **ST Restaurant** (https://st-etoile.vercel.app)";
      } else if (q.includes("tech") || q.includes("skill")) {
        answer =
          "Tania's key technologies include **JavaScript, TypeScript, React, Next.js, Node.js, Express, Golang, Docker, MongoDB, PostgreSQL, and Tailwind CSS**.";
      } else if (
        q.includes("hire") ||
        q.includes("contact") ||
        q.includes("email")
      ) {
        answer =
          "You can contact Tania via:\n- **Email:** tania7691a@gmail.com\n- **WhatsApp:** https://wa.me/8801704987691\n- **GitHub:** https://github.com/ST7691";
      } else {
        answer =
          "Hi 👋 I'm Tania's AI Assistant! Ask me anything about her projects, skills, tech stack, or contact information.";
      }
    }

    return NextResponse.json({ success: true, reply: answer }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: true,
        reply:
          "Hi! Feel free to ask about Tania's full-stack projects, skills, or contact info!",
      },
      { status: 200 },
    );
  }
}
