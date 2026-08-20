export const projects = [
  // busgo 
  {
    id: "busgo",
    slug: "busgo",

    title: "BusGo",

    category: "Full-Stack Web Application",

    role: "Frontend / Full-Stack Developer",

    description:
      "A modern bus ticket booking platform designed to make searching, seat selection, booking and payment simple and user-friendly.",

    longDescription:
      "BusGo is a full-stack transportation booking platform focused on creating a smooth journey from bus discovery to ticket booking and payment.",

    image: "/projects/busgo.png",

    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Stripe",
      "NextAuth",
    ],

    features: [
      "Bus search and filtering",
      "Seat selection",
      "Online booking",
      "Stripe payment integration",
      "Authentication",
      "Booking history",
      "Admin dashboard",
    ],

    challenge:
      "The main challenge was creating a booking experience where users could easily search routes, choose seats and complete payments without unnecessary complexity.",

    solution:
      "I structured the application into reusable components and separated the booking, authentication, payment and administrative workflows. The interface was designed with responsive layouts so the booking flow remains easy to use across desktop and mobile devices.",

    results:
      "The project demonstrates a complete modern booking workflow with authentication, database integration, payment processing and an administrative management interface.",

    liveUrl: "https://busgo-gold.vercel.app",

    githubUrl: "https://github.com/ST7691",

    featured: true,
  },
// zapshift
  {
    id: "zapshift",
    slug: "zapshift",

    title: "ZapShift",

    category: "Parcel Delivery Platform",

    role: "Frontend / Full-Stack Developer",

    description:
      "A courier and parcel delivery management platform with parcel tracking, rider assignment, payments and administrative tools.",

    longDescription:
      "ZapShift is a parcel delivery application connecting customers, riders and administrators through a structured delivery workflow.",

    image: "/projects/zapshift.png",

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
      "Parcel booking",
      "Parcel tracking",
      "Rider assignment",
      "Payment history",
      "Admin dashboard",
      "Responsive interface",
    ],

    challenge:
      "The challenge was organizing different user workflows such as customers, riders and administrators while keeping the application simple to navigate.",

    solution:
      "I created separate application flows for different user responsibilities and connected the frontend with backend APIs and MongoDB for managing parcel and delivery information.",

    results:
      "The application provides a practical delivery management workflow with parcel booking, tracking, payment and administrative functionality.",

    liveUrl: "#",

    githubUrl: "https://github.com/ST7691",

    featured: true,
  },
// kid section
  {
    id: "ecommerce",
    slug: "ecommerce",

    title: "Kid-section E-commerce",

    category: "E-commerce Application",

    role: "Full stack / Frontend Developer",

    description:
      "A responsive e-commerce experience with product browsing, authentication, cart management and a modern checkout flow.",

    longDescription:
      "A modern shopping platform focused on intuitive product discovery, responsive UI and a smooth customer journey.",

    image: "/projects/kid-section.png",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Firebase",
      "MongoDB",
      "REST API",
    ],

    features: [
      "Product browsing",
      "Product details",
      "Authentication",
      "Shopping cart",
      "Responsive design",
      "API integration",
    ],

    challenge:
      "The goal was to create a clean shopping experience where users could quickly discover products and move through the purchasing journey naturally.",

    solution:
      "I implemented reusable product components, responsive layouts, authentication and API-driven product data while keeping the interface focused on usability.",

    results:
      "The project demonstrates a complete frontend shopping experience with authentication, product management and responsive user interfaces.",

    liveUrl: "https://kids-section.vercel.app",

    githubUrl: "https://github.com/ST7691",

    featured: true,
  },
];
