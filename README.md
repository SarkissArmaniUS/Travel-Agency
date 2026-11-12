<h1 align="center">🌍 Animated Travel Landing</h1>

<p align="center">
  A travel & camping landing page focused on <b>motion and scroll experience</b>:<br>
  pinned horizontal gallery, parallax, smooth scroll and polished micro-interactions.
</p>

<p align="center">
  <a href="https://YOUR-DOMAIN.vercel.app"><img src="https://img.shields.io/badge/Live_demo-111827?style=for-the-badge&logo=vercel&logoColor=white"></a>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
  <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black">
</p>

<!-- TODO: record a 10-15 s screen capture (Hero + Camp scroll) and save it as docs/demo.gif -->
<p align="center">
  <img src="docs/demo.gif" alt="Animated Travel Landing preview" width="860">
</p>

## ✨ What I built on top of the base design

The layout comes from a public Next.js tutorial design (Hilink). My work is everything that makes it feel alive and work like a real site:

- **Scroll-driven gallery:** GSAP ScrollTrigger pins the Camp section and turns vertical scroll into horizontal movement (desktop), with a native swipe + scroll-snap fallback on mobile.
- **Smooth scrolling:** Lenis synced with GSAP's ticker, plus animated in-page anchors with a sticky-header offset.
- **Hero choreography:** staggered word-by-word headline, spring-in rating stars, floating card, parallax background.
- **UI motion with Framer Motion (`motion`):** scroll reveals, parallax image and phone mockup, count-up stats, testimonial carousel, FAQ accordion, animated mobile menu and modals.
- **Working UI:** sticky blurred navbar, video modal, login modal (UI demo), scroll progress bar, back-to-top button.
- **Contact form:** Next.js API route that sends email through Resend, with server-side validation, HTML escaping, honeypot and basic rate limiting.
- **New sections:** destinations, stats, testimonials, pricing, FAQ, contact.
- **Accessibility:** respects `prefers-reduced-motion` (animations and smooth scroll are disabled), keyboard-closable modals, aria attributes on interactive controls.
- **SEO:** metadata and Open Graph tags.

## 🛠 Tech stack

| Area | Tools |
|---|---|
| Framework | Next.js 14 (App Router), React 18, TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion (`motion`), GSAP + ScrollTrigger, Lenis |
| Backend | Next.js Route Handler, Resend (email API) |
| Hosting | Vercel |

## 🚀 Getting started

Requires **Node.js 20+** (LTS recommended).

```bash
git clone https://github.com/SarkissArmaniUS/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
npm install
cp .env.local.example .env.local   # fill in the values below
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | for the contact form | API key from [resend.com](https://resend.com/api-keys) |
| `CONTACT_TO_EMAIL` | for the contact form | Where messages are delivered |
| `CONTACT_FROM_EMAIL` | no | Sender address (defaults to Resend's test sender) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | no | Shows a public `mailto:` link on the site |
| `NEXT_PUBLIC_SITE_URL` | no | Used for SEO / Open Graph URLs |

Without the Resend variables the site works normally; only the contact form returns a "not configured" message.

## 📁 Project structure

```
app/
  api/contact/route.ts   # contact form endpoint (Resend)
  layout.tsx             # providers, metadata, global UI
  page.tsx               # section order
components/              # Hero, Camp, Guide, Features, Destinations, Stats,
                         # Testimonials, Pricing, FAQ, Contact, Navbar, Footer, ...
  SmoothScroll.tsx       # Lenis + GSAP sync, reduced-motion handling
  Reveal.tsx             # reusable scroll-reveal wrapper
  Modal.tsx              # accessible portal modal
constants/               # nav links, features, footer data
lib/motion.ts            # shared easing and animation helpers
public/                  # images and icons
```

## 🗺 Roadmap

- [ ] Replace placeholder content (destinations, pricing, testimonials) with real data
- [ ] Real authentication behind the login modal
- [ ] Image gallery section and page transitions
- [ ] Dark theme

## 📷 Screenshots

---

![screenshot-Travel_App_1](https://github.com/SarkissArmaniUS/next.js-Travel_Agency_Deployed/assets/97789627/0996749b-4213-4968-bf7f-c41d7d4b9de7)

---

![screenshot-Travel_App_2](https://github.com/SarkissArmaniUS/next.js-Travel_Agency_Deployed/assets/97789627/c611eea1-abf0-4101-8283-0d428a9f2e59)
