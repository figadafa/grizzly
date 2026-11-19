import React, { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.css';
import Button from '../Button/Button';
import { CONTACT } from './contactData';

/*
  Artwork dicari otomatis di src/assets/images/contact/telephone.*
  Jika file belum ada, hasilnya kosong dan fallback tipografi dipakai.
*/
const artFiles = import.meta.glob(
  '../../assets/images/contact/telephone.{png,jpg,jpeg,webp,avif}',
  { eager: true, query: '?url', import: 'default' }
);
const artSrc = Object.values(artFiles)[0] ?? null;

const buildLinks = () => {
  const links = [];

  if (CONTACT.email) {
    links.push({
      id: 'email',
      label: 'Email',
      handle: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      external: false,
    });
  }

  CONTACT.socials.forEach((s) => {
    if (!s.url) return;
    links.push({
      id: s.id,
      label: s.label,
      handle: s.handle || s.url.replace(/^https?:\/\/(www\.)?/, ''),
      href: s.url,
      external: true,
    });
  });

  return links;
};

const Contact = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      setInView(true);
      return undefined;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const links = buildLinks();
  const mailHref = CONTACT.email
    ? `mailto:${CONTACT.email}?subject=${encodeURIComponent(CONTACT.mailSubject)}`
    : null;

  if (import.meta.env.DEV && !CONTACT.email) {
    console.warn('[Contact] email belum diisi di contactData.js, CTA tidak ditampilkan.');
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={styles.contact}
      aria-labelledby="contact-title"
      data-in={inView}
    >
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.info}>
            <p className={`${styles.eyebrow} ${styles.reveal}`} style={{ '--i': 0 }}>
              <b aria-hidden="true">{CONTACT.index}</b>
              <span aria-hidden="true"> / </span>
              {CONTACT.label}
            </p>

            <h2
              id="contact-title"
              className={`${styles.title} ${styles.reveal}`}
              style={{ '--i': 1 }}
            >
              {CONTACT.headingLines.map((line) => (
                <span key={line} className={styles.line}>
                  {line}
                </span>
              ))}
            </h2>

            <p className={`${styles.lead} ${styles.reveal}`} style={{ '--i': 2 }}>
              {CONTACT.lead}
            </p>

            {mailHref && (
              <div className={`${styles.cta} ${styles.reveal}`} style={{ '--i': 3 }}>
                <Button primary href={mailHref}>
                  {CONTACT.ctaLabel}
                </Button>
              </div>
            )}
          </div>

          <figure className={`${styles.art} ${styles.reveal}`} style={{ '--i': 2 }}>
            {artSrc ? (
              <img
                src={artSrc}
                alt={CONTACT.artAlt}
                className={styles.artImg}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className={styles.artFallback} aria-hidden="true">
                {CONTACT.index}
              </div>
            )}
          </figure>
        </div>

        {links.length > 0 && (
          <nav className={styles.socials} aria-label="Contact links">
            <ul className={styles.socialList}>
              {links.map((l, i) => (
                <li key={l.id} className={styles.reveal} style={{ '--i': 4 + i }}>
                  <a
                    href={l.href}
                    className={styles.socialLink}
                    {...(l.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    <span className={styles.socialLabel}>{l.label}</span>
                    <span className={styles.socialHandle}>{l.handle}</span>
                    <span className={styles.socialArrow} aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
};

export default Contact;