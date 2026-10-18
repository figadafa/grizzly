import React from 'react';
import styles from './Hero.module.css';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <section className={styles.hero}>
    
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textColumn}>
            <div className={styles.metaInfo}>
              <span className={styles.roleLabel}>INFORMATICS STUDENT</span>
              <span className={styles.roleLabelSecondary}>DATA & CREATIVE DEVELOPER</span>
            </div>
            
            <h2 className={styles.headline}>
              <span className={styles.builtThrough}>
                BUILT THROUGH
                <img src="/src/assets/images/Asset6.png" alt="" className={styles.headlineSplatter} />
              </span>
              <span className={styles.friction}>
                <span className={styles.f}>F</span>
                <span className={styles.riction}>RICTION.</span>
              </span>
            </h2>
            
            <p className={styles.supportingCopy}>
              Building digital experiences with logic, curiosity, and creativity.
            </p>
            
            <div className={styles.ctaGroup}>
              <Button primary href="#projects">VIEW MY WORKS</Button>
              <Button href="#about">ABOUT ME</Button>
            </div>

            <div className={styles.socialLinks}>
              <span>GITHUB</span>
              <span>LINKEDIN</span>
              <span>INSTAGRAM</span>
            </div>
          </div>

          <div className={styles.portraitColumn}>
            <div className={styles.portraitWrapper}>
              <img src="/images/graffiti/halo.svg" alt="" aria-hidden="true" className={styles.halo} />
              <img src="/images/Dapa-Nobackground.png" alt="Portrait of Figa Brilliant Daffa" className={styles.portrait} />
              <img src="/images/graffiti/crown.svg" alt="" aria-hidden="true" className={styles.crown} />
              <img src="/images/graffiti/arrow.svg" alt="" aria-hidden="true" className={styles.arrow} />
            </div>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <span className={styles.scrollText}>SCROLL DOWN</span>
          <div className={styles.scrollLine}></div>
          <span className={styles.scrollNumber}>02</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;