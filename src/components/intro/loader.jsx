import styles from "./loader.module.css";

/*
  Tiap huruf punya "karakter" sendiri supaya terasa ditulis tangan:
  rot  = kemiringan akhir (derajat)
  drip = panjang tetesan cat dalam satuan em (0 = tanpa tetesan)
  dx   = posisi horizontal tetesan di dalam huruf (%)
*/
const LETTERS = [
  { char: "G", rot: -3, drip: 0.55, dx: 28 },
  { char: "R", rot: 2, drip: 0, dx: 50 },
  { char: "I", rot: -2, drip: 0.9, dx: 42 },
  { char: "Z", rot: 3, drip: 0.35, dx: 62 },
  { char: "Z", rot: -3, drip: 0, dx: 50 },
  { char: "L", rot: 2, drip: 0.7, dx: 20 },
  { char: "Y", rot: -2, drip: 0.4, dx: 48 },
];

export default function Loader({ started, fading }) {
  const className = [styles.loader, started && styles.run, fading && styles.fade]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className} role="status" aria-label="Loading">
      {/* filter SVG: tepi huruf dan coretan jadi kasar seperti cat semprot di tembok */}
      <svg className={styles.defs} width="0" height="0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="grizzly-rough" x="-5%" y="-10%" width="110%" height="130%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="2"
              seed="7"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
          </filter>
        </defs>
      </svg>

      <div className={styles.art}>
        <div className={styles.word} aria-hidden="true">
          {LETTERS.map((l, i) => (
            <span
              key={i}
              className={styles.letter}
              style={{
                "--i": i,
                "--rot": `${l.rot}deg`,
                "--drip": l.drip,
                "--dx": `${l.dx}%`,
              }}
            >
              {l.char}
            </span>
          ))}
        </div>

        {/* coretan spidol di bawah tulisan, tanda tangan ala tagging */}
        <svg className={styles.swoosh} viewBox="0 0 600 44" aria-hidden="true">
          <path
            className={styles.strokeMain}
            d="M6 24 C 120 6, 260 34, 420 16 S 560 8, 594 14"
            pathLength="1"
          />
          <path
            className={styles.strokeThin}
            d="M70 38 C 210 30, 340 40, 480 32"
            pathLength="1"
          />
        </svg>
      </div>
    </div>
  );
}