import { useEffect, useRef, useState } from "react";
import styles from "./intro.module.css";
import Loader from "./loader.jsx";

/* ---- Pengaturan intro (ubah di sini) ---- */
const SEEN_KEY = "grizzly-intro-seen"; // penanda "sudah nonton" di sessionStorage
const SPRAY_MS = 2600; // lama loader tampil sejak huruf pertama mulai (≥ animasi di loader.module.css)
const FADE_MS = 500; // samakan dengan --fade-ms di loader.module.css
const FONT_TIMEOUT_MS = 2500; // batas tunggu font URBAN SPRAY
const READY_TIMEOUT_MS = 6000; // batas tunggu halaman/gambar supaya intro tidak nyangkut

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function shouldSkipIntro() {
  return false;
}

export default function Intro({ children }) {
  const [playIntro] = useState(() => !shouldSkipIntro());
  // loading → fading → done
  const [phase, setPhase] = useState(playIntro ? "loading" : "done");
  const [started, setStarted] = useState(false);



  useEffect(() => {
    if (!playIntro) return;

    let cancelled = false;
    const stopped = () => cancelled;

    window.scrollTo(0, 0);

    const pageLoaded = new Promise((resolve) => {
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", resolve, { once: true });
    });

    (async () => {
      // 1. tunggu font URBAN SPRAY supaya huruf tidak berganti font di tengah animasi
      await Promise.race([
        document.fonts.load('1em "Urban Spray"').catch(() => {}),
        wait(FONT_TIMEOUT_MS),
      ]);
      if (stopped()) return;

      // 2. mulai menyemprot huruf satu per satu
      setStarted(true);
      const minTime = wait(SPRAY_MS);

      // 3. selagi menyemprot, pastikan halaman + gambar Hero sudah siap
      await Promise.race([
        Promise.all([document.fonts.ready, pageLoaded]),
        wait(READY_TIMEOUT_MS),
      ]);
      await minTime;
      if (stopped()) return;

      // 4. loader memudar, Hero langsung terlihat
      setPhase("fading");
      await wait(FADE_MS + 50);
      if (!stopped()) setPhase("done");
    })();

    return () => {
      cancelled = true;
    };
  }, [playIntro]);

  // tandai sudah ditonton, supaya tidak muncul lagi di sesi yang sama
  useEffect(() => {
    if (phase !== "done") return;
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* storage diblokir: abaikan */
    }
  }, [phase]);

  // kunci scroll selama intro
  useEffect(() => {
    document.body.style.overflow = phase === "done" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);





  const intro = phase !== "done";

  return (
    <>
      {intro && <Loader started={started} fading={phase !== "loading"} />}



      {children}
    </>
  );
}