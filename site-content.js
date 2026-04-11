/* ====================================================================
   SITE-CONTENT.JS
   ──────────────────────────────────────────────────────────────────
   This is the ONLY file you need to edit to update your website.
   Everything here feeds directly into index.html automatically.

   SECTIONS:
     1. NAV          — logo text & nav links
     2. HERO         — your name, roles, buttons, hero image path
     3. PROJECTS     — all portfolio cards & video links
     4. COLLAB CARDS — the "Why Collaborate With Me?" cards
     5. CONTACT      — heading, subtext, email address
     6. FOOTER       — copyright text & footer links
==================================================================== */


/* ====================================================================
   1. NAVIGATION
   ─────────────────────────────────────────────────────────────────
   logoText   — letters shown top-left (e.g. "BA")
   links      — array of { label, href } for nav menu items
==================================================================== */
const SITE_NAV = {
  logoText: "BA",
  links: [
    { label: "Home",      href: "#home"      },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About",     href: "#about"     },
    { label: "Contact",   href: "#contact"   }
  ],
  ctaLabel: "View My Work",
  ctaHref:  "#portfolio"
};


/* ====================================================================
   2. HERO SECTION
   ─────────────────────────────────────────────────────────────────
   badgeText   — small label above the name
   firstName   — displayed in white
   lastName    — displayed in teal (accent colour)
   roles       — list of job titles shown beneath the name
   primaryBtn  — main CTA button
   secondaryBtn— ghost/outline button
   heroImage   — path to your setup/desk photo
                 → place the image in the SAME folder as index.html
                 → e.g. "hero.jpg"  or  "images/my-setup.png"
                 → leave as "" to show a placeholder box
==================================================================== */
const SITE_HERO = {
  badgeText:    "Available for Projects",
  firstName:    "Basit",
  lastName:     "Ali",
  roles: [
    "Video Editor",
    "Motion Graphics Artist",
    "Creative Visual Storyteller"
  ],
  primaryBtn:   { label: "View My Work", href: "#portfolio" },
  secondaryBtn: { label: "Let's Talk",   href: "#contact"   },

  // ── HERO IMAGE ──────────────────────────────────────────────────
  // Replace the value below with your image filename.
  // Example: heroImage: "hero.jpg"
  heroImage: "hero.png"
  // ────────────────────────────────────────────────────────────────
};


/* ====================================================================
   3. PORTFOLIO PROJECTS
   ─────────────────────────────────────────────────────────────────
   Each object = one card in the portfolio grid.

   Fields:
     title       — project name on card & inside the video modal
     category    — used for filter chips (keep spelling consistent)
     description — shown below the video in the modal
     thumbnail   — path to thumbnail image
                   e.g. "thumbs/neon-horizon.jpg"
                   leave "" for a placeholder icon
     videoUrl    — YouTube embed URL
                   From: youtube.com/watch?v=VIDEO_ID
                   Paste: "https://www.youtube.com/embed/VIDEO_ID"

   ── ADD A NEW PROJECT ───────────────────────────────────────────
   Copy the block below, paste it at the end of the array
   (after the last } and before the ] ), then fill in your details:

   ,{
     title:       "New Project Title",
     category:    "VFX",
     description: "Short description of this project.",
     thumbnail:   "thumbs/new-project.jpg",
     videoUrl:    "https://www.youtube.com/embed/YOUR_VIDEO_ID"
   }
   ────────────────────────────────────────────────────────────────
==================================================================== */
const SITE_PROJECTS = [
  {
    title:       "Neon Horizon",
    category:    "Commercial",
    description: "Cyberpunk-inspired commercial reel with custom 3D typography and glitch effects.",
    thumbnail:   "",   // ← add your thumbnail path here when ready, e.g. "thumbs/project.jpg"
    videoUrl:    "https://www.youtube.com/embed/dQw4w9WgXcQ"  // ← EDIT VIDEO LINK
  },
  {
    title:       "Ethereal Particles",
    category:    "VFX",
    description: "Experimental particle simulation for a luxury watch brand reveal sequence.",
    thumbnail:   "",   // ← add your thumbnail path here when ready, e.g. "thumbs/project.jpg"
    videoUrl:    "https://www.youtube.com/embed/dQw4w9WgXcQ"  // ← EDIT VIDEO LINK
  },
  {
    title:       "City Pulse",
    category:    "Music Video",
    description: "Dynamic social media ad campaign featuring high-speed rhythmic editing.",
    thumbnail:   "",   // ← add your thumbnail path here when ready, e.g. "thumbs/project.jpg"
    videoUrl:    "https://www.youtube.com/embed/dQw4w9WgXcQ"  // ← EDIT VIDEO LINK
  },
  {
    title:       "Deep Frequencies",
    category:    "3D Motion",
    description: "Abstract 3D motion piece exploring sound and visual rhythm for a music label.",
    thumbnail:   "",   // ← add your thumbnail path here when ready, e.g. "thumbs/project.jpg"
    videoUrl:    "https://www.youtube.com/embed/dQw4w9WgXcQ"  // ← EDIT VIDEO LINK
  },
  {
    title:       "Parallax Dreams",
    category:    "VFX",
    description: "Immersive VFX short blending real footage with procedural 3D environments.",
    thumbnail:   "",   // ← add your thumbnail path here when ready, e.g. "thumbs/project.jpg"
    videoUrl:    "https://www.youtube.com/embed/dQw4w9WgXcQ"  // ← EDIT VIDEO LINK
  },
  {
    title:       "Brand Manifesto",
    category:    "Commercial",
    description: "60-second brand film balancing kinetic typography with emotional storytelling.",
    thumbnail:   "",   // ← add your thumbnail path here when ready, e.g. "thumbs/project.jpg"
    videoUrl:    "https://www.youtube.com/embed/dQw4w9WgXcQ"  // ← EDIT VIDEO LINK
  }
  /* ── ADD NEW PROJECT HERE ──────────────────────────────────────
  ,{
    title:       "Your Project Title",
    category:    "Category",
    description: "Short description of this project.",
    thumbnail:   "thumbs/your-thumbnail.jpg",
    videoUrl:    "https://www.youtube.com/embed/YOUR_VIDEO_ID"
  }
  ──────────────────────────────────────────────────────────────── */
];


