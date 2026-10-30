import { useEffect, useRef, useState } from "react";
import styles from "./intro.module.css";
import Loader from "./loader.jsx";

/* ---- Pengaturan intro ---- */
const SEEN_KEY = "grizzly-intro-seen";
const SPRAY_MS = 2800;
const HOLD_MS = 1600;
const ZOOM_OUT_MS = 1300;
const FILL_W = 0.8;
const FILL_H = 0.6;
const MIN_SCALE = 1.4;
const MAX_SCALE = 3.2;
const READY_TIMEOUT_MS = 6000;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function shouldSkipIntro() {
  // ?intro memaksa intro tampil saat development
  if (new URLSearchParams(window.location.search).has("intro")) {
    return false;
  }

  // Hormati preferensi reduced motion
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
    return true;
  }

  try {
    return sessionStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

export default function Intro({ children }) {
  const [playIntro] = useState(() => !shouldSkipIntro());
  const [phase, setPhase] = useState(playIntro ? "loading" : "done");
  const [zoom, setZoom] = useState(null);

  const stageRef = useRef(null);

  useEffect(() => {
    if (!playIntro) return;

    let cancelled = false;
    const stopped = () => cancelled;

    window.scrollTo(0, 0);

    const pageLoaded = new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve();
      } else {
        window.addEventListener("load", resolve, { once: true });
      }
    });

    const minTime = wait(SPRAY_MS);

    (async () => {
      await Promise.race([
        Promise.all([document.fonts.ready, pageLoaded]),
        wait(READY_TIMEOUT_MS),
      ]);

      if (stopped()) return;

      // Ukur headline setelah font siap
      const stage = stageRef.current;
      const target = stage?.querySelector("[data-zoom-target]");

      if (stage && target) {
        const t = target.getBoundingClientRect();
        const s = stage.getBoundingClientRect();

        const vw = window.innerWidth;
        const vh = window.innerHeight;

        const cx = t.left + t.width / 2;
        const cy = t.top + t.height / 2;

        const fit = Math.min(
          (vw * FILL_W) / t.width,
          (vh * FILL_H) / t.height
        );

        const scale = Math.min(Math.max(fit, MIN_SCALE), MAX_SCALE);

        setZoom({
          origin: `${cx - s.left}px ${cy - s.top}px`,
          dx: `${vw / 2 - cx}px`,
          dy: `${vh / 2 - cy}px`,
          scale,
        });
      }

      await minTime;
      if (stopped()) return;

      setPhase("zoomIn");

      await wait(HOLD_MS);
      if (stopped()) return;

      setPhase("zoomOut");

      await wait(ZOOM_OUT_MS + 50);
      if (stopped()) return;

      setPhase("done");
    })();

    return () => {
      cancelled = true;
    };
  }, [playIntro]);

  // Tandai intro sudah selesai dalam sesi browser ini
  useEffect(() => {
    if (phase !== "done") return;

    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      // Abaikan jika sessionStorage tidak tersedia
    }
  }, [phase]);

  // Kunci scroll selama intro
  useEffect(() => {
    document.body.style.overflow = phase === "done" ? "" : "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  const intro = phase !== "done";
  const zoomed =
    Boolean(zoom) && (phase === "loading" || phase === "zoomIn");

  const stageClass = intro
    ? [styles.stage, zoomed && styles.zoomed].filter(Boolean).join(" ")
    : undefined;

  const stageStyle = zoom
    ? {
        transformOrigin: zoom.origin,
        "--dx": zoom.dx,
        "--dy": zoom.dy,
        "--s": zoom.scale,
      }
    : undefined;

  return (
    <>
      {intro && <Loader fading={phase !== "loading"} />}

      <div className={intro ? styles.viewport : undefined}>
        <div ref={stageRef} className={stageClass} style={stageStyle}>
          {children}
        </div>
      </div>
    </>
  );
}