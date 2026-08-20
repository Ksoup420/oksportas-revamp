import React, { useState } from 'react';

// Email submission configuration:
// To enable email submissions, sign up at https://formspree.io/ or https://web3forms.com/
// and set your provider ('formspree', 'web3forms' or 'local_php') and form ID / access key below.
const FORM_ENDPOINT_PROVIDER = 'local_php'; 
const FORM_API_KEY = 'ba066d07-8524-459a-b3df-f1cd5cc3b3f4'; // Put your Formspree Form ID or Web3Forms Access Key here (linked to oksportas@gmail.com)

export default function PadelCalculator({ currentLang }) {
  const [step, setStep] = useState(1);
  const [courtType, setCourtType] = useState('classic');
  const [quantity, setQuantity] = useState(1);
  const [turf, setTurf] = useState('standard');
  const [lights, setLights] = useState('standard'); // 'none', 'standard'
  const [frameFinish, setFrameFinish] = useState('standard'); // 'standard', 'hotdip'
  const [glassType, setGlassType] = useState('tempered'); // 'tempered', 'laminated'
  const [requireDelivery, setRequireDelivery] = useState(true);
  const [requireAssembly, setRequireAssembly] = useState(true);
  const [isOutdoor, setIsOutdoor] = useState(true);
  const [concreteWork, setConcreteWork] = useState(false);
  const [loading, setLoading] = useState(false);

  // Simple contact prefill state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Base prices excluding lighting (Excel-based from Kom 2026)
  const basePrices = {
    classic: 15860,       // €16,700 - €840 (Standard LED materials)
    panoramic: 15450,     // €16,290 - €840 (Standard LED materials)
    ultimate: 16250,      // €17,090 - €840 (Standard LED materials)
    portable: 20650,      // €21,490 - €840 (Standard LED materials)
    platform: 29000,      // €29,840 - €840 (Standard LED materials)
    movable_classic: 16450 // €17,290 - €840 (Standard LED materials)
  };

  const deliveryCostPerCourt = 600; // Transport: €600 per court

  const assemblySurcharges = {
    classic: 2350,        // €2,950 (Total assembly - 600 transport)
    panoramic: 2550,      // €3,150 - 600
    ultimate: 2750,       // €3,350 - 600
    portable: 2850,       // €3,450 - 600
    platform: 3800,       // €4,400 - 600
    movable_classic: 3550  // €4,150 - 600
  };

  // LED System Surcharges (Materials and Installation detailed)
  const ledPricing = {
    none: {
      classic: { materials: 0, assembly: 0 },
      panoramic: { materials: 0, assembly: 0 },
      ultimate: { materials: 0, assembly: 0 },
      portable: { materials: 0, assembly: 0 },
      platform: { materials: 0, assembly: 0 },
      movable_classic: { materials: 0, assembly: 0 }
    },
    standard: {
      classic: { materials: 840, assembly: 550 },
      panoramic: { materials: 840, assembly: 550 },
      ultimate: { materials: 840, assembly: 550 },
      portable: { materials: 840, assembly: 550 },
      platform: { materials: 840, assembly: 550 },
      movable_classic: { materials: 840, assembly: 550 }
    }
  };

  const turfSurcharge = {
    standard: 0,
    pro: 1800            // Mondo style texturized turf upgrade
  };

  const frameFinishSurcharges = {
    standard: 0,
    hotdip: 2500         // Hot-dip Galvanization surcharge (karštas cinkavimas)
  };

  const glassTypeSurcharges = {
    tempered: 0,
    laminated: 2000      // Laminated glass surcharge (laminuotas stiklas)
  };

  const concreteWorkSurcharge = 16000;      // Pagrindo įrengimas: €16,000

  const handleCourtTypeChange = (type) => {
    setCourtType(type);
    
    // Reset concreteWork if court type doesn't support it
    if (type === 'portable' || type === 'platform') {
      setConcreteWork(false);
    }
  };

  const calculateSubtotal = () => {
    let courtCost = basePrices[courtType];
    
    courtCost += turfSurcharge[turf];
    courtCost += frameFinishSurcharges[frameFinish];
    courtCost += glassTypeSurcharges[glassType];
    courtCost += ledPricing[lights][courtType].materials;
    
    if (concreteWork && courtType !== 'portable' && courtType !== 'platform') {
      courtCost += concreteWorkSurcharge;
    }
    
    let total = courtCost * quantity;
    
    if (requireDelivery) {
      total += deliveryCostPerCourt * quantity;
    }
    
    if (requireAssembly) {
      let assemblyCost = assemblySurcharges[courtType];
      
      assemblyCost += ledPricing[lights][courtType].assembly;
      
      total += assemblyCost * quantity;
    }

    // Apply volume discount
    if (quantity > 1) {
      total = total * 0.95; // 5% discount
    }

    return Math.round(total);
  };

  const calculateUndiscounted = () => {
    let courtCost = basePrices[courtType];
    courtCost += turfSurcharge[turf];
    courtCost += frameFinishSurcharges[frameFinish];
    courtCost += glassTypeSurcharges[glassType];
    courtCost += ledPricing[lights][courtType].materials;
    
    if (concreteWork && courtType !== 'portable' && courtType !== 'platform') {
      courtCost += concreteWorkSurcharge;
    }
    
    let total = courtCost * quantity;
    
    if (requireDelivery) {
      total += deliveryCostPerCourt * quantity;
    }
    
    if (requireAssembly) {
      let assemblyCost = assemblySurcharges[courtType];
      assemblyCost += ledPricing[lights][courtType].assembly;
      total += assemblyCost * quantity;
    }
    
    return Math.round(total);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!contactName || !contactEmail) return;

    setLoading(true);
    
    const estimateDetails = {
      subject: `${activeT.emailSubject} - ${contactName}`,
      name: contactName,
      email: contactEmail,
      court_model: courtType.toUpperCase(),
      quantity: quantity,
      turf_type: turf === 'pro' ? activeT.emailTurfPro : activeT.emailTurfStandard,
      lighting_system: lights === 'none' ? activeT.emailLedNone : activeT.emailLedStandard,
      frame_finish: frameFinish === 'hotdip' ? activeT.emailFrameHotDip : activeT.emailFrameStandard,
      glass_type: glassType === 'laminated' ? activeT.emailGlassLaminated : activeT.emailGlassTempered,
      concrete_foundations: (courtType === 'portable' || courtType === 'platform') ? activeT.emailNotApplicable : (concreteWork ? activeT.emailYes : activeT.emailNo),
      delivery_required: requireDelivery ? activeT.emailYes : activeT.emailNo,
      installation_required: requireAssembly ? activeT.emailYes : activeT.emailNo,
      total_estimated_price: `${calculateSubtotal().toLocaleString()} €`,
      details_url: window.location.href
    };

    if (FORM_ENDPOINT_PROVIDER === 'local_php') {
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        // Simulate local host success for testing
        setTimeout(() => {
          setLoading(false);
          setSubmitted(true);
        }, 1000);
      } else {
        try {
          const response = await fetch('send_mail.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              type: 'estimate',
              lang: currentLang,
              website_url: websiteUrl,
              security_token: 'ok-sportas-2026-secure',
              ...estimateDetails
            })
          });
          const data = await response.json();
          if (response.ok && data.success) {
            setSubmitted(true);
            setWebsiteUrl('');
          } else {
            alert(data.message || 'Failed to send quote request.');
          }
        } catch (error) {
          console.error('Error submitting estimate:', error);
          alert('An error occurred. Please try again.');
        } finally {
          setLoading(false);
        }
      }
    } else if (FORM_ENDPOINT_PROVIDER === 'formspree' && FORM_API_KEY) {
      try {
        const response = await fetch(`https://formspree.io/f/${FORM_API_KEY}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(estimateDetails)
        });
        if (response.ok) {
          setSubmitted(true);
        } else {
          alert('Failed to send quote request. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting estimate:', error);
        alert('An error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    } else if (FORM_ENDPOINT_PROVIDER === 'web3forms' && FORM_API_KEY) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: FORM_API_KEY,
            ...estimateDetails
          })
        });
        const data = await response.json();
        if (data.success) {
          setSubmitted(true);
        } else {
          alert(data.message || 'Failed to send quote request.');
        }
      } catch (error) {
        console.error('Error submitting estimate:', error);
        alert('An error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      // Simulate API submit delay
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 1000);
    }
  };

  const t = {
    en: {
      title: 'Padel Court Cost Calculator',
      subtitle: 'Get an instant, customized cost estimation for your project.',
      step1: 'Court Model',
      step2: 'Options & Upgrades',
      step3: 'Location & Assembly',
      step4: 'Estimate Result',
      next: 'Next Step',
      prev: 'Previous',
      selectModel: 'Select Padel Court Design:',
      classic: 'OK Classic (Robust Pillar Frame)',
      panoramic: 'OK Panoramic (Frameless End Wall)',
      ultimate: 'OK Ultimate Panoramic (100% Frameless)',
      portable: 'OK Portable (Self-Supporting Mobile)',
      platform: 'OK Padel Platform (No Concrete Base)',
      movable_classic: 'OK Movable Classic (Temporary Events)',
      qty: 'Number of Courts:',
      turfLabel: 'Turf Type:',
      standardTurf: 'Standard Monofilament Turf',
      proTurf: 'Premium Texturized Turf (Mondo Style) (+1,800€)',
      lightLabel: 'Lighting System:',
      ledNone: 'No LED lighting (Structure only)',
      ledStandard: 'Professional LED Lighting System (4x 400W Floodlights)',
      frameFinishLabel: 'Metal Frame Anti-Corrosion Treatment:',
      frameStandard: 'Standard Pre-Galvanized Frame (Perfect for indoor and standard outdoor installations)',
      frameHotDip: 'Premium Hot-dip Galvanized Frame (Recommended only for high-humidity or coastal/sea areas) (+2,500€)',
      glassLabel: 'Glass Panel Options:',
      glassTempered: 'Standard Tempered Safety Glass (12mm)',
      glassLaminated: 'Laminated Tempered Safety Glass (Double pane safety film) (+2,000€)',
      outdoorLabel: 'Where will it be installed?',
      outdoor: 'Outdoor Installation',
      indoor: 'Indoor (Under cover / indoor arena)',
      concreteLabel: 'Do you require Ground/Concrete Base construction?',
      concreteYes: 'Yes, full concrete foundations & block paving prep (+16,000€/court)',
      concreteNo: 'No, base already exists or handled locally',
      deliveryLabel: 'Do you require Delivery & Transport?',
      deliveryYes: 'Yes, secure freight transport to site (+600€/court)',
      deliveryNo: 'No, self-pickup (Ex-works factory)',
      assemblyLabel: 'Do you require Professional Assembly & Installation?',
      assemblyYes: 'Yes, full on-site installation by our crew',
      assemblyNo: 'No, self-installation (structure supply only)',
      estPrice: 'Estimated Cost:',
      volumeDiscount: '5% multi-court discount applied!',
      contactTitle: 'Request Formal Proposal',
      contactDesc: 'Submit your contact information. Our team will verify technical specs and send a detailed official quote.',
      name: 'Full Name',
      email: 'Email Address',
      submit: 'Send Quote Request',
      success: 'Thank you! Our Project Manager will contact you with a formal quote within 24 hours.',
      breakdownTitle: 'Estimation Breakdown',
      install: 'install',
      courtBase: 'Court (Base)',
      turfUpgrade: 'Premium Texturized Turf Upgrade',
      hotDipFinish: 'Hot-dip Galvanization Finish',
      laminatedGlassUpgrade: 'Laminated Safety Glass Upgrade',
      ledLightingSummary: 'Professional LED Lighting (4x 400W)',
      ledInstallSummary: 'LED Lighting Installation',
      concreteWorkSummary: 'Ground base preparation & paving',
      deliverySummary: 'Delivery & transport',
      assemblySummary: 'Court assembly & installation',
      discountSummary: 'Multi-court discount (5%)',
      sending: 'Sending...',
      emailSubject: 'New Padel Court Estimate Request',
      emailTurfPro: 'Premium Texturized (Mondo Style)',
      emailTurfStandard: 'Standard Monofilament',
      emailLedNone: 'None',
      emailLedStandard: 'Professional LED (4x 400W)',
      emailFrameHotDip: 'Hot-dip Galvanized',
      emailFrameStandard: 'Standard Pre-Galvanized',
      emailGlassLaminated: 'Laminated Safety',
      emailGlassTempered: 'Standard Tempered',
      emailNotApplicable: 'Not Applicable',
      emailYes: 'Yes',
      emailNo: 'No',
    },
    lt: {
      title: 'Padelio aikštelių kainos skaičiuoklė',
      subtitle: 'Gaukite preliminarią jūsų projekto sąmatą realiuoju laiku.',
      step1: 'Aikštelės modelis',
      step2: 'Priedai ir atnaujinimai',
      step3: 'Montavimas ir vieta',
      step4: 'Sąmatos rezultatas',
      next: 'Kitas žingsnis',
      prev: 'Atgal',
      selectModel: 'Pasirinkite aikštelės modelį:',
      classic: 'OK Classic (Tvirtas ir standartinis)',
      panoramic: 'OK Panoramic (Berėmis galinis stiklas)',
      ultimate: 'OK Ultimate Panoramic (Visiškai berėmė)',
      portable: 'OK Mobili aikštelė (Savaime atsverianti)',
      platform: 'OK Padelio platforma (Nereikia betonuoti)',
      movable_classic: 'OK Mobili Classic aikštelė (Laikiniems renginiems)',
      qty: 'Aikštelių skaičius:',
      turfLabel: 'Vejos danga:',
      standardTurf: 'Standartinis monofilamentas',
      proTurf: 'Premium tekstūruotas monofilamentas (+1,800€)',
      lightLabel: 'Apšvietimo sistema:',
      ledNone: 'Be LED apšvietimo (tik aikštelės konstrukcija)',
      ledStandard: 'Profesionali LED apšvietimo sistema (4 vnt. 400W prožektoriai)',
      frameFinishLabel: 'Metalo rėmo apsauga nuo korozijos:',
      frameStandard: 'Standartinė cinkuota konstrukcija (Puikiai tinka vidaus ir įprastoms lauko aikštelėms)',
      frameHotDip: 'Karštas cinkavimas (Rekomenduojama tik pajūryje ir didelės drėgmės vietose) (+2,500€)',
      glassLabel: 'Grūdinto stiklo parinktys:',
      glassTempered: 'Standartinis grudintas saugus stiklas (12mm)',
      glassLaminated: 'Laminuotas grūdintas stiklas (su apsaugine PVB plėvele) (+2,000€)',
      outdoorLabel: 'Kur aikštelė bus statoma?',
      outdoor: 'Lauke',
      indoor: 'Viduje (Vidaus arenoje ar po stogu)',
      concreteLabel: 'Ar reikalingi betonavimo ir aikštelės pagrindo įrengimo darbai?',
      concreteYes: 'Taip, įrengti pamatų rostverką ir paruošti pagrindą (+16,000€/aikštelei)',
      concreteNo: 'Ne, pagrindą turime arba pasiruošime patys',
      deliveryLabel: 'Ar reikalingas pristatymas / transportavimas?',
      deliveryYes: 'Taip, saugus transportavimas iki vietos (+600€/aikštelei)',
      deliveryNo: 'Ne, atsiimsime patys (Ex-works gamykla)',
      assemblyLabel: 'Ar reikalingas profesionalus aikštelės montavimas?',
      assemblyYes: 'Taip, profesionalus montavimas objekte',
      assemblyNo: 'Ne, montuosime patys (tik konstrukcijos tiekimas)',
      estPrice: 'Preliminari kaina:',
      volumeDiscount: 'Pritaikyta 5% nuolaida perkant daugiau nei 1 aikštelę!',
      contactTitle: 'Gauti oficialų pasiūlymą',
      contactDesc: 'Pateikite savo kontaktus ir wir paruošime oficialią tikslią sąmatą pagal jūsų poreikius.',
      name: 'Vardas, Pavardė',
      email: 'El. pašto adresas',
      submit: 'Siųsti užklausą',
      success: 'Ačiū! Projekto vadovas susisieks su oficialiu pasiūlymu per 24 valandas.',
      breakdownTitle: 'Kainos suvestinė',
      install: 'montavimas',
      courtBase: 'Aikštelė (Bazė)',
      turfUpgrade: 'Premium tekstūruotos vejos danga',
      hotDipFinish: 'Karšto cinkavimo konstrukcija',
      laminatedGlassUpgrade: 'Laminuotas saugus stiklas',
      ledLightingSummary: 'Profesionali LED apšvietimo sistema (4 vnt.)',
      ledInstallSummary: 'LED apšvietimo montavimas',
      concreteWorkSummary: 'Pagrindo betonavimas ir trinkelių klojimas',
      deliverySummary: 'Pristatymas ir transportavimas',
      assemblySummary: 'Aikštelės montavimo darbai',
      discountSummary: 'Nuolaida perkant kelias aikšteles (5%)',
      sending: 'Siunčiama...',
      emailSubject: 'Nauja padelio aikštelės užklausa',
      emailTurfPro: 'Premium tekstūruotas monofilamentas (Mondo tipo)',
      emailTurfStandard: 'Standartinis monofilamentas',
      emailLedNone: 'Nėra',
      emailLedStandard: 'Profesionalus LED apšvietimas (4 vnt. 400W)',
      emailFrameHotDip: 'Karštas cinkavimas',
      emailFrameStandard: 'Standartinis cinkavimas',
      emailGlassLaminated: 'Laminuotas stiklas',
      emailGlassTempered: 'Grūdintas stiklas',
      emailNotApplicable: 'Netaikoma',
      emailYes: 'Taip',
      emailNo: 'Ne',
    },
    lv: {
      title: 'Padela laukuma tāmes kalkulators',
      subtitle: 'Saņemiet tūlītēju, pielāgotu izmaksu tāmi savam projektam.',
      step1: 'Laukuma modelis',
      step2: 'Aprīkojums & uzlabojumi',
      step3: 'Montāža & vieta',
      step4: 'Tāmes rezultāts',
      next: 'Nākamais solis',
      prev: 'Atpakaļ',
      selectModel: 'Izvēlieties padela laukuma dizainu:',
      classic: 'OK Classic (Izturīgs pīlāru rāmis)',
      panoramic: 'OK Panoramic (Bezrāmju galējā siena)',
      ultimate: 'OK Ultimate Panoramic (100% bezrāmju)',
      portable: 'OK Portable (Pašbalstošs mobilais)',
      platform: 'OK Padel Platform (Bez betona pamatnes)',
      movable_classic: 'OK Movable Classic (Laicīgiem pasākumiem)',
      qty: 'Laukumu skaits:',
      turfLabel: 'Zāliena tips:',
      standardTurf: 'Standarta monofilamenta zāliens',
      proTurf: 'Premium teksturēts zāliens (Mondo stils) (+1,800€)',
      lightLabel: 'Apgaismojuma sistēma:',
      ledNone: 'Bez LED apgaismojuma (tikai konstrukcija)',
      ledStandard: 'Profesionāla LED apgaismojuma sistēma (4x 400W prožektori)',
      frameFinishLabel: 'Metāla rāmja pretkorozijas apstrāde:',
      frameStandard: 'Standarta cinkots rāmis (Piemērots iekštelpām un parastiem āra apstākļiem)',
      frameHotDip: 'Premium karsti cinkots rāmis (Ieteicams tikai augsta mitruma vai piekrastes/jūras zonās) (+2,500€)',
      glassLabel: 'Stikla paneļu izvēle:',
      glassTempered: 'Standarta rūdīts drošības stikls (12mm)',
      glassLaminated: 'Laminēts rūdīts drošības stikls (dubultā plēve) (+2,000€)',
      outdoorLabel: 'Kur tas tiks uzstādīts?',
      outdoor: 'Uzstādīšana ārā',
      indoor: 'Uzstādīšana iekštelpās (Hallē vai zem jumta)',
      concreteLabel: 'Vai nepieciešams izbūvēt betona pamatni?',
      concreteYes: 'Jā, pilna betona pamatu izbūve un bruģēšana (+16,000€/laukumam)',
      concreteNo: 'Nē, pamatne jau eksistē vai tiks sagatavota lokāli',
      deliveryLabel: 'Vai nepieciešama piegāde un transports?',
      deliveryYes: 'Jā, drošs kravas transports līdz objektam (+600€/laukumam)',
      deliveryNo: 'Nē, pašizvešana (no ražotnes)',
      assemblyLabel: 'Vai nepieciešama profesionāla montāža un uzstādīšana?',
      assemblyYes: 'Jā, pilna uzstādīšana objektā (veic mūsu komanda)',
      assemblyNo: 'Nē, montēsim paši (tikai materiālu piegāde)',
      estPrice: 'Paredzamās izmaksas:',
      volumeDiscount: 'Piemērota 5% vairāku laukumu atlaide!',
      contactTitle: 'Pieprasīt oficiālu piedāvājumu',
      contactDesc: 'Iesniedziet savu kontaktinformāciju. Mūsu komanda pārbaudīs tehniskās specifikācijas un nosūtīs detalizētu oficiālu piedāvājumu.',
      name: 'Vārds, Uzvārds',
      email: 'E-pasta adrese',
      submit: 'Nosūtīt pieprasījumu',
      success: 'Paldies! Mūsu projekta vadītājs sazināsies ar jums, nosūtot oficiālu tāmi 24 stundu laikā.',
      breakdownTitle: 'Tāmes kopsavilkums',
      install: 'uzstādīšana',
      courtBase: 'laukums (bāze)',
      turfUpgrade: 'Premium teksturētā zāliena uzlabojums',
      hotDipFinish: 'Karstās cinkošanas apstrāde',
      laminatedGlassUpgrade: 'Laminētā drošības stikla uzlabojums',
      ledLightingSummary: 'Profesionāls LED apgaismojums (4x 400W)',
      ledInstallSummary: 'LED apgaismojuma uzstādīšana',
      concreteWorkSummary: 'Pamatu sagatavošana un bruģēšana',
      deliverySummary: 'Piegāde un transports',
      assemblySummary: 'Laukuma montāža un uzstādīšana',
      discountSummary: 'Vairāku laukumu atlaide (5%)',
      sending: 'Sūta...',
      emailSubject: 'Jauns padela laukuma tāmes pieprasījums',
      emailTurfPro: 'Premium teksturēts (Mondo stils)',
      emailTurfStandard: 'Standarta monofilaments',
      emailLedNone: 'Nav',
      emailLedStandard: 'Profesionāls LED apgaismojums (4x 400W)',
      emailFrameHotDip: 'Karsti cinkots',
      emailFrameStandard: 'Standarta cinkots',
      emailGlassLaminated: 'Laminēts drošības',
      emailGlassTempered: 'Standarta rūdīts',
      emailNotApplicable: 'Nav piemērojams',
      emailYes: 'Jā',
      emailNo: 'Nē',
    },
    et: {
      title: 'Padeliväljaku maksumuse kalkulaator',
      subtitle: 'Saage oma projektile kohene kohandatud eelarve hinnang.',
      step1: 'Väljaku mudel',
      step2: 'Valikud & uuendused',
      step3: 'Paigaldus & asukoht',
      step4: 'Eelarve tulemus',
      next: 'Järgmine samm',
      prev: 'Tagasi',
      selectModel: 'Valige padeliväljaku disain:',
      classic: 'OK Classic (Tugev nurgapostidega raam)',
      panoramic: 'OK Panoramic (Raamita otsasein)',
      ultimate: 'OK Ultimate Panoramic (100% raamita)',
      portable: 'OK Portable (Isekandev mobiilne)',
      platform: 'OK Padel Platform (Betoonaluseta platvorm)',
      movable_classic: 'OK Movable Classic (Ajutistele üritustele)',
      qty: 'Väljakute arv:',
      turfLabel: 'Muru tüüp:',
      standardTurf: 'Standardne monofilamentmuru',
      proTurf: 'Premium tekstureeritud muru (Mondo tüüp) (+1,800€)',
      lightLabel: 'Valgustussüsteem:',
      ledNone: 'Ilma LED-valgustuseta (ainult konstruktsioon)',
      ledStandard: 'Professionaalne LED-valgustussüsteem (4x 400W prožektorid)',
      frameFinishLabel: 'Metallraami korrosioonivastane töötlus:',
      frameStandard: 'Standardne tsingitud raam (Sobib sise- ja tavalistele välistingimustele)',
      frameHotDip: 'Kuumtsingitud raam (Soovitatav rannikuäärsetes ja suure niiskusega piirkondades) (+2,500€)',
      glassLabel: 'Klaaspaneelide valikud:',
      glassTempered: 'Standardne karastatud turvaklaas (12mm)',
      glassLaminated: 'Lamineeritud karastatud turvaklaas (topelt turvakile) (+2,000€)',
      outdoorLabel: 'Kuhu väljak paigaldatakse?',
      outdoor: 'Välitingimustesse',
      indoor: 'Sisetingimustesse (Sisehalli või katuse alla)',
      concreteLabel: 'Kas vajate betoonaluse ehitust?',
      concreteYes: 'Jah, täielik betoonaluse ehitus ja sillutise parandus (+16,000€/väljak)',
      concreteNo: 'Ei, aluspind on olemas või lahendatakse kohapeal',
      deliveryLabel: 'Kas vajate kohaletoimetamist ja transporti?',
      deliveryYes: 'Jah, turvaline kaubavedu objektile (+600€/väljak)',
      deliveryNo: 'Ei, tulen ise järele (Ex-works tehas)',
      assemblyLabel: 'Kas vajate professionaalset kokkupanekut ja paigaldust?',
      assemblyYes: 'Jah, täielik paigaldus meie meeskonna poolt kohapeal',
      assemblyNo: 'Ei, paigaldame ise (ainult konstruktsiooni tarne)',
      estPrice: 'Eeldatav maksumus:',
      volumeDiscount: 'Mitmikväljaku 5% soodustus rakendatud!',
      contactTitle: 'Küsi ametlikku pakkumist',
      contactDesc: 'Esitage oma kontaktandmed. Meie meeskond vaatab tehnilised andmed üle ja saadab teile ametliku üksikasjaliku pakkumise.',
      name: 'Täisnimi',
      email: 'E-posti aadress',
      submit: 'Saada pakkumise päring',
      success: 'Aitäh! Meie projektijuht võtab teiega ühendust ja saadab pakkumise 24 tunni jooksul.',
      breakdownTitle: 'Eelarve kokkuvõte',
      install: 'paigaldus',
      courtBase: 'väljak (baas)',
      turfUpgrade: 'Premium tekstureeritud muru uuendus',
      hotDipFinish: 'Kuumtsingitud viimistlus',
      laminatedGlassUpgrade: 'Lamineeritud turvaklaasi uuendus',
      ledLightingSummary: 'Professionaalne LED-valgustus (4x 400W)',
      ledInstallSummary: 'LED-valgustuse paigaldus',
      concreteWorkSummary: 'Aluspõhja ettevalmistamine ja betoonitööd',
      deliverySummary: 'Tarne ja transport',
      assemblySummary: 'Väljaku montaaž ja paigaldus',
      discountSummary: 'Mitmikväljaku soodustus (5%)',
      sending: 'Saatmine...',
      emailSubject: 'Uus padeliväljaku hinnapakkumise päring',
      emailTurfPro: 'Premium-klassi tekstureeritud (Mondo tüüpi)',
      emailTurfStandard: 'Standardne monofilament',
      emailLedNone: 'Puudub',
      emailLedStandard: 'Professionaalne LED-valgustus (4x 400W)',
      emailFrameHotDip: 'Kuumtsingitud',
      emailFrameStandard: 'Standardne tsingitud',
      emailGlassLaminated: 'Lamineeritud turvaklaas',
      emailGlassTempered: 'Standardne karastatud',
      emailNotApplicable: 'Ei kohaldata',
      emailYes: 'Jah',
      emailNo: 'Ei',
    },
    de: {
      title: 'Padel-Platz Kostenrechner',
      subtitle: 'Erhalten Sie eine sofortige, maßgeschneiderte Kostenschätzung für Ihr Projekt.',
      step1: 'Platz-Modell',
      step2: 'Optionen & Upgrades',
      step3: 'Standort & Montage',
      step4: 'Kostenschätzung',
      next: 'Nächster Schritt',
      prev: 'Zurück',
      selectModel: 'Wählen Sie das Padel-Platz-Modell:',
      classic: 'OK Classic (Robuster Säulenrahmen)',
      panoramic: 'OK Panoramic (Rahmenlose Stirnwand)',
      ultimate: 'OK Ultimate Panoramic (100% rahmenlos)',
      portable: 'OK Portable (Selbsttragend & Mobil)',
      platform: 'OK Padel Platform (Ohne Betonfundament)',
      movable_classic: 'OK Movable Classic (Temporäre Events)',
      qty: 'Anzahl der Plätze:',
      turfLabel: 'Kunstrasen-Typ:',
      standardTurf: 'Standard-Monofilament-Kunstrasen',
      proTurf: 'Premium texturierter Kunstrasen (Mondo-Stil) (+1.800€)',
      lightLabel: 'Flutlichtanlage:',
      ledNone: 'Ohne LED-Beleuchtung (nur Struktur)',
      ledStandard: 'Professionelles LED-Beleuchtungssystem (4x 400W Flutlicht)',
      frameFinishLabel: 'Korrosionsschutz-Behandlung des Metallrahmens:',
      frameStandard: 'Standard-vorverzinkter Rahmen (Perfekt für Hallen- und Standard-Außenanlagen)',
      frameHotDip: 'Premium-feuerverzinkter Rahmen (Empfohlen nur für hohe Luftfeuchtigkeit oder Küsten-/Meeresnähe) (+2.500€)',
      glassLabel: 'Glasoptionen:',
      glassTempered: 'Standard-gehärtetes Sicherheitsglas (12mm)',
      glassLaminated: 'Verbund-Sicherheitsglas (Doppelscheibe mit Sicherheitsfolie) (+2.000€)',
      outdoorLabel: 'Wo wird der Platz installiert?',
      outdoor: 'Außenbereich',
      indoor: 'Innenbereich (Halle / unter Dach)',
      concreteLabel: 'Benötigen Sie Erdarbeiten / Fundamenterstellung?',
      concreteYes: 'Ja, komplette Betonfundamente & Pflastervorbereitung (+16.000€/Platz)',
      concreteNo: 'Nein, Fundament ist bereits vorhanden oder wird bauseits erstellt',
      deliveryLabel: 'Benötigen Sie Lieferung & Transport?',
      deliveryYes: 'Ja, sicherer Frachttransport zum Standort (+600€/Platz)',
      deliveryNo: 'Nein, Selbstabholung (ab Werk)',
      assemblyLabel: 'Benötigen Sie eine professionelle Montage & Installation?',
      assemblyYes: 'Ja, komplette Montage vor Ort durch unser Team',
      assemblyNo: 'Nein, Eigenmontage (nur Materiallieferung)',
      estPrice: 'Geschätzte Kosten:',
      volumeDiscount: '5% Rabatt für mehrere Plätze angewendet!',
      contactTitle: 'Formelles Angebot anfordern',
      contactDesc: 'Geben Sie Ihre Kontaktdaten ein. Unser Team prüft die technischen Details und sendet Ihnen ein detailliertes offizielles Angebot.',
      name: 'Vollständiger Name',
      email: 'E-Mail-Adresse',
      submit: 'Angebot anfordern',
      success: 'Vielen Dank! Unser Projektleiter wird sich innerhalb von 24 Stunden mit einem formellen Angebot bei Ihnen melden.',
      breakdownTitle: 'Kostenaufschlüsselung',
      install: 'Montage',
      courtBase: 'Platz (Basis)',
      turfUpgrade: 'Upgrade auf Premium-Kunstrasen',
      hotDipFinish: 'Feuerverzinkungs-Finish',
      laminatedGlassUpgrade: 'Upgrade auf Verbund-Sicherheitsglas',
      ledLightingSummary: 'Professionelle LED-Beleuchtung (4x 400W)',
      ledInstallSummary: 'Installation der LED-Beleuchtung',
      concreteWorkSummary: 'Fundamentarbeiten & Pflasterung',
      deliverySummary: 'Lieferung & Transport',
      assemblySummary: 'Montage & Installation des Platzes',
      discountSummary: 'Mengenrabatt (5%)',
      sending: 'Wird gesendet...',
      emailSubject: 'Neue Padel-Platz Kostenschätzungsanfrage',
      emailTurfPro: 'Premium texturiert (Mondo-Stil)',
      emailTurfStandard: 'Standard-Monofilament',
      emailLedNone: 'Keine',
      emailLedStandard: 'Professionelle LED (4x 400W)',
      emailFrameHotDip: 'Feuerverzinkt',
      emailFrameStandard: 'Standard-vorverzinkt',
      emailGlassLaminated: 'Verbund-Sicherheitsglas',
      emailGlassTempered: 'Standard-gehärtet',
      emailNotApplicable: 'Nicht zutreffend',
      emailYes: 'Ja',
      emailNo: 'Nein',
    },
    pl: {
      title: 'Kalkulator kosztów kortu do padla',
      subtitle: 'Uzyskaj natychmiastową, spersonalizowaną wycenę kosztów swojego projektu.',
      step1: 'Model kortu',
      step2: 'Opcje i ulepszenia',
      step3: 'Lokalizacja i montaż',
      step4: 'Wynik wyceny',
      next: 'Następny krok',
      prev: 'Wstecz',
      selectModel: 'Wybierz model kortu do padla:',
      classic: 'OK Classic (Solidna rama słupkowa)',
      panoramic: 'OK Panoramic (Bezramowa ściana tylna)',
      ultimate: 'OK Ultimate Panoramic (W 100% bezramowy)',
      portable: 'OK Portable (Samonośny kort mobilny)',
      platform: 'OK Padel Platform (Bez wylewki betonowej)',
      movable_classic: 'OK Movable Classic (Wydarzenia tymczasowe)',
      qty: 'Liczba kortów:',
      turfLabel: 'Rodzaj trawy:',
      standardTurf: 'Standardowa trawa monofilamentowa',
      proTurf: 'Teksturowana trawa premium (styl Mondo) (+1 800€)',
      lightLabel: 'Oświetlenie:',
      ledNone: 'Bez oświetlenia LED (sama konstrukcja)',
      ledStandard: 'Profesjonalny system oświetlenia LED (4 reflektory 400W)',
      frameFinishLabel: 'Zabezpieczenie antykorozyjne ramy metalowej:',
      frameStandard: 'Standardowa rama ocynkowana (Idealna do hal oraz standardowych instalacji zewnętrznych)',
      frameHotDip: 'Rama ocynkowana ogniowo premium (Zalecana tylko w warunkach wysokiej wilgotności lub nadmorskich) (+2 500€)',
      glassLabel: 'Opcje paneli szklanych:',
      glassTempered: 'Standardowe hartowane szkło bezpieczne (12 mm)',
      glassLaminated: 'Laminowane hartowane szkło bezpieczne (dwie szyby z folią) (+2 000€)',
      outdoorLabel: 'Gdzie kort zostanie zainstalowany?',
      outdoor: 'Na zewnątrz (Outdoor)',
      indoor: 'Wewnątrz (W hali lub pod zadaszeniem)',
      concreteLabel: 'Czy potrzebujesz przygotowania podłoża / wylewki betonowej?',
      concreteYes: 'Tak, pełne fundamenty betonowe i przygotowanie podłoża (+16 000€/kort)',
      concreteNo: 'Nie, podłoże już istnieje lub zostanie przygotowane we własnym zakresie',
      deliveryLabel: 'Czy potrzebujesz transportu/dostawy?',
      deliveryYes: 'Tak, bezpieczny transport ciężarowy na miejsce (+600€/kort)',
      deliveryNo: 'Nie, odbiór osobisty (z fabryki - Ex-works)',
      assemblyLabel: 'Czy wymagany jest profesjonalny montaż?',
      assemblyYes: 'Tak, kompletny montaż na miejscu przez naszą ekipę',
      assemblyNo: 'Nie, samodzielny montaż (dostawa samej konstrukcji)',
      estPrice: 'Szacowany koszt:',
      volumeDiscount: 'Naliczono 5% rabatu przy zakupie wielu kortów!',
      contactTitle: 'Poproś o oficjalną ofertę',
      contactDesc: 'Prześlij swoje dane kontaktowe. Nasz zespół zweryfikuje specyfikacje techniczne i prześle szczegółową oficjalną wycenę.',
      name: 'Imię i nazwisko',
      email: 'Adres e-mail',
      submit: 'Wyślij zapytanie ofertowe',
      success: 'Dziękujemy! Nasz Kierownik Projektu skontaktuje się z Tobą z oficjalną ofertą w ciągu 24 godzin.',
      breakdownTitle: 'Szczegóły wyceny',
      install: 'montaż',
      courtBase: 'Kort (Baza)',
      turfUpgrade: 'Ulepszenie do trawy teksturowanej Premium',
      hotDipFinish: 'Rama ocynkowana ogniowo',
      laminatedGlassUpgrade: 'Ulepszenie do szkła laminowanego',
      ledLightingSummary: 'Profesjonalne oświetlenie LED (4x 400W)',
      ledInstallSummary: 'Montaż oświetlenia LED',
      concreteWorkSummary: 'Przygotowanie podłoża i wylewka',
      deliverySummary: 'Dostawa i transport',
      assemblySummary: 'Montaż i instalacja kortu',
      discountSummary: 'Rabat przy zakupie wielu kortów (5%)',
      sending: 'Wysyłanie...',
      emailSubject: 'Nowe zapytanie o wycenę kortu do padla',
      emailTurfPro: 'Teksturowana Premium (styl Mondo)',
      emailTurfStandard: 'Standardowa monofilamentowa',
      emailLedNone: 'Brak',
      emailLedStandard: 'Profesjonalne LED (4x 400W)',
      emailFrameHotDip: 'Ocynkowana ogniowo',
      emailFrameStandard: 'Standardowo ocynkowana',
      emailGlassLaminated: 'Laminowane bezpieczne',
      emailGlassTempered: 'Standardowe hartowane',
      emailNotApplicable: 'Nie dotyczy',
      emailYes: 'Tak',
      emailNo: 'Nie',
    }
  };

  const activeT = t[currentLang];

  return (
    <section id="calculator" className="calculator-section">
      <div className="container">
        <h2 className="section-title text-gradient">{activeT.title}</h2>
        <p className="section-subtitle">{activeT.subtitle}</p>

        <div className="calculator-grid">
          {/* Main Left Configurator Panel */}
          <div className="glass-card calculator-card">
            {/* Step Indicators */}
            <div className="step-indicators">
              <div className={`step-dot ${step >= 1 ? 'active' : ''}`}><span>1</span><p>{activeT.step1}</p></div>
              <div className="step-line"></div>
              <div className={`step-dot ${step >= 2 ? 'active' : ''}`}><span>2</span><p>{activeT.step2}</p></div>
              <div className="step-line"></div>
              <div className={`step-dot ${step >= 3 ? 'active' : ''}`}><span>3</span><p>{activeT.step3}</p></div>
            </div>

            {/* Config Content */}
            <div className="step-content">
              {step === 1 && (
                <div className="step-pane animate-fade-in">
                  <label className="field-label">{activeT.selectModel}</label>
                  <div className="option-grid">
                    <button 
                      className={`option-card ${courtType === 'classic' ? 'selected' : ''}`}
                      onClick={() => handleCourtTypeChange('classic')}
                    >
                      <span className="dot"></span>
                      <div>
                        <h4>{activeT.classic}</h4>
                        <p className="price-tag">From {basePrices.classic.toLocaleString()} €</p>
                      </div>
                    </button>

                    <button 
                      className={`option-card ${courtType === 'panoramic' ? 'selected' : ''}`}
                      onClick={() => handleCourtTypeChange('panoramic')}
                    >
                      <span className="dot"></span>
                      <div>
                        <h4>{activeT.panoramic}</h4>
                        <p className="price-tag">From {basePrices.panoramic.toLocaleString()} €</p>
                      </div>
                    </button>

                    <button 
                      className={`option-card ${courtType === 'ultimate' ? 'selected' : ''}`}
                      onClick={() => handleCourtTypeChange('ultimate')}
                    >
                      <span className="dot"></span>
                      <div>
                        <h4>{activeT.ultimate}</h4>
                        <p className="price-tag">From {basePrices.ultimate.toLocaleString()} €</p>
                      </div>
                    </button>

                    <button 
                      className={`option-card ${courtType === 'portable' ? 'selected' : ''}`}
                      onClick={() => handleCourtTypeChange('portable')}
                    >
                      <span className="dot"></span>
                      <div>
                        <h4>{activeT.portable}</h4>
                        <p className="price-tag">From {basePrices.portable.toLocaleString()} €</p>
                      </div>
                    </button>

                    <button 
                      className={`option-card ${courtType === 'platform' ? 'selected' : ''}`}
                      onClick={() => handleCourtTypeChange('platform')}
                    >
                      <span className="dot"></span>
                      <div>
                        <h4>{activeT.platform}</h4>
                        <p className="price-tag">From {basePrices.platform.toLocaleString()} €</p>
                      </div>
                    </button>

                    <button 
                      className={`option-card ${courtType === 'movable_classic' ? 'selected' : ''}`}
                      onClick={() => handleCourtTypeChange('movable_classic')}
                    >
                      <span className="dot"></span>
                      <div>
                        <h4>{activeT.movable_classic}</h4>
                        <p className="price-tag">From {basePrices.movable_classic.toLocaleString()} €</p>
                      </div>
                    </button>
                  </div>

                  <div className="qty-picker">
                    <label className="field-label">{activeT.qty}</label>
                    <div className="qty-buttons">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button 
                          key={num}
                          className={`qty-btn ${quantity === num ? 'active' : ''}`}
                          onClick={() => setQuantity(num)}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="step-pane animate-fade-in">
                  {/* Turf selection */}
                  <div className="config-block">
                    <label className="field-label">{activeT.turfLabel}</label>
                    <div className="selection-list">
                      <button 
                        className={`select-row ${turf === 'standard' ? 'selected' : ''}`}
                        onClick={() => setTurf('standard')}
                      >
                        <span className="radio-circle"></span>
                        <span>{activeT.standardTurf}</span>
                        <span className="price-tag-inline">+0 €</span>
                      </button>
                      <button 
                        className={`select-row ${turf === 'pro' ? 'selected' : ''}`}
                        onClick={() => setTurf('pro')}
                      >
                        <span className="radio-circle"></span>
                        <span>{activeT.proTurf}</span>
                        <span className="price-tag-inline">+{turfSurcharge.pro.toLocaleString()} €</span>
                      </button>
                    </div>
                  </div>

                  {/* Lighting selection */}
                  <div className="config-block">
                    <label className="field-label">{activeT.lightLabel}</label>
                    <div className="selection-list">
                      <button 
                        className={`select-row ${lights === 'none' ? 'selected' : ''}`}
                        onClick={() => setLights('none')}
                      >
                        <span className="radio-circle"></span>
                        <span>{activeT.ledNone}</span>
                        <span className="price-tag-inline">+0 €</span>
                      </button>
                      <button 
                        className={`select-row ${lights === 'standard' ? 'selected' : ''}`}
                        onClick={() => setLights('standard')}
                      >
                        <span className="radio-circle"></span>
                        <span>{activeT.ledStandard}</span>
                        <span className="price-tag-inline">
                          +{ledPricing.standard[courtType].materials.toLocaleString()} €
                          {requireAssembly && ` (+${ledPricing.standard[courtType].assembly.toLocaleString()} € ${activeT.install})`}
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Frame finish selection */}
                  <div className="config-block">
                    <label className="field-label">{activeT.frameFinishLabel}</label>
                    <div className="selection-list">
                      <button 
                        className={`select-row ${frameFinish === 'standard' ? 'selected' : ''}`}
                        onClick={() => setFrameFinish('standard')}
                      >
                        <span className="radio-circle"></span>
                        <span>{activeT.frameStandard}</span>
                        <span className="price-tag-inline">+0 €</span>
                      </button>
                      <button 
                        className={`select-row ${frameFinish === 'hotdip' ? 'selected' : ''}`}
                        onClick={() => setFrameFinish('hotdip')}
                      >
                        <span className="radio-circle"></span>
                        <span>{activeT.frameHotDip}</span>
                        <span className="price-tag-inline">+{frameFinishSurcharges.hotdip.toLocaleString()} €</span>
                      </button>
                    </div>
                  </div>

                  {/* Glass type selection */}
                  <div className="config-block">
                    <label className="field-label">{activeT.glassLabel}</label>
                    <div className="selection-list">
                      <button 
                        className={`select-row ${glassType === 'tempered' ? 'selected' : ''}`}
                        onClick={() => setGlassType('tempered')}
                      >
                        <span className="radio-circle"></span>
                        <span>{activeT.glassTempered}</span>
                        <span className="price-tag-inline">+0 €</span>
                      </button>
                      <button 
                        className={`select-row ${glassType === 'laminated' ? 'selected' : ''}`}
                        onClick={() => setGlassType('laminated')}
                      >
                        <span className="radio-circle"></span>
                        <span>{activeT.glassLaminated}</span>
                        <span className="price-tag-inline">+{glassTypeSurcharges.laminated.toLocaleString()} €</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="step-pane animate-fade-in">
                  <div className="config-block">
                    <label className="field-label">{activeT.outdoorLabel}</label>
                    <div className="selection-list">
                      <button 
                        className={`select-row ${isOutdoor ? 'selected' : ''}`}
                        onClick={() => setIsOutdoor(true)}
                      >
                        <span className="radio-circle"></span>
                        <span>{activeT.outdoor}</span>
                        <span className="price-tag-inline">+0 €</span>
                      </button>
                      <button 
                        className={`select-row ${!isOutdoor ? 'selected' : ''}`}
                        onClick={() => setIsOutdoor(false)}
                      >
                        <span className="radio-circle"></span>
                        <span>{activeT.indoor}</span>
                        <span className="price-tag-inline">+0 €</span>
                      </button>
                    </div>
                  </div>

                  {courtType !== 'portable' && courtType !== 'platform' && (
                    <div className="config-block">
                      <label className="field-label">{activeT.concreteLabel}</label>
                      <div className="selection-list">
                        <button 
                          className={`select-row ${concreteWork ? 'selected' : ''}`}
                          onClick={() => setConcreteWork(true)}
                        >
                          <span className="radio-circle"></span>
                          <span>{activeT.concreteYes}</span>
                        </button>
                        <button 
                          className={`select-row ${!concreteWork ? 'selected' : ''}`}
                          onClick={() => setConcreteWork(false)}
                        >
                          <span className="radio-circle"></span>
                          <span>{activeT.concreteNo}</span>
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="config-block">
                    <label className="field-label">{activeT.deliveryLabel}</label>
                    <div className="selection-list">
                      <button 
                        className={`select-row ${requireDelivery ? 'selected' : ''}`}
                        onClick={() => setRequireDelivery(true)}
                      >
                        <span className="radio-circle"></span>
                        <span>{activeT.deliveryYes}</span>
                      </button>
                      <button 
                        className={`select-row ${!requireDelivery ? 'selected' : ''}`}
                        onClick={() => setRequireDelivery(false)}
                      >
                        <span className="radio-circle"></span>
                        <span>{activeT.deliveryNo}</span>
                      </button>
                    </div>
                  </div>

                  <div className="config-block">
                    <label className="field-label">{activeT.assemblyLabel}</label>
                    <div className="selection-list">
                      <button 
                        className={`select-row ${requireAssembly ? 'selected' : ''}`}
                        onClick={() => setRequireAssembly(true)}
                      >
                        <span className="radio-circle"></span>
                        <span>{activeT.assemblyYes}</span>
                        <span className="price-tag-inline">+{assemblySurcharges[courtType].toLocaleString()} €</span>
                      </button>
                      <button 
                        className={`select-row ${!requireAssembly ? 'selected' : ''}`}
                        onClick={() => setRequireAssembly(false)}
                      >
                        <span className="radio-circle"></span>
                        <span>{activeT.assemblyNo}</span>
                        <span className="price-tag-inline">+0 €</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="step-nav">
              {step > 1 && (
                <button className="btn btn-secondary" onClick={() => setStep(step - 1)}>
                  &larr; {activeT.prev}
                </button>
              )}
              {step < 3 ? (
                <button className="btn btn-primary next-btn" onClick={() => setStep(step + 1)}>
                  {activeT.next} &rarr;
                </button>
              ) : null}
            </div>
          </div>

          {/* Result Overview Sidebar (Calculates Price instantly) */}
          <div className="glass-card result-card">
            <h3>{activeT.breakdownTitle}</h3>
            
            <div className="specs-summary">
              <div className="summary-row">
                <span>
                  {quantity}x {courtType.toUpperCase().replace('_', ' ')} {activeT.courtBase}
                </span>
                <span>{(basePrices[courtType] * quantity).toLocaleString()} €</span>
              </div>
              {turf === 'pro' && (
                <div className="summary-row">
                  <span>{activeT.turfUpgrade}</span>
                  <span>{(turfSurcharge.pro * quantity).toLocaleString()} €</span>
                </div>
              )}
              {frameFinish === 'hotdip' && (
                <div className="summary-row">
                  <span>{activeT.hotDipFinish}</span>
                  <span>{(frameFinishSurcharges.hotdip * quantity).toLocaleString()} €</span>
                </div>
              )}
              {glassType === 'laminated' && (
                <div className="summary-row">
                  <span>{activeT.laminatedGlassUpgrade}</span>
                  <span>{(glassTypeSurcharges.laminated * quantity).toLocaleString()} €</span>
                </div>
              )}
              {lights !== 'none' && (
                <div className="summary-row">
                  <span>
                    {activeT.ledLightingSummary}
                  </span>
                  <span>{(ledPricing[lights][courtType].materials * quantity).toLocaleString()} €</span>
                </div>
              )}
              {lights !== 'none' && requireAssembly && (
                <div className="summary-row">
                  <span>
                    {activeT.ledInstallSummary}
                  </span>
                  <span>{(ledPricing[lights][courtType].assembly * quantity).toLocaleString()} €</span>
                </div>
              )}
              {concreteWork && courtType !== 'portable' && courtType !== 'platform' && (
                <div className="summary-row">
                  <span>{activeT.concreteWorkSummary}</span>
                  <span>{(concreteWorkSurcharge * quantity).toLocaleString()} €</span>
                </div>
              )}
              {requireDelivery && (
                <div className="summary-row">
                  <span>{activeT.deliverySummary}</span>
                  <span>{(deliveryCostPerCourt * quantity).toLocaleString()} €</span>
                </div>
              )}
              {requireAssembly && (
                <div className="summary-row">
                  <span>
                    {activeT.assemblySummary}
                  </span>
                  <span>{(assemblySurcharges[courtType] * quantity).toLocaleString()} €</span>
                </div>
              )}

              {quantity > 1 && (
                <div className="summary-row discount">
                  <span>{activeT.discountSummary}</span>
                  <span>- {(calculateUndiscounted() - calculateSubtotal()).toLocaleString()} €</span>
                </div>
              )}
            </div>

            <div className="total-display">
              <span className="total-label">{activeT.estPrice}</span>
              <span className="total-price text-gradient">{calculateSubtotal().toLocaleString()} €</span>
              {quantity > 1 && <p className="discount-note">{activeT.volumeDiscount}</p>}
            </div>

            {/* Lead generation contact hook */}
            <div className="calculator-contact">
              <h4>{activeT.contactTitle}</h4>
              <p>{activeT.contactDesc}</p>
              
              {!submitted ? (
                <form onSubmit={handleFormSubmit} className="mini-form">
                  <div style={{ display: 'none' }}>
                    <input 
                      type="text" 
                      name="website_url" 
                      value={websiteUrl} 
                      onChange={(e) => setWebsiteUrl(e.target.value)} 
                      tabIndex="-1" 
                      autoComplete="off" 
                    />
                  </div>
                  <input 
                    type="text" 
                    placeholder={activeT.name} 
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    required 
                    className="calc-input"
                  />
                  <input 
                    type="email" 
                    placeholder={activeT.email} 
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    required 
                    className="calc-input"
                  />
                  <button type="submit" disabled={loading} className="btn btn-primary btn-full">
                    {loading ? activeT.sending : activeT.submit}
                  </button>
                </form>
              ) : (
                <div className="calc-success animate-fade-in">
                  <span className="check-mark">✓</span>
                  <p>{activeT.success}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .calculator-section {
          background-color: var(--bg-main);
        }

        .section-subtitle {
          text-align: center;
          color: var(--text-muted);
          margin-top: -30px;
          margin-bottom: 60px;
          font-size: 1.1rem;
        }

        .calculator-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 30px;
          align-items: start;
        }

        .calculator-card {
          padding: 40px;
          min-height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        /* Step Indicators */
        .step-indicators {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 40px;
        }

        .step-dot {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          position: relative;
        }

        .step-dot span {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border);
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
          transition: var(--transition);
        }

        .step-dot p {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-muted);
          white-space: nowrap;
        }

        .step-dot.active span {
          background: var(--primary);
          color: var(--text-inverse);
          border-color: var(--primary);
          box-shadow: 0 0 15px var(--primary-glow);
        }

        .step-dot.active p {
          color: #fff;
        }

        .step-line {
          flex-grow: 1;
          height: 1px;
          background: var(--border);
          margin-bottom: 24px;
        }

        .field-label {
          display: block;
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 20px;
        }

        /* Option cards (Step 1) */
        .option-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 30px;
        }

        .option-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border);
          border-radius: var(--border-radius);
          padding: 16px 20px;
          text-align: left;
          cursor: pointer;
          transition: var(--transition);
          color: var(--text-main);
        }

        .option-card:hover {
          border-color: rgba(16, 185, 129, 0.3);
          background: rgba(255, 255, 255, 0.03);
        }

        .option-card.selected {
          border-color: var(--primary);
          background: rgba(16, 185, 129, 0.05);
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.1);
        }

        .option-card .dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 2px solid var(--text-muted);
          flex-shrink: 0;
          position: relative;
        }

        .option-card.selected .dot {
          border-color: var(--primary);
        }

        .option-card.selected .dot::after {
          content: '';
          position: absolute;
          inset: 3px;
          border-radius: 50%;
          background: var(--primary);
        }

        .option-card h4 {
          font-size: 1.05rem;
          font-weight: 700;
        }

        .price-tag {
          color: var(--primary);
          font-size: 0.9rem;
          font-weight: 600;
        }

        /* Qty picker */
        .qty-picker {
          margin-top: 20px;
        }

        .qty-buttons {
          display: flex;
          gap: 10px;
        }

        .qty-btn {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          color: var(--text-muted);
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
        }

        .qty-btn:hover,
        .qty-btn.active {
          border-color: var(--primary);
          background: var(--primary-glow);
          color: #fff;
        }

        /* Selection Lists (Step 2 & 3) */
        .config-block {
          margin-bottom: 30px;
        }

        .selection-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .select-row {
          display: flex;
          align-items: center;
          padding: 16px 20px;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border);
          border-radius: 10px;
          cursor: pointer;
          text-align: left;
          color: var(--text-main);
          font-size: 0.95rem;
          font-weight: 600;
          transition: var(--transition);
        }

        .select-row:hover {
          border-color: rgba(16, 185, 129, 0.3);
          background: rgba(255, 255, 255, 0.02);
        }

        .select-row.selected {
          border-color: var(--primary);
          background: rgba(16, 185, 129, 0.04);
        }

        .radio-circle {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 2px solid var(--text-muted);
          margin-right: 16px;
          display: inline-block;
          position: relative;
          flex-shrink: 0;
        }

        .select-row.selected .radio-circle {
          border-color: var(--primary);
        }

        .select-row.selected .radio-circle::after {
          content: '';
          position: absolute;
          inset: 3px;
          border-radius: 50%;
          background: var(--primary);
        }

        .price-tag-inline {
          margin-left: auto;
          color: var(--primary);
        }

        .step-nav {
          display: flex;
          justify-content: space-between;
          margin-top: 30px;
        }

        .next-btn {
          margin-left: auto;
        }

        /* Result card */
        .result-card {
          padding: 30px;
          background: linear-gradient(180deg, var(--bg-card) 0%, rgba(19, 27, 46, 0.5) 100%);
          border-color: rgba(255, 255, 255, 0.05);
        }

        .result-card h3 {
          font-size: 1.25rem;
          color: #fff;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 12px;
        }

        .specs-summary {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .summary-row.discount {
          color: var(--primary);
          font-weight: 600;
        }

        .total-display {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          border-radius: var(--border-radius);
          padding: 20px;
          text-align: center;
          margin-bottom: 30px;
        }

        .total-label {
          display: block;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 4px;
        }

        .total-price {
          font-size: 2.2rem;
          font-weight: 800;
        }

        .discount-note {
          font-size: 0.8rem;
          color: var(--primary);
          margin-top: 4px;
          font-weight: 600;
        }

        .calculator-contact {
          border-top: 1px solid var(--border);
          padding-top: 24px;
        }

        .calculator-contact h4 {
          color: #fff;
          font-size: 1.05rem;
          margin-bottom: 8px;
        }

        .calculator-contact p {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .mini-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .calc-input {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 10px 14px;
          color: #fff;
          font-size: 0.9rem;
          font-family: inherit;
          transition: var(--transition);
        }

        .calc-input:focus {
          outline: none;
          border-color: var(--primary);
          background: rgba(255, 255, 255, 0.04);
        }

        .calc-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          text-align: center;
          padding: 20px;
          background: rgba(16, 185, 129, 0.05);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: var(--border-radius);
        }

        .check-mark {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--primary);
          color: var(--text-inverse);
          font-size: 1.4rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px var(--primary-glow);
        }

        .calc-success p {
          color: var(--primary);
          font-weight: 600;
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        @media (max-width: 1024px) {
          .calculator-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .option-grid {
            grid-template-columns: 1fr;
          }
          .calculator-card {
            padding: 20px;
          }
          .step-dot p {
            display: none;
          }
          .step-line {
            margin-bottom: 0;
            align-self: center;
          }
          .step-indicators {
            align-items: center;
            margin-bottom: 24px;
          }
        }
      `}</style>
    </section>
  );
}
