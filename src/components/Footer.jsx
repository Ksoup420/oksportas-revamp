import React from 'react';
import logo from '../assets/oksportas_logo_green_white.svg';

export default function Footer({ currentLang }) {
  const t = {
    en: {
      tagline: 'Leading designer and supplier of high-performance padel courts in the Baltic States and Northern Europe.',
      quickLinks: 'Quick Links',
      contact: 'Contact Info',
      follow: 'Follow Us',
      rights: 'All rights reserved.',
      about: 'About Us',
      products: 'Padel Courts',
      calculator: 'Calculator',
      projects: 'Projects',
    },
    lt: {
      tagline: 'Pirmaujantis aukštos kokybės padelio teniso aikštelių projektuotojas ir tiekėjas Baltijos šalyse ir Šiaurės Europoje.',
      quickLinks: 'Nuorodos',
      contact: 'Kontaktai',
      follow: 'Sekite mus',
      rights: 'Visos teisės saugomos.',
      about: 'Apie mus',
      products: 'Padelio aikštelės',
      calculator: 'Skaičiuoklė',
      projects: 'Projektai',
    },
    lv: {
      tagline: 'Vadošais augstas veiktspējas padela laukumu projektētājs un piegādātājs Baltijas valstīs un Ziemeļeiropā.',
      quickLinks: 'Saites',
      contact: 'Kontaktinformācija',
      follow: 'Sekojiet mums',
      rights: 'Visas tiesības aizsargātas.',
      about: 'Par mums',
      products: 'Padela laukumi',
      calculator: 'Kalkulators',
      projects: 'Projekti',
    },
    et: {
      tagline: 'Juhtiv kõrgjõudlusega padeliväljakute projekteerija ja tarnija Baltikumis ja Põhja-Euroopas.',
      quickLinks: 'Lingid',
      contact: 'Kontaktinfo',
      follow: 'Jälgi meid',
      rights: 'Kõik õigused kaitstud.',
      about: 'Meist',
      products: 'Padeliväljakud',
      calculator: 'Kalkulaator',
      projects: 'Projektid',
    },
    de: {
      tagline: 'Führender Designer und Anbieter von Hochleistungs-Padel-Plätzen in den baltischen Staaten und Nordeuropa.',
      quickLinks: 'Schnellzugriff',
      contact: 'Kontaktinfo',
      follow: 'Folgen Sie uns',
      rights: 'Alle Rechte vorbehalten.',
      about: 'Über uns',
      products: 'Padel-Plätze',
      calculator: 'Kostenrechner',
      projects: 'Projekte',
    },
    pl: {
      tagline: 'Wiodący projektant i dostawca wysokiej klasy kortów do padla w krajach bałtyckich i Europie Północnej.',
      quickLinks: 'Szybkie linki',
      contact: 'Informacje kontaktowe',
      follow: 'Obserwuj nas',
      rights: 'Wszelkie prawa zastrzeżone.',
      about: 'O nas',
      products: 'Korty do padla',
      calculator: 'Kalkulator',
      projects: 'Projekty',
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <img src={logo} alt="OKsportas Logo" className="footer-logo-img" />
          </a>
          <p className="footer-tagline">{t[currentLang].tagline}</p>
        </div>

        <div className="footer-links">
          <h4>{t[currentLang].quickLinks}</h4>
          <ul>
            <li><a href="#about">{t[currentLang].about}</a></li>
            <li><a href="#products">{t[currentLang].products}</a></li>
            <li><a href="#calculator">{t[currentLang].calculator}</a></li>
            <li><a href="#projects">{t[currentLang].projects}</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>{t[currentLang].contact}</h4>
          <ul>
            <li>
              <span className="icon">✉</span> 
              <a href="mailto:oksportas@gmail.com">oksportas@gmail.com</a>
            </li>
            <li>
              <span className="icon">📞</span> 
              <a href="tel:+37060215771">+370 602 15771</a>
            </li>

          </ul>
        </div>

        <div className="footer-social">
          <h4>{t[currentLang].follow}</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/oksportas/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V1h-3a4 4 0 0 0-4 4v3z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/oksportas/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-flex">
          <p>&copy; {currentYear} OKsportas. {t[currentLang].rights}</p>
        </div>
      </div>

      <style jsx="true">{`
        .footer {
          background-color: var(--bg-sub);
          border-top: 1px solid var(--border);
          padding: 80px 0 0;
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 1fr;
          gap: 40px;
          padding-bottom: 60px;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .footer-logo-img {
          height: 64px;
          width: auto;
          object-fit: contain;
        }

        .footer-tagline {
          max-width: 320px;
          line-height: 1.5;
        }

        .footer-links h4,
        .footer-contact h4,
        .footer-social h4 {
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 24px;
          position: relative;
        }

        .footer-links ul,
        .footer-contact ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a,
        .footer-contact a {
          color: var(--text-muted);
          text-decoration: none;
          transition: var(--transition);
        }

        .footer-links a:hover,
        .footer-contact a:hover {
          color: var(--primary);
        }

        .footer-contact li {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-contact .icon {
          color: var(--primary);
          font-size: 1.1rem;
        }

        .social-icons {
          display: flex;
          gap: 12px;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          color: var(--text-muted);
          transition: var(--transition);
        }

        .social-link:hover {
          color: var(--primary);
          border-color: var(--primary);
          background: rgba(16, 185, 129, 0.05);
          transform: translateY(-3px);
        }

        .footer-bottom {
          border-top: 1px solid var(--border);
          padding: 24px 0;
          text-align: center;
          font-size: 0.85rem;
        }

        .footer-bottom-flex {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
      `}</style>
    </footer>
  );
}