/* ====================================================================
   4. "WHY COLLABORATE WITH ME?" CARDS
   ─────────────────────────────────────────────────────────────────
   heading   — section heading (use \n for line break if needed)
   subtext   — small grey line beneath the heading
   highlight — index (0-based) of the card to give a teal border
   cards     — array of { icon, title, text }

   icon options (type one of these strings):
     "eye" | "refresh" | "zap" | "award" | "message"
==================================================================== */
const SITE_COLLAB = {
  heading:   "Why Collaborate With Me?",
  accentWord: "With Me?",
  subtext:   "Focusing on your vision while delivering industry-standard visual excellence.",
  highlight:  2,   // ← index of card with teal border (0 = first card)
  cards: [
    {
      icon:  "eye",
      title: "Client Vision",
      text:  "Your story drives every cut. I listen deeply before touching the timeline."
    },
    {
      icon:  "refresh",
      title: "Flexible Revisions",
      text:  "Rethinking and refining until the output perfectly matches your goal."
    },
    {
      icon:  "zap",
      title: "Fast Delivery",
      text:  "Meeting deadlines without compromising on frame-by-frame quality."
    },
    {
      icon:  "award",
      title: "High-quality Edits",
      text:  "4K-ready exports, pro colour grades, and broadcast-standard output."
    },
    {
      icon:  "message",
      title: "Clear Communication",
      text:  "Transparent updates at every stage so you're never left wondering."
    }
  ]
};


/* ====================================================================
   5. CONTACT SECTION
   ─────────────────────────────────────────────────────────────────
   heading     — big left-side title (teal word is on its own line)
   accentLine  — the teal-coloured line of the heading
   subtext     — grey paragraph beneath heading
   email       — your contact email address
   formLabels  — customise the form field labels if needed
==================================================================== */
const SITE_CONTACT = {
  heading:    "Ready to start your",
  accentLine: "Next Project?",
  subtext:    "I'm currently accepting new projects and collaborations. Let's create something extraordinary together.",
  email:      "hello@besitali.design",
  formLabels: {
    name:    "Name",
    email:   "Email",
    message: "Message"
  },
  formPlaceholders: {
    name:    "John Doe",
    email:   "john@example.com",
    message: "Tell me about your project..."
  },
  submitLabel: "Send Message"
};


/* ====================================================================
   6. FOOTER
   ─────────────────────────────────────────────────────────────────
   copyright — bottom-left text
   links     — array of { label, href } shown bottom-right
==================================================================== */
const SITE_FOOTER = {
  copyright: "© 2024 Basit Ali. All Rights Reserved.",
  links: [
    { label: "Fiverr",     href: "#" },
    { label: "Instagram",  href: "#" },
    { label: "LinkedIn",   href: "#" }
  ]
};