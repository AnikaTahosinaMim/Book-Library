"use client"
import React, { useState } from 'react';

const SignUpPages = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [pressed, setPressed] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPressed(true);
    setTimeout(() => setPressed(false), 400);
  };

  const todayStamp = new Date()
    .toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    .toUpperCase();

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Courier+Prime:wght@400;700&family=Source+Sans+3:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        .lc-input:focus { outline: 2px solid #C7A34D; outline-offset: 2px; }
        .lc-stamp-btn:focus-visible { outline: 2px solid #2C4A3E; outline-offset: 3px; }
        @media (max-width: 820px) {
          .lc-wrap { grid-template-columns: 1fr !important; }
          .lc-side { display: none !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .lc-stamp-btn { transition: none !important; }
        }
      `}</style>

      <div className="lc-wrap" style={styles.wrap}>
        {/* Left panel — catalog drawer */}
        <div className="lc-side" style={styles.side}>
          <div style={styles.spineStripes} aria-hidden="true">
            {Array.from({ length: 14 }).map((_, i) => (
              <div
                key={i}
                style={{
                  ...styles.spine,
                  background: i % 3 === 0 ? '#C7A34D' : i % 3 === 1 ? '#EDE3C8' : '#8FA396',
                }}
              />
            ))}
          </div>
          <div style={styles.sideContent}>
            <div style={styles.callNumber}>LC · 025.431</div>
            <h1 style={styles.sideTitle}>New Reader<br />Registration</h1>
            <p style={styles.sideText}>
              Every card on file opens the full stacks — reserve, renew, and
              borrow across every branch with one membership number.
            </p>
            <div style={styles.divider} />
            <ul style={styles.benefitList}>
              <li>Unlimited holds &amp; renewals</li>
              <li>Access to the reading rooms</li>
              <li>Digital archive privileges</li>
            </ul>
          </div>
        </div>

        {/* Right panel — the card form */}
        <div style={styles.formSide}>
          <div style={styles.card}>
            <div style={styles.cardTopRow}>
              <span style={styles.cardEyebrow}>MEMBERSHIP CARD</span>
              <span style={styles.cardDate}>{todayStamp}</span>
            </div>

            <h2 style={styles.formTitle}>Sign Up</h2>
            <p style={styles.formSubtitle}>Fill out your details to be issued a card.</p>

            <form onSubmit={handleSubmit} style={styles.form}>
              <label style={styles.label} htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                className="lc-input"
                style={styles.input}
                type="text"
                placeholder="e.g. Elena Marsh"
                value={form.name}
                onChange={handleChange}
                required
              />

              <label style={styles.label} htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                className="lc-input"
                style={styles.input}
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />

              <div style={styles.row}>
                <div style={styles.rowItem}>
                  <label style={styles.label} htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    className="lc-input"
                    style={styles.input}
                    type="password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div style={styles.rowItem}>
                  <label style={styles.label} htmlFor="confirm">Confirm</label>
                  <input
                    id="confirm"
                    name="confirm"
                    className="lc-input"
                    style={styles.input}
                    type="password"
                    placeholder="••••••••"
                    value={form.confirm}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="lc-stamp-btn"
                style={{
                  ...styles.stampBtn,
                  transform: pressed
                    ? 'rotate(0deg) scale(0.97)'
                    : 'rotate(-2deg) scale(1)',
                  opacity: pressed ? 0.85 : 1,
                }}
              >
                Issue My Card
              </button>

              <p style={styles.finePrint}>
                Already a member?{' '}
                <a href="#" style={styles.link}>Sign in to your account</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    background: '#EDE3C8',
    fontFamily: "'Source Sans 3', sans-serif",
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  wrap: {
    display: 'grid',
    gridTemplateColumns: '0.9fr 1.1fr',
    width: '100%',
    maxWidth: 1080,
    margin: '0 auto',
  },
  side: {
    position: 'relative',
    background: '#2C4A3E',
    color: '#F3EDE0',
    padding: '56px 44px',
    display: 'flex',
    overflow: 'hidden',
  },
  spineStripes: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    opacity: 0.14,
  },
  spine: {
    width: '7.2%',
    height: '100%',
  },
  sideContent: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  callNumber: {
    fontFamily: "'Courier Prime', monospace",
    fontSize: 13,
    letterSpacing: '0.12em',
    color: '#C7A34D',
    marginBottom: 18,
  },
  sideTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 38,
    lineHeight: 1.15,
    fontWeight: 700,
    margin: '0 0 20px 0',
  },
  sideText: {
    fontSize: 15.5,
    lineHeight: 1.6,
    color: '#D8CFB4',
    maxWidth: 320,
    margin: 0,
  },
  divider: {
    width: 56,
    height: 2,
    background: '#C7A34D',
    margin: '28px 0',
  },
  benefitList: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    fontSize: 14.5,
    color: '#EDE3C8',
  },
  formSide: {
    background: '#F8F4E8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '48px 32px',
  },
  card: {
    width: '100%',
    maxWidth: 380,
    background: '#FFFDF7',
    border: '1px solid #DCCFA8',
    borderRadius: 6,
    padding: '30px 32px 34px',
    boxShadow: '0 1px 0 #DCCFA8, 0 18px 40px -22px rgba(44,74,62,0.35)',
  },
  cardTopRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px dashed #C7A34D',
    paddingBottom: 12,
    marginBottom: 22,
  },
  cardEyebrow: {
    fontFamily: "'Courier Prime', monospace",
    fontSize: 11,
    letterSpacing: '0.14em',
    color: '#8B4A3D',
  },
  cardDate: {
    fontFamily: "'Courier Prime', monospace",
    fontSize: 11,
    color: '#7A7566',
  },
  formTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 28,
    color: '#23211D',
    margin: '0 0 4px 0',
  },
  formSubtitle: {
    fontSize: 14,
    color: '#7A7566',
    margin: '0 0 24px 0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  label: {
    fontSize: 12.5,
    fontWeight: 600,
    color: '#4A4638',
    marginTop: 14,
    marginBottom: 6,
    letterSpacing: '0.02em',
  },
  input: {
    width: '100%',
    padding: '11px 12px',
    fontSize: 14.5,
    fontFamily: "'Source Sans 3', sans-serif",
    border: '1px solid #D3C6A0',
    borderRadius: 4,
    background: '#FFFEFB',
    color: '#23211D',
  },
  row: {
    display: 'flex',
    gap: 12,
  },
  rowItem: {
    flex: 1,
  },
  stampBtn: {
    marginTop: 26,
    padding: '13px 20px',
    fontSize: 14.5,
    fontWeight: 700,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: '#8B4A3D',
    background: 'transparent',
    border: '2.5px solid #8B4A3D',
    borderRadius: 3,
    cursor: 'pointer',
    transition: 'transform 0.15s ease, opacity 0.15s ease',
  },
  finePrint: {
    marginTop: 18,
    fontSize: 13,
    color: '#7A7566',
    textAlign: 'center',
  },
  link: {
    color: '#2C4A3E',
    fontWeight: 600,
    textDecoration: 'none',
    borderBottom: '1px solid #C7A34D',
  },
};

export default SignUpPages;