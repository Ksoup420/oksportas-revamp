import React, { useState } from 'react';
import panImg from '../assets/Cfpadel/Classic/ok_classic_court_illustration.png';

export default function Padel360Viewer({ currentLang }) {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const t = {
    en: {
      title: 'Interactive Court Tour',
      instructions: 'Click on the green hotspots to view technical engineering details.',
      turfTitle: 'Pro Turf System',
      turfDesc: 'Premium textured monofilament turf (Mondo style) optimized for optimal shoe rotation, low joint impact, and uniform ball rebound.',
      glassTitle: '12mm Tempered Safety Glass',
      glassDesc: 'Heavy-duty tempered glass plates yielding excellent ball bounce and ultimate strength. Fully certified under European EN 12150-2 safety standards.',
      lightingTitle: 'Anti-Glare LED Floodlighting',
      lightingDesc: '4x 400W professional anti-glare LED floodlights (YXR-FL-400W) mounted on curved pillars. Calibrated to prevent glare during high overhead smash shots.',
      steelTitle: 'Anti-Corrosion Steel Frame',
      steelDesc: 'Heavy-duty structural carbon steel treated with anti-corrosion zinc layers. While standard pre-galvanization is perfect for most settings, premium hot-dip galvanization is recommended for high-humidity or coastal/sea areas.',
      netTitle: 'Pro Net & Casing',
      netDesc: 'High-density knotless padel net, reinforced tension cable, and cased steel posts to prevent injuries and maintain optimal height.',
    },
    lt: {
      title: 'Interaktyvus aikštelės tūras',
      instructions: 'Paspauskite žalius taškus, kad pamatytumėte techninius sprendimus.',
      turfTitle: 'Profesionali danga',
      turfDesc: 'Premium tekstūruota monofilamento danga (Mondo tipo), subalansuota geriausiam sukibimui, mažam sąnarių krūviui ir stabiliam atšokimui.',
      glassTitle: '12mm grūdintas saugus stiklas',
      glassDesc: 'Aukščiausios kokybės grūdinto stiklo paketai, užtikrinantys idealų kamuoliuko atšokimą. Atitinka griežčiausius ES EN 12150-2 saugos reikalavimus.',
      lightingTitle: 'LED apšvietimas nuo akinimo',
      lightingDesc: '4x 400W profesionalūs LED prožektoriai (YXR-FL-400W) ant lenktų stulpų, sukalibruoti taip, kad neakintų žaidėjų atliekant smūgius iš viršaus.',
      steelTitle: 'Plieno rėmo antikorozinė apsauga',
      steelDesc: 'Tvirta plieno konstrukcija, apdorota cinko lydiniu iš vidaus ir išorės. Nors standartinio cinkavimo pakanka daugeliui aikštelių, premium karštas cinkavimas rekomenduojamas pajūrio ar didelės drėgmės zonose.',
      netTitle: 'Profesionalus tinklas',
      netDesc: 'Didelio tankio padelio tinklas su metaliniu įtempimo kabeliu ir minkštomis apsaugomis ant stulpų, saugančiomis žaidėjus nuo traumų.'
    },
    lv: {
      title: 'Interaktīva laukuma tūre',
      instructions: 'Noklikšķiniet uz zaļajiem punktiem, lai skatītu tehniskās inženierijas informāciju.',
      turfTitle: 'Pro zāliena sistēma',
      turfDesc: 'Premium teksturēts monofilamenta zāliens (Mondo stils), kas optimizēts apavu rotācijai, zema locītavu ietekme un vienmērīga bumbas atlēkšana.',
      glassTitle: '12mm rūdīts drošības stikls',
      glassDesc: 'Izturīgas rūdīta stikla plāksnes, kas nodrošina izcilu bumbas atlēkšanu un maksimālu izturību. Pilnībā sertificēts saskaņā ar Eiropas drošības standartiem EN 12150-2.',
      lightingTitle: 'LED apgaismojums pret apžilbināšanu',
      lightingDesc: '4x 400W profesionāli LED prožektori pret apžilbināšanu (YXR-FL-400W) uzstādīti uz izliektiem stabiem. Kalibrēts, lai novērstu apžilbināšanu spēcīgu sitienu laikā no augšas.',
      steelTitle: 'Pretkorozijas tērauda rāmis',
      steelDesc: 'Izturīgs strukturālais oglekļa tērauds, kas apstrādāts ar pretkorozijas cinka slāņiem. Lai gan standarta cinkošana ir ideāla lielākajai daļai vietu, premium karstā cinkošana ir ieteicama augsta mitruma vai piekrastes/jūras zonās.',
      netTitle: 'Pro tīkls un aizsargi',
      netDesc: 'Blīvs padela tīkls bez mezgliem, pastiprināts spriegošanas kabelis un aizsargājoši tērauda stabi, lai novērstu traumas un uzturētu optimālu augstumu.',
    },
    et: {
      title: 'Interaktiivne väljakutuur',
      instructions: 'Tehniliste andmete vaatamiseks klõpsake rohelistel punktidel.',
      turfTitle: 'Pro murusüsteem',
      turfDesc: 'Premium tekstureeritud monofilamentmuru (Mondo tüüpi), mis on optimeeritud jala pöördeks, väiksemaks liigesekoormuseks ja palli ühtlaseks põrkeks.',
      glassTitle: '12mm karastatud turvaklaas',
      glassDesc: 'Tugevad karastatud klaaspaneelid suurepäraseks põrkeks ja maksimaalseks tugevuseks. Sertifitseeritud vastavalt Euroopa ohutusstandardile EN 12150-2.',
      lightingTitle: 'Pimestamisvastane LED-valgustus',
      lightingDesc: '4x 400W professionaalsed pimestamisvastased LED-prožektorid (YXR-FL-400W) kaardus postidel. Kalibreeritud nii, et need ei pimestaks mängijaid pealelöökide ajal.',
      steelTitle: 'Korrosioonivastane terasraam',
      steelDesc: 'Tugev konstruktsiooniteras, mis on kaetud korrosioonivastaste tsingikihtidega. Kuigi standardne tsingikiht sobib enamikule väljakutele, on rannikuäärsetes ja suure niiskusega piirkondades soovitatav kuumtsingitud teras.',
      netTitle: 'Pro võrk ja postikatted',
      netDesc: 'Kõrge tihedusega sõlmedeta padelivõrk, tugevdatud pingutustross ja polsterdatud teraspostid vigastuste vältimiseks ja optimaalse kõrguse hoidmiseks.',
    },
    de: {
      title: 'Interaktive Platz-Tour',
      instructions: 'Klicken Sie auf die grünen Hotspots, um technische Konstruktionsdetails anzuzeigen.',
      turfTitle: 'Pro-Kunstrasensystem',
      turfDesc: 'Hochwertiger texturierter Monofilament-Kunstrasen (Mondo-Stil), optimiert für perfekte Schuhdrehung, geringe Gelenkbelastung und gleichmäßigen Ballrückprall.',
      glassTitle: '12 mm gehärtetes Sicherheitsglas',
      glassDesc: 'Robuste Platten aus gehärtetem Glas für hervorragenden Ballrückprall und maximale Festigkeit. Vollständig nach den europäischen Sicherheitsstandards EN 12150-2 zertifiziert.',
      lightingTitle: 'Blendfreie LED-Flutlichtanlage',
      lightingDesc: '4x 400 W professionelle, blendfreie LED-Flutlichtstrahler (YXR-FL-400W), montiert auf gebogenen Masten. Kalibriert, um Blendung bei hohen Schmetterbällen zu verhindern.',
      steelTitle: 'Korrosionsgeschützter Stahlrahmen',
      steelDesc: 'Hochbelastbarer struktureller Kohlenstoffstahl, behandelt mit Korrosionsschutz-Zinkschichten. Während die Standard-Vorverzinkung für die meisten Umgebungen perfekt ist, wird für Regionen mit hoher Luftfeuchtigkeit oder Küsten-/Meeresnähe eine hochwertige Feuerverzinkung empfohlen.',
      netTitle: 'Pro Netz & Pfosten',
      netDesc: 'Knotenloses Padelnetz mit hoher Dichte, verstärktem Spannkabel und ummantelten Stahlpfosten zur Vermeidung von Verletzungen und Beibehaltung der optimalen Netzhöhe.',
    },
    pl: {
      title: 'Interaktywny obchód kortu',
      instructions: 'Kliknij zielone punkty (hotspoty), aby wyświetlić szczegóły techniczne konstrukcji.',
      turfTitle: 'System profesjonalnej trawy',
      turfDesc: 'Najwyższej jakości teksturowana trawa monofilamentowa (styl Mondo), zoptymalizowana pod kątem rotacji buta, niskiego obciążenia stawów i równomiernego odbicia piłki.',
      glassTitle: '12 mm hartowane szkło bezpieczne',
      glassDesc: 'Wytrzymałe płyty z hartowanego szkła bezpiecznego zapewniające doskonałe odbicie piłki i maksymalną trwałość. W pełni certyfikowane zgodnie z europejskimi normami bezpieczeństwa EN 12150-2.',
      lightingTitle: 'Antyodblaskowe oświetlenie LED',
      lightingDesc: '4x 400W profesjonalne antyodblaskowe reflektory LED (YXR-FL-400W) montowane na zakrzywionych masztach. Skalibrowane w celu zapobiegania oślepianiu podczas wysokich smeczów.',
      steelTitle: 'Antykorozyjna rama stalowa',
      steelDesc: 'Wytrzymała konstrukcyjna stal węglowa zabezpieczona antykorozyjnymi warstwami cynku. O ile standardowe cynkowanie jest idealne w większości lokalizacji, o tyle w obszarach o dużej wilgotności lub nadmorskich zalecane jest cynkowanie ogniowe premium.',
      netTitle: 'Profesjonalna siatka i słupki',
      netDesc: 'Bezwęzłowa siatka do padla o wysokiej gęstości, wzmocniony kabel napinający oraz osłonięte stalowe słupki zapobiegające kontuzjom i utrzymujące optymalną wysokość.',
    }
  };

  const activeT = t[currentLang];

  // Hotspots updated to reflect the full view dimensions of the ultimate panoramic court
  const hotspots = [
    { id: 'turf', x: 48, y: 72, title: activeT.turfTitle, desc: activeT.turfDesc },
    { id: 'glass', x: 20, y: 30, title: activeT.glassTitle, desc: activeT.glassDesc },
    { id: 'lights', x: 77, y: 11, title: activeT.lightingTitle, desc: activeT.lightingDesc },
    { id: 'steel', x: 82, y: 38, title: activeT.steelTitle, desc: activeT.steelDesc },
    { id: 'net', x: 11, y: 47, title: activeT.netTitle, desc: activeT.netDesc }
  ];

  return (
    <section id="tour" className="tour-section">
      <div className="container">
        <h2 className="section-title text-gradient">{activeT.title}</h2>
        <p className="tour-instructions">{activeT.instructions}</p>

        <div className="viewer-wrapper">
          <div className="pan-viewer">
            <div className="pan-image-container">
              <img src={panImg} alt="Padel Court Inside View" className="pan-img" />

              {/* Hotspots */}
              {hotspots.map((spot) => (
                <button
                  key={spot.id}
                  className={`hotspot-btn ${activeHotspot?.id === spot.id ? 'active' : ''}`}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveHotspot(activeHotspot?.id === spot.id ? null : spot);
                  }}
                  aria-label={`View specs for ${spot.title}`}
                >
                  <span className="ring"></span>
                  <span className="core"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Info Board Overlay */}
          {activeHotspot && (
            <div className="info-board glass-card animate-fade-in">
              <button className="close-board" onClick={() => setActiveHotspot(null)}>&times;</button>
              <h3>{activeHotspot.title}</h3>
              <p>{activeHotspot.desc}</p>
            </div>
          )}
        </div>
      </div>

      <style jsx="true">{`
        .tour-section {
          background-color: var(--bg-main);
          user-select: none;
        }

        .tour-instructions {
          text-align: center;
          color: var(--text-muted);
          font-size: 1rem;
          margin-top: -30px;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .viewer-wrapper {
          position: relative;
          width: 100%;
          border-radius: var(--border-radius-lg);
          border: 1px solid var(--border);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .pan-viewer {
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        .pan-image-container {
          position: relative;
          width: 100%;
          height: auto;
          aspect-ratio: 1080 / 648;
        }

        .pan-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }

        /* Hotspot elements */
        .hotspot-btn {
          position: absolute;
          width: 24px;
          height: 24px;
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .hotspot-btn .core {
          position: absolute;
          width: 12px;
          height: 12px;
          background-color: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--primary);
          transition: var(--transition);
        }

        .hotspot-btn .ring {
          position: absolute;
          width: 24px;
          height: 24px;
          border: 2px solid var(--primary);
          border-radius: 50%;
          animation: ringPulse 1.8s infinite ease-out;
        }

        .hotspot-btn:hover .core,
        .hotspot-btn.active .core {
          background-color: #fff;
          transform: scale(1.3);
          box-shadow: 0 0 15px #fff;
        }

        .hotspot-btn:hover .ring,
        .hotspot-btn.active .ring {
          border-color: #fff;
        }

        @keyframes ringPulse {
          0% { transform: scale(0.6); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        /* Specs Overlay Card */
        .info-board {
          position: absolute;
          bottom: 30px;
          left: 30px;
          max-width: 380px;
          z-index: 20;
          background: rgba(19, 27, 46, 0.9);
          border-color: var(--primary);
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .info-board h3 {
          font-size: 1.15rem;
          color: #fff;
          margin-bottom: 8px;
        }

        .info-board p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .close-board {
          position: absolute;
          top: 12px;
          right: 12px;
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 1.4rem;
          cursor: pointer;
          transition: var(--transition);
          line-height: 1;
        }

        .close-board:hover {
          color: #fff;
        }

        @media (max-width: 768px) {
          .info-board {
            position: relative;
            bottom: auto;
            left: auto;
            right: auto;
            max-width: none;
            margin: 15px;
            padding: 16px;
            border: none;
            border-top: 1px solid var(--border);
            background: rgba(10, 15, 30, 0.4);
            box-shadow: none;
          }
        }
      `}</style>
    </section>
  );
}
