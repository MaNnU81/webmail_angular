import { Mockmail } from "../model/mockmail";

export const MOCK_MAILS: Mockmail[] = [
  {
    id: 1,
    data: "2025-09-12T08:15:00Z",
    mittente: "newsletter&#64;angular.io",
    destinatario: "me&#64;webmail.test",
    oggetto: "Angular Weekly – Novità e best practice",
    anteprima: "In questo numero: signals, control flow &#64;if/&#64;for, performance tips…",
    body: `Ciao!
In questo numero di Angular Weekly:
• Signals avanzati: pattern comuni e anti-pattern.
• Nuovo control flow (&#64;if/&#64;for): casi reali e migrazioni.
• Performance tips: defer views, hydration, bundle size.
Leggi sul blog: https://angular.io/blog
— Team Angular`
  },
  {
    id: 2,
    data: "2025-09-11T17:42:10Z",
    mittente: "maria.rossi&#64;example.com",
    destinatario: "me&#64;webmail.test",
    oggetto: "Cena di venerdì?",
    anteprima: "Che ne dici di sushi alle 20:30? Ho trovato un posto nuovo in centro…",
    body: `Ehi!
Che ne dici di sushi venerdì alle 20:30? Ho trovato un posto nuovo in centro (si chiama "Nami").
Se sei d’accordo prenoto per due. Fammi sapere!
— Maria`
  },
  {
    id: 3,
    data: "2025-09-11T18:05:41Z",
    mittente: "me&#64;webmail.test",
    destinatario: "maria.rossi&#64;example.com",
    oggetto: "Re: Cena di venerdì?",
    anteprima: "Perfetto per me! Se trovi tavolo vicino alla vetrata, top…",
    body: `Ciao Maria,
perfetto per me! Se trovi tavolo vicino alla vetrata, top.
Grazie!`
  },
  {
    id: 4,
    data: "2025-09-11T09:05:33Z",
    mittente: "noreply&#64;github.com",
    destinatario: "me&#64;webmail.test",
    oggetto: "[repo] Nuova PR aperta: fix layout",
    anteprima: "Ha aperto una pull request per correggere il grid nella lista messaggi…",
    body: `Nuova PR su repo webmail:
Titolo: fix(layout): corregge grid nella lista messaggi su <1024px
Autore: lucia-dev
Link: https://github.com/org/repo/pull/142
Controlli CI: ✔ passati`
  },
  {
    id: 5,
    data: "2025-09-10T20:11:00Z",
    mittente: "no-reply&#64;codemotion.com",
    destinatario: "me&#64;webmail.test",
    oggetto: "Conference ticket - Early Bird",
    anteprima: "Ultimi giorni per i biglietti scontati. Track web, cloud, AI…",
    body: `Ciao!
Ultimi giorni per l'Early Bird di Codemotion.
• Track Web, Cloud, AI
• Workshop hands-on
• Community night
Acquista ora e risparmia il 25%.`
  },
  {
    id: 6,
    data: "2025-09-10T07:59:12Z",
    mittente: "service&#64;banca.it",
    destinatario: "me&#64;webmail.test",
    oggetto: "Estratto conto disponibile",
    anteprima: "Il tuo estratto conto mensile è ora disponibile nell’area riservata…",
    body: `Gentile cliente,
l'estratto conto del mese di agosto è disponibile nell'Area Riservata.
Accesso: https://banca.it/area-riservata
Cordiali saluti.`
  },
  {
    id: 7,
    data: "2025-09-09T15:30:45Z",
    mittente: "lucia.dev&#64;example.com",
    destinatario: "me&#64;webmail.test",
    oggetto: "Mock dati per webmail",
    anteprima: "Ti mando la prima bozza di dataset. Fammi sapere se aggiungere allegati…",
    body: `Ciao,
ti mando la prima bozza di dataset per la webmail.
Se vuoi posso aggiungere anche un campo "attachments" più avanti.
A presto!`
  },
  {
    id: 8,
    data: "2025-09-09T06:22:00Z",
    mittente: "noreply&#64;amazon.it",
    destinatario: "me&#64;webmail.test",
    oggetto: "Il tuo ordine è stato spedito",
    anteprima: "Consegna prevista tra il 13 e il 15 settembre. Traccia il pacco qui…",
    body: `Buone notizie!
Il tuo ordine #IT-903-221 è stato spedito.
Consegna prevista: 13–15 settembre.
Tracking: https://amazon.it/track/IT-903-221`
  },
  {
    id: 9,
    data: "2025-09-08T21:05:18Z",
    mittente: "support&#64;firebase.google.com",
    destinatario: "me&#64;webmail.test",
    oggetto: "Nuovi limiti gratuiti Firestore",
    anteprima: "Abbiamo aggiornato le quote del piano gratuito. Scopri cosa cambia…",
    body: `Ciao sviluppatore,
abbiamo aggiornato le quote del piano gratuito Firestore.
Scopri le novità e le best practice per ottimizzare le letture.
— Team Firebase`
  },
  {
    id: 10,
    data: "2025-09-08T10:02:09Z",
    mittente: "alerts&#64;uptime.com",
    destinatario: "me&#64;webmail.test",
    oggetto: "[OK] Servizio tornato operativo",
    anteprima: "Il monitoraggio ha rilevato il ripristino della disponibilità in 3m 12s…",
    body: `INCIDENTE RISOLTO
Servizio: webmail-api
Durata: 3m 12s
Causa: deploy canary fallito, rollback automatico completato.`
  },
  {
    id: 11,
    data: "2025-09-07T18:40:00Z",
    mittente: "newsletter&#64;mdn.dev",
    destinatario: "me&#64;webmail.test",
    oggetto: "MDN – Novità su CSS Container Queries",
    anteprima: "Esempi, compatibilità e pattern per layout responsive più robusti…",
    body: `Container Queries:
• Strategie per card responsive
• CQ Unit e fallback
• Compatibilità browser aggiornata
Leggi la guida su MDN.`
  },
  {
    id: 12,
    data: "2025-09-07T07:18:26Z",
    mittente: "info&#64;palestra.fit",
    destinatario: "me&#64;webmail.test",
    oggetto: "Promo autunnale abbonamenti",
    anteprima: "Iscriviti entro fine mese e ottieni 2 mesi omaggio e una consulenza…",
    body: `PROMO AUTUNNO
• 2 mesi omaggio
• 1 consulenza nutrizionale inclusa
Valida fino al 30/09.`
  },
  {
    id: 13,
    data: "2025-09-06T22:55:00Z",
    mittente: "paolo.bianchi&#64;example.com",
    destinatario: "me&#64;webmail.test",
    oggetto: "Screens UI - feedback",
    anteprima: "Ho provato la lista orizzontale: bello il truncation, forse margini stretti…",
    body: `Ciao,
lista orizzontale promossa. Forse margini un po' stretti su mobile.
Suggerisco 12px padding laterale e 8px tra avatar e subject.
— Paolo`
  },
  {
    id: 14,
    data: "2025-09-06T13:11:44Z",
    mittente: "noreply&#64;google.com",
    destinatario: "me&#64;webmail.test",
    oggetto: "Sicurezza account: nuovo accesso",
    anteprima: "Abbiamo rilevato un nuovo accesso da Chrome Windows a Milano…",
    body: `Nuovo accesso al tuo account
Browser: Chrome (Windows)
Posizione stimata: Milano, IT
Se non sei stato tu, cambia la password.`
  },
  {
    id: 15,
    data: "2025-09-05T19:07:03Z",
    mittente: "fatture&#64;fornitore.it",
    destinatario: "me&#64;webmail.test",
    oggetto: "Fattura elettronica settembre",
    anteprima: "Gentile cliente, alleghiamo la fattura relativa al periodo 01-30/09…",
    body: `Gentile cliente,
in allegato la fattura elettronica relativa al periodo 01–30/09.
Cordiali saluti,
Ufficio Amministrazione`
  },
  {
    id: 16,
    data: "2025-09-05T08:33:19Z",
    mittente: "noreply&#64;spotify.com",
    destinatario: "me&#64;webmail.test",
    oggetto: "Nuove uscite per te",
    anteprima: "Basato sui tuoi ascolti: ecco le nuove playlist rock e indie…",
    body: `Nuove uscite:
• Indie Radar (aggiornata)
• Rock Revival
• Focus & Code
Ascolta ora la selezione personalizzata.`
  },
  {
    id: 17,
    data: "2025-09-04T21:20:00Z",
    mittente: "riccardo.pm&#64;example.com",
    destinatario: "me&#64;webmail.test",
    oggetto: "Standup di domani",
    anteprima: "10:00 su Meet. Update rapidi su bug #142 e card UI in corso…",
    body: `Ciao team,
standup domani alle 10:00 su Meet.
Update su bug #142 e progress card UI.
Grazie!`
  },
  {
    id: 18,
    data: "2025-09-04T12:01:37Z",
    mittente: "noreply&#64;coursera.org",
    destinatario: "me&#64;webmail.test",
    oggetto: "Il tuo corso scade tra 3 giorni",
    anteprima: "Completa gli ultimi quiz per ottenere l’attestato entro domenica…",
    body: `Promemoria:
il tuo corso “TypeScript Deep Dive” scade tra 3 giorni.
Completa gli ultimi quiz per ottenere l'attestato.`
  },
  {
    id: 19,
    data: "2025-09-03T16:47:59Z",
    mittente: "delivery&#64;justeat.it",
    destinatario: "me&#64;webmail.test",
    oggetto: "Ordine confermato",
    anteprima: "Il ristorante ha confermato la preparazione. Arrivo stimato 20:15…",
    body: `Ordine confermato!
Ristorante: Pizzeria 4 Mori
Arrivo stimato: 20:15
Dettagli ordine nell'app.`
  },
  {
    id: 20,
    data: "2025-09-03T09:14:22Z",
    mittente: "sara.capo&#64;example.com",
    destinatario: "me&#64;webmail.test",
    oggetto: "Retrospettiva sprint",
    anteprima: "Raccogliamo feedback sulle user stories completate e sui blocchi emersi…",
    body: `Ciao,
per la retro di venerdì raccogliamo feedback su:
• Cosa è andato bene
• Cosa migliorare
• Azioni concrete per il prossimo sprint`
  },
  {
    id: 21,
    data: "2025-09-02T23:58:00Z",
    mittente: "events&#64;meetup.com",
    destinatario: "me&#64;webmail.test",
    oggetto: "Angular Meetup – Call for Papers",
    anteprima: "Stiamo cercando talk di 10–20 minuti su performance e DX. Candidati…",
    body: `Call for Papers aperta!
Cerchiamo talk da 10–20 minuti su performance, DX e tooling.
Deadline CFP: 30/09.`
  },
  {
    id: 22,
    data: "2025-09-12T09:02:45Z",
    mittente: "hr&#64;azienda.it",
    destinatario: "me&#64;webmail.test",
    oggetto: "Promemoria documenti onboarding",
    anteprima: "Ti ricordiamo di caricare C.I., IBAN e modulo privacy entro lunedì…",
    body: `Buongiorno,
ti ricordiamo di caricare C.I., IBAN e modulo privacy entro lunedì.
Grazie, HR`
  },
  {
    id: 23,
    data: "2025-09-11T06:55:10Z",
    mittente: "calendar&#64;google.com",
    destinatario: "me&#64;webmail.test",
    oggetto: "Invito: One-to-one (gio 12 set, 15:30)",
    anteprima: "L'evento è stato aggiornato con link Meet…",
    body: `Invito aggiornato:
One-to-one con Riccardo
12 settembre, 15:30–16:00
Meet link aggiornato nell'evento.`
  }
];
