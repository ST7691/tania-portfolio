import { NextResponse } from "next/server";

/* ==========================================
   PORTFOLIO KNOWLEDGE
========================================== */

const projects = {
  busgo: {
    name: "BusGo",
    description: "An advanced bus ticket booking platform.",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "DaisyUI",
      "MongoDB",
      "Express.js",
    ],
    features: [
      "Bus search",
      "Seat selection",
      "Booking flow",
      "Authentication",
      "User dashboard",
      "Admin dashboard",
    ],
  },

  zapshift: {
    name: "ZapShift",
    description: "A parcel delivery management platform.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Stripe",
    ],
    features: [
      "Parcel booking",
      "Tracking",
      "Payment",
      "Rider management",
      "Admin dashboard",
    ],
  },

  kidSection: {
    name: "Kid Section E-commerce",
    description: "A modern children's e-commerce shopping platform.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
    ],
    features: [
      "Product listing",
      "Product details",
      "Category filtering",
      "Add to cart",
      "Shopping cart",
      "Checkout",
      "Stripe payment",
      "Responsive design",
    ],
  },

  vibeDelivery: {
    name: "Vibe Delivery Services",
    description: "A delivery service web application.",
    technologies: ["React", "Vite", "Tailwind CSS", "MongoDB", "Express.js"],
    features: ["Responsive UI", "API integration", "Delivery management"],
  },
};

/* ==========================================
   DETECT PROJECT
========================================== */

function detectProject(text) {
  const msg = text.toLowerCase();

  if (msg.includes("busgo") || msg.includes("bus ticket")) return "busgo";

  if (msg.includes("zapshift") || msg.includes("parcel")) return "zapshift";

  if (
    msg.includes("kid section") ||
    msg.includes("kid-section") ||
    msg.includes("kids section") ||
    msg.includes("e-commerce") ||
    msg.includes("checkout") ||
    msg.includes("add to cart")
  )
    return "kidSection";

  if (msg.includes("vibe")) return "vibeDelivery";

  return null;
}

/* ==========================================
   DETECT TOPIC
========================================== */

function detectTopic(text) {
  const msg = text.toLowerCase();

  if (
    msg.includes("technology") ||
    msg.includes("tech stack") ||
    msg.includes("used")
  )
    return "technology";

  if (msg.includes("feature")) return "features";

  if (msg.includes("project")) return "projects";

  if (msg.includes("hire") || msg.includes("available")) return "hire";

  if (
    msg.includes("contact") ||
    msg.includes("email") ||
    msg.includes("whatsapp")
  )
    return "contact";

  if (msg.includes("experience")) return "experience";

  return null;
}

/* ==========================================
   BUILD RESPONSE
========================================== */

function reply(projectKey, topic, message) {
  const msg = message.toLowerCase();

  if (projectKey) {
    const p = projects[projectKey];

    if (topic === "technology") {
      return `### ${p.name}

**Technologies**

${p.technologies.map((t) => `• ${t}`).join("\n")}

This project follows modern frontend architecture with responsive UI and REST API integration.`;
    }

    if (topic === "features") {
      return `### ${p.name}

**Key Features**

${p.features.map((f) => `• ${f}`).join("\n")}`;
    }

    return `## ${p.name}

${p.description}

**Tech Stack:** ${p.technologies.join(", ")}

**Highlights:** ${p.features.slice(0, 4).join(", ")}.`;
  }

  if (topic === "projects") {
    return `Tania has built several production-style applications:

• BusGo – Bus ticket booking
• ZapShift – Parcel delivery platform
• Kid Section – Children's E-commerce
• Vibe Delivery – Delivery service app

Each project focuses on responsive UI, authentication, MongoDB, REST APIs, and modern React development.`;
  }

  if (topic === "technology") {
    return `### Core Tech Stack

**Frontend**
• React.js
• Next.js
• JavaScript
• Tailwind CSS
• Framer Motion

**Backend**
• Node.js
• Express.js
• MongoDB
• Firebase
• Stripe`;
  }

  if (topic === "experience") {
    return `Tania specializes in Front-End and Full-Stack JavaScript development.

She builds responsive web applications using React, Next.js, Tailwind CSS, Node.js, Express, MongoDB, REST APIs, and modern UI architecture.`;
  }

  if (topic === "hire") {
    return `Yes — Tania is available for Frontend, React.js, Next.js, Freelance and Remote opportunities.

You can contact her directly using Email, WhatsApp, or Messenger from the portfolio.`;
  }

  if (topic === "contact") {
    return `You can reach Tania directly through:

• Email
• WhatsApp
• Messenger

Use the contact buttons below for one-click communication.`;
  }

  if (msg.includes("about tania") || msg.includes("who is tania")) {
    return `## Tania Akter Farhana

A Full stack  Web Developer specializing in React.js, Next.js, JavaScript and modern UI development.

She enjoys creating responsive, animated, user-friendly web experiences with scalable component architecture.`;
  }

  return `I'm Tania's AI portfolio assistant.

Ask me about:

• BusGo
• Kid Section
• ZapShift
• Tech Stack
• Experience
• Hiring`;
}

/* ==========================================
   API
========================================== */

export async function POST(req) {
  try {
    const { messages = [] } = await req.json();

    const latest = messages[messages.length - 1]?.content || "";

    let project = detectProject(latest);
    const topic = detectTopic(latest);

    // Conversation memory
    if (!project) {
      for (let i = messages.length - 2; i >= 0; i--) {
        const found = detectProject(messages[i].content);
        if (found) {
          project = found;
          break;
        }
      }
    }

    const answer = reply(project, topic, latest);

    return NextResponse.json({
      success: true,
      reply: answer,
    });
  } catch (e) {
    return NextResponse.json(
      {
        success: false,
        message: "Portfolio assistant unavailable.",
      },
      { status: 500 },
    );
  }
}
