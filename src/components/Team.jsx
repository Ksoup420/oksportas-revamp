import React from 'react';
import karolisImg from '../assets/me.png';

export default function Team({ currentLang }) {
  const t = {
    en: {
      title: 'Our Team & Leadership',
      subtitle: 'Meet our dedicated team managing court design, logistics, and handover.',
      dirRole: 'Director',
      mgrRole: 'Project & Sales Manager',
      languages: 'Languages',
      descArvydas: 'Founder of OKsportas. Directing strategic expansion, client consultation, and quality standards for all installations in the Baltic States and Northern Europe.',
      descKarolis: 'Responsible for client relations, supplier logistics, and overall project coordination. Managing court custom designs, imports, and professional assembly teams across the Baltic States and Northern Europe.',
      contact: 'Get in Touch',
      introTitle: 'Pioneering Padel since 2014.',
      introDesc1: 'Our team pioneered and brought the sport of padel to Lithuania in 2014. Since then, we have been at the forefront of designing, supplying, and installing high-performance courts across the Baltic States and Northern Europe.',
      introDesc2: 'By partnering with leading manufacturers and optimizing logistics directly from factories, we deliver tournament-approved courts at unmatched factory-direct prices, combined with local warranty and assembly support.',
    },
    lt: {
      title: 'Mūsų komanda ir vadovybė',
      subtitle: 'Susipažinkite su komandos nariais, atsakingais už aikštelių tiekimą ir įrengimą.',
      dirRole: 'Direktorius',
      mgrRole: 'Pardavimų ir projektų vadovas',
      languages: 'Kalbos',
      descArvydas: 'OKsportas įkūrėjas. Atsakingas už strateginę plėtrą, klientų konsultavimą ir kokybės standartų užtikrinimą visuose Baltijos šalių ir Šiaurės Europos projektuose.',
      descKarolis: 'Atsakingas už klientų aptarnavimą, logistiką iš gamyklos ir bendrą projektų koordinavimą. Derina individualius užsakymus, valdo importo procesus bei vadovauja montavimo komandoms Baltijos šalyse ir Šiaurės Europoje.',
      contact: 'Susisiekti tiesiogiai',
      introTitle: 'Padelio teniso pionieriai nuo 2014 m.',
      introDesc1: 'Mūsų komandos specialistai buvo pirmieji, kurie 2014 metais atvežė padelio sportą į Lietuvą. Nuo to laiko esame sukaupę didžiausią patirtį projektuojant, tiekiant ir montuojant aukščiausios kokybės aikšteles Baltijos šalyse bei Šiaurės Europoje.',
      introDesc2: 'Bendradarbiaudami su rinkos lyderiais ir optimizuodami tiekimą tiesiai iš gamyklų, siūlome turnyruose patvirtintas aikšteles geriausiomis tiesioginėmis kainomis bei suteikiame vietinę garantiją ir profesionalų montavimą.',
    },
    lv: {
      title: 'Mūsu komanda & vadība',
      subtitle: 'Iepazīstieties ar mūsu komandu, kas vada laukumu izstrādi, loģistiku un nodošanu ekspluatācijā.',
      dirRole: 'Direktors',
      mgrRole: 'Projektu & pārdošanas vadītājs',
      languages: 'Valodas',
      descArvydas: 'OKsportas dibinātājs. Vada stratēģisko paplašināšanos, klientu konsultēšanu un kvalitātes standartu nodrošināšanu visās uzstādīšanās Baltijas valstīs un Ziemeļeiropā.',
      descKarolis: 'Atbildīgs par klientu attiecībām, piegādātāju loģistiku un vispārēju projektu koordināciju. Vada laukumu pielāgotos dizainus, importu un profesionālas montāžas komandas visās Baltijas valstīs un Ziemeļeiropā.',
      contact: 'Sazināties',
      introTitle: 'Padela tenisa celmlauži kopš 2014. gada.',
      introDesc1: 'Mūsu komanda bija pirmā, kas 2014. gadā atveda padela sportu uz Lietuvu. Kopš tā laika esam priekšgalā padela laukumu projektēšanā, piegādē un uzstādīšanā Baltijas valstīs un Ziemeļeiropā.',
      introDesc2: 'Sadarbojoties ar vadošajiem ražotājiem un optimizējot loģistiku tieši no ražotnes, mēs piegādājam turnīros apstiprinātus laukumus par nepārspējamām ražotāja cenām, nodrošinot vietējo garantiju un montāžas atbalstu.',
    },
    et: {
      title: 'Meie meeskond ja juhtkond',
      subtitle: 'Tutvuge meie pühendunud meeskonnaga, kes koordineerib väljakute projekteerimist, logistikat ja üleandmist.',
      dirRole: 'Direktor',
      mgrRole: 'Müügi- ja projektijuht',
      languages: 'Keeled',
      descArvydas: 'OKsportas asutaja. Juhib strateegilist laienemist, kliendikonsultatsioone ja kvaliteedistandardite tagamist kõigil paigaldustel Baltikumis ning Põhja-Euroopas.',
      descKarolis: 'Vastutab kliendisuhete, tarnijate logistika ja üldise projektikoordineerimise eest. Tegeleb väljakute eritellimuste disaini, impordi ja professionaalsete paigaldusmeeskondade juhtimisega Baltikumis ja Põhja-Euroopas.',
      contact: 'Võta ühendust',
      introTitle: 'Padeli teerajajad aastast 2014.',
      introDesc1: 'Meie meeskond tõi padeli spordiala Leetu 2014. aastal. Sellest ajast alates oleme olnud esirinnas tipptasemel väljakute projekteerimisel, tarnimisel ja paigaldamisel kogu Baltikumis ning Põhja-Euroopas.',
      introDesc2: 'Tehes koostööd juhtivate tootjatega ja optimeerides logistikat otse tehastest, pakume turniirikõlblikke väljakuid otse tootja hindadega, koos kohaliku garantii ja paigaldustoega.',
    },
    de: {
      title: 'Unser Team & Führung',
      subtitle: 'Lernen Sie unser engagiertes Team für Platzdesign, Logistik und Übergabe kennen.',
      dirRole: 'Geschäftsführer',
      mgrRole: 'Projekt- & Vertriebsleiter',
      languages: 'Sprachen',
      descArvydas: 'Gründer von OKsportas. Leitet die strategische Expansion, Kundenberatung und Qualitätsstandards für alle Installationen in den baltischen Staaten und Nordeuropa.',
      descKarolis: 'Verantwortlich für Kundenbeziehungen, Lieferantenlogistik und die gesamte Projektkoordination. Koordiniert individuelle Platzdesigns, Importe und professionelle Montageteams in den baltischen Staaten und Nordeuropa.',
      contact: 'Direkt kontaktieren',
      introTitle: 'Pionierarbeit im Padel seit 2014.',
      introDesc1: 'Unser Team leistete Pionierarbeit und brachte den Padel-Sport im Jahr 2014 nach Litauen. Seitdem stehen wir an vorderster Front bei der Entwicklung, Lieferung und Installation von Hochleistungsplätzen in den baltischen Staaten und Nordeuropa.',
      introDesc2: 'Durch die Partnerschaft mit führenden Herstellern und die Optimierung der Logistik direkt ab Werk liefern wir turniererprobte Plätze zu unschlagbaren Preisen direkt vom Werk, kombiniert mit lokaler Garantie und Montageunterstützung.',
    },
    pl: {
      title: 'Nasz zespół i zarząd',
      subtitle: 'Poznaj nasz zaangażowany zespół zarządzający projektowaniem kortów, logistyką i odbiorem.',
      dirRole: 'Dyrektor',
      mgrRole: 'Kierownik ds. Projektów i Sprzedaży',
      languages: 'Języki',
      descArvydas: 'Założyciel OKsportas. Odpowiada za rozwój strategiczny, konsultacje z klientami i standardy jakości wszystkich instalacji w krajach bałtyckich i Europie Północnej.',
      descKarolis: 'Odpowiedzialny za relacje z klientami, logistykę dostawców i ogólną koordynację projektów. Zarządza niestandardowymi projektami kortów, importem oraz profesjonalnymi ekipami montażowymi w krajach bałtyckich i Europie Północnej.',
      contact: 'Skontaktuj się bezpośrednio',
      introTitle: 'Pionierzy padla od 2014 roku.',
      introDesc1: 'Nasz zespół zapoczątkował i sprowadził sport padla na Litwę w 2014 roku. Od tego czasu jesteśmy liderem w projektowaniu, dostarczaniu i instalowaniu wysokiej klasy kortów w krajach bałtyckich i Europie Północnej.',
      introDesc2: 'Dzięki partnerstwu z wiodącymi producentami i optymalizacji logistyki bezpośrednio z fabryk, dostarczamy zatwierdzone do turniejów korty w bezkonkurencyjnych cenach bezpośrednio od producenta, w połączeniu z lokalną gwarancją i wsparciem montażowym.',
    }
  };

  const activeT = t[currentLang];

  return (
    <section id="about" className="team-section">
      <div className="container">
        <h2 className="section-title text-gradient">{activeT.title}</h2>
        <p className="section-subtitle">{activeT.subtitle}</p>

        <div className="team-layout">
          {/* Company Intro Text card */}
          <div className="glass-card company-intro-card">
            <h3>{activeT.introTitle}</h3>
            <p>{activeT.introDesc1}</p>
            <p className="margin-top">{activeT.introDesc2}</p>
          </div>

          {/* Arvydas Profile card */}
          <div className="glass-card manager-profile-card">
            <div className="avatar-wrapper">
              <div className="avatar-crop">
                <img 
                  src="https://oksportas.com/wp-content/uploads/2025/01/462676873_2896670367167174_2653953179576736333_n.jpg" 
                  alt="Arvydas Šutavičius" 
                  className="profile-img-element"
                />
              </div>
              <span className="online-badge"></span>
            </div>

            <div className="profile-info">
              <h3>Arvydas Šutavičius</h3>
              <p className="role-tag">{activeT.dirRole}</p>
              <div className="lang-tag">
                <span>{activeT.languages}:</span>
                <span className="flag-item"><img src="https://flagcdn.com/w20/lt.png" alt="LT" className="flag-icon" /> LT</span>
                <span className="flag-separator">,</span>
                <span className="flag-item"><img src="https://flagcdn.com/w20/de.png" alt="DE" className="flag-icon" /> DE</span>
                <span className="flag-separator">,</span>
                <span className="flag-item"><img src="https://flagcdn.com/w20/ru.png" alt="RU" className="flag-icon" /> RU</span>
              </div>
              
              <p className="profile-desc">{activeT.descArvydas}</p>
              
              <div className="profile-contact-details">
                <a href="tel:+37069822220" className="contact-item">📞 +370 698 22220</a>
                <a href="mailto:oksportas@gmail.com" className="contact-item">✉ oksportas@gmail.com</a>
              </div>

              <a href="#contact" className="btn btn-secondary btn-sm btn-full">
                {activeT.contact}
              </a>
            </div>
          </div>

          {/* Karolis Profile card */}
          <div className="glass-card manager-profile-card highlight-card">
            <div className="avatar-wrapper">
              <div className="avatar-crop">
                <img 
                  src={karolisImg} 
                  alt="Karolis Šutavičius" 
                  className="profile-img-element zoom-img"
                />
              </div>
              <span className="online-badge"></span>
            </div>

            <div className="profile-info">
              <h3>Karolis Šutavičius</h3>
              <p className="role-tag">{activeT.mgrRole}</p>
              <div className="lang-tag">
                <span>{activeT.languages}:</span>
                <span className="flag-item"><img src="https://flagcdn.com/w20/lt.png" alt="LT" className="flag-icon" /> LT</span>
                <span className="flag-separator">,</span>
                <span className="flag-item"><img src="https://flagcdn.com/w20/gb.png" alt="EN" className="flag-icon" /> EN</span>
              </div>
              
              <p className="profile-desc">{activeT.descKarolis}</p>
              
              <div className="profile-contact-details">
                <a href="tel:+37060215771" className="contact-item">📞 +370 602 15771</a>
                <a href="mailto:oksportas@gmail.com" className="contact-item">✉ oksportas@gmail.com</a>
              </div>

              <a href="#contact" className="btn btn-primary btn-sm btn-full">
                {activeT.contact}
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .team-section {
          background-color: var(--bg-main);
        }

        .section-subtitle {
          text-align: center;
          color: var(--text-muted);
          margin-top: -30px;
          margin-bottom: 60px;
          font-size: 1.1rem;
        }

        .team-layout {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 30px;
          align-items: stretch;
        }

        .company-intro-card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 20px;
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-muted);
          padding: 30px;
        }

        .company-intro-card h3 {
          font-size: 1.6rem;
          color: #fff;
          margin-bottom: 8px;
        }

        .margin-top {
          margin-top: 10px;
        }

        .manager-profile-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 40px 24px;
          border-color: var(--border);
          background: linear-gradient(180deg, var(--bg-card) 0%, rgba(19, 27, 46, 0.4) 100%);
        }

        .manager-profile-card.highlight-card {
          border-color: var(--border-hover);
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.08);
        }

        .avatar-wrapper {
          position: relative;
          margin-bottom: 24px;
        }

        .avatar-crop {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--border);
          box-shadow: var(--shadow-sm);
          position: relative;
        }

        .profile-img-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }

        .zoom-img {
          transform: scale(1.75) translateY(8%);
        }

        .avatar-placeholder {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px var(--primary-glow);
        }

        .avatar-icon {
          font-size: 3rem;
          opacity: 0.6;
        }

        .online-badge {
          position: absolute;
          bottom: 5px;
          right: 5px;
          width: 16px;
          height: 16px;
          background: #10b981;
          border: 3px solid var(--bg-card);
          border-radius: 50%;
          box-shadow: 0 0 10px #10b981;
        }

        .profile-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          gap: 12px;
          flex-grow: 1;
        }

        .profile-info h3 {
          color: #fff;
          font-size: 1.35rem;
        }

        .role-tag {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: -6px;
        }

        .lang-tag {
          font-size: 0.8rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          padding: 4px 12px;
          border-radius: 20px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .flag-item {
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .flag-icon {
          width: 15px;
          height: auto;
          border-radius: 1px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
          vertical-align: middle;
        }

        .flag-separator {
          color: rgba(255, 255, 255, 0.15);
          margin-left: -2px;
        }

        .profile-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 10px 0;
          flex-grow: 1;
        }

        .profile-contact-details {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 15px;
          margin-top: auto;
        }

        .contact-item {
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: var(--transition);
        }

        .contact-item:hover {
          color: var(--primary);
        }

        @media (max-width: 1024px) {
          .team-layout {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
}
