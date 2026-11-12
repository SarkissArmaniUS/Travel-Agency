"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Button from "./Button";
import Reveal from "./Reveal";
import { inputClass } from "./formStyles";

type Status = "idle" | "sending" | "success" | "error";

const PUBLIC_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

const Contact = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="flexCenter flex-col pb-24">
      <div className="padding-container max-container grid w-full gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal y={30} className="flex flex-col">
          <h2 className="bold-40 lg:bold-64">Let's Plan Your Trip</h2>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[460px]">
            Tell us where you want to go and when. We usually reply within one working day.
          </p>
          {PUBLIC_EMAIL && (
            <p className="regular-16 mt-8">
              Or write directly:{" "}
              <a href={`mailto:${PUBLIC_EMAIL}`} className="bold-16 text-green-50 hover:underline">
                {PUBLIC_EMAIL}
              </a>
            </p>
          )}
        </Reveal>

        <Reveal y={30} delay={0.15}>
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <input className={inputClass} type="text" name="name" placeholder="Your name" required minLength={2} maxLength={100} autoComplete="name" />
            <input className={inputClass} type="email" name="email" placeholder="Email" required maxLength={200} autoComplete="email" />
            <textarea
              className={`${inputClass} min-h-[160px] resize-y`}
              name="message"
              placeholder="Your message"
              required
              minLength={10}
              maxLength={2000}
            />
            {/* Honeypot: людина його не бачить, боти заповнюють */}
            <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

            <div className="mt-2 flex flex-wrap items-center gap-5">
              <Button
                type="submit"
                title={status === "sending" ? "Sending..." : "Send message"}
                variant="btn_dark_green"
                disabled={status === "sending"}
              />
              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.p
                    key="ok"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    role="status"
                    className="regular-16 text-green-50"
                  >
                    Thanks! Your message was sent.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    key="err"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    role="alert"
                    className="regular-16 text-red-500"
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
