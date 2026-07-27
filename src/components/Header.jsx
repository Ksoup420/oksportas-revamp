import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/oksportas_logo_green_white.svg';

export default function Header({ currentLang, setCurrentLang }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', label: 'English', flag: 'gb' },
    { code: 'lt', label: 'Lietuvių', flag: 'lt' },
    { code: 'lv', label: 'Latviešu', flag: 'lv' },
    { code: 'et', label: 'Eesti', flag: 'ee' },
    { code: 'de', label: 'Deutsch', flag: 'de' },
    { code: 'pl', label: 'Polski', flag: 'pl' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = {
    en: {
      about: 'About Us',
      products: 'Padel Courts',
      interactive: '360° Tour',
      calculator: 'Cost Calculator',
      projects: 'Our Projects',
      faq: 'FAQ',
      contact: 'Contact Us',
      quote: 'Get a Quote',
    },
    lt: {
      about: 'Apie mus',
      products: 'Aikštelės',
      interactive: '360° Turas',
      calculator: 'Kainos skaičiuoklė',
      projects: 'Mūsų projektai',
      faq: 'DUK',
      contact: 'Susisiekite',
      quote: 'Skaičiuoti kainą',
    },
    lv: {
      about: 'Par mums',
      products: 'Laukumi',
      interactive: '360° tūre',
      calculator: 'Tāmes kalkulators',
      projects: 'Mūsu projekti',
      faq: 'BUJ',
      contact: 'Kontakti',
      quote: 'Aprēķināt cenu',
    },
    et: {
      about: 'Meist',
      products: 'Väljakud',
      interactive: '360° tuur',
      calculator: 'Hinnakalkulaator',
      projects: 'Meie projektid',
      faq: 'KKK',
      contact: 'Võta ühendust',
      quote: 'Küsi pakkumist',
    },
    de: {
      about: 'Über uns',
      products: 'Padel-Plätze',
      interactive: '360° Tour',
      calculator: 'Kostenrechner',
      projects: 'Projekte',
      faq: 'FAQ',
      contact: 'Kontakt',
      quote: 'Angebot einholen',
    },
    pl: {
      about: 'O nas',
      products: 'Korty do padla',
      interactive: 'Interaktywny obchód',
      calculator: 'Kalkulator kosztów',
      projects: 'Projekty',
      faq: 'FAQ',
      contact: 'Kontakt',
      quote: 'Darmowa wycena',
    }
  };

  const menuItems = [
    { id: '#about', label: t[currentLang].about },
    { id: '#products', label: t[currentLang].products },
    { id: '#tour', label: t[currentLang].interactive },
    { id: '#calculator', label: t[currentLang].calculator },
    { id: '#projects', label: t[currentLang].projects },
    { id: '#faq', label: t[currentLang].faq },
    { id: '#contact', label: t[currentLang].contact },
  ];

  return (
    <header className={`header-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#home" className="logo-link">
          <img src={logo} alt="OKsportas Logo" className="logo-img" />
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-menu">
          {menuItems.map((item) => (
            <a key={item.id} href={item.id} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          {/* Language Dropdown Selector */}
          <div className="lang-dropdown-container" ref={dropdownRef}>
            <button
              className={`lang-dropdown-trigger ${dropdownOpen ? 'open' : ''}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img
                src={`https://flagcdn.com/w20/${languages.find(l => l.code === currentLang).flag}.png`}
                alt={currentLang}
                className="lang-flag"
              />
              <span className="lang-code-text">{currentLang.toUpperCase()}</span>
              <span className="dropdown-caret">▼</span>
            </button>

            {dropdownOpen && (
              <div className="lang-dropdown-menu glass-card animate-fade-in-down">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`lang-dropdown-item ${currentLang === lang.code ? 'active' : ''}`}
                    onClick={() => {
                      setCurrentLang(lang.code);
                      setDropdownOpen(false);
                    }}
                  >
                    <img
                      src={`https://flagcdn.com/w20/${lang.flag}.png`}
                      alt={lang.label}
                      className="lang-flag"
                    />
                    <span className="lang-label-text">{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#calculator" className="btn btn-primary btn-sm btn-header-quote">
            {t[currentLang].quote}
          </a>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-menu">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.id}
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#calculator"
            className="btn btn-primary mobile-menu-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t[currentLang].quote}
          </a>

          {/* Mobile Language Switcher Grid */}
          <div className="mobile-lang-grid">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`mobile-lang-grid-item ${currentLang === lang.code ? 'active' : ''}`}
                onClick={() => {
                  setCurrentLang(lang.code);
                  setMobileMenuOpen(false);
                }}
              >
                <img
                  src={`https://flagcdn.com/w20/${lang.flag}.png`}
                  alt={lang.label}
                  className="lang-flag"
                />
                <span>{lang.code.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>

      <style jsx="true">{`
        .header-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 90px;
          display: flex;
          align-items: center;
          z-index: 1000;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .header-nav.scrolled {
          height: 70px;
          background: rgba(6, 9, 19, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo-link {
          display: flex;
          align-items: center;
          height: 100%;
          text-decoration: none;
        }

        .logo-img {
          height: 60px;
          width: auto;
          object-fit: contain;
          transition: var(--transition);
        }

        .header-nav.scrolled .logo-img {
          height: 48px;
        }

        .desktop-menu {
          display: flex;
          gap: 32px;
        }

        .nav-link {
          color: var(--text-muted);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: var(--transition);
          position: relative;
          padding: 8px 0;
        }

        .nav-link:hover {
          color: #fff;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: var(--transition);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        /* Language Dropdown Selector */
        .lang-dropdown-container {
          position: relative;
        }

        .lang-dropdown-trigger {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 8px 12px;
          color: #fff;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition);
        }

        .lang-dropdown-trigger:hover,
        .lang-dropdown-trigger.open {
          border-color: var(--primary);
          background: rgba(255, 255, 255, 0.06);
        }

        .lang-flag {
          width: 20px;
          height: auto;
          border-radius: 2px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.2);
          object-fit: cover;
        }

        .lang-code-text {
          text-transform: uppercase;
        }

        .dropdown-caret {
          font-size: 0.65rem;
          color: var(--text-muted);
          transition: transform 0.3s ease;
        }

        .lang-dropdown-trigger.open .dropdown-caret {
          transform: rotate(180deg);
        }

        .lang-dropdown-menu {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          width: 140px;
          background: rgba(10, 15, 30, 0.95);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border-hover);
          border-radius: 12px;
          padding: 6px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5);
          z-index: 1000;
          transform-origin: top right;
          animation: slideDownIn 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideDownIn {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .lang-dropdown-item {
          background: none;
          border: none;
          padding: 8px 10px;
          border-radius: 8px;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.9rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          text-align: left;
          transition: var(--transition);
        }

        .lang-dropdown-item:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.05);
        }

        .lang-dropdown-item.active {
          color: var(--primary);
          background: rgba(16, 185, 129, 0.08);
          font-weight: 600;
        }

        .lang-label-text {
          font-size: 0.85rem;
        }

        /* Mobile Language Grid */
        .mobile-lang-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 30px;
          border-top: 1px solid var(--border);
          padding-top: 25px;
          width: 100%;
        }

        .mobile-lang-grid-item {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 10px;
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          transition: var(--transition);
        }

        .mobile-lang-grid-item:active,
        .mobile-lang-grid-item.active {
          border-color: var(--primary);
          background: rgba(16, 185, 129, 0.05);
          color: var(--primary);
        }

        .btn-header-quote {
          padding: 8px 18px;
          font-size: 0.85rem;
        }

        /* Mobile Toggle */
        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 18px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1001;
        }

        .mobile-menu-toggle span {
          width: 100%;
          height: 2px;
          background-color: #fff;
          transition: all 0.3s ease;
          transform-origin: left center;
        }

        .mobile-menu-toggle.open span:nth-child(1) {
          transform: rotate(45deg);
        }

        .mobile-menu-toggle.open span:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-toggle.open span:nth-child(3) {
          transform: rotate(-45deg);
        }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 300px;
          height: 100vh;
          background: var(--bg-sub);
          border-left: 1px solid var(--border);
          padding: 120px 40px 40px;
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 999;
          display: flex;
          flex-direction: column;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
        }

        .mobile-drawer.open {
          right: 0;
        }

        .mobile-menu {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .mobile-nav-link {
          color: var(--text-main);
          text-decoration: none;
          font-size: 1.15rem;
          font-weight: 600;
          transition: var(--transition);
        }

        .mobile-nav-link:hover {
          color: var(--primary);
          padding-left: 8px;
        }

        .mobile-menu-btn {
          margin-top: 20px;
        }

        @media (max-width: 1024px) {
          .desktop-menu {
            display: none;
          }
          .btn-header-quote {
            display: none;
          }
          .mobile-menu-toggle {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
