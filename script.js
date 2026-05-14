:root {
  --bg: #f8f7f3;
  --text: #1f2933;
  --muted: #5f6b76;
  --card: #ffffff;
  --line: #e2ded3;
  --accent: #0f766e;
  --accent-dark: #115e59;
  --soft: #e8f3f1;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}
a { color: var(--accent-dark); text-decoration: none; }
a:hover { text-decoration: underline; }
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(248, 247, 243, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
}
.nav {
  max-width: 1120px;
  margin: 0 auto;
  padding: 18px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo { font-weight: 800; letter-spacing: 0.06em; color: var(--text); }
.nav-links { display: flex; gap: 20px; font-size: 0.95rem; }
.section {
  max-width: 1120px;
  margin: 0 auto;
  padding: 80px 24px;
}
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(280px, 0.8fr);
  gap: 48px;
  align-items: center;
  min-height: 78vh;
}
.eyebrow {
  color: var(--accent-dark);
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-weight: 750;
  font-size: 0.78rem;
}
h1, h2, h3 { line-height: 1.15; margin: 0 0 18px; }
h1 { font-size: clamp(2.6rem, 7vw, 5.6rem); max-width: 920px; letter-spacing: -0.06em; }
h2 { font-size: clamp(2rem, 4vw, 3.2rem); letter-spacing: -0.04em; }
h3 { font-size: 1.25rem; }
.lead { font-size: 1.18rem; color: var(--muted); max-width: 760px; }
.cta-row { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 30px; }
.button {
  display: inline-flex;
  padding: 12px 18px;
  border-radius: 999px;
  font-weight: 750;
  border: 1px solid var(--accent);
}
.button.primary { background: var(--accent); color: #fff; }
.button.secondary { color: var(--accent-dark); background: transparent; }
.hero-card, .card, .contact {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 28px;
  box-shadow: 0 20px 60px rgba(31, 41, 51, 0.07);
}
.hero-card { padding: 30px; }
.hero-card ul { padding-left: 20px; color: var(--muted); }
.content-grid {
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  gap: 48px;
  border-top: 1px solid var(--line);
}
.rich-text { font-size: 1.08rem; color: var(--muted); }
.cards {
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.cards.two { grid-template-columns: repeat(2, 1fr); }
.card { padding: 28px; }
.card p, .playbook-list p, .contact p { color: var(--muted); }
.playbook-list {
  margin-top: 28px;
  display: grid;
  gap: 18px;
}
.playbook-list > div {
  padding: 24px;
  border-left: 4px solid var(--accent);
  background: var(--soft);
  border-radius: 18px;
}
.contact { padding: 44px; }
.contact-links {
  display: grid;
  gap: 12px;
  margin-top: 24px;
}
.contact-links a {
  padding: 14px 16px;
  background: var(--soft);
  border-radius: 14px;
  font-weight: 700;
}
.footer {
  max-width: 1120px;
  margin: 0 auto;
  padding: 32px 24px 60px;
  color: var(--muted);
  border-top: 1px solid var(--line);
}
.article {
  max-width: 820px;
  margin: 0 auto;
  padding: 72px 24px;
}
.article h1 { font-size: clamp(2.2rem, 6vw, 4rem); }
.article p, .article li { color: var(--muted); font-size: 1.06rem; }
.article nav { margin-bottom: 32px; }
@media (max-width: 820px) {
  .nav { align-items: flex-start; gap: 12px; flex-direction: column; }
  .nav-links { flex-wrap: wrap; }
  .hero, .content-grid, .cards, .cards.two { grid-template-columns: 1fr; }
  .section { padding: 56px 20px; }
  .contact { padding: 28px; }
}
