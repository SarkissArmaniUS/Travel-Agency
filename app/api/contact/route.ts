import { NextResponse } from "next/server";

export const runtime = "nodejs";

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

// Простий ліміт: 5 листів на годину з однієї IP (в пам'яті; на serverless діє частково)
const hits = new Map<string, number[]>();
const WINDOW = 60 * 60 * 1000;
const LIMIT = 5;

function tooMany(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > LIMIT;
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: тихо вдаємо успіх
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (name.length < 2 || name.length > 100) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  if (message.length < 10 || message.length > 2000) {
    return NextResponse.json({ error: "Message must be 10 to 2000 characters." }, { status: 400 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (tooMany(ip)) {
    return NextResponse.json({ error: "Too many messages. Please try again later." }, { status: 429 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Website <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set");
    return NextResponse.json({ error: "Email service is not configured yet." }, { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `New message from ${name.replace(/[\r\n]+/g, " ")}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Message:</strong></p>
<p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    }),
  });

  if (!res.ok) {
    console.error("Resend error:", res.status, await res.text());
    return NextResponse.json({ error: "Could not send the message. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
