# Kunal Pramanik — Portfolio

A modern, animated portfolio site built with **Next.js 14 + Tailwind CSS**.

Dark-themed, scroll-animated, with a contact form powered by **Formspree** (stores messages + sends email notifications to you instantly).

---

## 🚀 Deploy in 15 minutes (free, zero backend)

### Step 1 — Set up Formspree (contact form + email alerts)

1. Go to **https://formspree.io** → Sign up free
2. Click **New Form** → name it "Portfolio Contact"
3. Set notification email to **202518001@dau.ac.in** (or any email you prefer)
4. Copy your **Form ID** (looks like `xpzgkqrb`)
5. Open `components/Contact.jsx` and replace `YOUR_FORM_ID`:
   ```
   'https://formspree.io/f/YOUR_FORM_ID'
   ```
   → becomes e.g.:
   ```
   'https://formspree.io/f/xpzgkqrb'
   ```

That's it for the backend. Formspree:
- **Stores every message** in their dashboard (view at formspree.io/forms)
- **Emails you instantly** when someone submits
- Free tier = 50 submissions/month (upgrade for more)

---

### Step 2 — Deploy to Vercel (free)

#### Option A: Via GitHub (recommended — auto-deploys on every push)

1. Push this folder to a new GitHub repo:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "init portfolio"
   git remote add origin https://github.com/Kunal-Pramanik/portfolio.git
   git push -u origin main
   ```

2. Go to **https://vercel.com** → Sign up with GitHub
3. Click **Add New Project** → Import your `portfolio` repo
4. Vercel auto-detects Next.js — just click **Deploy**
5. Your site is live at `https://portfolio-xxx.vercel.app`

#### Option B: Via Vercel CLI

```bash
npm install -g vercel
cd portfolio
vercel
# follow prompts — done in 2 minutes
```

---

### Step 3 — Custom domain (optional)

In Vercel dashboard → Project → Settings → Domains → Add your domain.

---

## 🛠 Run locally

```bash
cd portfolio
npm install
npm run dev
# open http://localhost:3000
```

---

## 📁 Project structure

```
portfolio/
├── components/
│   ├── Navbar.jsx       # Sticky nav with mobile menu
│   ├── Hero.jsx         # Animated hero with typewriter
│   ├── Projects.jsx     # Project cards with scroll reveal
│   ├── Skills.jsx       # Skills grid + timeline
│   ├── Contact.jsx      # Message form (Formspree)
│   └── Footer.jsx
├── pages/
│   ├── _app.jsx
│   └── index.jsx
├── styles/
│   └── globals.css      # Fonts, animations, custom classes
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## ✏️ Customization

| What to change | File | What to edit |
|---|---|---|
| Your info | `components/Hero.jsx` | Name, summary, links |
| Projects | `components/Projects.jsx` | `projects` array at top |
| Skills | `components/Skills.jsx` | `skillGroups` and `timeline` arrays |
| Contact email | Formspree dashboard | Notification email setting |
| Colors/fonts | `styles/globals.css` + `tailwind.config.js` | CSS variables |

---

## 📬 Viewing messages

1. Go to **https://formspree.io** → log in
2. Click your form → **Submissions** tab
3. Every message is stored with timestamp, name, email, and full message
4. You also get an **instant email** for every submission

---

## Tech Stack

- **Next.js 14** — React framework, static export ready
- **Tailwind CSS** — utility styling
- **Framer Motion** (optional, can add) — extra animations  
- **Google Fonts** — Syne (display) + DM Sans (body) + JetBrains Mono
- **Formspree** — contact form backend (free)
- **Vercel** — hosting (free)
