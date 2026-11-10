import React, { useEffect, useRef, useState } from 'react';
import styles from './Experience.module.css';
import { EXPERIENCES, CERTIFICATIONS, EXTRA_CERT_COUNT, EDUCATION } from './experienceData';

/*
  EXPERIENCE: transisi dari Projects + tiga blok (journey, certifications, education).
  --enter  (0 -> 1): section naik menutupi Projects (dim + sapuan cat oranye)
  --reveal (0 -> 1): judul, timeline, dan kartu muncul
  Keduanya diisi lewat scroll, pola yang sama dengan Projects.jsx.
*/

const clamp = (n, min = 0, max = 1) => Math.min(max, Math.max(min, n));
const ease = (t) => t * t * (3 - 2 * t);
const pad = (n) => String(n).padStart(2, '0');

const SectionHead = ({ id, metaLabel, lines, lead, crown = false }) => (
  <div className={styles.sideHead}>
    <p className={styles.kicker}>
      {metaLabel && <span className={styles.metaLeft}><b aria-hidden="true">04</b> {metaLabel}</span>}
    </p>
    <h2 id={id} className={styles.title}>
      {lines.map((line) => (
        <span key={line} className={styles.line}>
          <span className={styles.lineText}>{line}</span>
        </span>
      ))}
      {crown && (
        <svg className={styles.crown} viewBox="0 0 64 48" aria-hidden="true">
          <path d="M6 42 L12 14 L24 28 L32 8 L40 28 L52 14 L58 42 Z" />
        </svg>
      )}
    </h2>
    {lead && <p className={styles.lead}>{lead}</p>}
    <span className={styles.underline} aria-hidden="true" />
  </div>
);

const Experience = () => {
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let raf = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const top = section.getBoundingClientRect().top;

      const enter = reduce.matches ? 1 : ease(clamp((vh - top) / vh));
      const reveal = reduce.matches ? 1 : ease(clamp((vh * 0.9 - top) / (vh * 0.6)));

      section.style.setProperty('--enter', enter.toFixed(3));
      section.style.setProperty('--reveal', reveal.toFixed(3));
      if (reveal > 0.3) setRevealed(true);
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={styles.experience}
      aria-labelledby="experience-title"
      data-in={revealed}
    >
      {/* menggelapkan Projects saat Experience naik menutupinya */}
      <div className={styles.dim} aria-hidden="true" />
      {/* sapuan cat oranye di tepi atas */}
      <div className={styles.slash} aria-hidden="true" />

      <div className={styles.inner}>
        {/* ---------- 1. THE JOURNEY ---------- */}
        <div className={styles.block}>
          <SectionHead
            id="experience-title"
            metaLabel="Experience"
            label="Experience"
            lines={['The', 'Journey']}
            lead="A record of leadership, collaboration, and continuous learning through organizations, projects, and training."
            crown
          />
          <ol className={styles.timeline}>
            <span className={styles.rail} aria-hidden="true" />
            {EXPERIENCES.map((item, i) => (
              <li key={item.id} className={styles.entry} style={{ '--i': i }}>
                <span className={styles.node} aria-hidden="true" />
                <span className={styles.index} aria-hidden="true">
                  {pad(i + 1)}
                </span>
                <div className={styles.entryBody}>
                  <span className={styles.period}>{item.period}</span>
                  <h3 className={styles.role}>{item.role}</h3>
                  <p className={styles.org}>
                    {item.org} <span>/</span> {item.kind}
                  </p>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* ---------- 2. CONTINUOUS LEARNING ---------- */}
        <div className={styles.block}>
          <SectionHead
            id="certifications-title"
            label="Certifications"
            lines={['Continuous', 'Learning']}
            lead="Some of the courses and certifications I’ve completed to keep growing in tech, data, and software development."
          />

          <div className={styles.certGrid}>
            {CERTIFICATIONS.map((c, i) => {
              const Tag = c.url ? 'article' : 'div';
              const LinkTag = c.url ? 'a' : 'article';
              return (
                <LinkTag
                  key={c.id}
                  href={c.url || undefined}
                  target={c.url ? "_blank" : undefined}
                  rel={c.url ? "noopener noreferrer" : undefined}
                  className={styles.cert}
                  style={{ '--i': i }}
                >
                  <span className={styles.provider}>{c.provider}</span>
                  <h3 className={styles.certName}>{c.name}</h3>
                  <p className={styles.certIssuer}>{c.issuer}</p>
                  <div className={styles.certFoot}>
                    <span className={styles.date}>{c.date}</span>
                    {c.url && <span className={styles.arrow} aria-hidden="true">→</span>}
                  </div>
                </LinkTag>
              );
            })}

            <div className={styles.more} style={{ '--i': CERTIFICATIONS.length }}>
              <span className={styles.moreNum}>+{EXTRA_CERT_COUNT}</span>
              <span className={styles.moreText}>More Certifications</span>
              <span className={styles.arrow} aria-hidden="true">→</span>
            </div>
          </div>
        </div>

        {/* ---------- 3. ACADEMIC BACKGROUND ---------- */}
        <div className={styles.block}>
          <SectionHead
            id="education-title"
            label="Education"
            lines={['Academic', 'Background']}
          />

          <div className={styles.eduCard}>
            <div className={styles.school}>
              <span className={styles.seal} aria-hidden="true">{EDUCATION.shortName}</span>
              <span className={styles.schoolName}>{EDUCATION.school}</span>
            </div>
            <span className={styles.divider} aria-hidden="true" />
            <div className={styles.degree}>
              <h3 className={styles.degreeName}>{EDUCATION.degree}</h3>
              <span className={styles.period}>{EDUCATION.period}</span>
              <p className={styles.desc}>{EDUCATION.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;