# Sai Aik Kwan — Personal Portfolio

**Live Site:** [saiaikkwan.github.io](https://saiaikkwan.github.io)

Networking & Cybersecurity Student | Auston College, Myanmar  
📍 Mandalay, Myanmar

---

## 🎓 Education

- **Bachelor's Degree in Cybersecurity & Networking** (2026 - In Progress)  
  Auston College, Myanmar — In partnership with University of Wolverhampton, UK

- **Diploma in Infrastructure and Network** (2025 - Completed)  
  Auston College, Myanmar — In partnership with Auston Institute of Management, Singapore

- **Intermediate English** (2024 - Completed)  
  Headway

---

## ✅ Completed Features

### Core Functionality
- Responsive design (mobile-first, all devices)
- Dark / Light mode toggle with localStorage persistence & **360° rotation animation**
- Contact form via Formspree (saiaikkwan.pro@gmail.com)
- Google Search Console verified
- HTTPS via GitHub Pages
- Custom 404 error page

### Visual & UI
- **Font Awesome Icons** throughout (professional look, brand colors)
- **SVG GitHub icon** in header (larger, more visible - 26x26)
- **Colored brand icons** for tech stack (HTML5 orange, CSS3 blue, JS yellow, PHP purple)
- **Animated icons** - spinning hourglass, pulsing spinner
- **Apple Dock-style hover effects** on filter buttons (scale + lift + shadow)
- **Smooth underline animations** on navigation links
- **Footer link shift animations** (no underline)
- **Hoverable skill tags** with lift effect
- **Tool cards** with lift effect on hover
- **Project cards** with scale + lift on hover

### Content & Data
- **`data.js`** - Central data source for personal info, education, skills, tools
- **`projects.json`** - JSON-based project storage with keyword-based filtering
- **Dynamic project loading** - Projects load from JSON on homepage and projects page
- **Separate header/footer files** - Easy maintenance across all pages
- **Loading spinners** for async content

### Pages
| Page | Description |
|------|-------------|
| `index.html` | Homepage with hero section, typed text effect, featured projects, education highlight |
| `about.html` | Bio, education timeline with animated icons, certifications, skills, tools |
| `projects.html` | Homelab projects gallery with Apple Dock-style filter buttons |
| `what-i-do.html` | Services overview: Web Dev, Network Setup, Security Assessment |
| `contact.html` | Contact form + social media links (GitHub, LinkedIn, Instagram, Telegram, Facebook) |
| `404.html` | Custom 404 error page |

### Timeline & Education
- **Animated timeline markers** - Spinning hourglass for in-progress, checkmark for completed
- **Visible border colors** on timeline markers (gray border visible on both themes)
- **Larger timeline markers** (28px with 1rem icons)
- **Blue vertical timeline line**

### Skills Section
- **Technical skills** - Light gray background, dark text, lifts to blue on hover
- **Soft skills** - Blue background, white text, lifts to light gray on hover
- **Interactive hover effects** with smooth cubic-bezier animation

### Filter Buttons (Projects Page)
- **Apple Dock-style hover** - Scale (1.08) + lift (-2px) + shadow
- **Active state** - Scale (1.1) + bold text + stronger shadow
- **Click feedback** - Scale down (0.98) for tactile response

### Social Links
- **Contact page** - Styled cards with brand color hover effects
- **GitHub, LinkedIn, Instagram, Telegram, Facebook** (Discord removed)
- **Footer** - GitHub, LinkedIn, Email with shift animation

---

## 📂 Project Structure

```
sai-aik-kwan.github.io/
├── index.html
├── about.html
├── projects.html
├── contact.html
├── what-i-do.html
├── 404.html
├── header.html              ← Separated header
├── footer.html              ← Separated footer
├── favicon.ico
├── google11f172dd4d4145d2.html
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   ├── data.js          ← Central data source
│   │   └── components.js
│   ├── data/
│   │   └── projects.json    ← Project data with keywords
│   └── images/
│       ├── favicon.png
│       ├── profile.jpg
│       ├── cisco.svg
│       ├── comptia.svg
│       ├── project01.png
│       ├── project02.png
│       ├── project03.png
│       ├── project04.png
│       ├── project05.png
│       └── project06.png
```

---

## 🛠️ Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties (CSS variables), Flexbox, Grid, animations, cubic-bezier transitions
- **JavaScript (ES6+)** — Theme toggle, mobile menu, typed effect, project filtering, scroll reveal, JSON fetching, dynamic rendering
- **Font Awesome 6** — Professional icons with brand colors
- **Formspree** — Contact form backend
- **Google Fonts** — Inter font family
- **GitHub Pages** — Hosting

---

## 🎨 Icon Color Scheme

| Icon Type | Color |
|-----------|-------|
| HTML5 | `#E34F26` (Orange) |
| CSS3 | `#1572B6` (Blue) |
| JavaScript | `#F7DF1E` (Yellow) |
| PHP | `#777BB4` (Purple) |
| Linux | `#FCC624` (Yellow) |
| Windows | `#0078D4` (Blue) |
| GitHub (footer hover) | `#ffffff` (White) |
| LinkedIn (hover) | `#0A66C2` (Blue) |
| Email (hover) | `#EA4335` (Red) |
| Location | `var(--danger)` (Red) |
| Shield/Security | `var(--danger)` (Red) |
| Primary UI icons | `var(--primary)` (Theme blue) |

---

## 🚧 In Progress

- Add more Packet Tracer (.pkt) networking projects with configuration files
- Add Kali Linux vs Metasploitable 2 pentesting lab writeup
- Replace placeholder project images with actual screenshots
- Add form validation feedback messages

---

## 📅 Planned

- Blog / writeups section for cybersecurity labs and CTF challenges
- Live homelab status widget (pfSense, Active Directory server, VM status)
- Skills radar chart visualization
- Resume/CV download page
- Custom domain (saiaikkwan.com)
- Dynamic project search and tag filtering
- Multi-language support (English / Myanmar)
- Newsletter signup for project updates
- Visitor counter / analytics dashboard

---

## 📬 Contact

- **Email:** saiaikkwan.pro@gmail.com
- **GitHub:** [github.com/saiaikkwan](https://github.com/saiaikkwan)
- **LinkedIn:** [linkedin.com/in/sai-aik-kwan](https://linkedin.com/in/sai-aik-kwan)
- **Instagram:** [@sai.aik.kwan.netsec](https://instagram.com/sai.aik.kwan.netsec)
- **Telegram:** [t.me/sai_aik_kwan](https://t.me/sai_aik_kwan)
- **Facebook:** [@sai.aik.kwan.netsec](https://facebook.com/sai.aik.kwan.netsec)

---

## 🎯 Key Features Showcase

### Animations
| Element | Animation |
|---------|-----------|
| Theme toggle | 360° rotation on click |
| Hourglass icons | Continuous spin |
| Spinner icons | Pulse animation |
| Filter buttons | Scale + lift (Apple Dock style) |
| Skill tags | Lift on hover |
| Tool cards | Lift on hover |
| Project cards | Scale + lift on hover |
| Footer links | Shift right + color change |
| Nav links | Smooth underline expansion |

### Interactive Elements
- **Typed text effect** on homepage hero
- **Scroll reveal animations** for cards
- **Project filtering** by category (Web Dev / Networking / Security)
- **Dark/Light mode** with localStorage persistence
- **Mobile responsive menu** with hamburger animation

---

> Built with dedication by Sai Aik Kwan | © 2026

## Summary of README Updates:

| Section | Updates |
|---------|---------|
| **Completed Features** | Added all animation details, Apple Dock effects, icon colors, timeline improvements |
| **Project Structure** | Added header.html, footer.html, cisco.svg, comptia.svg |
| **Tech Stack** | Added cubic-bezier transitions, Font Awesome 6 |
| **Icon Color Scheme** | NEW section - complete color mapping |
| **Key Features Showcase** | NEW section - all animations and interactive elements |
| **In Progress** | Updated with current tasks |
| **Planned** | Kept original future plans |

