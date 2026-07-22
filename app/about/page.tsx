'use client';

import { VscGithub, VscMail, VscLinkExternal } from 'react-icons/vsc';
import Link from 'next/link';

import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.name}>Marzella Capin</h1>
              <p className={styles.role}>Senior IT Student @ PUP </p>
              <div className={styles.location}>
                <span className={styles.dot} />
                Manila, Philippines
              </div>
            </div>
          </div>

          <div className={styles.headerActions}>
            <a
              href="https://github.com/dismecheese"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link href="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          {/* Bio Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>About</h2>
            </div>

            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                I am a fourth-year Information Technology student at the Polytechnic University of the Philippines. 
                I am scheduled to graduate this September and am currently a candidate for Magna Cum Laude honors.  
                Throughout my academic journey and hands-on internships, 
                I have built a solid foundation in full-stack web development and UI/UX design. 
                My technical toolkit primarily revolves around modern technologies like Next.js, React, Node.js, and TypeScript, 
                along with experience using C#, Java, and SQL.
              </p>

              <p className={styles.paragraph}>
                From mapping out user flows in Figma to structuring backend databases, 
                I enjoy working across the entire development process to bring complete, 
                user-friendly applications to life.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Experience</h2>
            </div>

            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>June 2026 - Present</span>
                </div>
                <h3 className={styles.expRole}>Operations Intern</h3>
                <p className={styles.expCompany}>Make Technology Inc.</p>
                <ul className={styles.expList}>
                  <li>Developed and maintained internal systems and tools to optimize the company's daily business operations.</li>
                  <li>Engaged in full-stack development, project management, and quality assurance (QA) testing.</li>
                  <li>Identified and implemented automation solutions to streamline existing processes and solve everyday challenges for employees.</li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>March 2026 - June 2026</span>
                </div>
                <h3 className={styles.expRole}>Software Developer Intern</h3>
                <p className={styles.expCompany}>DOST Project LODI</p>
                <ul className={styles.expList}>
                  <li>Contributed to system development projects by writing and debugging frontend and backend code.</li>
                  <li>Participated in UI/UX design and collaborated with the team on various full-stack tasks.</li>
                  <li>Supported Agile methodologies by defining user stories and organizing Product Backlog Items (PBIs) for documentation.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Skills</h2>
            </div>

            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Languages</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>JavaScript</span>
                    <span className={styles.skillTag}>TypeScript</span>
                    <span className={styles.skillTag}>HTML/CSS</span>
                    <span className={styles.skillTag}>C#</span>
                    <span className={styles.skillTag}>SQL</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Frontend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>React</span>
                    <span className={styles.skillTag}>Next.js</span>
                    <span className={styles.skillTag}>Blazor</span>
                    <span className={styles.skillTag}>Tailwind CSS</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Backend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Node.js</span>
                    <span className={styles.skillTag}>PostgreSQL</span>
                    <span className={styles.skillTag}>MySQL</span>
                    <span className={styles.skillTag}>Prisma</span>
                    <span className={styles.skillTag}>ASP.NET Core</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Tools</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Git</span>
                    <span className={styles.skillTag}>VS Code</span>
                    <span className={styles.skillTag}>Antigravity</span>
                    <span className={styles.skillTag}>Docker</span>
                    <span className={styles.skillTag}>Figma</span>
                    <span className={styles.skillTag}>Canva</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Writing Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>Writing</h2>
            </div>

            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                I&apos;ve had the pleasure of writing for some amazing publications
                as a freelance technical author:
              </p>

              <div className={styles.writingLinks}>
                <a
                  href="https://www.100ms.live/blog/author/nitin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.writingLink}
                >
                  <span>100ms Blog</span>
                  <VscLinkExternal size={14} />
                </a>

                <a
                  href="https://blog.logrocket.com/author/nitinranganath/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.writingLink}
                >
                  <span>LogRocket Blog</span>
                  <VscLinkExternal size={14} />
                </a>

                <a
                  href="https://dev.to/itsnitinr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.writingLink}
                >
                  <span>DEV.to</span>
                  <VscLinkExternal size={14} />
                </a>
              </div>
            </div>
          </section>

          {/* Beyond Code Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>05</span>
              <h2 className={styles.sectionTitle}>Beyond Code</h2>
            </div>

            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                Aside from programming and writing, I enjoy reading dystopian novels,
                listening to calm piano music, or just enjoying some downtime.
              </p>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Link href="/projects" className={styles.footerLink}>
            View my projects →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
