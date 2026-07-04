import React, { useState } from 'react';

// Email submission configuration:
// To enable email submissions, sign up at https://formspree.io/ or https://web3forms.com/
// and set your provider ('formspree', 'web3forms' or 'local_php') and form ID / access key below.
const FORM_ENDPOINT_PROVIDER = 'local_php'; 
const FORM_API_KEY = 'ba066d07-8524-459a-b3df-f1cd5cc3b3f4'; // Put your Formspree Form ID or Web3Forms Access Key here (linked to oksportas@gmail.com)

export default function ContactForm({ currentLang }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const t = {
    en: {
      title: 'Get in Touch',
      subtitle: 'Have questions about planning, logistics, or custom court builds? Write to us.',
      name: 'Name and Surname',
      email: 'Email',
      message: 'Your message',
      submit: 'Send Message',
      success: 'Message sent successfully! We will get back to you shortly.',
      error: 'Please fill in all required fields.',
      directChannels: 'Direct Channels',
      intro: 'We offer court designs, factory order management, delivery, and full onsite assembly across Europe.',
      phoneSupport: 'Phone Support',
      emailAddress: 'Email Address',
      workingHours: 'Working Hours',
      messageSent: 'Message Sent',
      sendAnother: 'Send another message',
      sending: 'Sending...',
    },
    lt: {
      title: 'Susisiekite su mumis',
      subtitle: 'Turite klausimų apie planavimą, logistiką ar individualius užsakymus? Parašykite mums.',
      name: 'Vardas ir Pavardė',
      email: 'El. paštas',
      message: 'Jūsų žinutė',
      submit: 'Siųsti žinutę',
      success: 'Žinutė sėkmingai išsiųsta! Susisieksime su jumis artimiausiu metu.',
      error: 'Prašome užpildyti visus laukus.',
      directChannels: 'Tiesioginiai kontaktai',
      intro: 'Siūlome aikštelių projektavimą, gamyklos užsakymų valdymą, logistiką ir pilną įrengimą visoje Europoje.',
      phoneSupport: 'Telefono numeris',
      emailAddress: 'El. paštas',
      workingHours: 'Darbo laikas',
      messageSent: 'Žinutė išsiųsta',
      sendAnother: 'Rašyti naują žinutę',
      sending: 'Siunčiama...',
    },
    lv: {
      title: 'Sazinieties ar mums',
      subtitle: 'Vai jums ir jautājumi par plānošanu, loģistiku vai individuālu laukumu būvniecību? Rakstiet mums.',
      name: 'Vārds un Uzvārds',
      email: 'E-pasts',
      message: 'Jūsu ziņojums',
      submit: 'Nosūtīt ziņu',
      success: 'Ziņojums veiksmīgi nosūtīts! Mēs ar jums sazināsimies tuvākajā laikā.',
      error: 'Lūdzu, aizpildiet visus obligātos laukus.',
      directChannels: 'Tiešie kontakti',
      intro: 'Mēs piedāvājam laukumu projektēšanu, rūpnīcas pasūtījumu vadību, piegādi un pilnu uzstādīšanu visā Eiropā.',
      phoneSupport: 'Tālruņa atbalsts',
      emailAddress: 'E-pasta adrese',
      workingHours: 'Darba laiks',
      messageSent: 'Ziņojums nosūtīts',
      sendAnother: 'Nosūtīt jaunu ziņu',
      sending: 'Sūta...',
    },
    et: {
      title: 'Võta meiega ühendust',
      subtitle: 'Kas teil on küsimusi planeerimise, logistika või eritellimusel väljakute ehituse kohta? Kirjutage meile.',
      name: 'Ees- ja perekonnanimi',
      email: 'E-post',
      message: 'Teie sõnum',
      submit: 'Saada sõnum',
      success: 'Sõnum on edukalt saadetud! Võtame teiega peagi ühendust.',
      error: 'Palun täitke kõik nõutud väljad.',
      directChannels: 'Otsesed kontaktid',
      intro: 'Pakume väljakute projekteerimist, tehase tellimuste haldamist, tarnet ja täielikku kohapealset paigaldust üle Euroopa.',
      phoneSupport: 'Telefonitugi',
      emailAddress: 'E-posti aadress',
      workingHours: 'Tööaeg',
      messageSent: 'Sõnum saadetud',
      sendAnother: 'Saada teine sõnum',
      sending: 'Saatmine...',
    },
    de: {
      title: 'Kontaktieren Sie uns',
      subtitle: 'Haben Sie Fragen zu Planung, Logistik oder individuellem Platzbau? Schreiben Sie uns.',
      name: 'Name und Nachname',
      email: 'E-Mail',
      message: 'Ihre Nachricht',
      submit: 'Nachricht senden',
      success: 'Nachricht erfolgreich gesendet! Wir werden uns in Kürze bei Ihnen melden.',
      error: 'Bitte füllen Sie alle erforderlichen Felder aus.',
      directChannels: 'Direkte Kanäle',
      intro: 'Wir bieten Platzdesign, Auftragsabwicklung, Lieferung und komplette Montage vor Ort in ganz Europa.',
      phoneSupport: 'Telefonischer Support',
      emailAddress: 'E-Mail-Adresse',
      workingHours: 'Arbeitszeiten',
      messageSent: 'Nachricht gesendet',
      sendAnother: 'Eine weitere Nachricht senden',
      sending: 'Wird gesendet...',
    },
    pl: {
      title: 'Skontaktuj się z nami',
      subtitle: 'Masz pytania dotyczące planowania, logistyki lub budowy kortów na zamówienie? Napisz do nas.',
      name: 'Imię i nazwisko',
      email: 'E-mail',
      message: 'Twoja wiadomość',
      submit: 'Wyślij wiadomość',
      success: 'Wiadomość wysłana pomyślnie! Skontaktujemy się z Tobą wkrótce.',
      error: 'Proszę wypełnić wszystkie wymagane pola.',
      directChannels: 'Kanały bezpośrednie',
      intro: 'Oferujemy projektowanie kortów, zarządzanie zamówieniami z fabryki, dostawę i pełny montaż na miejscu w całej Europie.',
      phoneSupport: 'Wsparcie telefoniczne',
      emailAddress: 'Adres e-mail',
      workingHours: 'Godziny pracy',
      messageSent: 'Wiadomość wysłana',
      sendAnother: 'Wyślij kolejną wiadomość',
      sending: 'Wysyłanie...',
    }
  };

  const activeT = t[currentLang];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    setLoading(true);

    if (FORM_ENDPOINT_PROVIDER === 'local_php') {
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        // Simulate local host success for testing
        setTimeout(() => {
          setLoading(false);
          setSubmitted(true);
          setName('');
          setEmail('');
          setMessage('');
        }, 1000);
      } else {
        try {
          const response = await fetch('send_mail.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              type: 'contact',
              lang: currentLang,
              name,
              email,
              message
            })
          });
          const data = await response.json();
          if (response.ok && data.success) {
            setSubmitted(true);
            setName('');
            setEmail('');
            setMessage('');
          } else {
            alert(data.message || 'Failed to send message. Please try again.');
          }
        } catch (error) {
          console.error('Error submitting form:', error);
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
          body: JSON.stringify({ name, email, message })
        });
        if (response.ok) {
          setSubmitted(true);
          setName('');
          setEmail('');
          setMessage('');
        } else {
          alert('Failed to send message. Please try again or contact us directly.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
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
            subject: 'New Contact Form Submission - OKsportas',
            name,
            email,
            message
          })
        });
        const data = await response.json();
        if (data.success) {
          setSubmitted(true);
          setName('');
          setEmail('');
          setMessage('');
        } else {
          alert(data.message || 'Failed to send message.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      // Simulate API submit delay (no provider selected)
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      }, 1000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title text-gradient">{activeT.title}</h2>
        <p className="section-subtitle">{activeT.subtitle}</p>

        <div className="contact-layout">
          {/* Contact Details Card */}
          <div className="glass-card contact-info-card">
            <h3>{activeT.directChannels}</h3>
            <p className="info-intro">
              {activeT.intro}
            </p>

            <div className="contact-methods">
              <div className="method-item">
                <span className="icon">📞</span>
                <div>
                  <h4>{activeT.phoneSupport}</h4>
                  <a href="tel:+37060215771" className="link">+370 602 15771</a>
                </div>
              </div>

              <div className="method-item">
                <span className="icon">✉</span>
                <div>
                  <h4>{activeT.emailAddress}</h4>
                  <a href="mailto:oksportas@gmail.com" className="link">oksportas@gmail.com</a>
                </div>
              </div>

              <div className="method-item">
                <span className="icon">⏱</span>
                <div>
                  <h4>{activeT.workingHours}</h4>
                  <p>I - VII 08:00 - 20:00 (GMT+2)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="glass-card contact-form-card">
            {submitted ? (
              <div className="form-success-pane animate-fade-in">
                <div className="success-icon">✓</div>
                <h3>{activeT.messageSent}</h3>
                <p>{activeT.success}</p>
                <button className="btn btn-secondary" onClick={() => setSubmitted(false)}>
                  {activeT.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form-element">
                <div className="form-field">
                  <input 
                    type="text" 
                    placeholder={activeT.name} 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <input 
                    type="email" 
                    placeholder={activeT.email} 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <textarea 
                    placeholder={activeT.message} 
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" disabled={loading} className="btn btn-primary btn-full">
                  {loading ? activeT.sending : activeT.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .contact-section {
          background-color: var(--bg-main);
          padding-bottom: 120px;
        }

        .section-subtitle {
          text-align: center;
          color: var(--text-muted);
          margin-top: -30px;
          margin-bottom: 60px;
          font-size: 1.1rem;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
          align-items: stretch;
        }

        .contact-info-card {
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .contact-info-card h3 {
          font-size: 1.5rem;
          color: #fff;
        }

        .info-intro {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-top: 10px;
        }

        .method-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .method-item .icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }

        .method-item h4 {
          font-size: 0.9rem;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }

        .method-item .link,
        .method-item p {
          color: #fff;
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          transition: var(--transition);
        }

        .method-item .link:hover {
          color: var(--primary);
        }

        /* Form Card */
        .contact-form-card {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-color: var(--border-hover);
        }

        .contact-form-element {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-field {
          width: 100%;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 14px 16px;
          color: #fff;
          font-family: inherit;
          font-size: 0.95rem;
          transition: var(--transition);
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--primary);
          background: rgba(255, 255, 255, 0.04);
        }

        .form-textarea {
          resize: vertical;
        }

        /* Success pane */
        .form-success-pane {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          text-align: center;
          padding: 20px 0;
        }

        .success-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--primary);
          color: var(--text-inverse);
          font-size: 2.2rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px var(--primary-glow);
          margin-bottom: 10px;
        }

        .form-success-pane h3 {
          font-size: 1.5rem;
          color: #fff;
        }

        .form-success-pane p {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.6;
          max-width: 320px;
          margin-bottom: 10px;
        }

        @media (max-width: 850px) {
          .contact-layout {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
      `}</style>
    </section>
  );
}
