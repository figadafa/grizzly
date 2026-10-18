import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, primary, href, ...props }) => {
  const className = `${styles.button} ${primary ? styles.primary : styles.secondary}`;
  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  );
};

export default Button;
