"use client";

import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowUpRight,
  Bot,
  Check,
  Copy,
  Mail,
  MessageCircle,
  RotateCcw,
  Send,
  Sparkles,
  X,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

/* ==========================================
   CONTACT INFORMATION
========================================== */

const CONTACT = {
  email: "tania7691a@gmail.com",
  whatsapp: "8801704987691",

  // Facebook username (name না)
  messenger: "Tania Akter Farhana",

  github: "https://github.com/ST7691",
  busgo: "https://busgo-gold.vercel.app",
  kidSection: "https://kids-section.vercel.app",
};
/* ==========================================
   QUICK ACTIONS
========================================== */

const quickActions = [
  {
    label: "About Tania",
    message: "Tell me about Tania",
  },
  {
    label: "Projects",
    message: "Tell me about your projects",
  },
  {
    label: "Tech Stack",
    message: "What technologies does Tania use?",
  },
  {
    label: "Experience",
    message: "Tell me about Tania's experience",
  },
  {
    label: "Hire Tania",
    message: "How can I hire Tania?",
  },
];

/* ==========================================
   INITIAL MESSAGE
========================================== */

const initialMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi! 👋 I'm Tania's AI portfolio assistant. I can help you explore her skills, projects, experience, education, and availability.",
};

/* ==========================================
   SMART ACTION GENERATOR
========================================== */

