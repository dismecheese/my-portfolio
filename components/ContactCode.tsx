import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'capinmarzella2004@gmail.com',
    href: 'mailto:capinmarzella2004@gmail.com',
  },
  {
    social: 'github',
    link: 'dismecheese',
    href: 'https://github.com/dismecheese',
  },
  {
    social: 'linkedin',
    link: 'marzellanicolecapin',
    href: 'https://www.linkedin.com/in/marzellanicolecapin/',
  },
  {
    social: 'instagram',
    link: 'marzellasaur',
    href: 'https://www.instagram.com/marzellasaur',
  },
  {
    social: 'roblox',
    link: 'steysadie',
    href: 'https://www.roblox.com/users/6125399715/profile',
  },
    {
    social: 'mobile',
    link: '09763271937',
    href: 'tel:+639763271937',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
