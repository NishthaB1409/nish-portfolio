import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// Picks the best-matching intent by counting keyword hits in the user's text.
function findAnswer(text, chat) {
  const normalized = text.toLowerCase();
  let best = null;
  let bestScore = 0;

  for (const intent of chat.intents) {
    const score = intent.keywords.reduce((total, keyword) => (normalized.includes(keyword) ? total + 1 : total), 0);
    if (score > bestScore) {
      bestScore = score;
      best = intent;
    }
  }

  return best ? best.answer : chat.fallback;
}

// Renders message text, turning any URLs into clickable links.
function MessageText({ text }) {
  const parts = text.split(/(https?:\/\/[^\s]+)/g);
  return (
    <>
      {parts.map((part, index) =>
        /^https?:\/\//.test(part) ? (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline underline-offset-2 hover:text-primary-strong"
          >
            {part.includes("drive.google") ? "Open Resume ↗" : part}
          </a>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
}

export function Chatbot() {
  const { t } = useLanguage();
  const chat = t.chat;

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  // Seed the greeting the first time the panel opens, and reset on language change.
  useEffect(() => {
    setMessages([{ from: "bot", text: chat.greeting }]);
  }, [chat.greeting]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const sendMessage = async (raw) => {
    const text = raw.trim();
    if (!text) return;

    const nextMessages = [...messages, { from: "user", text }];
    setMessages(nextMessages);
    setInput("");
    setTyping(true);

    try {
      // Ask the AI backend, sending recent conversation for context.
      const payload = {
        lang,
        messages: nextMessages.map((m) => ({
          role: m.from === "user" ? "user" : "assistant",
          content: m.text
        }))
      };

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error(`Chat API ${response.status}`);

      const data = await response.json();
      const reply = data.reply?.trim() || findAnswer(text, chat);
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    } catch (error) {
      // Backend unavailable (e.g. local `vite dev`, or an API error) —
      // gracefully fall back to the built-in keyword assistant.
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: findAnswer(text, chat) }]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={chat.launcher}
        aria-expanded={open}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-onprimary shadow-glow transition duration-300 hover:scale-110"
      >
        {open ? (
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16H9l-4 3.5V16H6.5A2.5 2.5 0 0 1 4 13.5v-7Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M8.5 9.5h7M8.5 12.5h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div className="reveal fixed bottom-24 right-4 z-50 flex h-[70vh] max-h-[560px] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-line bg-panel shadow-soft sm:right-6">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-line bg-gradient-to-r from-primary/15 to-secondary/15 p-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-black text-onprimary">
              N
            </span>
            <div className="leading-tight">
              <p className="font-bold text-ink">{chat.title}</p>
              <p className="flex items-center gap-1.5 text-xs text-muted">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {chat.subtitle}
              </p>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${
                    message.from === "user"
                      ? "rounded-br-sm bg-primary text-onprimary"
                      : "rounded-bl-sm border border-line bg-inset/60 text-body"
                  }`}
                >
                  <MessageText text={message.text} />
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="flex gap-1 rounded-2xl rounded-bl-sm border border-line bg-inset/60 px-3.5 py-3">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-muted [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-muted [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-muted" />
                </div>
              </div>
            )}

            {messages.length <= 1 && !typing && (
              <div className="pt-1">
                <p className="mb-2 text-xs font-semibold text-muted">{chat.suggestionsLabel}</p>
                <div className="flex flex-wrap gap-2">
                  {chat.suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => sendMessage(suggestion)}
                      className="rounded-full border border-line bg-chip/50 px-3 py-1.5 text-xs font-semibold text-body transition hover:border-primary/40 hover:text-primary"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-line p-3">
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={chat.placeholder}
              className="min-h-11 flex-1 rounded-full border border-line bg-inset/60 px-4 text-sm text-ink outline-none transition focus:border-primary"
            />
            <button
              type="submit"
              aria-label="Send"
              disabled={!input.trim()}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-onprimary transition hover:bg-primary-strong disabled:opacity-40"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 12 20 4l-4 16-4-6-8-2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
