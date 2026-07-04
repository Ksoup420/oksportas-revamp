import React, { useState, useEffect } from 'react';
import heroBg from '../assets/Oksportas padel good photos/bure/DJI_0106.JPG'; // Drone view of the spectacular Swedbank rooftop court

export default function Hero({ currentLang }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const words = {
    en: ['PREMIUM', 'DURABLE', 'AESTHETIC', 'CUSTOMIZED'],
    lt: ['PREMIUM KOKYBĖS', 'ILGAAMŽES', 'ESTETIŠKAS', 'INDIVIDUALIAS'],
    lv: ['PREMIUM KVALITĀTES', 'IZTURĪGUS', 'ESTĒTISKUS', 'INDIVIDUĀLUS'],
    et: ['PREMIUM-KLASSI', 'VASTUPIDAVAID', 'ESTEETILISI', 'KOHANDATUD'],
    de: ['PREMIUM', 'LANGLEBIGE', 'ÄSTHETISCHE', 'INDIVIDUELLE'],
    pl: ['PREMIUM', 'TRWAŁE', 'ESTETYCZNE', 'SPERSONALIZOWANE']
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words[currentLang].length);
    }, 2500);
    return () => clearInterval(interval);
  }, [currentLang]);

  const t = {
    en: {
      tagline: 'We build',
      endTagline: 'padel courts',
      desc: 'OKsportas is the leading supplier of high-end, custom-engineered padel tennis courts in the Baltic States and Northern Europe. Designed for maximum player satisfaction, structural durability, and visual elegance.',
      ctaPrimary: 'Calculate Cost',
      ctaSecondary: 'View Courts',
      statsCourts: 'Courts Installed',
      statsExp: 'Years of Experience',
      statsWarrantyVal: '3 Year',
      statsWarrantyLbl: 'Product Warranty',
    },
    lt: {
      tagline: 'Mes statome',
      endTagline: 'padelio aikšteles',
      desc: 'OKsportas yra pirmaujantis aukščiausios klasės padelio aikštelių tiekėjas Baltijos šalyse ir Šiaurės Europoje. Sukurta maksimaliam žaidėjų pasitenkinimui, konstrukcijos tvirtumui ir vizualiai estetikai.',
      ctaPrimary: 'Kainos skaičiuoklė',
      ctaSecondary: 'Mūsų aikštelės',
      statsCourts: 'Įrengtų aikštelių',
      statsExp: 'Metų patirtis',
      statsWarrantyVal: '3 metų',
      statsWarrantyLbl: 'Produkto garantija',
    },
    lv: {
      tagline: 'Mēs būvējam',
      endTagline: 'padela laukumus',
      desc: 'OKsportas ir vadošais augstākās klases, individuāli projektētu padela tenisa laukumu piegādātājs Baltijas valstīs un Ziemeļeiropā. Izstrādāts maksimālam spēlētāju apmierinājumam, konstrukcijas izturībai un vizuālai elegancei.',
      ctaPrimary: 'Aprēķināt cenu',
      ctaSecondary: 'Apskatīt laukumus',
      statsCourts: 'Uzstādīti laukumi',
      statsExp: 'Gadu pieredze',
      statsWarrantyVal: '3 gadu',
      statsWarrantyLbl: 'Produkta garantija',
    },
    et: {
      tagline: 'Me ehitame',
      endTagline: 'padeliväljakuid',
      desc: 'OKsportas on juhtiv tippklassi ja eritellimusel projekteeritud padeliväljakute tarnija Baltikumis ning Põhja-Euroopas. Loodud mängijate maksimaalseks rahuloluks, konstruktsiooni vastupidavuseks ja visuaalseks esteetikaks.',
      ctaPrimary: 'Arvuta maksumus',
      ctaSecondary: 'Vaata väljakuid',
      statsCourts: 'Paigaldatud väljakut',
      statsExp: 'Aastat kogemust',
      statsWarrantyVal: '3-aastane',
      statsWarrantyLbl: 'Tootegarantii',
    },
    de: {
      tagline: 'Wir bauen',
      endTagline: 'Padel-Plätze',
      desc: 'OKsportas ist der führende Anbieter von hochwertigen, individuell gefertigten Padel-Plätzen in den baltischen Staaten und Nordeuropa. Entwickelt für maximale Spielerzufriedenheit, strukturelle Langlebigkeit und visuelle Eleganz.',
      ctaPrimary: 'Kosten berechnen',
      ctaSecondary: 'Plätze ansehen',
      statsCourts: 'Installierte Plätze',
      statsExp: 'Jahre Erfahrung',
      statsWarrantyVal: '3 Jahre',
      statsWarrantyLbl: 'Produktgarantie',
    },
    pl: {
      tagline: 'Budujemy',
      endTagline: 'korty do padla',
      desc: 'OKsportas jest wiodącym dostawcą wysokiej klasy, projektowanych na zamówienie kortów do padla w krajach bałtyckich i Europie Północnej. Zaprojektowane z myślą o maksymalnej satysfakcji graczy, trwałości konstrukcji i wizualnej elegancji.',
      ctaPrimary: 'Oblicz koszt',
      ctaSecondary: 'Zobacz korty',
      statsCourts: 'Zainstalowane korty',
      statsExp: 'Lat doświadczenia',
      statsWarrantyVal: '3 lata',
      statsWarrantyLbl: 'Gwarancja na produkt',
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <img src={heroBg} alt="OKsportas Padel Court" className="hero-bg-img" />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content animate-fade-in">
        <div className="badge">
          <span className="badge-dot"></span>
          <span>EST. 2014 | BALTIC STATES LEADER</span>
        </div>

        <h1 className="hero-title">
          {t[currentLang].tagline} <br />
          <span className="word-rotator">
            {words[currentLang][currentWordIndex]}
          </span> <br />
          {t[currentLang].endTagline}
        </h1>

        <p className="hero-desc">{t[currentLang].desc}</p>

        <div className="hero-ctas">
          <a href="#calculator" className="btn btn-primary">
            {t[currentLang].ctaPrimary}
            <span className="arrow">→</span>
          </a>
          <a href="#products" className="btn btn-secondary">
            {t[currentLang].ctaSecondary}
          </a>
        </div>
      </div>

      <div className="hero-stats container">
        <div className="stat-card">
          <h3>207</h3>
          <p>{t[currentLang].statsCourts}</p>
        </div>
        <div className="stat-card">
          <h3>12+</h3>
          <p>{t[currentLang].statsExp}</p>
        </div>
        <div className="stat-card">
          <h3>{t[currentLang].statsWarrantyVal}</h3>
          <p>{t[currentLang].statsWarrantyLbl}</p>
        </div>
      </div>

      <style jsx="true">{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 140px 0 60px;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform: scale(1.05);
          animation: zoomOutBg 20s ease-out forwards;
        }

        @keyframes zoomOutBg {
          from { transform: scale(1.08); }
          to { transform: scale(1); }
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(6, 9, 19, 0.8) 0%,
            rgba(6, 9, 19, 0.7) 40%,
            rgba(6, 9, 19, 0.95) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--primary);
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--primary);
          box-shadow: 0 0 10px var(--primary);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        .hero-title {
          font-size: clamp(2.8rem, 6vw, 4.8rem);
          font-weight: 800;
          line-height: 1.1;
          color: #fff;
          letter-spacing: -0.03em;
        }

        .word-rotator {
          color: var(--primary);
          background: linear-gradient(135deg, #fff 20%, var(--primary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          min-width: 280px;
          transition: all 0.5s ease-in-out;
          animation: textPulse 2.5s infinite;
        }

        .hero-desc {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: var(--text-muted);
          max-width: 650px;
          line-height: 1.6;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
          margin-top: 12px;
        }

        .hero-ctas .arrow {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .hero-ctas .btn-primary:hover .arrow {
          transform: translateX(4px);
        }

        /* Stats Grid */
        .hero-stats {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          width: 100%;
          max-width: 900px;
          margin-top: 80px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: var(--border-radius);
          padding: 20px;
          text-align: center;
          backdrop-filter: blur(5px);
          transition: var(--transition);
        }

        .stat-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(16, 185, 129, 0.2);
          transform: translateY(-3px);
        }

        .stat-card h3 {
          font-size: 2.2rem;
          color: #fff;
          font-weight: 800;
          margin-bottom: 4px;
        }

        .stat-card p {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        @media (max-width: 640px) {
          .hero-ctas {
            flex-direction: column;
            width: 100%;
            max-width: 320px;
          }
          .hero-stats {
            grid-template-columns: 1fr;
            margin-top: 50px;
          }
        }
      `}</style>
    </section>
  );
}
