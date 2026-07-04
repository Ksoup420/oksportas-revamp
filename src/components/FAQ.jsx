import React, { useState } from 'react';

export default function FAQ({ currentLang }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const faqData = {
    en: [
      {
        question: 'What are the standard dimensions of a padel court?',
        answer: 'A standard padel court for doubles is 20 meters long and 10 meters wide. For singles, the dimensions are 20 meters long by 6 meters wide. The structural height of the enclosure is 3 to 4 meters, and a minimum indoor height clearance of 6 meters (ideally 8 meters or more) is required.'
      },
      {
        question: 'What are the technical specifications for the concrete foundation base?',
        answer: 'The court must be installed on a flat, level concrete base. The recommended setup is a 15-20 cm thick reinforced concrete slab (concrete class C25/30) with a perimeter strip foundation (rostverkas) of 30x40 cm to securely anchor the heavy steel pillars. A slope of 0.5% is required to ensure efficient rainwater drainage.'
      },
      {
        question: 'Do we need building permits for outdoor padel courts?',
        answer: 'In Lithuania, padel courts are typically classified as simplified engineering structures (II-group non-residential engineering structures). If built outside urban areas or protected territories, a simplified project is usually sufficient. In cities and protected natural reserves, a formal building permit is mandatory. Our team can manage the entire documentation and permit process for you.'
      },
      {
        question: 'What is the structural and material warranty on the courts?',
        answer: 'We provide a premium 10-year structural warranty on our hot-dip galvanized steel frames against corrosion, a 3-year warranty on the 12mm tempered safety glass panels, and a 2-year warranty on the professional-grade turf and professional LED floodlight fixtures.'
      },
      {
        question: 'What is the delivery and installation lead time?',
        answer: 'Standard lead time is approximately 6 to 8 weeks from order placement and initial manufacturing to delivery at the site. The physical assembly of the structure, glass panels, artificial turf, and lighting typically takes between 5 to 7 working days per court, assuming the concrete foundation is ready.'
      }
    ],
    lt: [
      {
        question: 'Kokie yra standartiniai padelio aikštelės matmenys?',
        answer: 'Standartiniai dvejetų žaidimo padelio aikštelės matmenys yra 20 metrų ilgio ir 10 metrų pločio. Vienetų žaidimo aikštelė yra 20 metrų ilgio ir 6 metrų pločio. Aikštelės konstrukcijos aukštis siekia 3–4 metrus, o minimalus švarus aukštis virš aikštelės (patalpose) turėtų būti bent 6 metrai (rekomenduojama 8 metrai ir daugiau).'
      },
      {
        question: 'Kokie yra reikalavimai betoninams aikštelės pamatams?',
        answer: 'Aikštelė turi būti statoma ant visiškai lygaus gelžbetoninio pagrindo. Rekomenduojama įrengti 15-20 cm storio armuotą betono plokštę (betono klasė C25/30) su 30x40 cm perimetro pamatu (rostverku) stulpų ankeravimui. Lauko aikštelėse būtina suformuoti 0,5% nuolydį nuo centro į šonus vandens nutekėjimui.'
      },
      {
        question: 'Ar padelio aikštelės statybai reikalingas statybos leidimas?',
        answer: 'Lietuvoje padelio aikštelės priskiriamos II grupės nesudėtingiems inžineriniams statiniams. Statant ne miesto teritorijoje ir ne saugomoje zone, dažnai užtenka supaprastinto statybos projekto. Mieste ir saugomose teritorijose statybos leidimas yra privalomas. Mūsų komanda gali paruošti ir suderinti visus reikalingus projektinius dokumentus.'
      },
      {
        question: 'Kokia garantija suteikiama aikštelės konstrukcijai ir dangai?',
        answer: 'Mes suteikiame 10 metų struktūrinę garantiją karštu būdu cinkuotam plieniniam rėmui nuo prarūdijimo, 3 metų garantiją 12 mm storio grūdintiems stiklams bei 2 metų garantiją profesionaliai dirbtinei dangai (vejai) ir LED apšvietimo sistemai.'
      },
      {
        question: 'Kiek laiko trunka aikštelės pristatymas ir sumontavimas?',
        answer: 'Įprastas pristatymo terminas yra 6–8 savaitės nuo užsakymo suderinimo ir gamybos pradžios. Vienos aikštelės montavimo darbai (rėmas, stiklai, veja, apšvietimas) paruoštoje vietoje trunka 5–7 darbo dienas, priklausomai nuo oro sąlygų.'
      }
    ],
    lv: [
      {
        question: 'Kādi ir standarta padela laukuma izmēri?',
        answer: 'Standarta padela laukums dubultspēlēm ir 20 metrus garš un 10 metrus plats. Vienspēlēm izmēri ir 20 metrus garš un 6 metrus plats. Konstrukcijas augstums ir no 3 līdz 4 metriem, un ir nepieciešams minimālais griestu augstums telpās vismaz 6 metri (ideālā gadījumā 8 metri vai vairāk).'
      },
      {
        question: 'Kādas ir tehniskās prasības betona pamatnei?',
        answer: 'Laukumam jābūt uzstādītam uz plakanas, līdzenas betona pamatnes. Rekomendējamais risinājums ir 15-20 cm bieza stiegrota betona plātne (betona klase C25/30) ar perimetra joslas pamatu (rostverku) 30x40 cm apmērā tērauda pīlāru drošai enkurošanai. Nepieciešams 0.5% nuolīdis, lai nodrošinātu efektīvu lietus ūdens novadīšanu.'
      },
      {
        question: 'Vai padela laukuma būvniecībai ir nepieciešama būvatļauja?',
        answer: 'Padela laukumi parasti tiek klasificēti kā vienkāršotas inženierbūves. Būvējot ārpus pilsētām vai aizsargājamām teritorijām, parasti pietiek ar vienkāršotu projektu. Pilsētās un dabas rezervātos būvatļauja ir obligāta. Mūsu komanda var palīdzēt ar visu nepieciešamo dokumentāciju un saskaņošanu.'
      },
      {
        question: 'Kāda garantija tiek sniegta laukuma konstrukcijai un segumam?',
        answer: 'Mēs nodrošinām premium 10 gadu strukturālo garantiju pret koroziju mūsu karsti cinkotajiem tērauda rāmjiem, 3 gadu garantiju 12mm rūdīta drošības stikla paneļiem un 2 gadu garantiju profesionālam segumam un LED apgaismojumam.'
      },
      {
        question: 'Cik ilgu laiku aizņem laukuma piegāde un uzstādīšana?',
        answer: 'Standarta piegādes laiks ir aptuveni 6 līdz 8 nedēļas no pasūtījuma veikšanas līdz piegādei objektā. Pati konstrukcijas, stikla paneļu, mākslīgā zāliena un apgaismojuma montāža parasti aizņem 5 līdz 7 darba dienas katram laukumam (ja betona pamatne ir gatava).'
      }
    ],
    et: [
      {
        question: 'Millised on padeliväljaku standardmõõtmed?',
        answer: 'Standardne padeliväljak paarismänguks on 20 meetrit pikk ja 10 meetrit lai. Üksikmänguks on mõõtmed 20 meetrit pikk ja 6 meetrit lai. Konstruktsiooni kõrgus on 3 kuni 4 meetrit ja siseruumides on nõutav minimaalne laekõrgus 6 meetrit (ideaalis 8 meetrit või rohkem).'
      },
      {
        question: 'Millised on tehnilised nõuded betoonalusele?',
        answer: 'Väljak tuleb paigaldada tasasele ja loodis betoonalusele. Soovitatav lahendus on 15–20 cm paksune armeeritud betoonplaat (betooniklass C25/30) koos 30x40 cm perimeetri lintvundamendiga (rostvärk) postide ankurdamiseks. Välisväljakute puhul on nõutav 0,5% kalle vee äravooluks.'
      },
      {
        question: 'Kas padeliväljaku ehitamiseks on vaja ehitusluba?',
        answer: 'Padeliväljakud klassifitseeritakse tavaliselt lihtsustatud ehitisteks. Kui ehitada väljaspool linnu või kaitsealasid, piisab tavaliselt lihtsustatud projektist. Linnades ja kaitsealadel on ehitusluba kohustuslik. Meie meeskond saab aidata dokumentatsiooni ja lubade hankimisel.'
      },
      {
        question: 'Milline garantii antakse väljaku konstruktsioonile ja murule?',
        answer: 'Pakume 10-aastast struktuurset garantiid korrosiooni vastu meie kuumtsingitud terasraamidele, 3-aastast garantiid 12 mm karastatud turvaklaasile ja 2-aastast garantiid professionaalsele murule ning LED-valgustitele.'
      },
      {
        question: 'Kui kaua võtab aega väljaku kohaletoimetamine ja paigaldus?',
        answer: 'Standardne tarneaeg on umbes 6 kuni 8 nädalat alates tellimusest kuni kohaletoimetamiseni. Konstruktsiooni, klaaspaneelide, muru ja valgustuse paigaldus võtab aega 5 kuni 7 tööpäeva väljaku kohta (eeldusel, et betoonalus on valmis).'
      }
    ],
    de: [
      {
        question: 'Wie sind die Standardmaße eines Padel-Platzes?',
        answer: 'Ein Standard-Padel-Platz für Doppelspiele ist 20 Meter lang und 10 Meter breit. Für Einzelspiele betragen die Maße 20 Meter Länge und 6 Meter Breite. Die strukturelle Höhe der Umzäunung beträgt 3 bis 4 Meter, und es ist eine lichte Deckenhöhe im Innenbereich von mindestens 6 Metern (idealerweise 8 Meter oder mehr) erforderlich.'
      },
      {
        question: 'Welche technischen Anforderungen gelten für das Betonfundament?',
        answer: 'Der Platz muss auf einem flachen, ebenen Betonfundament installiert werden. Empfohlen wird eine 15–20 cm dicke Stahlbetonplatte (Betonklasse C25/30) mit einem Ringfundament (Rostverkas) von 30x40 cm zur sicheren Verankerung der schweren Stahlsäulen. Ein Gefälle von 0,5% ist erforderlich, um eine effiziente Regenwasserableitung zu gewährleisten.'
      },
      {
        question: 'Benötigen wir für Padel-Plätze im Außenbereich eine Baugenehmigung?',
        answer: 'In den meisten Ländern werden Padel-Plätze als vereinfachte Ingenieurbauwerke klassifiziert. Bei der Errichtung außerhalb von geschützten Gebieten oder städtischen Zentren reicht oft ein vereinfachtes Projekt aus. In Städten und Naturschutzgebieten ist eine Baugenehmigung in der Regel obligatorisch. Unser Team kann den gesamten Dokumentations- und Genehmigungsprozess für Sie verwalten.'
      },
      {
        question: 'Welche Garantie wird auf die Konstruktion und die Materialien gewährt?',
        answer: 'Wir bieten eine erstklassige 10-jährige Strukturgarantie gegen Korrosion auf unsere feuerverzinkten Stahlrahmen, eine 3-jährige Garantie auf die 12-mm-Sicherheitsglasplatten und eine 2-jährige Garantie auf den Profi-Kunstrasen sowie die professionellen LED-Flutlichtstrahler.'
      },
      {
        question: 'Wie hoch ist die Liefer- und Montagezeit?',
        answer: 'Die Standardlieferzeit beträgt ca. 6 bis 8 Wochen von der Bestellung und Herstellung bis zur Lieferung vor Ort. Die physische Montage der Struktur, der Glasscheiben, des Kunstrasens und der Beleuchtung dauert in der Regel zwischen 5 und 7 Werktagen pro Platz, sofern das Betonfundament bereit ist.'
      }
    ],
    pl: [
      {
        question: 'Jakie są standardowe wymiary kortu do padla?',
        answer: 'Standardowy kort do padla do gry podwójnej ma 20 metrów długości i 10 metrów szerokości. W przypadku gry pojedynczej wymiary to 20 metrów długości na 6 metrów szerokości. Wysokość konstrukcji ogrodzenia wynosi od 3 do 4 metrów, a minimalna wysokość wewnątrz hali to 6 metrów (idealnie 8 metrów lub więcej).'
      },
      {
        question: 'Jakie są wymagania techniczne dotyczące betonowego podłoża?',
        answer: 'Kort musi być zainstalowany na płaskim, równym podłożu betonowym. Zaleca się wykonanie płyty żelbetowej o grubości 15-20 cm (klasa betonu C25/30) ze stopą fundamentową o wymiarach 30x40 cm po obwodzie w celu bezpiecznego zakotwienia ciężkich stalowych słupów. Wymagane jest nachylenie 0,5% w celu zapewnienia skutecznego odprowadzania wody deszczowej.'
      },
      {
        question: 'Czy do budowy zewnętrznych kortów do padla potrzebne jest pozwolenie na budowę?',
        answer: 'Korty do padla są zazwyczaj klasyfikowane jako uproszczone obiekty inżynieryjne. W przypadku budowy poza obszarami miejskimi lub krytymi zazwyczaj wystarcza zgłoszenie lub uproszczony projekt. W miastach i rezerwatach przyrody formalne pozwolenie na budowę bywa obowiązkowe. Nasz zespół może zająć się dla Państwa całą dokumentacją i procesem uzyskiwania pozwoleń.'
      },
      {
        question: 'Jaka gwarancja jest udzielana na konstrukcję i materiały?',
        answer: 'Zapewniamy 10-letnią gwarancję strukturalną na korozję naszej ramy ze stali ocynkowanej ogniowo, 3-letnią gwarancję na panele z hartowanego szkła bezpiecznego 12 mm oraz 2-letnią gwarancję na profesjonalną trawę i profesjonalne reflektory LED.'
      },
      {
        question: 'Jaki jest czas dostawy i montażu?',
        answer: 'Standardowy czas realizacji zamówienia wynosi około 6 do 8 tygodni od złożenia zamówienia i rozpoczęcia produkcji do dostawy na miejsce. Fizyczny montaż konstrukcji, paneli szklanych, sztucznej trawy i oświetlenia zajmuje zazwyczaj od 5 do 7 dni roboczych na jeden kort, przy założeniu, że betonowy fundament jest gotowy.'
      }
    ]
  };

  const t = {
    en: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to standard questions about our court installation and engineering process.'
    },
    lt: {
      title: 'Dažniausiai užduodami klausimai',
      subtitle: 'Raskite atsakymus į svarbiausius klausimus apie aikštelių pamatų įrengimą ir montavimą.'
    },
    lv: {
      title: 'Biežāk uzdotie jautājumi',
      subtitle: 'Atrodiet atbildes uz svarīgākajiem jautājumiem par padela laukumu uzstādīšanu un inženiertehniskajiem procesiem.'
    },
    et: {
      title: 'Korduma kippuvad küsimused',
      subtitle: 'Leidke vastused korduvatele küsimustele meie padeliväljakute paigalduse ja inseneritöö kohta.'
    },
    de: {
      title: 'Häufig gestellte Fragen',
      subtitle: 'Finden Sie Antworten auf Fragen zu unserer Platzinstallation und dem Engineering-Prozess.'
    },
    pl: {
      title: 'Najczęściej zadawane pytania',
      subtitle: 'Znajdź odpowiedzi na standardowe pytania dotyczące montażu kortów i procesu inżynieryjnego.'
    }
  };

  const currentFaq = faqData[currentLang] || faqData.en;

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <h2 className="section-title text-gradient">
          {t[currentLang].title}
        </h2>
        <p className="section-subtitle">
          {t[currentLang].subtitle}
        </p>

        <div className="faq-list">
          {currentFaq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item glass-card ${isOpen ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <h3>{item.question}</h3>
                  <span className="faq-toggle-icon">
                    {isOpen ? '−' : '+'}
                  </span>
                </div>
                <div className={`faq-answer-wrapper ${isOpen ? 'open' : ''}`}>
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx="true">{`
        .faq-section {
          padding: 80px 0;
          background-color: var(--bg-sub);
        }

        .section-subtitle {
          text-align: center;
          color: var(--text-muted);
          margin-top: -30px;
          margin-bottom: 50px;
          font-size: 1.1rem;
        }

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          cursor: pointer;
          padding: 24px;
          transition: var(--transition);
          border-color: var(--border);
          user-select: none;
        }

        .faq-item:hover {
          border-color: var(--border-hover);
          background-color: var(--bg-card-hover);
        }

        .faq-item.active {
          border-color: var(--primary);
          background-color: rgba(19, 27, 46, 0.8);
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.05);
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .faq-question h3 {
          font-size: 1.15rem;
          color: #fff;
          font-weight: 700;
          transition: var(--transition);
        }

        .faq-item.active .faq-question h3 {
          color: var(--primary);
        }

        .faq-toggle-icon {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: var(--transition);
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .faq-item.active .faq-toggle-icon {
          color: var(--primary);
          transform: rotate(180deg);
        }

        .faq-answer-wrapper {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-answer-wrapper.open {
          max-height: 250px; /* Safe budget for standard text */
        }

        .faq-answer {
          padding-top: 16px;
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          border-top: 1px dashed var(--border);
          margin-top: 12px;
        }

        @media (max-width: 640px) {
          .faq-item {
            padding: 18px;
          }
          .faq-question h3 {
            font-size: 1.05rem;
          }
        }
      `}</style>
    </section>
  );
}
