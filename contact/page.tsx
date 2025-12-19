"use client";

import { FormEvent, useState } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");
    setErrorMsg("");

    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message || "Failed to send message");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="text-sm text-slate-400">
          Have a project or want to talk about backend, APIs, or this CMS? Send a message.
        </p>
      </header>

      {status === "success" && (
        <p className="text-sm text-emerald-400 bg-emerald-950/40 border border-emerald-700/60 px-3 py-2 rounded">
          Message sent successfully. You&apos;ll get a reply soon.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-400 bg-red-950/40 border border-red-700/60 px-3 py-2 rounded">
          {errorMsg}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm text-slate-300">Name</label>
          <input
            className="mt-1 w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="text-sm text-slate-300">Email</label>
          <input
            type="email"
            className="mt-1 w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="text-sm text-slate-300">Subject</label>
          <input
            className="mt-1 w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="text-sm text-slate-300">Message</label>
          <textarea
            className="mt-1 w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm min-h-[140px]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-medium disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Send message"}
        </button>
      </form>

      <p className="text-xs text-slate-500">
        Your message will be stored in the CMS and forwarded to the site owner by email.
      </p>
    </div>
  );
}
