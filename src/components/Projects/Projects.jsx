import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Projects.module.css';
import { PROJECTS } from './projectsData';

/*
  PROJECTS: transisi dari About + daftar proyek.
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
  const listRef = useRef(null);
  const floaterRef = useRef(null);
  const cardRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const frame = useRef(0);
  const reduceRef = useRef(false);

  const [view, setView] = useState('list');
  const [active, setActive] = useState(null);
  const [revealed, setRevealed] = useState(false);

  /* ---------- progres scroll ---------- */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    reduceRef.current = reduce.matches;
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

  /* ---------- preview yang mengikuti kursor ---------- */
  const paint = useCallback(() => {
    frame.current = 0;
    const floater = floaterRef.current;
    const card = cardRef.current;
    if (!floater) return;

    const ease = reduceRef.current ? 1 : 0.18;
    current.current.x += (target.current.x - current.current.x) * ease;
    current.current.y += (target.current.y - current.current.y) * ease;

    const { x, y } = current.current;
    floater.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;

    // balik ke sisi kiri kursor jika kartu hampir keluar layar
    if (card) {
      const flip = x + card.offsetWidth + 70 > window.innerWidth;
      floater.dataset.side = flip ? 'left' : 'right';
    }

    const dx = Math.abs(target.current.x - x);
    const dy = Math.abs(target.current.y - y);
    if (dx > 0.3 || dy > 0.3) frame.current = window.requestAnimationFrame(paint);
  }, []);

  const moveTo = useCallback(
    (x, y, snap = false) => {
      target.current = { x, y };
      if (snap) current.current = { x, y };
      if (!frame.current) frame.current = window.requestAnimationFrame(paint);
    },
    [paint],
  );

  useEffect(
    () => () => {
      if (frame.current) window.cancelAnimationFrame(frame.current);
    },
    [],
  );

  const onPointerMove = (e) => {
    if (e.pointerType === 'touch') return;
    moveTo(e.clientX, e.clientY);
  };

  const onRowEnter = (e, id) => {
    if (e.pointerType === 'touch') return;
    // saat pertama kali muncul, langsung berada di kursor (tanpa meluncur dari pojok)
    if (active === null) moveTo(e.clientX, e.clientY, true);
    setActive(id);
  };

  const onRowFocus = (e, id) => {
    const rect = e.currentTarget.getBoundingClientRect();
    moveTo(rect.left + rect.width * 0.62, rect.top + rect.height / 2, true);
    setActive(id);
  };

  const clear = () => setActive(null);

  const isGrid = view === 'grid';
  const hasActive = active !== null && !isGrid;

  const renderCells = (p, i) => (
    <>
      <span className={styles.num}>{pad(i + 1)}</span>
      <span className={styles.name}>{p.title}</span>
      <span className={styles.type}>{p.type}</span>
      <span className={styles.role}>{p.role}</span>
      <span className={styles.year}>{p.year}</span>
    </>
  );

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

          <div className={styles.toggle} role="group" aria-label="Project layout">
            {['list', 'grid'].map((v) => (
              <button
                key={v}
                type="button"
                className={styles.toggleBtn}
                aria-pressed={view === v}
                onClick={() => {
                  setView(v);
                  clear();
                }}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.tableHead} data-view={view} aria-hidden="true">
          <span>#</span>
          <span>Project</span>
          <span>Type</span>
          <span>Role</span>
          <span>Year</span>
        </div>

        <ol
          ref={listRef}
          className={styles.list}
          data-view={view}
          data-in={revealed}
          data-has-active={hasActive}
          onPointerMove={onPointerMove}
          onPointerLeave={clear}
        >
          {PROJECTS.map((p, i) => {
            const common = {
              className: styles.row,
              'data-active': active === p.id,
              onPointerEnter: (e) => onRowEnter(e, p.id),
              onFocus: (e) => onRowFocus(e, p.id),
              onBlur: clear,
            };

            return (
              <li key={p.id} className={styles.item} style={{ '--i': i }}>
                {p.href ? (
                  <a href={p.href} {...common}>
                    {isGrid && <Thumb project={p} />}
                    {renderCells(p, i)}
                  </a>
                ) : (
                  <div
                    {...common}
                    tabIndex={0}
                    aria-label={`${p.title}, ${p.type}, ${p.role}, ${p.year}. Detail belum tersedia.`}
                    data-unavailable="true"
                  >
                    {isGrid && <Thumb project={p} />}
                    {renderCells(p, i)}
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>

      {/* preview yang mengikuti kursor (hanya tampil untuk pointer halus) */}
      <div
        ref={floaterRef}
        className={styles.floater}
        data-visible={hasActive}
        data-side="right"
        aria-hidden="true"
      >
        <span className={styles.viewDot}>View</span>
        <div ref={cardRef} className={styles.previewCard}>
          {PROJECTS.map((p, i) => (
            <div key={p.id} className={styles.previewLayer} data-on={active === p.id}>
              <Thumb project={p} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* gambar preview, atau tile placeholder bila belum ada gambar */
const Thumb = ({ project, index }) => {
  if (project.image) {
    return (
      <span className={styles.thumb}>
        <img src={project.image} alt={project.alt} loading="lazy" className={styles.thumbImg} />
      </span>
    );
  }
  return (
    <span className={`${styles.thumb} ${styles.placeholder}`} aria-hidden="true">
      <span className={styles.placeholderText}>
        Preview
        <small>belum tersedia</small>
      </span>
      {index !== undefined && <span className={styles.placeholderNum}>{pad(index + 1)}</span>}
    </span>
  );
};

export default Projects;
