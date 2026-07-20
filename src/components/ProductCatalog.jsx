import React, { useState } from 'react';

// Import local assets uploaded by the user
import classicImg from '../assets/Cfpadel/Classic/ok_classic_court_illustration.png';
import panoramicImg from '../assets/Cfpadel/Panoramic/ok_panoramic_court_illustration.png';
import superPanoramicImg from '../assets/Cfpadel/Super Panoramic/ok_ultimate_court_illustration.png';
import portableImg from '../assets/Cfpadel/Portable/ok_portable_illustration.png'; // Rebranded Portable Court illustration
import platformImg from '../assets/Cfpadel/Platform/ok_platform_illustration.png'; // Rebranded Platform illustration
import movableClassicImg from '../assets/Cfpadel/Portable/ok_movable_classic_illustration.png'; // Rebranded Movable Classic illustration

export default function ProductCatalog({ currentLang }) {
  const [activeProduct, setActiveProduct] = useState(null);

  const t = {
    en: {
      title: 'Our Padel Court Series',
      subtitle: 'Engineered for durability, visual elegance, and perfect playability.',
      viewSpecs: 'Technical Specifications',
      close: 'Close',
      specifications: 'Specifications',
      frame: 'Steel Frame',
      glass: 'Glass panels',
      turf: 'Professional Turf',
      lighting: 'LED System',
      cta: 'Quote This Court',
    },
    lt: {
      title: 'Padelio aikštelių serijos',
      subtitle: 'Sukurta ilgaamžiškumui, vizualiai estetikai ir nepriekaištingam žaidimui.',
      viewSpecs: 'Techninės specifikacijos',
      close: 'Uždaryti',
      specifications: 'Specifikacija',
      frame: 'Plieno rėmas',
      glass: 'Stiklo paketas',
      turf: 'Profesionali danga',
      lighting: 'LED Apšvietimas',
      cta: 'Teirautis kainos',
    },
    lv: {
      title: 'Mūsu padela laukumu sērijas',
      subtitle: 'Izstrādāts ilgmūžībai, vizuālai elegancei un perfektai spēlei.',
      viewSpecs: 'Tehniskās specifikācijas',
      close: 'Aizvērt',
      specifications: 'Specifikācijas',
      frame: 'Tērauda rāmis',
      glass: 'Stikla paneļi',
      turf: 'Profesionāls segums',
      lighting: 'LED apgaismojums',
      cta: 'Pieprasīt cenu šim laukumam',
    },
    et: {
      title: 'Meie padeliväljakute seeriad',
      subtitle: 'Loodud vastupidavuseks, visuaalseks esteetikaks ja täiuslikuks mängitavuseks.',
      viewSpecs: 'Tehnilised andmed',
      close: 'Sulge',
      specifications: 'Tehnilised andmed',
      frame: 'Terasraam',
      glass: 'Klaaspaneelid',
      turf: 'Professionaalne muru',
      lighting: 'LED-süsteem',
      cta: 'Küsi selle väljaku pakkumist',
    },
    de: {
      title: 'Unsere Padel-Platz-Serien',
      subtitle: 'Entwickelt für Langlebigkeit, visuelle Eleganz und perfekte Spielbarkeit.',
      viewSpecs: 'Technische Spezifikationen',
      close: 'Schließen',
      specifications: 'Spezifikationen',
      frame: 'Stahlrahmen',
      glass: 'Glasscheiben',
      turf: 'Profi-Kunstrasen',
      lighting: 'LED-System',
      cta: 'Angebot anfordern',
    },
    pl: {
      title: 'Nasze serie kortów do padla',
      subtitle: 'Zaprojektowane z myślą o trwałości, wizualnej elegancji i doskonałej grywalności.',
      viewSpecs: 'Specyfikacje techniczne',
      close: 'Zamknij',
      specifications: 'Specyfikacje',
      frame: 'Rama stalowa',
      glass: 'Panele szklane',
      turf: 'Profesjonalna trawa',
      lighting: 'System LED',
      cta: 'Wyceń ten kort',
    }
  };

  const products = [
    {
      id: 'classic',
      name: {
        en: 'OK Classic Court',
        lt: 'OK Classic Aikštelė',
        lv: 'OK Classic laukums',
        et: 'OK Classic väljak',
        de: 'OK Classic Platz',
        pl: 'Kort OK Classic'
      },
      desc: { 
        en: 'The timeless standard. Built with robust vertical steel pillars separating the glass panels. Ideal for heavy-use environments and outdoor clubs requiring ultimate wind load resilience.',
        lt: 'Nesenstanti klasika. Sutvirtinta vertikaliais plieniniais stulpais tarp stiklo plokščių. Puikiai tinka intensyvaus naudojimo klubams ir vėjuotoms atviroms erdvėms.',
        lv: 'Laika gaitā pārbaudīta klasika. Izstrādāts ar izturīgiem vertikāliem tērauda pīlāriem, kas atdala stikla paneļus. Ideāli piemērots intensīvai lietošanai un āra klubiem ar augstu vēja slodzi.',
        et: 'Aegumatu klassika. Tugevdatud klaaspaneele eraldavate vertikaalsete teraspostidega. Ideaalne intensiivse kasutusega klubidele ja tuulistele avatud aladele.',
        de: 'Der zeitlose Standard. Gebaut mit robusten vertikalen Stahlsäulen, die die Glasscheiben trennen. Ideal für intensiv genutzte Umgebungen und Außenanlagen, die eine extreme Windlastfestigkeit erfordern.',
        pl: 'Ponadczasowy standard. Zbudowany z solidnych pionowych stalowych słupów oddzielających panele szklane. Idealny do intensywnego użytku i klubów zewnętrznych wymagających najwyższej odporności na wiatr.'
      },
      image: classicImg,
      specs: {
        frame: { 
          en: '100x100x3mm structural steel, hot-dip galvanized & electrostatic powder coated, with electro-welded mesh panels manufactured in compliance with EN 10223-5 standards.', 
          lt: '100x100x3mm struktūrinis plienas, karštai cinkuotas ir milteliniu būdu dažytas, suvirintas tinklas atitinkantis EN 10223-5 standartus.',
          lv: '100x100x3mm strukturālais tērauds, karsti cinkots un krāsots ar elektrostatisko pulverkrāsu, metināti sieta paneļi saskaņā ar EN 10223-5 standartiem.',
          et: '100x100x3mm konstruktsiooniteras, kuumtsingitud ja elektrostaatiliselt pulbervärvitud, keevisvõrk vastab EN 10223-5 standarditele.',
          de: '100x100x3mm Baustahl, feuerverzinkt & elektrostatisch pulverbeschichtet, mit elektrisch geschweißten Gitterpaneelen gemäß EN 10223-5.',
          pl: 'Stal konstrukcyjna 100x100x3 mm, cynkowana ogniowo i malowana proszkowo elektrostatycznie, z panelami ze zgrzewanej siatki produkowanymi zgodnie z normami EN 10223-5.'
        },
        glass: { 
          en: '12mm tempered safety glass panels with polished edges, certified to EN 12150-2 safety standards (TÜV Rheinland).', 
          lt: '12mm grūdintas saugus stiklas su poliruotais kraštais, sertifikuotas pagal EN 12150-2 saugos standartą (TÜV Rheinland).',
          lv: '12mm rūdīts drošības stikls ar pulētām malām, sertificēts saskaņā ar EN 12150-2 drošības standartu (TÜV Rheinland).',
          et: '12mm karastatud turvaklaas lihvitud servadega, sertifitseeritud vastavalt EN 12150-2 standardile (TÜV Rheinland).',
          de: '12mm gehärtete Sicherheitsglasscheiben mit polierten Kanten, zertifiziert nach den Sicherheitsnormen EN 12150-2 (TÜV Rheinland).',
          pl: 'Panele ze szkła bezpiecznego hartowanego 12 mm ze szlifowanymi krawędziami, certyfikowane zgodnie z normami bezpieczeństwa EN 12150-2 (TÜV Rheinland).'
        },
        turf: { 
          en: 'Textured monofilament padel turf (10mm/12mm height), designed in accordance with EN 15330-1 sports surface specifications.', 
          lt: 'Tekstūruota monofilamento padelio danga (10mm/12mm), atitinkanti EN 15330-1 sporto dangų standartus.',
          lv: 'Teksturēts monofilamenta padela zāliens (10mm/12mm augstums), izstrādāts saskaņā ar EN 15330-1 sporta segumu specifikācijām.',
          et: 'Tekstureeritud monofilament-padelimuru (kõrgus 10mm/12mm), vastab EN 15330-1 spordipindade standarditele.',
          de: 'Texturierter Monofilament-Kunstrasen (10mm/12mm Höhe), entwickelt gemäß den Spezifikationen für Sportböden nach EN 15330-1.',
          pl: 'Teksturowana monofilamentowa trawa do padla (wysokość 10mm/12mm), zaprojektowana zgodnie ze specyfikacjami nawierzchni sportowych EN 15330-1.'
        },
        lighting: { 
          en: '4x 400W anti-glare professional floodlights (YXR-FL-400W) with Inventronics/XLG drivers, compliant with CE EMC safety directives.', 
          lt: '4x 400W profesionalūs LED prožektoriai (YXR-FL-400W) su Inventronics/XLG paleidėjais, atitinkantys CE EMC saugos direktyvas.',
          lv: '4x 400W pretapžilbināšanas profesionālie prožektori (YXR-FL-400W) ar Inventronics/XLG droselēm, atbilst CE EMC drošības direktīvām.',
          et: '4x 400W pimestamisvastased professionaalsed LED-prožektorid (YXR-FL-400W) koos Inventronics/XLG draiveritega, vastavad CE EMC ohutusdirektiividele.',
          de: '4x 400W blendfreie Profi-Flutlichtstrahler (YXR-FL-400W) mit Inventronics/XLG-Treibern, konform mit den CE-EMV-Sicherheitsrichtlinien.',
          pl: '4 profesjonalne reflektory antyodblaskowe LED 400W (YXR-FL-400W) z zasilaczami Inventronics/XLG, zgodne z dyrektywami bezpieczeństwa CE EMC.'
        }
      }
    },
    {
      id: 'panoramic',
      name: {
        en: 'OK Panoramic Court',
        lt: 'OK Panoramic Aikštelė',
        lv: 'OK Panoramic laukums',
        et: 'OK Panoramic väljak',
        de: 'OK Panoramic Platz',
        pl: 'Kort OK Panoramic'
      },
      desc: {
        en: 'Premium aesthetics. The rear wall features frameless glass connection, offering spectators and broadcasters an unobstructed view. A perfect balance of luxury design and structural durability.',
        lt: 'Premium estetika. Galinė siena be metalinių rėmų suteikia nepriekaištingą matomumą žiūrovams ir transliacijoms. Puikus prabangos ir tvirtumo santykis.',
        lv: 'Premium estētika. Aizmugurējai sienai ir bezrāmju stikla savienojums, piedāvājot skatītājiem un raidorganizācijām netraucētu skatu. Lielisks luksusa dizaina un struktūras izturības līdzsvars.',
        et: 'Premium-esteetika. Tagaseina raamita klaasühendus pakub pealtvaatajatele ja ülekanneteks täiuslikku nähtavust. Suurepärane luksusliku disaini ja konstruktsiooni tugevuse tasakaal.',
        de: 'Premium-Ästhetik. Die Rückwand verfügt über eine rahmenlose Glasverbindung, die Zuschauern und Fernsehsendern eine freie Sicht bietet. Die perfekte Balance aus luxuriösem Design und struktureller Haltbarkeit.',
        pl: 'Estetyka premium. Tylna ściana posiada bezramowe łączenie szkła, oferując widzom i stacjom telewizyjnym niezakłócony widok. Doskonała równowaga luksusowego designu i trwałości konstrukcji.'
      },
      image: panoramicImg,
      specs: {
        frame: { 
          en: 'Heavy-duty steel beams, dual corner column structure for rear stability, structural mesh compliant with EN 10223-5 standards.', 
          lt: 'Sustiprintos plieno sijos, dviguba kampinių kolonų sistema galiniam stabilumui, tinklas atitinka EN 10223-5 reikalavimus.',
          lv: 'Paaugstinātas izturības tērauda sijas, dubulto stūra kolonnu struktūra aizmugurējai stabilitātei, strukturālais siets saskaņā ar EN 10223-5 standartiem.',
          et: 'Tugevdatud terastalad, topelt-nurgapostide süsteem tagaseina stabiilsuseks, keevisvõrk vastab EN 10223-5 standarditele.',
          de: 'Hochbelastbare Stahlträger, doppelte Eckpfostenstruktur für Stabilität der Rückwand, strukturelles Gitterwerk konform mit EN 10223-5.',
          pl: 'Wytrzymałe belki stalowe, podwójna konstrukcja kolumn narożnych dla stabilności tyłu, siatka konstrukcyjna zgodna z normami EN 10223-5.'
        },
        glass: { 
          en: '12mm tempered safety glass with heavy-duty connection fasteners, certified to EN 12150-2 standards (TÜV Rheinland).', 
          lt: '12mm grūdintas saugus stiklas su tvirtomis jungtimis, sertifizuotas pagal EN 12150-2 standartą (TÜV Rheinland).',
          lv: '12mm rūdīts drošības stikls ar paaugstinātas izturības savienojuma stiprinājumiem, sertificēts saskaņā ar EN 12150-2 standartiem (TÜV Rheinland).',
          et: '12mm karastatud turvaklaas tugevate ühenduskinnitustega, sertifitseeritud vastavalt EN 12150-2 standardile (TÜV Rheinland).',
          de: '12mm gehärtetes Sicherheitsglas mit hochbelastbaren Verbindungsbeschlägen, zertifiziert nach EN 12150-2 (TÜV Rheinland).',
          pl: 'Szkło hartowane bezpieczne 12 mm z wytrzymałymi łącznikami konstrukcyjnymi, certyfikowane zgodnie z normami EN 12150-2 (TÜV Rheinland).'
        },
        turf: { 
          en: 'Premium texturized monofilament turf (Mondo style) for superior playability, designed to meet EN 15330-1 guidelines.', 
          lt: 'Premium tekstūruota monofilamento danga (Mondo tipo) kokybiškam žaidimui, atitinkanti EN 15330-1 gaires.',
          lv: 'Premium teksturēts monofilamenta zāliens (Mondo stils) izcilai spēles kvalitātei, izstrādāts atbilstoši EN 15330-1 vadlīnijām.',
          et: 'Premium-klassi tekstureeritud monofilamentmuru (Mondo tüüpi) suurepäraseks mängitavuseks, vastab EN 15330-1 nõuetele.',
          de: 'Premium texturierter Monofilament-Kunstrasen (Mondo-Stil) für hervorragende Spielbarkeit, entwickelt nach den Richtlinien von EN 15330-1.',
          pl: 'Teksturowana trawa monofilamentowa premium (styl Mondo) zapewniająca doskonałą grywalność, zaprojektowana zgodnie z wytycznymi EN 15330-1.'
        },
        lighting: { 
          en: '4x 400W professional LED floodlighting (YXR-FL-400W) with linear projection poles, Inventronics/XLG drivers compliant with CE EMC directives.', 
          lt: '4x 400W profesionalus LED apšvietimas (YXR-FL-400W) su tiesiais stulpais, Inventronics/XLG paleidėjai atitinka CE EMC direktyvas.',
          lv: '4x 400W profesionāls LED apgaismojums (YXR-FL-400W) ar taisniem stabiem, Inventronics/XLG droseles atbilst CE EMC direktīvām.',
          et: '4x 400W professionaalne LED-valgustus (YXR-FL-400W) sirgete postidega, Inventronics/XLG draiverid vastavad CE EMC direktiividele.',
          de: '4x 400W professionelle LED-Flutlichtstrahler (YXR-FL-400W) mit linearen Projektionsmasten, Inventronics/XLG-Treiber konform mit den CE-EMV-Richtlinien.',
          pl: '4 profesjonalne reflektory LED 400W (YXR-FL-400W) na prostych masztach, zasilacze Inventronics/XLG zgodne z dyrektywami CE EMC.'
        }
      }
    },
    {
      id: 'ultimate',
      name: {
        en: 'OK Ultimate Panoramic',
        lt: 'OK Ultimate Panoramic',
        lv: 'OK Ultimate Panoramic',
        et: 'OK Ultimate Panoramic',
        de: 'OK Ultimate Panoramic',
        pl: 'Kort OK Ultimate Panoramic'
      },
      desc: {
        en: 'The gold standard. Fully frameless design with zero corner posts or steel pillars on all glass segments. The ultimate view for championship play and luxury indoor padel clubs.',
        lt: 'Aukščiausias standartas. Visiškai berėmė konstrukcija - jokių kampinių stulpų ar metalinių atramų stiklinėse dalyse. Idealiai tinka prestižiniams vidaus klubams.',
        lv: 'Zelta standarts. Pilnībā bezrāmju dizains bez stūra stabiem vai tērauda pīlāriem visos stikla segmentos. Izcils skats čempionātu spēlēm un luksusa iekštelpu padela klubiem.',
        et: 'Kuldne standard. Täielikult raamita disain ilma nurgapostide ja terastugedeta klaasosades. Parim nähtavus meistrivõistluste ja luksuslike siseklubide jaoks.',
        de: 'Der Goldstandard. Vollständig rahmenloses Design ohne Eckpfosten oder Stahlsäulen bei allen Glassegmenten. Die ultimative Sicht für Meisterschaftsspiele und luxuriöse Indoor-Padel-Clubs.',
        pl: 'Złoty standard. Całkowicie bezramowa konstrukcja bez słupków narożnych i stalowych wsporników we wszystkich szklanych segmentach. Niezrównany widok dla rozgrywek mistrzowskich i luksusowych krytych klubów.'
      },
      image: superPanoramicImg,
      specs: {
        frame: { 
          en: 'Ultra-heavy structural frames at joints, 12mm thickness plate bases, mesh panels EN 10223-5 compliant.', 
          lt: 'Ultra stiprūs sujungimo rėmai, 12mm pagrindo plokštės, suvirintas tinklas atitinka EN 10223-5 reikalavimus.',
          lv: 'Īpaši izturīgi strukturālie rāmji savienojuma vietās, 12mm biezas pamatnes plāksnes, sieta paneļi atbilst EN 10223-5.',
          et: 'Eriti tugevad ühendusraamid, 12mm alusplaadid, keevisvõrk vastab EN 10223-5 nõuetele.',
          de: 'Extrem schwere Strukturrahmen an den Verbindungen, 12mm dicke Fundamentplatten, Gitterpaneele konform mit EN 10223-5.',
          pl: 'Ekstremalnie wytrzymałe ramy strukturalne na łączeniach, płyty bazowe o grubości 12 mm, panele siatkowe zgodne z EN 10223-5.'
        },
        glass: { 
          en: '12mm premium tempered safety glass with countersunk structural glass fittings, certified to EN 12150-2 (TÜV Rheinland).', 
          lt: '12mm premium grūdintas stiklas su įleistais tvirtinimais, sertifikuotas pagal EN 12150-2 standartą (TÜV Rheinland).',
          lv: '12mm premium rūdīts drošības stikls ar iegremdētiem stikla stiprinājumiem, sertificēts saskaņā ar EN 12150-2 (TÜV Rheinland).',
          et: '12mm premium karastatud turvaklaas süvistatud klaasikinnitustega, sertifitseeritud vastavalt EN 12150-2-le (TÜV Rheinland).',
          de: '12mm Premium gehärtetes Sicherheitsglas mit versenkten Glasbeschlägen, zertifiziert nach EN 12150-2 (TÜV Rheinland).',
          pl: 'Szkło hartowane bezpieczne premium 12 mm z wpuszczanymi mocowaniami, certyfikowane zgodnie z EN 12150-2 (TÜV Rheinland).'
        },
        turf: { 
          en: 'Tournament-grade textured monofilament turf with optimal sand absorption, designed in compliance with EN 15330-1.', 
          lt: 'Turnyrinė tekstūruota monofilamento danga su puikiu smėlio pasiskirstymu, atitinkanti EN 15330-1.',
          lv: 'Turnīra līmeņa teksturēts monofilamenta zāliens ar optimālu smilšu absorbciju, izstrādāts saskaņā ar EN 15330-1.',
          et: 'Turniiritasemel tekstureeritud monofilamentmuru optimaalse liivajaotusega, vastab EN 15330-1-le.',
          de: 'Turniergeeigneter texturierter Monofilament-Kunstrasen mit optimaler Sandaufnahme, entwickelt nach EN 15330-1.',
          pl: 'Trawa turniejowa teksturowana monofilamentowa o optymalnej absorpcji piasku, zaprojektowana zgodnie z EN 15330-1.'
        },
        lighting: { 
          en: '4x 400W professional linear LED fixtures (YXR-FL-400W), anti-glare curve design, CE EMC compliant, TV broadcast ready.', 
          lt: '4x 400W profesionalūs tiesiniai LED šviestuvai (YXR-FL-400W), atitinka CE EMC reikalavimus, pritaikyta TV transliacijoms be mirgėjimo.',
          lv: '4x 400W profesionāli lineāri LED gaismekļi (YXR-FL-400W), pretapžilbināšanas izliektais dizains, saderīgi ar CE EMC, gatavi TV translācijai.',
          et: '4x 400W professionaalsed lineaarsed LED-valgustid (YXR-FL-400W), pimestamisvastane kaardus disain, CE EMC ühilduv, valmis teleülekanneteks.',
          de: '4x 400W professionelle lineare LED-Leuchten (YXR-FL-400W), blendfreies Kurvendesign, CE-EMV-konform, bereit für Fernsehübertragungen.',
          pl: '4 profesjonalne liniowe oprawy LED 400W (YXR-FL-400W), antyodblaskowa wygięta konstrukcja, zgodne z CE EMC, gotowe do transmisji TV.'
        }
      }
    },
    {
      id: 'portable',
      name: {
        en: 'OK Portable Court',
        lt: 'OK Mobili Aikštelė',
        lv: 'OK Mobilais laukums',
        et: 'OK Mobiilne väljak',
        de: 'OK Portable Platz',
        pl: 'Kort OK Portable'
      },
      desc: {
        en: 'Self-supporting portable court built on a weighted steel base. Uses tempered safety glass and professional padel turf with zero ground anchors required. Ideal for rooftops, plazas, or historic venues.',
        lt: 'Savaime išsibalansuojanti padelio aikštelė ant pasunkinto plieninio pagrindo su grūdintu stiklu ir profesionalia danga. Nereikalauja ankeravimo ar pamatų. Puikiai tinka stogams, aikštėms ir nuomojamoms erdvėms.',
        lv: 'Pašbalstošs mobilais laukums uz nosvērtas tērauda platformas ar rūdītu stiklu un profesionālu zālienu. Nebrīvē nevienu zemes enkuru. Ideāli piemērots jumtiem, laukumiem vai pagaidu vietām.',
        et: 'Isekandev teisaldatav väljak raskusega terasalusel koos karastatud turvaklaasi ja spordimuruga. Ei vaja maapinnale ankurdamist. Ideaalne katustele, väljakutele või ajutistele pindadele.',
        de: 'Freistehender mobiler Padel-Platz auf gewichteter Stahlbasis mit gehärtetem Sicherheitsglas und Profi-Kunstrasen. Erfordert keine Bodenverankerung. Ideal für Dachterrassen, Plätze oder temporäre Veranstaltungsorte.',
        pl: 'Samonośny mobilny kort na dociążonej podstawie stalowej z hartowanym szkłem i profesjonalną trawą. Nie wymaga kotwienia do podłoża. Idealny na dachy, place lub tereny zabytkowe.'
      },
      image: portableImg,
      specs: {
        frame: { 
          en: 'Self-supporting weighted interlocking platform frame in structural carbon steel, mesh panels EN 10223-5 compliant.', 
          lt: 'Savaime atsverianti surenkama platformos konstrukcija iš anglinio plieno, tinklas atitinka EN 10223-5 reikalavimus.',
          lv: 'Pašbalstošs nosvērts savienojams platformas rāmis no strukturālā oglekļa tērauda, sieta paneļi atbilst EN 10223-5.',
          et: 'Isekandev raskusega kokkupandav terasplatvormi konstruktsioon, keevisvõrk vastab EN 10223-5 standarditele.',
          de: 'Selbsttragender, gewichteter, ineinandergreifender Plattformrahmen aus strukturellem Kohlenstoffstahl, Gitterpaneele konform mit EN 10223-5.',
          pl: 'Samonośna, dociążona, modułowa rama platformy ze stali węglowej konstrukcyjnej, panele siatkowe zgodne z EN 10223-5.'
        },
        glass: { 
          en: '12mm tempered safety glass engineered with reinforced structural framing profiles, EN 12150-2 certified (TÜV Rheinland).', 
          lt: '12mm grūdintas stiklas su sustiprintais metaliniais rėmeliais, sertifikuotas pagal EN 12150-2 (TÜV Rheinland).',
          lv: '12mm rūdīts drošības stikls ar pastiprinātiem strukturālā rāmja profiliem, sertificēts saskaņā ar EN 12150-2 (TÜV Rheinland).',
          et: '12mm karastatud turvaklaas tugevdatud metallraamidega, sertifitseeritud vastavalt EN 12150-2-le (TÜV Rheinland).',
          de: '12mm gehärtetes Sicherheitsglas mit verstärkten Strukturrahmenprofilen, zertifiziert nach EN 12150-2 (TÜV Rheinland).',
          pl: 'Szkło hartowane bezpieczne 12 mm zaprojektowane ze wzmocnionymi profilami ramowymi, certyfikowane zgodnie z EN 12150-2 (TÜV Rheinland).'
        },
        turf: { 
          en: 'Standard monofilament padel turf, easy to remove and re-lay, designed to meet EN 15330-1 specifications.', 
          lt: 'Standartinė garbanoto monofilamento danga, lengvai išmontuojama, atitinkanti EN 15330-1 specifikacijas.',
          lv: 'Standarta monofilamenta lokainais zāliens, viegli noņemams un ieklājams, izstrādāts atbilstoši EN 15330-1 specifikācijām.',
          et: 'Standardne kähara kiuga monofilamentmuru, lihtne eemaldada ja uuesti paigaldada, vastab EN 15330-1 nõuetele.',
          de: 'Standardmäßig gekräuselter Monofilament-Kunstrasen, leicht zu entfernen und neu zu verlegen, konform mit EN 15330-1.',
          pl: 'Standardowa trawa kędzierzawa monofilamentowa, łatwa do demontażu i ponownego układania, zaprojektowana zgodnie z wymogami EN 15330-1.'
        },
        lighting: { 
          en: 'Integrated quick-connect 4x 400W LED floodlight poles (YXR-FL-400W), CE EMC compliant modular cabling.', 
          lt: 'Integruoti greito pajungimo 4x 400W LED stulpai (YXR-FL-400W) su CE EMC moduline kabelių sistema.',
          lv: 'Integrēti ātri savienojami 4x 400W LED prožektoru stabi (YXR-FL-400W), CE EMC saderīga moduļu kabeļu sistēma.',
          et: 'Integreeritud kiirpistikuga 4x 400W LED-prožektorite postid (YXR-FL-400W), CE EMC-le vastav modulaarne kaablisüsteem.',
          de: 'Integrierte Schnellverbindungs-LED-Flutlichtmasten 4x 400W (YXR-FL-400W), CE-EMV-konforme modulare Verkabelung.',
          pl: 'Zintegrowane słupki oświetleniowe LED 4x 400W (YXR-FL-400W) z szybkozłączem, modułowe okablowanie zgodne z CE EMC.'
        }
      }
    },
    {
      id: 'platform',
      name: {
        en: 'OK Padel Platform',
        lt: 'OK Padelio Platforma',
        lv: 'OK Padela platforma',
        et: 'OK Padeli platvorm',
        de: 'OK Padel-Plattform',
        pl: 'Platforma OK Padel'
      },
      desc: {
        en: 'A self-supporting weighted platform base. Eliminates the need for concrete base preparation, allowing fast court installation on lawns, asphalt, or unanchored ground surfaces.',
        lt: 'Savaime atsverianti surenkama platforma. Nereikalauja pagrindo betonavimo darbų, todėl aikštelę galima sumontuoti tiesiai ant vejos, asfalto ar nelygaus paviršiaus.',
        lv: 'Pašbalstoša, nosvērta platformas pamatne. Novērš nepieciešamību pēc betona pamatnes sagatavošanas, ļaujot ātri uzstādīt laukumu uz zālāja, asfalta vai neanchorētām zemes virsmām.',
        et: 'Isekandev raskusega kokkupandav alusplatvorm. Välistab vajaduse betoonaluse järele, võimaldades kiiret paigaldust murule, asfaltile või ankurdamata pinnasele.',
        de: 'Eine selbsttragende, gewichtete Plattformbasis. Macht eine Betonfundierung überflüssig und ermöglicht eine schnelle Platzinstallation auf Rasen, Asphalt oder unverankerten Bodenflächen.',
        pl: 'Samonośna, dociążona platforma bazowa. Eliminuje potrzebę przygotowywania podbudowy betonowej, umożliwiając szybki montaż kortu na trawnikach, asfalcie lub niezakotwionych powierzchniach gruntowych.'
      },
      image: platformImg,
      specs: {
        frame: { 
          en: 'Weighted modular interlocking base platform frame in structural carbon steel with pre-installed leveling system, EN 10223-5 compliant.', 
          lt: 'Surenkama modulinė plieno platforma su integruota niveliavimo sistema, atitinka EN 10223-5 standartą.',
          lv: 'Nosvērts modulārs savienojams platformas rāmis no strukturālā oglekļa tērauda ar iepriekš uzstādītu līmeņošanas sistēmu, atbilst EN 10223-5.',
          et: 'Kokkupandav terasplatvorm integreeritud loodimissüsteemiga, vastab EN 10223-5 standardile.',
          de: 'Gewichteter modularer, ineinandergreifender Plattformrahmen aus strukturellem Kohlenstoffstahl mit vorinstalliertem Nivelliersystem, konform mit EN 10223-5.',
          pl: 'Dociążona modułowa platforma bazowa ze stali węglowej konstrukcyjnej ze zintegrowanym systemem poziomowania, zgodna z EN 10223-5.'
        },
        glass: { 
          en: '12mm tempered safety glass panels, certified to EN 12150-2 safety standards (TÜV Rheinland).', 
          lt: '12mm grūdintas saugus stiklas, sertifikuotas pagal EN 12150-2 saugos standartą (TÜV Rheinland).',
          lv: '12mm rūdīta drošības stikla paneļi, sertificēti saskaņā ar EN 12150-2 drošības standartiem (TÜV Rheinland).',
          et: '12mm karastatud turvaklaas, sertifitseeritud vastavalt EN 12150-2 standardile (TÜV Rheinland).',
          de: '12mm gehärtete Sicherheitsglasscheiben, zertifiziert nach den Sicherheitsnormen EN 12150-2 (TÜV Rheinland).',
          pl: 'Panele ze szkła bezpiecznego hartowanego 12 mm, certyfikowane zgodnie z normami bezpieczeństwa EN 12150-2 (TÜV Rheinland).'
        },
        turf: { 
          en: 'Professional textured monofilament turf (12mm height), designed in accordance with EN 15330-1 specifications.', 
          lt: 'Profesionali tekstūruota monofilamento danga (12mm), atitinkanti EN 15330-1 standartus.',
          lv: 'Profesionāls teksturēts monofilamenta zāliens (12mm augstums), izstrādāts saskaņā ar EN 15330-1 specifikācijām.',
          et: 'Professionaalne tekstureeritud monofilamentmuru (kõrgus 12mm), vastab EN 15330-1 standarditele.',
          de: 'Professioneller texturierter Monofilament-Kunstrasen (12mm Höhe), entwickelt gemäß den Spezifikationen nach EN 15330-1.',
          pl: 'Profesjonalna teksturowana trawa monofilamentowa (wysokość 12 mm), zaprojektowana zgodnie ze specyfikacjami EN 15330-1.'
        },
        lighting: { 
          en: '4x 400W anti-glare professional LED floodlights (YXR-FL-400W), CE EMC compliant.', 
          lt: '4x 400W profesionalūs LED prožektoriai (YXR-FL-400W), atitinkantys CE EMC direktyvas.',
          lv: '4x 400W pretapžilbināšanas profesionālie LED prožektori (YXR-FL-400W), atbilst CE EMC.',
          et: '4x 400W professionaalsed LED-prožektorid (YXR-FL-400W), vastavad CE EMC nõuetele.',
          de: '4x 400W blendfreie professionelle LED-Flutlichtstrahler (YXR-FL-400W), CE-EMV-konform.',
          pl: '4 profesjonalne reflektory LED 400W (YXR-FL-400W) antyodblaskowe, zgodne z CE EMC.'
        }
      }
    },
    {
      id: 'movable_classic',
      name: {
        en: 'OK Movable Court (Mobile)',
        lt: 'OK Mobilioji Aikštelė',
        lv: 'OK Mobilais laukums',
        et: 'OK Mobiilne väljak',
        de: 'OK Mobiler Padel Platz',
        pl: 'Mobilny Kort OK Padel'
      },
      desc: {
        en: 'Ultra-portable mobile padel court designed for rapid pop-up setup. Features impact-resistant polycarbonate panels (no glass) and interlocking synthetic sport flooring (no artificial grass or sand), requiring zero ground drilling or heavy base preparation.',
        lt: 'Mobili padelio aikštelė, sukurta itin greitam surinkimui. Naudoja smūgiams atsparias polikarbonato plokštes (vietoj stiklo) ir modulinius sportinius kilimėlius (be dirbtinės žolės ir smėlio), todėl nereikia jokių pamatų ar gręžimo darbų.',
        lv: 'Mobilais padela laukums ātrai uzstādīšanai. Izmanto triecienizturīgus polikarbonāta paneļus (bez stikla) un modulāru sintētisko sporta segumu (bez mākslīgā zālāja un smiltīm), neprasot urbšanu zemē vai betona pamatni.',
        et: 'Mobiilne padeliväljak kiireks paigalduseks. Kasutab löögikindlaid polükarbonaatpaneele (mitte klaasi) ja moodulspordikatet (ilma kunstmuruta ja liivata), mis ei vaja maapinna puurimist ega betoonalust.',
        de: 'Extrem mobiler Padel-Platz für schnelle Pop-up-Installationen. Ausgestattet mit schlagfesten Polycarbonat-Wandpanelen (kein Glas) und einem modularen Sportboden (kein Kunstrasen und kein Sand), ganz ohne Bodenbohrungen.',
        pl: 'Mobilny kort do padla stworzony do szybkiego montażu. Wyposażony w nietłukące płyty z poliwęglanu (zamiast szkła) oraz modułową nawierzchnię sportową (bez sztucznej trawy i piasku), nie wymaga wiercenia w podłożu.'
      },
      image: movableClassicImg,
      specs: {
        frame: { 
          en: 'Hot-dip galvanized Q235 steel frame with click-in modular assembly and stabilizing feet for drill-free setup.',
          lt: 'Karštai cinkuotas Q235 plieno rėmas su greito sujungimo sistema ir stabilizavimo kojelėmis (montavimas be gręžimo).',
          lv: 'Karsti cinkots Q235 tērauda rāmis ar ātrās savienošanas sistēmu un stabilizējošām kājām (montāža bez urbšanas).',
          et: 'Kuumtsingitud Q235 terasraam klõpskinnituse ja stabiliseerivate jalgadega (paigaldus puurimata).',
          de: 'Feuerverzinkter Q235-Stahlrahmen mit Klicksystem und Stabilisierungsfüßen für bohrfreie Montage.',
          pl: 'Ocynkowana ogniowo rama ze stali Q235 z systemem modułowym i stopkami stabilizującymi (montaż bez wiercenia).'
        },
        glass: { 
          en: 'Lightweight Polycarbonate Sheets (No Glass): 250x stronger than glass, virtually unbreakable, pre-assembled into frame modules for fast installation.',
          lt: 'Polikarbonato plokštės (ne stiklas): 250 k. atsparesnės smūgiams nei stiklas, nešukiškos ir iš anksto sumontuotos į rėmo modulius.',
          lv: 'Polikarbonāta paneļi (bez stikla): 250 reizes izturīgāki par stiklu, nesaplēšami un iepriekš samontēti rāmju moduļos.',
          et: 'Polükarbonaadist paneelid (mitte klaas): 250 korda löögikindlamad kui klaas, kerged ja raamimoodulitesse eeltulnud.',
          de: 'Polycarbonat-Platten (kein Glas): 250-mal stoßfester als Glas, bruchsicher und für schnelle Montage im Rahmen vormontiert.',
          pl: 'Płyty z poliwęglanu (zamiast szkła): 250-krotnie bardziej odporne na uderzenia niż szkło, nietłukące i wstępnie zmontowane w ramy.'
        },
        turf: { 
          en: 'Modular Sport Surface (No Grass): Interlocking high-density synthetic sport tiles (zero artificial grass or sand required), moisture and weather resistant.',
          lt: 'Modulinė sporto danga (be žolės): Sintetinės sportinės plytelės (nereikia dirbtinės žolės ar smėlio), atspari drėgmei ir atmosferos poveikiui.',
          lv: 'Modulārs sporta segums (bez zālāja): Sintētiskās sporta flīzes (nav nepieciešams mākslīgais zāliens vai smiltis), izturīgs pret mitrumu.',
          et: 'Modulaarne spordikate (ilma muruta): Sünteetilised spordiplaadid (ei vaja kunstmuru ega liiva), niiskus- ja ilmastikukindel.',
          de: 'Modularer Sportboden (kein Kunstrasen): Ineinandergreifende synthetische Sportfliesen (kein Kunstrasen oder Sand erforderlich), wetter- und feuchtigkeitsbeständig.',
          pl: 'Modułowa nawierzchnia sportowa (bez trawy): Panele syntetyczne (nie wymaga sztucznej trawy ani piasku), odporna na wilgoć i warunki atmosferyczne.'
        },
        lighting: { 
          en: '4x 200W/300W high-output LED floodlights (30,000+ lumens), CE EMC certified with modular plug-and-play wiring.',
          lt: '4x 200W/300W galingi LED prožektoriai (30 000+ liumenų), CE EMC sertifikatas su moduliniais kištukiniais kabeliais.',
          lv: '4x 200W/300W LED prožektori (30 000+ lūmeni), CE EMC sertificēti ar moduļu kabeļiem.',
          et: '4x 200W/300W võimsad LED-prožektorid (30 000+ luumenit), CE EMC sertifikaat pistikühendusega.',
          de: '4x 200W/300W Hochleistungs-LED-Flutlichtstrahler (30.000+ Lumen), CE-EMV-zertifiziert mit Plug-and-Play-Verkabelung.',
          pl: '4 reflektory LED 200W/300W (30 000+ lumenów), certyfikat CE EMC z okablowaniem plug-and-play.'
        }
      }
    }
  ];

  return (
    <section id="products" className="products-section">
      <div className="container">
        <h2 className="section-title text-gradient">{t[currentLang].title}</h2>
        <p className="section-subtitle">{t[currentLang].subtitle}</p>

        <div className="grid-3 products-grid">
          {products.map((product) => (
            <div key={product.id} className="glass-card product-card">
              <div className="product-img-wrapper">
                <img src={product.image} alt={product.name[currentLang]} className="product-img" />
              </div>
              <div className="product-info">
                <h3>{product.name[currentLang]}</h3>
                <p className="product-desc">{product.desc[currentLang]}</p>
                <button 
                  onClick={() => setActiveProduct(product)} 
                  className="btn btn-secondary btn-full"
                >
                  {t[currentLang].viewSpecs}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal specs sheet */}
      {activeProduct && (
        <div className="modal-overlay" onClick={() => setActiveProduct(null)}>
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActiveProduct(null)}>
              {t[currentLang].close} &times;
            </button>
            
            <div className="modal-body-layout">
              <div className="modal-img-container">
                <img src={activeProduct.image} alt={activeProduct.name[currentLang]} />
              </div>
              
              <div className="modal-details">
                <h2>{activeProduct.name[currentLang]}</h2>
                <p className="modal-desc">{activeProduct.desc[currentLang]}</p>
                
                <div className="spec-list">
                  <h4 className="spec-heading">{t[currentLang].specifications}</h4>
                  
                  <div className="spec-item">
                    <strong>{t[currentLang].frame}:</strong>
                    <span>{activeProduct.specs.frame[currentLang]}</span>
                  </div>
                  <div className="spec-item">
                    <strong>{t[currentLang].glass}:</strong>
                    <span>{activeProduct.specs.glass[currentLang]}</span>
                  </div>
                  <div className="spec-item">
                    <strong>{t[currentLang].turf}:</strong>
                    <span>{activeProduct.specs.turf[currentLang]}</span>
                  </div>
                  <div className="spec-item">
                    <strong>{t[currentLang].lighting}:</strong>
                    <span>{activeProduct.specs.lighting[currentLang]}</span>
                  </div>
                </div>

                <a 
                  href="#calculator" 
                  onClick={() => setActiveProduct(null)} 
                  className="btn btn-primary cta-btn"
                >
                  {t[currentLang].cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx="true">{`
        .products-section {
          background-color: var(--bg-main);
        }

        .section-subtitle {
          text-align: center;
          color: var(--text-muted);
          margin-top: -30px;
          margin-bottom: 60px;
          font-size: 1.1rem;
        }

        .products-grid {
          margin-top: 40px;
        }

        .product-card {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .product-img-wrapper {
          width: 100%;
          height: 220px;
          overflow: hidden;
          background-color: var(--bg-sub);
          border-bottom: 1px solid var(--border);
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }

        .product-card:hover .product-img {
          transform: scale(1.05);
        }

        .product-info {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          gap: 16px;
        }

        .product-info h3 {
          font-size: 1.35rem;
          color: #fff;
        }

        .product-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.5;
          flex-grow: 1;
        }

        .btn-full {
          width: 100%;
          text-align: center;
        }

        /* Modal styling */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(6, 9, 19, 0.9);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          width: 100%;
          max-width: 950px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          padding: 40px;
          border-color: var(--border-hover);
        }

        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
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

        .close-btn:hover {
          color: #fff;
        }

        .modal-body-layout {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          margin-top: 20px;
        }

        .modal-img-container {
          width: 100%;
          height: 100%;
          min-height: 280px;
          max-height: 400px;
          border-radius: var(--border-radius);
          overflow: hidden;
          border: 1px solid var(--border);
        }

        .modal-img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-details {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .modal-details h2 {
          text-align: left;
          margin: 0;
        }

        .modal-details h2::after {
          display: none;
        }

        .modal-desc {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.6;
        }

        .spec-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          padding: 20px;
          border-radius: var(--border-radius);
        }

        .spec-heading {
          font-size: 1.1rem;
          color: #fff;
          margin-bottom: 4px;
        }

        .spec-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 0.9rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
          padding-bottom: 10px;
        }

        .spec-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .spec-item strong {
          color: var(--primary);
        }

        .spec-item span {
          color: var(--text-main);
        }

        .cta-btn {
          align-self: flex-start;
          margin-top: 10px;
        }

        @media (max-width: 850px) {
          .modal-body-layout {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .modal-img-container {
            min-height: 200px;
          }
        }
      `}</style>
    </section>
  );
}
