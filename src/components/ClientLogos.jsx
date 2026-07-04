import React from 'react';

export default function ClientLogos({ currentLang }) {
  const clients = [
    { name: 'Klaipėda Padel', url: 'http://www.klaipedapadel.lt' },
    { name: 'Fanų Padelio Arena', url: 'https://padelioarena.lt/' },
    { name: 'Active Vilnius', url: 'https://www.activevilnius.lt/' },
    { name: 'Sky Padel Club', url: 'https://skypadel.lt/' },
    { name: 'SEB Arena', url: 'https://www.sebarena.lt/padelis/' },
    { name: 'Kaunas Camping', url: 'https://www.kaunascamping.eu/' },
    { name: 'Martinų Padelis', url: 'https://martinupadelis.lt/' },
    { name: 'Molėtų Sporto Centras', url: 'https://www.moletusportas.lt/' },
    { name: 'Neringos Sporto Mokykla', url: 'https://nsportmok.lt/' },
    { name: 'Padel Factory', url: 'https://playpadel.lt/' },
    { name: 'Mojantis Ąžuolas', url: 'https://www.prieezero.lt/lt/pramoga/padelio-teniso-kortai-4213/' },
    { name: 'Padel Tennis', url: 'https://www.padeltennis.lt/' },
    { name: 'Padel Dome (Austria)', url: 'https://www.padeldome.at/' }
  ];

  const titles = {
    en: 'TRUSTED BY LEADING CLUBS AND CORPORATE PARTNERS ACROSS EUROPE',
    lt: 'MŪSŲ DARBAIS PASITIKI AKTYVAUS LAISVALAIKIO KLUBAI VISOJE EUROPOJE',
    lv: 'MŪSU DARBAM UZTICAS VADOŠIE KLUBI UN PARTNERI VISĀ EIROPĀ',
    et: 'MEIE TÖÖD USALDAVAD JUHTIVAD KLUBID JA PARTNERID KOGU EUROOPAS',
    de: 'FÜHRENDE CLUBS UND UNTERNEHMENSPARTNER IN GANZ EUROPA VERTRAUEN UNS',
    pl: 'ZAUFAŁY NAM WIODĄCE KLUBY I PARTNERZY BIZNESOWI W CAŁEJ EUROPIE'
  };

  return (
    <section className="client-logos-section">
      <div className="container">
        <p className="clients-title">
          {titles[currentLang]}
        </p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee">
          <div className="marquee-content">
            {clients.map((client, idx) => (
              <a
                key={idx}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="client-logo-card"
              >
                <span className="client-icon">🎾</span>
                <span className="client-name">{client.name}</span>
              </a>
            ))}
          </div>
          {/* Duplicate for infinite effect */}
          <div className="marquee-content" aria-hidden="true">
            {clients.map((client, idx) => (
              <a
                key={`dup-${idx}`}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="client-logo-card"
              >
                <span className="client-icon">🎾</span>
                <span className="client-name">{client.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .client-logos-section {
          background-color: var(--bg-sub);
          padding: 60px 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          overflow: hidden;
        }

        .clients-title {
          font-size: 0.8rem;
          font-weight: 700;
          text-align: center;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          margin-bottom: 35px;
          text-transform: uppercase;
        }

        .marquee-wrapper {
          display: flex;
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        /* Fade gradients on side */
        .marquee-wrapper::before,
        .marquee-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 150px;
          z-index: 2;
          pointer-events: none;
        }

        .marquee-wrapper::before {
          left: 0;
          background: linear-gradient(to right, var(--bg-sub) 0%, transparent 100%);
        }

        .marquee-wrapper::after {
          right: 0;
          background: linear-gradient(to left, var(--bg-sub) 0%, transparent 100%);
        }

        .marquee {
          display: flex;
          width: max-content;
          animation: scrollMarquee 35s linear infinite;
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        .marquee-content {
          display: flex;
          gap: 40px;
          padding-right: 40px;
        }

        .client-logo-card {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border);
          border-radius: 50px;
          padding: 10px 24px;
          transition: var(--transition);
          text-decoration: none;
        }

        .client-logo-card:hover {
          border-color: var(--primary);
          background: rgba(16, 185, 129, 0.03);
          transform: scale(1.03);
        }

        .client-icon {
          color: var(--primary);
          font-size: 1.1rem;
        }

        .client-name {
          color: var(--text-main);
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: -0.01em;
          white-space: nowrap;
        }

        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
