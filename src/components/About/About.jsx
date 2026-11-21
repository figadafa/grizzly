import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './About.module.css';

/*
  Foto: public/images/About/about-1.jpg, about-2.jpg, about-3.jpg
  Path diawali /images/ karena Vite menyajikan folder public dari root.
*/
const STEPS = [
  {
    id: 'began',
    kicker: 'WHERE IT ALL STARTED',
    title: 'BEFORE CODE, THERE WAS GRAFFITI.',
    body:
      "My interest in creativity started with street art, especially graffiti. I was drawn to its freedom, colors, and raw expression. At one point, I even considered pursuing Visual Communication Design.",
    image: '/images/About/about-1.jpg',
    alt: 'Figa at a university event',
    tilt: '-2deg',
    position: '8% 25%%',
  },
  {
    id: 'making',
    kicker: 'A DIFFERENT DIRECTION',
    title: 'FROM STREET ART TO SOFTWARE.',
    body:
      "Life took me somewhere different. I ended up studying Informatics, where I discovered another way to express ideas: through technology, experimentation, and building things.",
    image: '/images/About/about-2.jpg',
    alt: 'Figa at a student organization event',
    tilt: '1.6deg',
    position: '50% 30%',
  },
  {
    id: 'next',
    kicker: "WHAT'S NEXT",
    title: 'STILL EXPERIMENTING. STILL BUILDING.',
    body:
      "I enjoy exploring different interests, meeting different people, and taking on challenges beyond the usual path. I don't have to fit into just one box.",
    image: '/images/About/about-3.jpg',
    alt: 'Code open on a laptop screen',
    tilt: '-1.2deg',
    position: '50% 50%',
  },
];

const clamp = (n, min = 0, max = 1) => Math.min(max, Math.max(min, n));
const pad = (n) => String(n).padStart(2, '0');

const About = () => {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const rect = section.getBoundingClientRect();
      const stick = parseFloat(window.getComputedStyle(stage).top) || 0;

      // 0 -> 1 selama section masuk dari bawah layar sampai menempel (pin)
      const enter = reduceMotion.matches ? 1 : clamp((vh - rect.top) / (vh - stick));
      // 0 -> 1 selama section di-pin (menentukan langkah 01 / 02 / 03)
      const range = Math.max(1, section.offsetHeight - stage.offsetHeight);
      const progress = clamp((stick - rect.top) / range);

      section.style.setProperty('--enter', enter.toFixed(3));

      const next = Math.min(STEPS.length - 1, Math.floor(progress * STEPS.length));
      if (next !== activeRef.current) {
        activeRef.current = next;
        setActive(next);
      }
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Klik sebuah langkah -> scroll ke bagian itu
  const goTo = useCallback((index) => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;
    const stick = parseFloat(window.getComputedStyle(stage).top) || 0;
    const range = Math.max(1, section.offsetHeight - stage.offsetHeight);
    const top =
      window.scrollY + section.getBoundingClientRect().top - stick + range * ((index + 0.5) / STEPS.length);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
  }, []);

  const last = STEPS.length - 1;

  return (
    <section id="about" ref={sectionRef} className={styles.about} aria-labelledby="about-title">
      {/* menggelapkan hero saat About naik menutupinya */}
      <div className={styles.dim} aria-hidden="true" />

      <div ref={stageRef} className={styles.stage}>
        <div className={styles.meta} aria-hidden="true">
          <span className={styles.metaLeft}>
            <b>02</b> About
          </span>
          <span className={styles.metaRight}>A story of curiosity, people, and what&rsquo;s next.</span>
        </div>

        <div className={styles.inner}>
          {/* ===== KIRI: collage foto ===== */}
          <div className={styles.visual}>
            <p className={styles.tag}>
              Grizzly <span>The balanced professional</span>
            </p>

            <div className={styles.stack}>
              {/* lapisan dekorasi di belakang foto */}
              <span className={styles.blob} aria-hidden="true" />
              <span className={styles.paper} aria-hidden="true" />
              <span className={styles.backCard} aria-hidden="true" />
              <span className={`${styles.dots} ${styles.dotsTop}`} aria-hidden="true" />
              <span className={`${styles.dots} ${styles.dotsBottom}`} aria-hidden="true" />
              {STEPS.map((step, i) => (
                <figure
                  key={step.id}
                  className={styles.card}
                  data-state={i === active ? 'active' : i < active ? 'past' : 'next'}
                  aria-hidden={i !== active}
                  style={{ '--tilt': step.tilt }}
                >
                  <div className={styles.frame}>
                    <img
                      src={step.image}
                      alt={step.alt}
                      className={styles.photo}
                      style={{ objectPosition: step.position }}
                      loading="lazy"
                    />
                  </div>
                  <figcaption className={styles.bar}>
                    <b>Figa Daffa</b>
                    <span>Informatics Student</span>
                  </figcaption>
                </figure>
              ))}

              <span className={`${styles.tape} ${styles.tapeTR}`} aria-hidden="true" />
              <span className={`${styles.tape} ${styles.tapeBL}`} aria-hidden="true" />
              <span className={`${styles.tape} ${styles.tapeMid}`} aria-hidden="true" />

              {/* FIGA signature: tanda tangan pemilik foto, dekoratif */}
              <span className={styles.signature} aria-hidden="true">FIGA</span>

              <svg className={styles.swoosh} viewBox="0 0 200 150" aria-hidden="true">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 128 C 64 112, 118 62, 166 14" strokeWidth="20" />
                  <path d="M34 140 C 84 124, 138 82, 186 44" strokeWidth="11" />
                  <path d="M126 70 C 146 92, 150 112, 144 138" strokeWidth="12" />
                </g>
              </svg>
            </div>
          </div>

          {/* ===== KANAN: judul + langkah 01 / 02 / 03 ===== */}
          <div className={styles.content}>
           <h2 id="about-title" className={styles.title}>
             <span>More Than</span>
             <span className={styles.accent}>Just Code.</span>
          </h2>
            <p className={styles.intro}>
              A little art. <strong>A little chaos.</strong> A lot of curiosity.
            </p>

            <ol className={styles.steps}>
              {STEPS.map((step, i) => (
                <li
                  key={step.id}
                  className={styles.step}
                  style={{ '--i': i }}
                  data-active={i === active}
                  data-done={i < active}
                  aria-current={i === active ? 'step' : undefined}
                >
                  <button
                    type="button"
                    className={styles.stepBtn}
                    onClick={() => goTo(i)}
                    aria-expanded={i === active}
                    aria-controls={`about-step-${step.id}`}
                  >
                    <span className={styles.num}>
                      {pad(i + 1)}
                      <small>/{pad(STEPS.length)}</small>
                    </span>
                    <span className={styles.head}>
                      <span className={styles.kicker}>{step.kicker}</span>
                      <span className={styles.stepTitle}>{step.title}</span>
                    </span>
                  </button>
                  <div id={`about-step-${step.id}`} className={styles.bodyWrap}>
                    <div className={styles.bodyInner}>
                      <p className={styles.body}>{step.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className={styles.hint} data-hidden={active === last} aria-hidden="true">
          Scroll to explore <i />
        </div>
      </div>

      {/* garis cat diagonal yang menyapu saat transisi dari hero */}
      <div className={styles.slash} aria-hidden="true" />
    </section>
  );
};

export default About;