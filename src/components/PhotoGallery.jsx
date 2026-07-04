import React, { useState } from 'react';

// Import all user-uploaded project photos
import img1 from '../assets/IMG_4640.JPG';
import img2 from '../assets/IMG_4655.JPG';
import img3 from '../assets/IMG_4656.JPG';
import img4 from '../assets/IMG_7694.jpeg';
import img5 from '../assets/IMG_7705.jpeg';
import img6 from '../assets/IMG_9176.jpeg';
import img7 from '../assets/IMG_9177.jpeg';
import img8 from '../assets/IMG_9178.jpeg';
import img9 from '../assets/IMG_9181.jpeg';
import img10 from '../assets/IMG_9182.jpeg';
import img11 from '../assets/20230824_104619.jpg';
import img12 from '../assets/20240808_162024.jpg';
import img13 from '../assets/CF Kaunas1.jpg';
import img14 from '../assets/CF Kuanas2.jpg';

// Newly added premium project photos
import bernardinaiImg from '../assets/Oksportas padel good photos/bernardinai.jpeg';
import bernardinaiOriginalImg from '../assets/Oksportas padel good photos/bernardinai original.jpeg';
import newImg1 from '../assets/Oksportas padel good photos/IMG_1982.jpeg';

// Newly added Bernardinai Garden project photos
import bernDji1 from '../assets/Oksportas padel good photos/bernardinai/25184FCA-0065-4A49-B1B5-324B79DAE1FB_1_105_c.jpeg';
import bernDji2 from '../assets/Oksportas padel good photos/bernardinai/9A09F8F2-2F53-4083-8CE9-97F2C527AEB6_1_105_c.jpeg';
import bernDji3 from '../assets/Oksportas padel good photos/bernardinai/A8511D60-EE10-40FA-874B-C40AA6493438_1_105_c.jpeg';
import bernDji4 from '../assets/Oksportas padel good photos/bernardinai/E84DF597-639B-4395-9826-B0DD65312A1C_1_105_c.jpeg';
import newImg2 from '../assets/Oksportas padel good photos/IMG_1983.jpeg';
import newImg3 from '../assets/Oksportas padel good photos/IMG_3697.JPG';
import newImg4 from '../assets/Oksportas padel good photos/IMG_6729.jpeg';
import newImg5 from '../assets/Oksportas padel good photos/IMG_6942.jpeg';

// Newly added Viennese, indoor/outdoor and Swedbank rooftop showcase photos
import wienImg from '../assets/Oksportas padel good photos/9-courts-Wien.jpeg';
import img0091 from '../assets/Oksportas padel good photos/IMG_0091.jpeg';
import img4598 from '../assets/Oksportas padel good photos/IMG_4598.jpeg';
import panoramic3 from '../assets/Oksportas padel good photos/Panoramic3-e1672754229398.jpg';
import multiFunImg from '../assets/Oksportas padel good photos/Multi-fun.jpg';
import vaidilutesImg from '../assets/Oksportas padel good photos/Vaidilutės sporto aikštynas.webp';

// Drone and ground photos of the spectacular Bure rooftop court in Vilnius
import bureDji0040 from '../assets/Oksportas padel good photos/bure/DJI_0040.JPG';
import bureDji0053 from '../assets/Oksportas padel good photos/bure/DJI_0053.JPG';
import bureDji0106 from '../assets/Oksportas padel good photos/bure/DJI_0106.JPG';
import bureDji0112 from '../assets/Oksportas padel good photos/bure/DJI_0112.JPG';
import bureDji0122 from '../assets/Oksportas padel good photos/bure/DJI_0122.JPG';
import bureImg0469 from '../assets/Oksportas padel good photos/bure/IMG_0469.jpeg';
import bureImg0669 from '../assets/Oksportas padel good photos/bure/IMG_0669.jpeg';

