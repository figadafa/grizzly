import styles from "./Loader.module.css";

export default function Loader({ fading }) {
  return (
    <div
      className={`${styles.loader} ${fading ? styles.fade : ""}`}
      role="status"
      aria-label="Loading"
    >
      <div className={styles.frame}>
        {/* tulisan terbuka dari kiri ke kanan lewat clip-path */}
        <div className={styles.reveal}>
          <svg viewBox="0 0 800 200" className={styles.svg} aria-hidden="true">
            <defs>
              {/* tepi huruf jadi kasar/berbintik seperti cat semprot */}
              <filter id="grizzly-spray" x="-10%" y="-30%" width="120%" height="160%">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.9"
                  numOctaves="2"
                  seed="4"
                  result="noise"
                />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" />
              </filter>
            </defs>

            <text
              x="400"
              y="145"
              textAnchor="middle"
              textLength="680"
              lengthAdjust="spacing"
              className={styles.glow}
              filter="url(#grizzly-overspray)"
            >
              GRIZZLY
            </text>
            <text
              x="400"
              y="145"
              textAnchor="middle"
              textLength="680"
              lengthAdjust="spacing"
              className={styles.text}
              filter="url(#grizzly-spray)"
            >
              GRIZZLY
            </text>
          </svg>
        </div>

        {/* "kepala semprotan" yang bergerak di ujung tulisan */}
        <span className={styles.nozzle} aria-hidden="true" />
      </div>
    </div>
  );
}