function getMessageActions(content) {
  const text = content.toLowerCase();
  const actions = [];

  /* ---------- BusGo ---------- */
  if (
    text.includes("busgo") ||
    text.includes("bus ticket") ||
    text.includes("bus booking")
  ) {
    actions.push({
      label: "View BusGo",
      href: CONTACT.busgo,
      icon: ArrowUpRight,
      external: true,
    });

    actions.push({
      label: "GitHub",
      href: CONTACT.github,
      icon: ArrowUpRight,
      external: true,
    });
  }

  /* ---------- ZapShift ---------- */
  if (
    text.includes("zapshift") ||
    text.includes("parcel") ||
    text.includes("courier")
  ) {
    actions.push({
      label: "View Projects",
      href: "#projects",
      icon: ArrowUpRight,
      external: false,
    });

    actions.push({
      label: "GitHub",
      href: CONTACT.github,
      icon: ArrowUpRight,
      external: true,
    });
  }

  /* ---------- Kid Section ---------- */
  if (
    text.includes("kid section") ||
    text.includes("kid-section") ||
    text.includes("e-commerce") ||
    text.includes("checkout") ||
    text.includes("add to cart")
  ) {
    actions.push({
      label: "View Kid Section",
      href: CONTACT.kidSection,
      icon: ArrowUpRight,
      external: true,
    });

    actions.push({
      label: "GitHub",
      href: CONTACT.github,
      icon: ArrowUpRight,
      external: true,
    });
  }

  /* ---------- Hire / Contact ---------- */
  const wantsContact =
    text.includes("hire") ||
    text.includes("hiring") ||
    text.includes("contact") ||
    text.includes("available") ||
    text.includes("availability") ||
    text.includes("freelance") ||
    text.includes("work with") ||
    text.includes("email") ||
    text.includes("whatsapp") ||
    text.includes("messenger");

  if (wantsContact) {
    actions.push({
      label: "Email Tania",
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT.email)}&su=Project%20Inquiry`,
      icon: Mail,
      external: true,
    });

    actions.push({
      label: "WhatsApp",
      href: `https://wa.me/${CONTACT.whatsapp}`,
      icon: MessageCircle,
      external: true,
    });

    actions.push({
      label: "Messenger",
      href: `https://m.me/${CONTACT.messenger}`,
      icon: Send,
      external: true,
    });
  }

  /* ---------- General Projects ---------- */
  if (
    (text.includes("projects") || text.includes("portfolio")) &&
    !text.includes("busgo") &&
    !text.includes("zapshift") &&
    !text.includes("kid section")
  ) {
    actions.push({
      label: "View Projects",
      href: "#projects",
      icon: ArrowUpRight,
      external: false,
    });
  }

  // Remove duplicate buttons
  return actions
    .filter(
      (item, index, arr) =>
        arr.findIndex((x) => x.label === item.label) === index,
    )
    .slice(0, 3);
}
/* ==========================================
   CHAT BOX
========================================== */

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([initialMessage]);

  const [input, setInput] = useState("");

  const [isTyping, setIsTyping] = useState(false);

  const [copiedId, setCopiedId] = useState(null);

  const messagesRef = useRef(null);

  const inputRef = useRef(null);

  /* ========================================
     AUTO SCROLL
  ======================================== */

  useEffect(() => {
    if (!messagesRef.current) return;

    messagesRef.current.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  /* ========================================
     AUTO FOCUS
  ======================================== */

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 250);

    return () => clearTimeout(timer);
  }, [isOpen]);

  /* ========================================
     SEND MESSAGE
  ======================================== */

  async function sendMessage(message = input) {
    const cleanMessage = message.trim();

    if (!cleanMessage || isTyping) return;

    /* ======================================
       USER MESSAGE
    ====================================== */

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: cleanMessage,
    };

    /* ======================================
       UPDATE CONVERSATION
    ====================================== */

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);

    /* ======================================
       CLEAR INPUT
    ====================================== */

    setInput("");

    /* ======================================
       SHOW TYPING
    ====================================== */

    setIsTyping(true);

    try {
      /* ====================================
         CALL API
      ==================================== */

      const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          messages: updatedMessages.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        }),
      });

      /* ====================================
         PARSE RESPONSE
      ==================================== */

      const data = await response.json();

      /* ====================================
         HANDLE ERROR
      ==================================== */

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to get AI response.");
      }

      /* ====================================
         ASSISTANT MESSAGE
      ==================================== */

      const assistantMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: data.reply,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat API Error:", error);

      /* ====================================
         ERROR MESSAGE
      ==================================== */

      const errorMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          "Sorry, I'm having trouble responding right now. Please try again or contact Tania directly from the Contact section.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      /* ====================================
         STOP TYPING
      ==================================== */

      setIsTyping(false);
    }
  }

  /* ========================================
     COPY MESSAGE
  ======================================== */

  async function copyMessage(id, content) {
    try {
      await navigator.clipboard.writeText(content);

      setCopiedId(id);

      setTimeout(() => {
        setCopiedId(null);
      }, 1500);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  }

  /* ========================================
     CLEAR CHAT
  ======================================== */

  function clearChat() {
    setMessages([
      {
        ...initialMessage,
        id: Date.now(),
      },
    ]);

    setInput("");

    setCopiedId(null);
  }

  /* ========================================
     KEYBOARD
  ======================================== */

  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      sendMessage();
    }
  }

  /* ========================================
     RENDER
  ======================================== */

  return (
    <>
      {/* ====================================
          FLOATING CHAT BUTTON
      ==================================== */}

      <motion.button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        whileHover={{
          scale: 1.06,
        }}
        whileTap={{
          scale: 0.94,
        }}
        className="
          fixed
          bottom-5
          right-5
          z-[100]
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-violet-400/30
          bg-gradient-to-br
          from-violet-600
          via-indigo-600
          to-cyan-500
          text-white
          shadow-[0_10px_40px_rgba(124,58,237,0.35)]
        "
        aria-label="Open portfolio assistant"
      >
        {isOpen ? <X size={21} /> : <MessageCircle size={22} />}

        {!isOpen && (
          <>
            <span
              className="
                absolute
                inset-0
                -z-10
                animate-ping
                rounded-full
                bg-violet-500/20
              "
            />

            <span
              className="
                absolute
                right-0
                top-0
                h-3
                w-3
                rounded-full
                border-2
                border-[#050816]
                bg-emerald-400
              "
            />
          </>
        )}
      </motion.button>

      {/* ====================================
          CHAT WINDOW
      ==================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 25,
              scale: 0.94,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="
              fixed
              bottom-24
              right-4
              z-[100]
              flex
              h-[min(650px,calc(100vh-120px))]
              w-[calc(100vw-2rem)]
              max-w-[420px]
              flex-col
              overflow-hidden
              rounded-[24px]
              border
              border-white/[0.10]
              bg-[#070b16]/95
              shadow-[0_25px_100px_rgba(0,0,0,0.55)]
              backdrop-blur-2xl
              sm:right-5
            "
          >
            {/* =================================
                HEADER
            ================================= */}

            <div
              className="
                relative
                border-b
                border-white/[0.07]
                px-4
                py-4
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-0
                  h-20
                  w-40
                  -translate-x-1/2
                  rounded-full
                  bg-violet-500/10
                  blur-3xl
                "
              />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* AI Avatar */}

                  <div
                    className="
                      relative
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-violet-500/20
                      to-cyan-500/10
                      text-violet-300
                      ring-1
                      ring-violet-400/10
                    "
                  >
                    <Bot size={20} />

                    <span
                      className="
                        absolute
                        -bottom-0.5
                        -right-0.5
                        h-3
                        w-3
                        rounded-full
                        border-2
                        border-[#070b16]
                        bg-emerald-400
                      "
                    />
                  </div>

                  {/* Title */}

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-white">
                        Tania AI Assistant
                      </h3>

                      <Sparkles size={13} className="text-violet-300" />
                    </div>

                    <p className="mt-0.5 text-[11px] text-slate-600">
                      Portfolio guide • Online
                    </p>
                  </div>
                </div>

                {/* Clear */}

                <button
                  type="button"
                  onClick={clearChat}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    text-slate-600
                    transition
                    hover:bg-white/[0.05]
                    hover:text-white
                  "
                  aria-label="Clear chat"
                  title="Clear chat"
                >
                  <RotateCcw size={16} />
                </button>
              </div>
            </div>

            {/* =================================
                MESSAGES
            ================================= */}

            <div
              ref={messagesRef}
              className="
                flex-1
                space-y-5
                overflow-y-auto
                px-4
                py-5
              "
            >
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message}
                  copied={copiedId === message.id}
                  onCopy={() => copyMessage(message.id, message.content)}
                />
              ))}

              {/* =================================
                  QUICK ACTIONS
              ================================= */}

              {messages.length === 1 && (
                <div className="space-y-2 pt-1">
                  <p
                    className="
                      px-1
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.16em]
                      text-slate-700
                    "
                  >
                    Explore
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {quickActions.map((action) => (
                      <button
                        key={action.label}
                        type="button"
                        onClick={() => sendMessage(action.message)}
                        className="
                            rounded-full
                            border
                            border-white/[0.08]
                            bg-white/[0.025]
                            px-3
                            py-2
                            text-xs
                            text-slate-500
                            transition-all
                            hover:border-violet-400/20
                            hover:bg-violet-500/[0.06]
                            hover:text-violet-200
                          "
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* =================================
                  TYPING INDICATOR
              ================================= */}

              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    className="flex items-end gap-2"
                  >
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-violet-500/10
                        text-violet-300
                      "
                    >
                      <Bot size={14} />
                    </div>

                    <div
                      className="
                        rounded-2xl
                        rounded-bl-md
                        border
                        border-white/[0.07]
                        bg-white/[0.035]
                        px-4
                        py-3
                      "
                    >
                      <div className="flex gap-1">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-600" />

                        <span
                          className="
                            h-1.5
                            w-1.5
                            animate-bounce
                            rounded-full
                            bg-slate-600
                          "
                          style={{
                            animationDelay: "120ms",
                          }}
                        />

                        <span
                          className="
                            h-1.5
                            w-1.5
                            animate-bounce
                            rounded-full
                            bg-slate-600
                          "
                          style={{
                            animationDelay: "240ms",
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* =================================
                INPUT
            ================================= */}

            <div
              className="
                border-t
                border-white/[0.07]
                bg-white/[0.015]
                p-3
              "
            >
              <div
                className="
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-black/20
                  p-1.5
                  transition
                  focus-within:border-violet-400/20
                "
              >
                <div className="flex items-end gap-2">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={handleKeyDown}
                    rows={1}
                    placeholder="Ask about Tania..."
                    className="
                      max-h-24
                      min-h-[40px]
                      flex-1
                      resize-none
                      bg-transparent
                      px-3
                      py-2.5
                      text-sm
                      leading-5
                      text-white
                      outline-none
                      placeholder:text-slate-700
                    "
                  />

                  <motion.button
                    type="button"
                    onClick={() => sendMessage()}
                    disabled={!input.trim() || isTyping}
                    whileTap={{
                      scale: 0.92,
                    }}
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-gradient-to-br
                      from-violet-600
                      to-indigo-600
                      text-white
                      transition
                      disabled:cursor-not-allowed
                      disabled:opacity-30
                    "
                    aria-label="Send message"
                  >
                    <Send size={16} />
                  </motion.button>
                </div>
              </div>

              <p className="mt-2 text-center text-[10px] text-slate-700">
                Enter to send • Shift + Enter for new line
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ============================================
   CHAT MESSAGE
============================================ */

function ChatMessage({ message, copied, onCopy }) {
  const isUser = message.role === "user";

  /* ========================================
     SMART ACTIONS
  ======================================== */

  const actions = !isUser ? getMessageActions(message.content) : [];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`group flex gap-2 ${isUser ? "justify-end" : "justify-start"}`}
    >
      {/* ===================F=================
          ASSISTANT AVATAR
      ==================================== */}

      {!isUser && (
        <div
          className="
            mt-1
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-violet-500/10
            text-violet-300
          "
        >
          <Bot size={14} />
        </div>
      )}

      <div
        className={`flex max-w-[82%] flex-col ${
          isUser ? "items-end" : "items-start"
        }`}
      >
        {/* ==================================
            MESSAGE
        ================================== */}

        <div
          className={`rounded-2xl px-4 py-3 text-sm leading-6 ${
            isUser
              ? "rounded-br-md bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-900/10"
              : "rounded-bl-md border border-white/[0.07] bg-white/[0.035] text-slate-400"
          }`}
        >
          {message.content}
        </div>

        {/* ==================================
            SMART ACTION BUTTONS
        ================================== */}

        {actions.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {actions.map((action) => {
              const Icon = action.icon;

              return (
                <motion.a
                  key={action.label}
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noopener noreferrer" : undefined}
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-violet-400/15
                    bg-violet-500/[0.06]
                    px-3
                    py-2
                    text-[11px]
                    font-medium
                    text-violet-200
                    transition-all
                    duration-200
                    hover:border-violet-400/30
                    hover:bg-violet-500/10
                    hover:text-white
                  "
                >
                  <Icon size={13} />

                  {action.label}

                  <ArrowUpRight size={11} />
                </motion.a>
              );
            })}
          </div>
        )}

        {/* ==================================
            COPY BUTTON
        ================================== */}

        {!isUser && (
          <button
            type="button"
            onClick={onCopy}
            className="
              mt-1.5
              flex
              items-center
              gap-1
              px-1
              text-[10px]
              text-slate-700
              opacity-0
              transition
              group-hover:opacity-100
              hover:text-slate-400
            "
          >
            {copied ? (
              <>
                <Check size={11} />
                Copied
              </>
            ) : (
              <>
                <Copy size={11} />
                Copy
              </>
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
}