export default function PhotoGallery({ currentLang }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const [lightboxImages, setLightboxImages] = useState([]);

  const t = {
    en: {
      title: 'Our Project Gallery',
      subtitle: 'Browse real court installations we have engineered across Europe.',
      catAll: 'All Installations',
      catIndoor: 'Indoor Arenas',
      catOutdoor: 'Outdoor Clubs',
      catPanoramic: 'Panoramic Series',
      casesTitle: 'Featured Case Studies',
      casesSubtitle: 'Pioneering padel infrastructure through unique engineering milestones.',
      swedbankTitle: 'Swedbank "3 Sails" Rooftop',
      swedbankDesc: 'Bespoke high-altitude court engineering on the rooftop of the "3 Sails" skyscraper in Vilnius. Features the Baltic\'s first-ever custom overhead ceiling safety net to prevent balls from flying off the skyscraper.',
      swedbankSpecs: 'OK Panoramic • Baltic\'s 1st Overhead Net • Vilnius, Lithuania • 2018',
      bernardinaiTitle: 'Bernardinai Garden Pioneer Project',
      bernardinaiDesc: 'The legendary project that introduced padel tennis to Lithuania in 2014. Built in the historical heart of Vilnius, this installation paved the way for the massive growth of padel nationwide.',
      bernardinaiSpecs: 'OK Classic • Pioneer Installation • Vilnius, Lithuania • 2014',
      readFullCase: 'Read full case study →',
      close: 'Close',
      photo: 'Photo',
      projectBackground: 'Project Background',
      engineeringChallenges: 'Engineering Challenges',
      implementedSolutions: 'Implemented Solutions',
      projectImpact: 'Project Impact & Result',
    },
    lt: {
      title: 'Darbų galerija',
      subtitle: 'Mūsų įrengtos teniso ir padelio aikštelės įvairiose Europos šalyse.',
      catAll: 'Visi projektai',
      catIndoor: 'Vidaus arenoje',
      catOutdoor: 'Lauko klubai',
      catPanoramic: 'Panoraminės',
      casesTitle: 'Išskirtiniai projektai (Case Studies)',
      casesSubtitle: 'Inžineriniai iššūkiai ir istoriniai pasiekimai įrengiant padelio aikšteles.',
      swedbankTitle: 'Swedbank „3 burės“ ant stogo',
      swedbankDesc: 'Unikalus projektas ant Swedbank „3 burių“ dangoraižio stogo Vilniuje. Įrengtas pirmasis Baltijos šalyse apsauginis lubų tinklas virš aikštelės, užtikrinantis visišką saugumą dideliame aukštyje.',
      swedbankSpecs: 'OK Panoramic • Pirmasis lubų tinklas Baltijos šalyse • Vilnius, Lietuva • 2018',
      bernardinaiTitle: 'Bernardinų sodo istorinis parkas',
      bernardinaiDesc: 'Istorinis projektas, nuo kurio 2014 metais prasidėjo padelio teniso plėtra Lietuvoje. Šios Vilniaus širdyje įrengtos aikštelės atvėrė duris padelio sporto populiarinimui.',
      bernardinaiSpecs: 'OK Classic • Istorinis parko projektas • Vilnius, Lietuva • 2014',
      readFullCase: 'Skaityti projekto aprašymą →',
      close: 'Uždaryti',
      photo: 'Nuotrauka',
      projectBackground: 'Projekto priešistorė',
      engineeringChallenges: 'Inžineriniai iššūkiai',
      implementedSolutions: 'Pritaikyti sprendimai',
      projectImpact: 'Projekto įtaka ir rezultatas',
    },
    lv: {
      title: 'Mūsu projektu galerija',
      subtitle: 'Apskatiet reālas laukumu uzstādīšanas, ko esam izstrādājuši visā Eiropā.',
      catAll: 'Visi projekti',
      catIndoor: 'Iekštelpu arēnas',
      catOutdoor: 'Āra klubi',
      catPanoramic: 'Panorāmas sērija',
      casesTitle: 'Izceltie projekti',
      casesSubtitle: 'Padela infrastruktūras attīstība, pateicoties unikāliem inženiertehniskiem sasniegumiem.',
      swedbankTitle: 'Swedbank "Trīs buras" uz jumta',
      swedbankDesc: 'Pielāgota augstkalnu laukuma izbūve uz "Trīs buras" debesskrāpja jumta Viļņā. Izstrādāts Baltijā pirmais apsargājošais griestu tīkls virs laukuma, lai novērstu bumbiņu nokrišanu no debesskrāpja.',
      swedbankSpecs: 'OK Panoramic • Baltijā 1. griestu tīkls • Viļņa, Lietuva • 2018',
      bernardinaiTitle: 'Bernardinai dārza pionieru projekts',
      bernardinaiDesc: 'Leģendārais projekts, kas 2014. gadā iepazīstināja Lietuvu ar padela tenisu. Izbūvēts vēsturiskajā Viļņas sirdī, šis projekts bruģēja ceļu milzīgai padela izaugsmei valstī.',
      bernardinaiSpecs: 'OK Classic • Pionieru uzstādīšana • Viļņa, Lietuva • 2014',
      readFullCase: 'Skatīt pilnu aprakstu →',
      close: 'Aizvērt',
      photo: 'Fotoattēls',
      projectBackground: 'Projekta priekšvēsture',
      engineeringChallenges: 'Inženiertehniskie izaicinājumi',
      implementedSolutions: 'Ieviestie risinājumi',
      projectImpact: 'Projekta ietekme & rezultāts',
    },
    et: {
      title: 'Meie projektigalerii',
      subtitle: 'Sirvige reaalseid väljakute paigaldusi, mida oleme üle Euroopa teostanud.',
      catAll: 'Kõik projektid',
      catIndoor: 'Siseareenid',
      catOutdoor: 'Välisklubid',
      catPanoramic: 'Panoraamseeria',
      casesTitle: 'Esiletõstetud projektid',
      casesSubtitle: 'Padeli infrastruktuuri arendamine läbi ainulaadsete inseneritöö verstapostide.',
      swedbankTitle: 'Swedbanki "3 purje" katusel',
      swedbankDesc: 'Eritellimusel väljaku ehitamine Vilniuses asuva "3 purje" pilvelõhkuja katusel. Sisaldab Baltikumi esimest kohandatud kaitsevõrku väljaku kohal, mis takistab pallide pilvelõhkujalt allakukkumist.',
      swedbankSpecs: 'OK Panoramic • Baltikumi 1. laevõrk katusel • Vilnius, Leedu • 2018',
      bernardinaiTitle: 'Bernardinai aia teeraja projekt',
      bernardinaiDesc: 'Legendaarne projekt, mis tutvustas padelit Leedus 2014. aastal. Ehitatud Vilniuse vanalinna ajaloolises südames, sillutas see väljak tee padeli kiirele arengule üle kogu riigi.',
      bernardinaiSpecs: 'OK Classic • Teerajaja paigaldus • Vilnius, Leedu • 2014',
      readFullCase: 'Loe täispikka artiklit →',
      close: 'Sulge',
      photo: 'Foto',
      projectBackground: 'Projekti taust',
      engineeringChallenges: 'Insenertehnilised väljakutsed',
      implementedSolutions: 'Rakendatud lahendused',
      projectImpact: 'Projekti mõju ja tulemus',
    },
    de: {
      title: 'Unsere Projektgalerie',
      subtitle: 'Durchsuchen Sie echte Platzinstallationen, die wir in ganz Europa realisiert haben.',
      catAll: 'Alle Installationen',
      catIndoor: 'Indoor-Arenen',
      catOutdoor: 'Outdoor-Clubs',
      catPanoramic: 'Panorama-Serie',
      casesTitle: 'Ausgewählte Fallstudien',
      casesSubtitle: 'Wegweisende Padel-Infrastruktur durch einzigartige Meilensteine des Ingenieurwesens.',
      swedbankTitle: 'Swedbank "3 Segel" Dachterrasse',
      swedbankDesc: 'Maßgeschneidertes Höhenplatz-Engineering auf dem Dach des Wolkenkratzers "3 Segel" in Vilnius. Verfügt über das erste maßgeschneiderte Decken-Sicherheitsnetz im Baltikum, um zu verhindern, dass Bälle vom Wolkenkratzer fliegen.',
      swedbankSpecs: 'OK Panoramic • Baltikums 1. Deckennetz • Vilnius, Litauen • 2018',
      bernardinaiTitle: 'Pionierprojekt Bernardinai-Garten',
      bernardinaiDesc: 'Das legendäre Projekt, das Padel-Tennis im Jahr 2014 in Litauen einführte. Erbaut im historischen Herzen von Vilnius, ebnete diese Installation den Weg für das massive Wachstum von Padel im ganzen Land.',
      bernardinaiSpecs: 'OK Classic • Erste Installation • Vilnius, Litauen • 2014',
      readFullCase: 'Vollständige Fallstudie lesen →',
      close: 'Schließen',
      photo: 'Foto',
      projectBackground: 'Projekt-Hintergrund',
      engineeringChallenges: 'Herausforderungen im Ingenieurwesen',
      implementedSolutions: 'Implementierte Lösungen',
      projectImpact: 'Projektauswirkung & Ergebnis',
    },
    pl: {
      title: 'Galeria naszych projektów',
      subtitle: 'Przeglądaj rzeczywiste instalacje kortów, które zrealizowaliśmy w całej Europie.',
      catAll: 'Wszystkie instalacje',
      catIndoor: 'Hale kryte',
      catOutdoor: 'Kluby zewnętrzne',
      catPanoramic: 'Seria panoramiczna',
      casesTitle: 'Wyróżnione studia przypadków',
      casesSubtitle: 'Pionierska infrastruktura do padla dzięki unikalnym osiągnięciom inżynieryjnym.',
      swedbankTitle: 'Dach Swedbank „3 Żagle”',
      swedbankDesc: 'Niestandardowa inżynieria kortów wysokościowych na dachu wieżowca „3 Żagle” w Wilnie. Zawiera pierwszą w krajach bałtyckich niestandardową siatkę sufitową zapobiegającą wypadaniu piłek z wieżowca.',
      swedbankSpecs: 'OK Panoramic • 1. w krajach bałtyckich siatka sufitowa • Wilno, Litwa • 2018',
      bernardinaiTitle: 'Pionierski projekt w Ogrodzie Bernardyńskim',
      bernardinaiDesc: 'Legendarny projekt, który wprowadził tenis padlowy na Litwę w 2014 roku. Zbudowany w historycznym sercu Wilna, montaż ten utorował drogę do masowego rozwoju padla w całym kraju.',
      bernardinaiSpecs: 'OK Classic • Pierwsza instalacja • Wilno, Litwa • 2014',
      readFullCase: 'Przeczytaj pełne studium przypadku →',
      close: 'Zamknij',
      photo: 'Zdjęcie',
      projectBackground: 'Tło projektu',
      engineeringChallenges: 'Wyzwania inżynieryjne',
      implementedSolutions: 'Wdrożone rozwiązania',
      projectImpact: 'Wpływ i rezultat projektu',
    }
  };

  const galleryItems = [
    { src: img13, category: 'panoramic', title: 'OK Panoramic - Kaunas' },
    { src: img14, category: 'panoramic', title: 'OK Panoramic - Kaunas' },
    { src: vaidilutesImg, category: 'outdoor', title: 'Vaidilutės sporto aikštynas - Vilnius' },
    { src: multiFunImg, category: 'outdoor', title: 'Multi-fun Court - Swedbank "3 Sails"' },
    { src: bureDji0106, category: 'panoramic', title: 'Swedbank Rooftop Court - Aerial view' },
    { src: bureDji0112, category: 'panoramic', title: 'Swedbank "3 Sails" Rooftop Padel Court' },
    { src: bureDji0122, category: 'panoramic', title: 'Swedbank Rooftop Court Close-up' },
    { src: bureDji0040, category: 'outdoor', title: 'Swedbank Skyscraper (Drone view)' },
    { src: bureDji0053, category: 'outdoor', title: 'Padel court at "3 Sails" skyscraper - Vilnius Skyline' },
    { src: bureImg0469, category: 'outdoor', title: 'Padel court at Swedbank "3 Sails" skyscraper' },
    { src: bureImg0669, category: 'outdoor', title: 'Padel court at Swedbank "3 Sails" skyscraper' },
    { src: wienImg, category: 'panoramic', title: 'Panoramic 9-Courts Complex - Vienna' },
    { src: img0091, category: 'outdoor', title: 'Classic Outdoor Court' },
    { src: img4598, category: 'indoor', title: 'Martinų padelis outdoor courts' },
    { src: panoramic3, category: 'panoramic', title: 'Panoramic lakefront court' },
    { src: bernardinaiOriginalImg, category: 'outdoor', title: 'Bernardinai Garden Pioneer Court - Vilnius' },
    { src: bernDji1, category: 'outdoor', title: 'Bernardinai Garden Padel Club' },
    { src: bernDji2, category: 'outdoor', title: 'Bernardinai Garden Padel Club' },
    { src: bernDji3, category: 'outdoor', title: 'Bernardinai Garden Padel Club' },
    { src: bernDji4, category: 'outdoor', title: 'Bernardinai Garden Padel Club' },
    { src: newImg1, category: 'indoor', title: 'Active Vilnius Padel courts' },
    { src: newImg2, category: 'outdoor', title: 'Active Vilnius Padel courts' },
    { src: newImg3, category: 'indoor', title: 'PadelTennis Arena - Vilnius' },
    { src: newImg4, category: 'outdoor', title: 'Active Vilnius Padel courts' },
    { src: newImg5, category: 'indoor', title: 'Multi-sport court - Vilnius' },
    { src: img1, category: 'outdoor', title: 'Panoramic Court' },
    { src: img2, category: 'outdoor', title: 'Panoramic Court' },
    { src: img3, category: 'panoramic', title: 'Panoramic Court' },
    { src: img4, category: 'indoor', title: 'Vilnius Outlet Park' },
    { src: img5, category: 'indoor', title: 'Premium Indoor Club - Estonia' },
    { src: img6, category: 'panoramic', title: 'Business Garden - Vilnius' },
    { src: img7, category: 'panoramic', title: 'Business Garden - Vilnius' },
    { src: img8, category: 'outdoor', title: 'Business Garden - Vilnius' },
    { src: img9, category: 'indoor', title: 'Business Garden - Vilnius' },
    { src: img10, category: 'outdoor', title: 'Business Garden - Vilnius' },
    { src: img11, category: 'panoramic', title: 'Fanų Padelio Arena - Vilnius' },
    { src: img12, category: 'indoor', title: 'OK Classic - Kaunas' },
  ];

  const nextImage = (e) => {
    e.stopPropagation();
    if (lightboxImages.length === 0) return;
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (lightboxImages.length === 0) return;
    setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

  const caseStudiesData = [
    {
      id: 'swedbank',
      title: {
        en: 'Swedbank "3 Sails" Rooftop',
        lt: 'Swedbank „3 burės“ ant stogo',
        lv: 'Swedbank "Trīs buras" uz jumta',
        et: 'Swedbanki "3 purje" katusel',
        de: 'Swedbank "3 Segel" Dachterrasse',
        pl: 'Dach Swedbank „3 Żagle”'
      },
      badge: {
        en: 'Engineering',
        lt: 'Inžinerija',
        lv: 'Inženierija',
        et: 'Inseneritöö',
        de: 'Ingenieurwesen',
        pl: 'Inżynieria'
      },
      specs: {
        en: 'OK Panoramic • Baltic\'s 1st Overhead Net • Vilnius, Lithuania • 2018',
        lt: 'OK Panoramic • Pirmasis lubų tinklas Baltijos šalyse • Vilnius, Lietuva • 2018',
        lv: 'OK Panoramic • Baltijā 1. griestu tīkls • Viļņa, Lietuva • 2018',
        et: 'OK Panoramic • Baltikumi 1. laevõrk katusel • Vilnius, Leedu • 2018',
        de: 'OK Panoramic • Baltikums 1. Deckennetz • Vilnius, Litauen • 2018',
        pl: 'OK Panoramic • 1. w krajach bałtyckich siatka sufitowa • Wilno, Litwa • 2018'
      },
      images: [
        bureDji0112,
        bureDji0106,
        bureDji0122,
        bureDji0040,
        bureDji0053,
        multiFunImg,
        bureImg0469,
        bureImg0669
      ],
      story: {
        en: 'Constructing a professional padel court at high altitude on top of the "3 Sails" skyscraper presented a landmark branding and engineering opportunity for OKsportas. The client envisioned a premium, highly visible court that would integrate into the rooftop recreational space, allowing employees and clients to play padel against the backdrop of the Vilnius city skyline.',
        lt: 'Profesionalios padelio aikštelės statyba dideliame aukštyje ant „3 burių“ dangoraižio stogo buvo išskirtinis ir reprezentatyvus projektas OKsportas komandai. Kliento vizija buvo sukurti modernią, lengvai pastebimą sporto erdvę ant stogo, kurioje darbuotojai ir svečiai galėtų žaisti padelį grožėdamiesi Vilniaus panorama.',
        lv: 'Profesionāla padela laukuma izbūve augstkalnu apstākļos uz "Trīs buras" debesskrāpja jumta Viļņā bija nozīmīgs zīmola un inženierijas projekts OKsportas komandai. Klients vēlējās izcilu, labi pamanāmu laukumu uz jumta, lai darbinieki un viesi varētu spēlēt padelu uz Viļņas panorāmas fona.',
        et: 'Professionaalse padeliväljaku ehitamine kõrgel asuva "3 purje" pilvelõhkuja katusel oli OKsportas meeskonnale märgiline brändi ja inseneritöö projekt. Klient soovis tippklassi ja hästi nähtavat väljakut, mis sulanduks katusel asuvasse puhkealasse, võimaldades mängida padelit Vilniuse silueti taustal.',
        de: 'Der bau eines professionellen Padel-Platzes in großer Höhe auf dem Wolkenkratzer "3 Segel" stellte für OKsportas eine herausragende Marketing- und Ingenieursmöglichkeit dar. Der Kunde wünschte sich einen erstklassigen, weithin sichtbaren Platz, der sich in den Freizeitbereich auf dem Dach integrieren ließ, so dass Mitarbeiter und Kunden Padel vor der Kulisse der Skyline von Vilnius spielen konnten.',
        pl: 'Budowa profesjonalnego kortu do padla na dużej wysokości na dachu wieżowca „3 Żagle” stanowiła dla OKsportas przełomową okazję wizerunkową i inżynieryjną. Klient wyobrażał sobie prestiżowy, doskonale widoczny kort zintegrowany z przestrzenią rekreacyjną na dachu, umożliwiający pracownikom i klientom grę w padla na tle panoramy Wilna.'
      },
      challenges: {
        en: 'The project was subject to rigorous architectural limits. Standard anchoring was impossible due to waterproofing membranes and skyscraper load constraints. Additionally, because the rooftop is exposed to extreme high-altitude wind gusts, the structure had to be engineered to withstand severe wind loads without transferring structural vibration to the office floors below. Preventing balls from flying off the skyscraper into the busy streets was also a paramount safety challenge.',
        lt: 'Projektui buvo taikomi itin griežti statybiniai apribojimai. Dėl hidroizoliacinės dangos saugojimo ir stogo apkrovų limitų standartinis ankeravimas buvo neaimonomas. Taip pat, kadangi pastato stogas yra atviras stipriems vėjo gūsiams, konstrukcija privalėjo atlaikyti dideles vėjo apkrovas ir nesukelti vibracijos žemiau esančiuose biurų aukštuose. Papildomas saugumo iššūkis buvo užtikrinti, kad kamuoliukai neišlėktų už stogo ribų į apačioje esančias gatves.',
        lv: 'Projekts saskārās ar stingriem arhitektūras ierobežojumiem. Standarta enkurošana nebija iespējama hidroizolācijas membrānu un debesskrāpja slodzes ierobežojumu dēļ. Turklāt, tā kā jumts ir pakļauts spēcīgām vēja brāzmām, konstrukcija bija jāizstrādā tā, lai tā izturētu lielas vēja slodzes, nepārnesot vibrācijas uz biroja stāviem zemāk. Bumbiņu nokrišanas novēršana no debesskrāpja bija vēl viens būtisks drošības izaicinājums.',
        et: 'Projektile kehtestati ranged ehituslikud piirangud. Hüdroisolatsiooni säilitamise ja hoone koormuspiirangute tõttu oli tavapärane ankurdamine võimatu. Kuna katus on avatud tugevatele tuultele, pidi konstruktsioon taluma suuri tuulekoormusi ilma vibratsiooni edasikandmiseta allpool asuvatele kontorikorrustele. Pallide katuselt allakukkumise vältimine oli samuti elutähtis turvalisuse väljakutse.',
        de: 'Das Projekt unterlag strengen architektonischen Grenzen. Eine Standardverankerung war aufgrund der Abdichtungsbahnen und der Traglastbeschränkungen des Wolkenkratzers unmöglich. Da die Dachterrasse zudem extremen Windböen in großer Höhe ausgesetzt ist, musste die Konstruktion so ausgelegt werden, dass sie starken Windlasten standhält, ohne strukturelle Vibrationen auf die darunter liegenden Büroetagen zu übertragen. Die Vermeidung von Ballverlusten vom Wolkenkratzer auf die belebten Straßen darunter war ebenfalls eine zentrale Sicherheitsherausforderung.',
        pl: 'Projekt podlegał rygorystycznym ograniczeniom architektonicznym. Standardowe kotwienie było niemożliwe ze względu na membrany hydroizolacyjne i limity obciążenia wieżowca. Dodatkowo, ponieważ dach jest narażony na ekstremalne porywy wiatru na dużych wysokościach, konstrukcja musiała zostać zaprojektowana tak, aby wytrzymać silne obciążenia wiatrem bez przenoszenia wibracji na niższe piętra biurowe. Zapobieganie wypadaniu piłek z wieżowca na ruchliwe ulice poniżej było również kluczowym wyzwaniem w zakresie bezpieczeństwa.'
      },
      solutions: {
        en: 'Our engineering team developed a custom weighted, self-supporting platform base that eliminates the need for concrete anchors. We integrated specialized vibration-damping base mountings beneath the steel frame to absorb impact energy from play. The court frame was upgraded to heavy hot-dip galvanized steel with reinforced joints. To ensure absolute safety on the rooftop, we engineered a custom overhead safety netting system enclosing the entire top of the court—the first ceiling net installation of its kind in Lithuania and the Baltic States.',
        lt: 'Mūsų inžinieriai suprojektavo specialią savaime išsibalansuojančią metalinę platformą, kuriai nereikia mechaninio tvirtinimo į stogo perdangą. Po rėmu buvo sumontuotos specialios vibraciją slopinančios gumos, sugeriančios kamuoliuko ir žaidėjų judėjimo energiją. Aikštelės rėmas buvo sutvirtintas ir karštai cinkuotas. Taip pat suprojektavome specialų apsauginį tinklą virš visos aikštelės (lubų tinklą), kuris buvo pirmasis tokio tipo saugumo sprendimas padelio aikštelėse Lietuvoje bei visose Baltijos šalyse.',
        lv: 'Mūsu inženieru komanda izstrādāja pielāgotu, pašbalstošu platformas pamatni, kas novērš nepieciešamību pēc betona enkuriem. Zem tērauda rāmja mēs integrējām specializētus vibrācijas slāpēšanas paliktņus, lai absorbētu trieciena enerģiju. Laukuma rāmis tika uzlabots uz karsti cinkotu tēraudu ar pastiprinātiem savienojumiem. Pilnīgam saugumam uz jumta mēs izstrādājām unikālu apsargājošu griestu tīkla sistēmu, kas aptver visu laukumu no augšas – pirmais šāda veida risinājums Baltijā.',
        et: 'Meie inseneritiim töötas välja spetsiaalse raskusega isekandva platvormi aluse, mis ei vaja ankurdamist katusel. Terasraami alla paigaldasime spetsiaalsed vibratsiooni summutavad padjad. Väljaku raam uuendati tugevdatud liidestega kuumtsingitud teraseks. Täieliku ohutuse tagamiseks projekteerisime kohandatud laevõrgu süsteemi, mis katab kogu väljaku ülaosa - esimene selline lahendus Leedus ja Baltikumis.',
        de: 'Unser Ingenieurteam entwickelte eine maßgeschneiderte, selbsttragende Plattformbasis, die Betonanker überflüssig macht. Wir haben spezielle vibrationsdämpfende Basisbefestigungen unter dem Stahlrahmen integriert, um die Aufprallenergie des Spiels zu absorbieren. Der Platzrahmen wurde auf robusten, feuerverzinkten Stahl mit verstärkten Gelenken aufgerüstet. Um absolute Sicherheit auf der Dachterrasse zu gewährleisten, entwarfen wir ein maßgeschneidertes Sicherheitsnetzsystem, das den gesamten oberen Bereich des Platzes umschließt – die erste Deckennetzinstallation dieser Art in Litauen und den baltischen Staaten.',
        pl: 'Nasz zespół inżynierów opracował niestandardową, dociążoną platformę samonośną, która eliminuje potrzebę stosowania kotew betonowych. Pod stalową ramą zintegrowaliśmy specjalne podkładki tłumiące wibracje, aby absorbować energię uderzeń podczas gry. Ramę kortu ulepszono do grubej stali ocynkowanej ogniowo ze wzmocnionymi połączeniami. Aby zapewnić całkowite bezpieczeństwo na dachu, zaprojektowaliśmy niestandardowy system siatek zabezpieczających nad kortem, zamykający całą przestrzeń nad nim – była to pierwsza tego typu instalacja siatki sufitowej na Litwie i w krajach bałtyckich.'
      },
      impact: {
        en: 'The rooftop padel court has become an architectural landmark in Vilnius, widely shared in Baltic business media and social channels. It proved that padel courts can be safely and elegantly engineered in extreme high-altitude environments, pioneering the first overhead ceiling net in the Baltics and paving the way for similar innovative urban rooftops throughout Northern Europe.',
        lt: 'Ši aikštelė ant stogo tapo Vilniaus architektūriniu akcentu, plačiai aprašytu žiniasklaidoje ir socialiniuose tinkluose. Projektas įrodė, kad padelio aikšteles su unikaliomis apsauginio tinklo konstrukcijomis galima saugiai ir estetiškai įrengti net ir sudėtingiausiose urbanistinėse vietose, atveriant kelią panašiems projektams Šiaurės Europoje.',
        lv: 'Jumta padela laukums ir kļuvis par arhitektūras orientieri Viļņā, par kuru plaši rakstīts Baltijas biznesa medijos. Tas pierādīja, ka padela laukumus var droši un eleganti izbūvēt pat ekstremālos augstkalnu apstākļos, aizsākot pirmo griestu tīklu Baltijā un bruģējot ceļu līdzīgiem projektiem Ziemeļeiropā.',
        et: 'Katuse väljakust on saanud Vilniuse arhitektuurne maamärk, mida on laialdaselt kajastatud Balti äri- ja sotsiaalmeedias. Projekt tõestas, et padeliväljakuid on võimalik turvaliselt ja esteetiliselt rajada ka keerulistes tingimustes, olles teerajajaks esimesele laevõrgule Baltikumis.',
        de: 'Der Padel-Platz auf dem Dach hat sich zu einer architektonischen Sehenswürdigkeit in Vilnius entwickelt und wird in den baltischen Wirtschaftsmedien und sozialen Kanälen viel geteilt. Es bewies, dass Padel-Plätze auch in extremen Höhenlagen sicher und elegant konstruiert werden können, und bereitete den Weg für ähnliche innovative urbane Dachterrassen in ganz Nordeuropa.',
        pl: 'Kort do padla na dachu stał się architektonicznym symbolem Wilna, chętnie udostępnianym w bałtyckich mediach biznesowych i kanałach społecznościowych. Udowodnił on, że korty do padla mogą być bezpiecznie i elegancko projektowane w ekstremalnych warunkach wysokościowych, przecierając szlaki dla podobnych innowacyjnych projektów na dachach miejskich w całej Europie Północnej.'
      }
    },
    {
      id: 'bernardinai',
      title: {
        en: 'Bernardinai Garden Pioneer Project',
        lt: 'Bernardinų sodo istorinis parkas',
        lv: 'Bernardinai dārza pionieru projekts',
        et: 'Bernardinai aia teeraja projekt',
        de: 'Pionierprojekt Bernardinai-Garten',
        pl: 'Pionierski projekt w Ogrodzie Bernardyńskim'
      },
      badge: {
        en: 'Pioneer',
        lt: 'Pionierius',
        lv: 'Pionieris',
        et: 'Teerajaja',
        de: 'Pionier',
        pl: 'Pionier'
      },
      specs: {
        en: 'OK Classic • Pioneer Installation • Vilnius, Lithuania • 2014',
        lt: 'OK Classic • Istorinis parko projektas • Vilnius, Lietuva • 2014',
        lv: 'OK Classic • Pionieru uzstādīšana • Viļņa, Lietuva • 2014',
        et: 'OK Classic • Teerajaja paigaldus • Vilnius, Leedu • 2014',
        de: 'OK Classic • Erste Installation • Vilnius, Litauen • 2014',
        pl: 'OK Classic • Pierwsza instalacja • Wilno, Litwa • 2014'
      },
      images: [
        bernardinaiOriginalImg,
        bernDji1,
        bernDji2,
        bernDji3,
        bernDji4
      ],
      story: {
        en: 'In 2014, OKsportas partnered with the Lithuanian Padel Federation to build the first professional padel courts in the country. The location chosen was the historic Bernardinai Garden, situated right at the foot of the Gediminas Castle Hill in Vilnius Old Town. This project was designed to introduce the sport to the general public in a highly accessible park environment.',
        lt: '2014 metais OKsportas bendradarbiaudama su Lietuvos padelio federacija įrengė pačias pirmąsias profesionalias padelio aikšteles šalyje. Projekto vieta – istorinis Bernardinų sodas pačioje Vilniaus senamiesčio širdyje, Gedimino pilies kalno papėdėje. Aikštelės buvo skirtos supažindinti visuomenę su šiuo sportu itin populiariame miesto parke.',
        lv: '2014. gadā OKsportas sadarbībā ar Lietuvas Padela federāciju uzbūvēja pirmos profesionālos padela laukumus valstī. Izvēlētā vieta bija vēsturiskais Bernardinai dārzs Viļņas vecpilsētas sirdī. Šis projekts tika radīts, lai iepazīstinātu sabiedrību ar šo sporta veidu ļoti pieejamā parka vidē.',
        et: '2014. aastal paigaldas OKsportas koostöös Leedu Padeliföderatsiooniga riigi esimesed professionaalsed padeliväljakud. Asukohaks valiti ajalooline Bernardinai aed Vilniuse vanalinnas. Projekt loodi selleks, et tutvustada spordiala laiema avalikkuse ees populaarses linnapargis.',
        de: 'Im Jahr 2014 kooperierte OKsportas mit dem litauischen Padel-Verband, um die ersten professionellen Padel-Plätze des Landes zu bauen. Als Standort wurde der historische Bernardinai-Garten am Fuße des Gediminas-Burgbergs in der Altstadt von Vilnius gewählt. Dieses Projekt sollte den Sport der Öffentlichkeit in einer leicht zugänglichen Parkumgebung vorstellen.',
        pl: 'W 2014 roku OKsportas nawiązał współpracę z Litewską Federacją Padla, aby zbudować pierwsze profesjonalne korty do padla w kraju. Na lokalizację wybrano zabytkowy Ogród Bernardyński, położony u podnóża Góry Zamkowej Giedymina na wileńskim Starym Mieście. Projekt ten miał na celu zaprezentowanie sportu szerokiej publiczności w łatwo dostępnym środowisku parkowym.'
      },
      challenges: {
        en: 'Being situated in a protected historical and cultural heritage zone next to the Vilnelė river, the project had strict environmental regulations. No excavation or heavy concrete foundations were permitted to protect archaeological layers and tree roots. Furthermore, the aesthetics of the courts had to harmonize with the classic park landscape.',
        lt: 'Kadangi parkas yra saugomoje kultūros paveldo zonoje šalia Vilnelės upės, projektui buvo taikomi itin griežti aplinkosaugos reikalavimai. Buvo visiškai uždrausti kasimo ar betonavimo darbai, kad nebūtų pažeisti archeologiniai sluoksniai ir šalia augančių šimtamečių medžių šaknys. Aikštelė turėjo idealiai derėti prie parko kraštovaizdžio.',
        lv: 'Atrodoties aizsargājamā vēsturiskā un kultūras mantojuma zonā blakus Vilneles upei, projektam bija stingri vides noteikumi. Nekādi kasīšanas vai betona pamatu darbi nebija atļauti, lai aizsargātu arheoloģiskos slāņus un koku saknes. Turklāt laukumu estētikai bija jāsaskan ar klasisko parka ainavu.',
        et: 'Ajaloolises ja kaitstavas muinsuskaitsetsoonis Vilnelė jõe ääres asuvale projektile kehtestati ranged keskkonnanõuded. Arheoloogiliste kihtide ja sajandivanuste puude juurte kaitseks oli igasugune kaevamine ja betoonitöö keelatud. Lisaks pidi väljakute esteetika sobima pargi klassikalise maastikuga.',
        de: 'Da sich das Projekt in einer geschützten historischen und kulturellen Erbezone neben dem Fluss Vilnelė befand, galten strenge Umweltauflagen. Zum Schutz archäologischer Schichten und Baumwurzeln waren keine Ausgrabungen oder schweren Betonfundamente zulässig. Zudem musste sich die Ästhetik der Plätze harmonisch in die klassische Parklandschaft einfügen.',
        pl: 'Ze względu na położenie w chronionej strefie dziedzictwa historycznego i kulturowego tuż obok rzeki Wilejki, projekt podlegał surowym przepisom środowiskowym. W celu ochrony warstw archeologicznych i korzeni drzew zakazano jakichkolwiek prac ziemnych czy wykonywania ciężkich fundamentów betonowych. Ponadto estetyka kortów musiała harmonizować z klasycznym krajobrazem parku.'
      },
      solutions: {
        en: 'We designed a non-invasive shallow anchoring frame system that rested on a prepared sand and gravel drainage sub-base. The metal frame was finished in a custom forest green color rather than standard black to blend with the garden foliage. We utilized premium hot-dip galvanized steel and heavy-duty structural components specifically engineered for high-frequency public play, ensuring the courts remain in peak playable condition over a decade later.',
        lt: 'Mes pritaikėme specialų negilų tvirtinimo rėmą, sumontuotą ant išlyginto ir drenuojančio smėlio bei žvyro pagrindo, visiškai nenaudojant betono. Aikštelės rėmas buvo nudažytas specialia žalia spalva, derančia prie parko medžių. Panaudojome aukščiausios kokybės karštai cinkuotą plieną ir sustiprintus konstrukcinius elementus, sukurtus atlaikyti didelius viešojo parko lankytojų srautus, todėl aikštelės puikiai tarnauja jau daugiau nei dešimtmetį.',
        lv: 'Mēs izstrādājām neinvazīvu seklu enkurošanas rāmja sistēmu, kas balstījās uz sagatavotas smilšu un grants drenāžas pamatnes. Metāla rāmis tika nokrāsots īpašā meža zaļā krāsā, lai tas saplūstu ar dārza apstādījumiem. Mēs izmantojām premium karsti cinkotu tēraudu un izturīgus komponentus, nodrošinot laukumu izcilu stāvokli arī desmit gadus vēlāk.',
        et: 'Projekteerisime madala ankurdusraami süsteemi, mis paigaldati ettevalmistatud liiva- ja kruusaalusele, täielikult ilma betoonita. Terasraam värviti spetsiaalse rohelise tooniga, mis sobitub pargi rohelusega. Kasutasime kuumtsingitud terast ja tugevdatud osi, tagades väljakute suurepärase seisukorra ka kümme aastat hiljem.',
        de: 'Wir entwarfen ein nicht-invasives, flaches Verankerungsrahmensystem, das auf einem vorbereiteten Sand- und Kiesdrainageunterbau ruht. Der Metallrahmen wurde in einem speziellen Waldgrün anstelle des standardmäßigen Schwarz lackiert, um sich an das Laub des Gartens anzupassen. Wir verwendeten hochwertigen, feuerverzinkten Stahl und hochbelastbare Strukturkomponenten, die speziell für den intensiven öffentlichen Spielbetrieb ausgelegt sind, um sicherzustellen, dass die Plätze auch über ein Jahrzehnt später in bestem Zustand sind.',
        pl: 'Zaprojektowaliśmy nieinwazyjny system płytkich ram kotwiących, który opiera się na przygotowanej podbudowie drenażowej z piasku i żwiru. Metalową ramę wykończono w niestandardowym kolorze leśnej zieleni zamiast standardowej czerni, aby wtopić ją w roślinność ogrodu. Zastosowaliśmy najwyższej jakości stal ocynkowaną ogniowo i wytrzymałe elementy konstrukcyjne specjalnie zaprojektowane do intensywnego użytku publicznego, dzięki czemu korty pozostają w doskonałym stanie ponad dekadę później.'
      },
      impact: {
        en: 'This installation served as the historic birthplace of padel in Lithuania. It hosted the first local championships, drew thousands of players, and sparked a nationwide padel boom. Over a decade later, these courts are still in peak condition, demonstrating the long-term structural durability of our materials.',
        lt: 'Šios aikštelės tapo padelio teniso lopšiu Lietuvoje. Čia vyko pirmieji šalies čempionatai, aikštelės pritraukė tūkstančius žaidėjų ir pradėjo padelio bumą visoje šalyje. Praėjus daugiau nei dešimtmečiui, konstrukcijos vis dar yra puikios būklės, įrodydamos mūsų naudojamų medžiagų ilgaamžiškumą.',
        lv: 'Šī uzstādīšana kalpoja kā vēsturiskais padela dzimšanas punkts Lietuvā. Šeit notika pirmie vietējie čempionāti, piesaistot tūkstošiem spēlētāju. Pēc vairāk nekā desmit gadiem šie laukumi joprojām ir izcilā stāvoklī, apliecinot mūsu materiālu ilgmūžību.',
        et: 'Need väljakud said padeli hälliks Leedus. Siin peeti esimesed kohalikud meistrivõistlused, mis tõid mängu juurde tuhandeid inimesi. Rohkem kui kümme aastat hiljem on need väljakud ikka veel suurepärases korras, näidates meie materjalide erakordset vastupidavust.',
        de: 'Diese Installation gilt als die historische Geburtsstätte des Padel-Sports in Litauen. Sie war Austragungsort der ersten lokalen Meisterschaften, zog Tausende von Spielern an und löste einen landesweiten Padel-Boom aus. Über ein Jahrzehnt später sind diese Plätze immer noch in bestem Zustand, was die langfristige strukturelle Haltbarkeit unserer Materialien beweist.',
        pl: 'Instalacja ta stała się historycznym miejscem narodzin padla na Litwie. Odbyły się tu pierwsze lokalne mistrzostwa, przyciągnęła tysiące graczy i wywołała ogólnokrajowy boom na padla. Ponad dziesięć lat później korty te nadal są w doskonałym stanie, co dowodzi długoterminowej trwałości strukturalnej naszych materiałów.'
      }
    }
  ];


  return (
    <section id="projects" className="gallery-section">
      <div className="container">
        <h2 className="section-title text-gradient">{t[currentLang].title}</h2>
        <p className="section-subtitle">{t[currentLang].subtitle}</p>

        {/* Featured Case Studies */}
        <div className="case-studies-container">
          <h3 className="case-studies-title text-gradient-blue">{t[currentLang].casesTitle}</h3>
          <p className="case-studies-subtitle">{t[currentLang].casesSubtitle}</p>

          <div className="cases-grid">
            {/* Case 1: Swedbank Rooftop */}
            <div className="case-card glass-card clickable-case-card" onClick={() => setActiveCaseStudy(caseStudiesData[0])}>
              <div className="case-img-wrapper">
                <img src={bureDji0112} alt="Swedbank Skyscraper Padel Court" />
                <span className="case-badge">{caseStudiesData[0].badge[currentLang]}</span>
              </div>
              <div className="case-info">
                <h3>{t[currentLang].swedbankTitle}</h3>
                <p className="case-specs">{t[currentLang].swedbankSpecs}</p>
                <p className="case-desc">{t[currentLang].swedbankDesc}</p>
                <span className="learn-more-link">{t[currentLang].readFullCase}</span>
              </div>
            </div>

            {/* Case 2: Bernardinai Garden */}
            <div className="case-card glass-card clickable-case-card" onClick={() => setActiveCaseStudy(caseStudiesData[1])}>
              <div className="case-img-wrapper">
                <img src={bernardinaiImg} alt="Bernardinai Garden Padel Court" />
                <span className="case-badge">{caseStudiesData[1].badge[currentLang]}</span>
              </div>
              <div className="case-info">
                <h3>{t[currentLang].bernardinaiTitle}</h3>
                <p className="case-specs">{t[currentLang].bernardinaiSpecs}</p>
                <p className="case-desc">{t[currentLang].bernardinaiDesc}</p>
                <span className="learn-more-link">{t[currentLang].readFullCase}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="gallery-grid" style={{ marginTop: '20px' }}>
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="gallery-item glass-card animate-fade-in"
              onClick={() => {
                setLightboxImages(galleryItems);
                setLightboxIndex(index);
              }}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="gallery-img-wrapper">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="gallery-img"
                  onLoad={(e) => e.target.classList.add('loaded')}
                />
                <div className="gallery-hover-overlay">
                  <span className="zoom-icon">🔍</span>
                  <p className="hover-title">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && lightboxImages[lightboxIndex] && (
        <div className="lightbox-overlay" onClick={() => {
          setLightboxIndex(null);
          setLightboxImages([]);
        }}>
          <button className="lightbox-close" onClick={() => {
            setLightboxIndex(null);
            setLightboxImages([]);
          }}>&times;</button>

          <button className="lightbox-nav prev" onClick={prevImage}>&#10094;</button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImages[lightboxIndex].src}
              alt={lightboxImages[lightboxIndex].title}
              className="lightbox-main-img"
            />
            <p className="lightbox-caption">{lightboxImages[lightboxIndex].title}</p>
          </div>

          <button className="lightbox-nav next" onClick={nextImage}>&#10095;</button>
        </div>
      )}

      {/* Case Study Details Modal */}
      {activeCaseStudy && (
        <div className="modal-overlay case-modal-overlay" onClick={() => setActiveCaseStudy(null)}>
          <div className="case-modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActiveCaseStudy(null)}>
              {t[currentLang].close} &times;
            </button>

            <div className="case-modal-header">
              <span className="case-modal-badge">{activeCaseStudy.badge[currentLang]}</span>
              <h2>{activeCaseStudy.title[currentLang]}</h2>
              <p className="case-modal-specs">{activeCaseStudy.specs[currentLang]}</p>
            </div>

            {/* Gallery of photos inside case study */}
            <div className="case-modal-photos">
              {activeCaseStudy.images.map((img, idx) => (
                <div key={idx} className="case-photo-wrapper" onClick={() => {
                  const caseImages = activeCaseStudy.images.map((cImg, cIdx) => ({
                    src: cImg,
                    title: `${activeCaseStudy.title[currentLang]} - ${t[currentLang].photo} ${cIdx + 1}`
                  }));
                  setLightboxImages(caseImages);
                  setLightboxIndex(idx);
                }}>
                  <img src={img} alt={`${activeCaseStudy.title[currentLang]} - ${idx + 1}`} loading="lazy" />
                  <div className="case-photo-hover">
                    <span>🔍</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="case-modal-body">
              <div className="case-story-block">
                <h4>{t[currentLang].projectBackground}</h4>
                <p>{activeCaseStudy.story[currentLang]}</p>
              </div>

              <div className="case-grid-details">
                <div className="case-detail-box">
                  <h5>{t[currentLang].engineeringChallenges}</h5>
                  <p>{activeCaseStudy.challenges[currentLang]}</p>
                </div>
                <div className="case-detail-box">
                  <h5>{t[currentLang].implementedSolutions}</h5>
                  <p>{activeCaseStudy.solutions[currentLang]}</p>
                </div>
              </div>

              <div className="case-story-block">
                <h4>{t[currentLang].projectImpact}</h4>
                <p>{activeCaseStudy.impact[currentLang]}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx="true">{`
        .gallery-section {
          background-color: var(--bg-sub);
        }

        .section-subtitle {
          text-align: center;
          color: var(--text-muted);
          margin-top: -30px;
          margin-bottom: 40px;
          font-size: 1.1rem;
        }

        .gallery-filters {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 50px;
        }

        .filter-btn {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          color: var(--text-muted);
          padding: 10px 24px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: var(--transition);
        }

        .filter-btn:hover,
        .filter-btn.active {
          color: var(--text-main);
          border-color: var(--primary);
          background: var(--primary-glow);
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.15);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .gallery-item {
          padding: 0;
          border-radius: var(--border-radius);
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 4/3;
        }

        .gallery-img-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
          background-color: var(--bg-main);
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gallery-img.loaded {
          opacity: 1;
        }

        .gallery-item:hover .gallery-img {
          transform: scale(1.06);
        }

        .gallery-hover-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(6, 9, 19, 0.9) 0%, rgba(6, 9, 19, 0.2) 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition);
          padding: 20px;
          text-align: center;
        }

        .gallery-item:hover .gallery-hover-overlay {
          opacity: 1;
        }

        .zoom-icon {
          font-size: 2rem;
          margin-bottom: 8px;
          transform: translateY(10px);
          transition: var(--transition);
        }

        .gallery-item:hover .zoom-icon {
          transform: translateY(0);
        }

        .hover-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #fff;
        }

        /* Clickable Case Card Styling */
        .clickable-case-card {
          cursor: pointer;
          position: relative;
        }
        
        .learn-more-link {
          font-size: 0.9rem;
          color: var(--primary);
          font-weight: 700;
          margin-top: 8px;
          display: inline-block;
          transition: var(--transition);
        }
        
        .clickable-case-card:hover .learn-more-link {
          transform: translateX(5px);
          color: #fff;
        }

        /* Case Study Modal Styles */
        .case-modal-overlay {
          align-items: flex-start;
          padding: 60px 20px;
          overflow-y: auto;
        }

        .case-modal-content {
          width: 100%;
          max-width: 900px;
          position: relative;
          padding: 40px;
          border-color: rgba(16, 185, 129, 0.2);
          background: rgba(6, 9, 19, 0.98);
          backdrop-filter: blur(16px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.9);
          border-radius: var(--border-radius-lg);
          border: 1px solid var(--border);
          margin-bottom: 40px;
        }

        .case-modal-content .close-btn {
          position: absolute;
          top: 25px;
          right: 25px;
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 0.95rem;
          cursor: pointer;
          transition: var(--transition);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .case-modal-content .close-btn:hover {
          color: #fff;
        }

        .case-modal-header {
          margin-bottom: 24px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 16px;
        }

        .case-modal-badge {
          display: inline-block;
          background: var(--primary);
          color: var(--text-inverse);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 12px;
          box-shadow: 0 4px 10px rgba(16, 185, 129, 0.25);
        }

        .case-modal-header h2 {
          font-size: 1.85rem;
          color: #fff;
          margin: 0 0 6px;
          text-align: left;
        }
        
        .case-modal-header h2::after {
          display: none;
        }

        .case-modal-specs {
          font-size: 0.85rem;
          color: var(--primary);
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin: 0;
          text-align: left;
        }

        .case-modal-photos {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 12px;
          margin-bottom: 30px;
        }

        .case-photo-wrapper {
          aspect-ratio: 4/3;
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid var(--border);
          cursor: pointer;
          position: relative;
          transition: var(--transition);
        }

        .case-photo-wrapper:hover {
          transform: scale(1.03);
          border-color: var(--primary);
          box-shadow: 0 4px 10px rgba(16, 185, 129, 0.15);
        }

        .case-photo-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .case-photo-hover {
          position: absolute;
          inset: 0;
          background: rgba(16, 185, 129, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition);
        }
        
        .case-photo-wrapper:hover .case-photo-hover {
          opacity: 1;
        }

        .case-modal-body {
          display: flex;
          flex-direction: column;
          gap: 24px;
          text-align: left;
        }

        .case-story-block h4 {
          font-size: 1.15rem;
          color: #fff;
          margin-bottom: 10px;
          border-left: 3px solid var(--primary);
          padding-left: 10px;
        }

        .case-story-block p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        .case-grid-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .case-detail-box {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 16px;
        }

        .case-detail-box h5 {
          font-size: 0.95rem;
          color: #fff;
          margin-top: 0;
          margin-bottom: 8px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .case-detail-box p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin: 0;
        }

        /* Lightbox styling */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(4, 6, 12, 0.96);
          backdrop-filter: blur(12px);
          z-index: 3000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-close {
          position: absolute;
          top: 30px;
          right: 30px;
          background: none;
          border: none;
          color: #fff;
          font-size: 3rem;
          cursor: pointer;
          transition: var(--transition);
          line-height: 1;
        }

        .lightbox-close:hover {
          color: var(--primary);
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #fff;
          font-size: 2rem;
          padding: 16px 22px;
          border-radius: 50%;
          cursor: pointer;
          transition: var(--transition);
          z-index: 3100;
        }

        .lightbox-nav:hover {
          background: var(--primary);
          color: var(--text-inverse);
          border-color: var(--primary);
        }

        .lightbox-nav.prev {
          left: 40px;
        }

        .lightbox-nav.next {
          right: 40px;
        }

        .lightbox-content {
          max-width: 80%;
          max-height: 80vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .lightbox-main-img {
          max-width: 100%;
          max-height: 75vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .lightbox-caption {
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        /* Case Studies Styling */
        .case-studies-container {
          margin-bottom: 60px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 60px;
          text-align: center;
        }

        .case-studies-title {
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .case-studies-subtitle {
          color: var(--text-muted);
          font-size: 1rem;
          margin-bottom: 30px;
        }

        .cases-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          text-align: left;
        }

        .case-card {
          display: flex;
          flex-direction: column;
          gap: 18px;
          padding: 24px;
          border-radius: var(--border-radius);
          background: linear-gradient(180deg, var(--bg-card) 0%, rgba(19, 27, 46, 0.4) 100%);
          border: 1px solid var(--border);
          transition: var(--transition);
        }

        .case-card:hover {
          transform: translateY(-5px);
          border-color: var(--border-hover);
          box-shadow: var(--shadow-lg);
        }

        .case-img-wrapper {
          width: 100%;
          height: 220px;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          background-color: var(--bg-main);
        }

        .case-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .case-card:hover .case-img-wrapper img {
          transform: scale(1.05);
        }

        .case-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: var(--primary);
          color: var(--text-inverse);
          padding: 4px 14px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: 0 4px 10px rgba(16, 185, 129, 0.25);
        }

        .case-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .case-info h3 {
          font-size: 1.4rem;
          color: #fff;
          font-weight: 700;
        }

        .case-specs {
          font-size: 0.85rem;
          color: var(--primary);
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .case-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .cases-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .case-studies-title {
            font-size: 1.5rem;
          }
          .case-img-wrapper {
            height: 180px;
          }
          .lightbox-nav {
            padding: 10px 16px;
            font-size: 1.5rem;
          }
          .lightbox-nav.prev {
            left: 10px;
          }
          .lightbox-nav.next {
            right: 10px;
          }
          .lightbox-content {
            max-width: 95%;
          }
        }
      `}</style>
    </section>
  );
}
