'use client';

import Link from 'next/link';
import { VscArrowRight, VscGithub, VscMail, VscCode } from 'react-icons/vsc';

import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.icon}>
              <VscCode size={32} />
            </div>
          </div>

          <div className={styles.intro}>
            <p className={styles.greeting}>Hello, I&apos;m</p>

            <h1 className={styles.name}>Marzella Capin</h1>

            <p className={styles.role}>Senior IT Student</p>

            <div className={styles.divider} />

            <p className={styles.description}>
              With a passion for building applications that are both highly functional and beautifully designed, 
              I always prioritize quality and usability in my work. 
              I take pride in what I do and handle fast-paced environments with a positive mindset. 
              Whether I am working independently or collaborating with a team, 
              I am always eager to learn, adapt, and take on new challenges in the tech industry.
              <br /><br />Thank you for visiting my portfolio. 
              Feel free to look around and explore!
            </p>
          </div> 

          <div className={styles.actions}>
            <Link href="/projects" className={styles.primaryAction}>
              <span>View Projects</span>
              <VscArrowRight size={18} />
            </Link>

            <Link href="/about" className={styles.secondaryAction}>
              <span>Learn More</span>
            </Link>
          </div>

          <div className={styles.links}>
            <a
              href="https://github.com/itsnitinr"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <VscGithub size={16} />
              <span>GitHub</span>
            </a>

            <span className={styles.linkSeparator}>/</span>

            <Link href="/contact" className={styles.link}>
              <VscMail size={16} />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
