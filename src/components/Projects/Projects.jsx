import React, { useEffect, useRef, useState } from 'react';
import styles from './Projects.module.css';
import { PROJECTS } from './projectsData';

/*
  PROJECTS: transisi dari About + daftar proyek dalam bentuk tabel.
  --enter  (0 -> 1): section naik menutupi About (garis cat oranye + peredupan About)
  --reveal (0 -> 1): judul WORK dan baris tabel muncul
  Keduanya diisi lewat scroll, sama seperti pola di About.jsx.
*/

const clamp = (n, min = 0, max = 1) => Math.min(max, Math.max(min, n));
const pad = (n) => String(n).padStart(2, '0');
// smoothstep: awal dan akhir transisi lembut, bukan linear
const ease = (t) => t * t * (3 - 2 * t);

const Projects = () => {
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  /* ---------- progres scroll ---------- */
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
      if (reveal > 0.55) setRevealed(true);
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
    <section id="projects" ref={sectionRef} className={styles.projects} aria-labelledby="projects-title">
      {/* menggelapkan About saat Projects naik menutupinya */}
      <div className={styles.dim} aria-hidden="true" />
      {/* garis cat oranye: menyapu tepi atas, lalu mengendap jadi garis pemisah */}
      <div className={styles.slash} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.meta} aria-hidden="true">
          <span className={styles.metaLeft}>
            <b>03</b> Projects
          </span>
          <span className={styles.metaRight}>Selected work, built through friction.</span>
        </div>

        <div className={styles.heading}>
          <h2 id="projects-title" className={styles.title}>
            <span className={styles.titleMask}>
              <span className={styles.titleText}>Work</span>
            </span>
            <sup className={styles.count} aria-label={`${PROJECTS.length} projects`}>
              ({pad(PROJECTS.length)})
            </sup>
          </h2>
        </div>

        <div className={styles.tableHead} aria-hidden="true">
          <span>#</span>
          <span>Project</span>
          <span>Type</span>
          <span>Role</span>
          <span>Year</span>
          <span />
        </div>

        <ol className={styles.list} data-in={revealed}>
          {PROJECTS.map((p, i) => (
            <li key={p.id} className={styles.item} style={{ '--i': i }}>
              <div className={styles.row}>
                <span className={styles.num}>{pad(i + 1)}</span>
                <span className={styles.name}>{p.title}</span>
                <span className={styles.type}>{p.type}</span>
                <span className={styles.role}>{p.role}</span>
                <span className={styles.year}>{p.year}</span>

                {p.href ? (
                  <a
                    className={styles.btn}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`See my project: ${p.title}`}
                  >
                    See My Project
                    <span className={styles.btnArrow} aria-hidden="true">→</span>
                  </a>
                ) : (
                  <span
                    className={styles.btn}
                    data-disabled="true"
                    aria-disabled="true"
                    title="Detail belum tersedia"
                  >
                    See My Project
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Projects;