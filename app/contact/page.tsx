import { Metadata } from 'next';

import ContactCode from '@/components/ContactCode';

import styles from '@/styles/ContactPage.module.css';

export const metadata: Metadata = {
  title: 'Contact',
};

const ContactPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Contact Me</h1>
      <p className={styles.pageSubtitle}>
        I would love to hear from you! 
        Whether you have a project in mind, an opportunity to share, 
        or just want to connect, feel free to drop a message on any of the platforms below.
      </p>
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <ContactCode />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
