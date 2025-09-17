// import { Mockmail } from "../model/mockmail";

// export const MOCK_MAILS: Mockmail[] = [
//   {
//     "id": 1,
//     "data": "2025-09-12T08:15:00Z",
//     "mittente": "newsletter@angular.io",
//     "destinatario": "me@webmail.test",
//     "oggetto": "Angular Weekly – Novità e best practice",
//     "anteprima": "In questo numero: signals, control flow @if/@for, performance tips…",
//     "body": "Ciao!\nIn questo numero di Angular Weekly:\n• Signals avanzati: pattern comuni e anti-pattern.\n• Nuovo control flow (@if/@for): casi reali e migrazioni.\n• Performance tips: defer views, hydration, bundle size.\nLeggi sul blog: https://angular.io/blog\n— Team Angular",
//     "isRead": false
//   },
//   {
//     "id": 2,
//     "data": "2025-09-11T17:42:10Z",
//     "mittente": "maria.rossi@example.com",
//     "destinatario": "me@webmail.test",
//     "oggetto": "Cena di venerdì?",
//     "anteprima": "Che ne dici di sushi alle 20:30? Ho trovato un posto nuovo in centro…",
//     "body": "Ehi!\nChe ne dici di sushi venerdì alle 20:30? Ho trovato un posto nuovo in centro (si chiama \"Nami\").\nSe sei d’accordo prenoto per due. Fammi sapere!\n— Maria",
//     "isRead": false
//   },
//   {
//     "id": 3,
//     "data": "2025-09-11T18:05:41Z",
//     "mittente": "me@webmail.test",
//     "destinatario": "maria.rossi@example.com",
//     "oggetto": "Re: Cena di venerdì?",
//     "anteprima": "Perfetto per me! Se trovi tavolo vicino alla vetrata, top…",
//     "body": "Ciao Maria,\nperfetto per me! Se trovi tavolo vicino alla vetrata, top.\nGrazie!",
//     "isRead": true
//   },
//   {
//     "id": 4,
//     "data": "2025-09-11T09:05:33Z",
//     "mittente": "noreply@github.com",
//     "destinatario": "me@webmail.test",
//     "oggetto": "[repo] Nuova PR aperta: fix layout",
//     "anteprima": "Ha aperto una pull request per correggere il grid nella lista messaggi…",
//     "body": "Nuova PR su repo webmail:\nTitolo: fix(layout): corregge grid nella lista messaggi su <1024px\nAutore: lucia-dev\nLink: https://github.com/org/repo/pull/142\nControlli CI: ✔ passati",
//     "isRead": true
//   },
//   {
//     "id": 5,
//     "data": "2025-09-10T20:11:00Z",
//     "mittente": "no-reply@codemotion.com",
//     "destinatario": "me@webmail.test",
//     "oggetto": "Conference ticket - Early Bird",
//     "anteprima": "Ultimi giorni per i biglietti scontati. Track web, cloud, AI…",
//     "body": "Ciao!\nUltimi giorni per l'Early Bird di Codemotion.\n• Track Web, Cloud, AI\n• Workshop hands-on\n• Community night\nAcquista ora e risparmia il 25%.",
//     "isRead": false
//   },
//   {
//     "id": 6,
//     "data": "2025-09-10T07:59:12Z",
//     "mittente": "service@banca.it",
//     "destinatario": "me@webmail.test",
//     "oggetto": "Estratto conto disponibile",
//     "anteprima": "Il tuo estratto conto mensile è ora disponibile nell’area riservata…",
//     "body": "Gentile cliente,\nl'estratto conto del mese di agosto è disponibile nell'Area Riservata.\nAccesso: https://banca.it/area-riservata\nCordiali saluti.",
//     "isRead": true
//   },
//   {
//     "id": 7,
//     "data": "2025-09-09T15:30:45Z",
//     "mittente": "lucia.dev@example.com",
//     "destinatario": "me@webmail.test",
//     "oggetto": "Mock dati per webmail",
//     "anteprima": "Ti mando la prima bozza di dataset. Fammi sapere se aggiungere allegati…",
//     "body": "Ciao,\nti mando la prima bozza di dataset per la webmail.\nSe vuoi posso aggiungere anche un campo \"attachments\" più avanti.\nA presto!",
//     "isRead": true
//   },
//   {
//     "id": 8,
//     "data": "2025-09-09T06:22:00Z",
//     "mittente": "noreply@amazon.it",
//     "destinatario": "me@webmail.test",
//     "oggetto": "Il tuo ordine è stato spedito",
//     "anteprima": "Consegna prevista tra il 13 e il 15 settembre. Traccia il pacco qui…",
//     "body": "Buone notizie!\nIl tuo ordine #IT-903-221 è stato spedito.\nConsegna prevista: 13–15 settembre.\nTracking: https://amazon.it/track/IT-903-221",
//     "isRead": true
//   },
//   {
//     "id": 9,
//     "data": "2025-09-08T21:05:18Z",
//     "mittente": "support@firebase.google.com",
//     "destinatario": "me@webmail.test",
//     "oggetto": "Nuovi limiti gratuiti Firestore",
//     "anteprima": "Abbiamo aggiornato le quote del piano gratuito. Scopri cosa cambia…",
//     "body": "Ciao sviluppatore,\nabbiamo aggiornato le quote del piano gratuito Firestore.\nScopri le novità e le best practice per ottimizzare le letture.\n— Team Firebase",
//     "isRead": false
//   },
//   {
//     "id": 10,
//     "data": "2025-09-08T10:02:09Z",
//     "mittente": "alerts@uptime.com",
//     "destinatario": "me@webmail.test",
//     "oggetto": "[OK] Servizio tornato operativo",
//     "anteprima": "Il monitoraggio ha rilevato il ripristino della disponibilità in 3m 12s…",
//     "body": "INCIDENTE RISOLTO\nServizio: webmail-api\nDurata: 3m 12s\nCausa: deploy canary fallito, rollback automatico completato.",
//     "isRead": true
//   },
//   {
//     "id": 11,
//     "data": "2025-09-07T18:40:00Z",
//     "mittente": "newsletter@mdn.dev",
//     "destinatario": "me@webmail.test",
//     "oggetto": "MDN – Novità su CSS Container Queries",
//     "anteprima": "Esempi, compatibilità e pattern per layout responsive più robusti…",
//     "body": "Container Queries:\n• Strategie per card responsive\n• CQ Unit e fallback\n• Compatibilità browser aggiornata\nLeggi la guida su MDN.",
//     "isRead": false
//   },
//   {
//     "id": 12,
//     "data": "2025-09-07T07:18:26Z",
//     "mittente": "info@palestra.fit",
//     "destinatario": "me@webmail.test",
//     "oggetto": "Promo autunnale abbonamenti",
//     "anteprima": "Iscriviti entro fine mese e ottieni 2 mesi omaggio e una consulenza…",
//     "body": "PROMO AUTUNNO\n• 2 mesi omaggio\n• 1 consulenza nutrizionale inclusa\nValida fino al 30/09.",
//     "isRead": true
//   },
//   {
//     "id": 13,
//     "data": "2025-09-06T22:55:00Z",
//     "mittente": "paolo.bianchi@example.com",
//     "destinatario": "me@webmail.test",
//     "oggetto": "Screens UI - feedback",
//     "anteprima": "Ho provato la lista orizzontale: bello il truncation, forse margini stretti…",
//     "body": "Ciao,\nlista orizzontale promossa. Forse margini un po' stretti su mobile.\nSuggerisco 12px padding laterale e 8px tra avatar e subject.\n— Paolo",
//     "isRead": true
//   },
//   {
//     "id": 14,
//     "data": "2025-09-06T13:11:44Z",
//     "mittente": "noreply@google.com",
//     "destinatario": "me@webmail.test",
//     "oggetto": "Sicurezza account: nuovo accesso",
//     "anteprima": "Abbiamo rilevato un nuovo accesso da Chrome Windows a Milano…",
//     "body": "Nuovo accesso al tuo account\nBrowser: Chrome (Windows)\nPosizione stimata: Milano, IT\nSe non sei stato tu, cambia la password.",
//     "isRead": false
//   },
//   {
//     "id": 15,
//     "data": "2025-09-05T19:07:03Z",
//     "mittente": "fatture@fornitore.it",
//     "destinatario": "me@webmail.test",
//     "oggetto": "Fattura elettronica settembre",
//     "anteprima": "Gentile cliente, alleghiamo la fattura relativa al periodo 01-30/09…",
//     "body": "Gentile cliente,\nin allegato la fattura elettronica relativa al periodo 01–30/09.\nCordiali saluti,\nUfficio Amministrazione",
//     "isRead": true
//   },
//   {
//     "id": 16,
//     "data": "2025-09-05T08:33:19Z",
//     "mittente": "noreply@spotify.com",
//     "destinatario": "me@webmail.test",
//     "oggetto": "Nuove uscite per te",
//     "anteprima": "Basato sui tuoi ascolti: ecco le nuove playlist rock e indie…",
//     "body": "Nuove uscite:\n• Indie Radar (aggiornata)\n• Rock Revival\n• Focus & Code\nAscolta ora la selezione personalizzata.",
//     "isRead": false
//   },
//   {
//     "id": 17,
//     "data": "2025-09-04T21:20:00Z",
//     "mittente": "riccardo.pm@example.com",
//     "destinatario": "me@webmail.test",
//     "oggetto": "Standup di domani",
//     "anteprima": "10:00 su Meet. Update rapidi su bug #142 e card UI in corso…",
//     "body": "Ciao team,\nstandup domani alle 10:00 su Meet.\nUpdate su bug #142 e progress card UI.\nGrazie!",
//     "isRead": true
//   },
//   {
//     "id": 18,
//     "data": "2025-09-04T12:01:37Z",
//     "mittente": "noreply@coursera.org",
//     "destinatario": "me@webmail.test",
//     "oggetto": "Il tuo corso scade tra 3 giorni",
//     "anteprima": "Completa gli ultimi quiz per ottenere l’attestato entro domenica…",
//     "body": "Promemoria:\nil tuo corso \"TypeScript Deep Dive\" scade tra 3 giorni.\nCompleta gli ultimi quiz per ottenere l'attestato.",
//     "isRead": true
//   },
//   {
//     "id": 19,
//     "data": "2025-09-03T16:47:59Z",
//     "mittente": "delivery@justeat.it",
//     "destinatario": "me@webmail.test",
//     "oggetto": "Ordine confermato",
//     "anteprima": "Il ristorante ha confermato la preparazione. Arrivo stimato 20:15…",
//     "body": "Ordine confermato!\nRistorante: Pizzeria 4 Mori\nArrivo stimato: 20:15\nDettagli ordine nell'app.",
//     "isRead": false
//   },
//   {
//     "id": 20,
//     "data": "2025-09-03T09:14:22Z",
//     "mittente": "sara.capo@example.com",
//     "destinatario": "me@webmail.test",
//     "oggetto": "Retrospettiva sprint",
//     "anteprima": "Raccogliamo feedback sulle user stories completate e sui blocchi emersi…",
//     "body": "Ciao,\nper la retro di venerdì raccogliamo feedback su:\n• Cosa è andato bene\n• Cosa migliorare\n• Azioni concrete per il prossimo sprint",
//     "isRead": true
//   },
//   {
//     "id": 21,
//     "data": "2025-09-02T23:58:00Z",
//     "mittente": "events@meetup.com",
//     "destinatario": "me@webmail.test",
//     "oggetto": "Angular Meetup – Call for Papers",
//     "anteprima": "Stiamo cercando talk di 10–20 minuti su performance e DX. Candidati…",
//     "body": "Call for Papers aperta!\nCerchiamo talk da 10–20 minuti su performance, DX e tooling.\nDeadline CFP: 30/09.",
//     "isRead": false
//   },
//   {
//     "id": 22,
//     "data": "2025-09-12T09:02:45Z",
//     "mittente": "hr@azienda.it",
//     "destinatario": "me@webmail.test",
//     "oggetto": "Promemoria documenti onboarding",
//     "anteprima": "Ti ricordiamo di caricare C.I., IBAN e modulo privacy entro lunedì…",
//     "body": "Buongiorno,\nti ricordiamo di caricare C.I., IBAN e modulo privacy entro lunedì.\nGrazie, HR",
//     "isRead": true
//   },
//   {
//     "id": 23,
//     "data": "2025-09-11T06:55:10Z",
//     "mittente": "calendar@google.com",
//     "destinatario": "me@webmail.test",
//     "oggetto": "Invito: One-to-one (gio 12 set, 15:30)",
//     "anteprima": "L'evento è stato aggiornato con link Meet…",
//     "body": "Invito aggiornato:\nOne-to-one con Riccardo\n12 settembre, 15:30–16:00\nMeet link aggiornato nell'evento.",
//     "isRead": true
//   }
// ]
