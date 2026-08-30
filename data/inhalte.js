/* ==========================================================================
   INHALTE — hier änderst du alles, ohne HTML anzufassen.
   ==========================================================================

   Zwei Blöcke:

   1) DATEN   = deine Zahlen, Links und Kontaktdaten.
                Alles mit "AUSFÜLLEN" musst du ersetzen.
                Du kannst diese Werte in jedem Text unten mit {klammern}
                benutzen, z.B. {region} oder {alter}.

   2) TEXTE   = jeder Textbaustein der Seite, deutsch und englisch
                direkt untereinander. So kann nie eine Sprache
                hinterherhinken.

   Nach dem Ändern: Datei speichern, Seite im Browser neu laden. Fertig.
   ========================================================================== */

const DATEN = {
  /* --- Person ----------------------------------------------------------- */
  vorname:   "Ibrahim",
  nachname:  "Celikci",
  spitzname: "Sultan",
  alter:     "16",

  // Nur Region, keine Stadt und keine Adresse.
  region:    "Raum Hannover / Niedersachsen",

  /* --- Kontakt ---------------------------------------------------------- */
  email:     "sultnibo33@gmail.com",

  // Kostenloses Konto auf formspree.io anlegen, Formular erstellen,
  // dort steht eine ID wie "xayzbqwe" oder "mvgkabcd". Nur die ID hier rein.
  // Nur die ID, nicht die ganze Adresse. Die Seite baut daraus
  // https://formspree.io/f/<ID> selbst zusammen.
  formspreeId: "xyeykzod",

  /* --- Kanäle ----------------------------------------------------------- */
  // Zahlen sind freiwillig. Lässt du Follower UND Likes leer (""), verschwindet
  // der ganze Zahlenblock — die Karte sieht dann trotzdem fertig aus, nicht kaputt.
  // Trägst du Zahlen ein, schreib hier den Monat dazu, damit später niemand eine
  // alte Zahl für aktuell hält. Leer lassen blendet die Zeile aus.
  zahlenStand:         "August 2026",

  // Dein privater Kanal steht hier bewusst NICHT drin. Diese Datei ist im
  // Netz für jeden abrufbar — was hier steht, ist öffentlich, auch wenn es
  // auf keiner Seite angezeigt wird.
  // Willst du irgendwann einen zweiten Kanal zeigen, trag ihn hier ein:
  tiktokHauptName:     "",
  tiktokHauptUrl:      "",
  tiktokHauptFollower: "",
  tiktokHauptViews:    "",

  tiktokKartName:      "@sultnibo",
  tiktokKartUrl:       "https://www.tiktok.com/@sultnibo",
  tiktokKartFollower:  "375",
  tiktokKartViews:     "41.735",

  // Optional. Leer lassen ("") blendet den Link aus.
  instagramName: "",
  instagramUrl:  "",

  /* --- Lebenslauf ------------------------------------------------------- */
  // PDF in den Ordner cv/ legen. Leer lassen ("") blendet den Button aus.
  lebenslaufDatei: "",

  /* --- Deine besten Videos ---------------------------------------------- */
  // 3 bis 6 Stück. Ein Klick auf die Karte öffnet das Video bei TikTok.
  //
  //   url   = Link aus der TikTok-App: Teilen -> Link kopieren
  //   bild  = Vorschaubild, optional. Mach einen Screenshot vom Video,
  //           lege ihn in assets/img/ und trage hier "assets/img/video-1.jpg" ein.
  //           Leer lassen ("") zeigt eine gestaltete Kachel statt eines Fotos.
  //   titel = eine kurze Zeile, was im Video passiert
  //
  // Zum Entfernen einfach die ganze Zeile löschen, zum Hinzufügen eine kopieren.
  // Die Vorschaubilder liegen lokal in assets/img/. Absicht: so muss die Seite
  // beim Laden NICHT bei TikTok anfragen — sonst würde die IP jedes Besuchers
  // dorthin gehen, noch bevor jemand auf ein Video klickt.
  // Neues Video: Screenshot in assets/img/ legen und hier bei "bild" eintragen.
  videos: [
    { url:   "https://www.tiktok.com/@sultnibo/video/7607199178581675286",
      bild:  "assets/img/video-1.jpg",
      titel: { de: "Dying while trying", en: "Dying while trying" } },

    { url:   "https://www.tiktok.com/@sultnibo/video/7538899165498182934",
      bild:  "assets/img/video-2.jpg",
      titel: { de: "Take my mind to an other place", en: "Take my mind to an other place" } },

    { url:   "https://www.tiktok.com/@sultnibo/video/7564160386769947926",
      bild:  "assets/img/video-3.jpg",
      titel: { de: "", en: "" } }
  ],

  /* --- Sim-Racing ------------------------------------------------------- */
  iRating:    "",            // z.B. "1.450" — leer lassen blendet die Zeile aus
  simRig:     "Moza R3 Bundle",

  /* --- Karting ---------------------------------------------------------- */
  // Strecken, auf denen du schon gefahren bist.
  strecken: [
    "Hildesheim",
    "Kartomania Laatzen",
    "Kart 2000 Kirchlengern"
  ]

  // Impressumsdaten stehen NICHT hier, sondern direkt in impressum.html
  // und datenschutz.html. Bitte gemeinsam mit deinen Eltern ausfüllen.
};


const TEXTE = {

  /* === Kopf / Meta ====================================================== */
  "meta.titel": {
    de: "{vorname} {nachname} — Sultan Racing",
    en: "{vorname} {nachname} — Sultan Racing"
  },
  "meta.beschreibung": {
    de: "{alter} Jahre, aus {region}. Karting, Sim-Racing, DTM und Formel 1 — und zwei eigene TikTok-Kanäle. Meine persönliche Seite.",
    en: "{alter} years old, from {region}. Karting, sim racing, DTM and Formula 1 — plus two TikTok channels of my own. My personal page."
  },

  /* === Navigation ======================================================= */
  "nav.start":     { de: "Start",       en: "Home" },
  "nav.ueber":     { de: "Über mich",   en: "About" },
  "nav.sim":       { de: "Sim-Racing",  en: "Sim Racing" },
  "nav.kart":      { de: "Karting",     en: "Karting" },
  "nav.content":   { de: "Videos",      en: "Videos" },
  "nav.weg":       { de: "Mein Weg",    en: "My Path" },
  "nav.kontakt":   { de: "Kontakt",     en: "Contact" },
  "nav.menue":     { de: "Menü öffnen", en: "Open menu" },
  "nav.sprache":   { de: "Sprache wechseln", en: "Switch language" },
  "nav.skip":      { de: "Zum Inhalt springen", en: "Skip to content" },

  /* === Startseite: Kacheln zu den Unterseiten =========================== */
  "start.mehr":        { de: "Wo du weiterlesen kannst", en: "Where to read on" },
  "start.weiter":      { de: "Ansehen", en: "Open" },
  "teaser.ueber":      { de: "Wer ich bin, wo meine Familie herkommt und warum es ausgerechnet Motorsport geworden ist.", en: "Who I am, where my family's from, and why it ended up being motorsport." },
  "teaser.kart":       { de: "Wo ich fahre, wie oft ich es schaffe — und was mir noch fehlt.", en: "Where I drive, how often I manage it — and what I'm still missing." },
  "teaser.sim":        { de: "iRacing, ACC und warum ich fast nur GT3 fahre.", en: "iRacing, ACC and why I drive almost nothing but GT3." },
  "teaser.content":    { de: "Mein Karting-Kanal auf TikTok und ein paar Videos daraus.", en: "My karting channel on TikTok and a few videos from it." },
  "teaser.weg":        { de: "Was als Nächstes dran ist — bis hin zum Studium Richtung Race Engineer.", en: "What's next — right up to studying towards becoming a race engineer." },
  "teaser.kontakt":    { de: "Schreib mir einfach — per Mail oder direkt über das Formular.", en: "Just write — by email or straight through the form." },

  /* === Hero ============================================================= */
  "hero.kicker":   { de: "Sultan Racing", en: "Sultan Racing" },
  "hero.name":     { de: "{vorname} {nachname}", en: "{vorname} {nachname}" },
  "hero.fakten":   {
    de: "{alter} Jahre · Karting & Sim-Racing · {region}",
    en: "{alter} years old · Karting & sim racing · {region}"
  },
  "hero.lead": {
    de: "Kart, Simulator und alles, was vier Räder und zu wenig Bodenfreiheit hat. Diese Seite ist meine Ecke im Internet: wer ich bin, was ich fahre, was ich schaue und was ich als Nächstes vorhabe.",
    en: "Karts, the simulator, and anything with four wheels and not enough ground clearance. This page is my corner of the internet: who I am, what I drive, what I watch and what's coming next."
  },
  "hero.cta1":     { de: "Mehr über mich", en: "More about me" },
  "hero.cta2":     { de: "Lebenslauf", en: "Résumé" },
  "hero.bild.alt": {
    de: "Illustration: ein Sultan mit Turban und rotem Umhang fährt ein rotes Gokart mit türkischer Flagge auf der Frontverkleidung",
    en: "Illustration: a sultan in a turban and red robe driving a red go-kart with the Turkish flag on the nose cone"
  },

  "stat1.wert":  { de: "{alter}", en: "{alter}" },
  "stat1.label": { de: "Jahre alt", en: "years old" },
  "stat2.wert":  { de: "2", en: "2" },
  "stat2.label": { de: "Disziplinen: Kart & Sim", en: "disciplines: kart & sim" },
  "stat3.wert":  { de: "3", en: "3" },
  "stat3.label": { de: "Sprachen: DE · TR · EN", en: "languages: DE · TR · EN" },

  /* === Über mich ======================================================== */
  "ueber.kicker": { de: "Wer hier schreibt", en: "Who's writing" },
  "ueber.titel":  { de: "Über mich", en: "About me" },
  "ueber.lead": {
    de: "{alter}, aus dem {region}, Familie aus Antep. Seit ein paar Jahren dreht sich bei mir ziemlich viel um Motorsport — und irgendwann will ich da auch beruflich hin, als Race Engineer.",
    en: "{alter}, from {region}, family from Antep. Motorsport has taken over a fair bit of my life over the past few years — and eventually I want to work in it, as a race engineer."
  },
  "ueber.p1": {
    de: "Angefangen hat's wie bei vielen: Rennen im Fernsehen, irgendwann das erste Mal selbst in einem Kart. Danach war die Sache eigentlich klar. Fahren kann ich leider nicht so oft, wie ich gern würde — den Rest der Zeit sitze ich am Simulator.",
    en: "It started like it does for a lot of people: races on TV, then sitting in a kart myself for the first time. After that it was pretty much settled. I can't drive as often as I'd like, so the rest of the time I'm on the simulator."
  },
  "ueber.p2": {
    de: "Geboren bin ich in Deutschland, meine Familie kommt aus Antep. Zu Hause läuft Deutsch und Türkisch, Englisch kommt in der Schule dazu — und im Sim-Racing sowieso, da redet im Team eh keiner Deutsch.",
    en: "I was born in Germany, my family's from Antep. At home it's German and Turkish, English comes in at school — and in sim racing anyway, since nobody on the team speaks German."
  },
  "ueber.p3": {
    de: "Geschaut wird bei mir DTM und Formel 1, viel mehr eigentlich nicht. Und nicht nur, wer gewinnt — eher, warum einer zwei Runden zu spät reinkommt und sich damit sein Rennen kaputtmacht. Praktischerweise fährt die DTM GT3-Autos, also genau das, was ich im Simulator fahre.",
    en: "I watch DTM and Formula 1, not much beyond that. And not just who wins — more why someone pits two laps late and wrecks their own race. Handily, DTM runs GT3 cars, which is exactly what I drive on the sim."
  },
  "ueber.p4": {
    de: "Sonst bin ich viel mit Freunden und Familie unterwegs, reise gern und esse am liebsten Kebab. Und ehrlich gesagt mag ich dieses Unterwegssein am Motorsport fast so sehr wie das Fahren selbst. Fahrerlager, lange Wochenenden, Leute, die man vorher nicht kannte.",
    en: "Otherwise I'm out with friends and family a lot, I like travelling, and my favourite food is kebab. And honestly, I like that side of motorsport almost as much as the driving. Paddocks, long weekends, people you didn't know before."
  },

  "vorbilder.titel": { de: "Meine Vorbilder", en: "My role models" },
  "vorbild1.name":   { de: "Ayhancan Güven", en: "Ayhancan Güven" },
  "vorbild1.text": {
    de: "Vom Kart bis ganz nach oben in den GT-Sport. Zeigt einfach, dass es keinen interessiert, wo deine Familie herkommt, solange du schnell bist.",
    en: "From karting all the way up in GT racing. Just shows nobody cares where your family is from as long as you're quick."
  },
  "vorbild2.name":   { de: "Lewis Hamilton", en: "Lewis Hamilton" },
  "vorbild2.text": {
    de: "Sieben Titel und trotzdem nie satt geworden. Was ich mir da abschaue, ist nicht der Fahrstil, sondern dass er nie stehen bleibt.",
    en: "Seven titles and still never satisfied. What I take from him isn't the driving style, it's that he never stands still."
  },

  /* === Stärken ========================================================== */
  "staerken.kicker": { de: "Womit ich meine Zeit verbringe", en: "How I spend my time" },
  "staerken.titel":  { de: "Was ich so mache", en: "What I'm into" },
  "staerken.lead": {
    de: "Fahren, filmen, zocken, Rennen gucken. Ungefähr in der Reihenfolge.",
    en: "Driving, filming, gaming, watching races. Roughly in that order."
  },

  "skill1.titel": { de: "Karting", en: "Karting" },
  "skill1.text": {
    de: "Ich fahre, wann ich kann — bisher einfach auf normalen Kartbahnen, ohne Verein und ohne Lizenz. Profi bin ich also keiner. Aber jedes Mal will ich ein bisschen schneller sein als beim letzten Mal.",
    en: "I drive when I can — so far just on normal kart tracks, no club, no licence. So I'm no pro. But every time I go, I want to be a bit quicker than last time."
  },
  "skill2.titel": { de: "Sim-Racing", en: "Sim racing" },
  "skill2.text": {
    de: "iRacing und ACC, meistens GT3. Ich bin nicht der Schnellste und baue auch mal Mist. Aber hier kann ich Sachen ausprobieren, die auf einer echten Bahn richtig teuer wären.",
    en: "iRacing and ACC, mostly GT3. I'm not the fastest and I do mess up. But here I can try things that would get expensive fast on a real track."
  },
  "skill3.titel": { de: "Video & Schnitt", en: "Video & editing" },
  "skill3.text": {
    de: "Das ist die Sache, die ich am längsten mache. Drehen und schneiden alles selbst, hochkant, in den ersten zwei Sekunden muss was passieren — sonst wischt eh jeder weiter. Zwei Kanäle laufen inzwischen.",
    en: "This is the thing I've been doing longest. I shoot and edit everything myself, vertical, something has to happen in the first two seconds or people just swipe on. Two channels running by now."
  },
  "skill4.titel": { de: "Technik", en: "The technical side" },
  "skill4.text": {
    de: "Da bin ich ganz am Anfang, das gebe ich zu. Aber genau dahin will ich später beruflich: verstehen, warum sich ein Auto so verhält, wie es sich verhält — und was man ändern muss, damit es schneller wird.",
    en: "I'm right at the start with this, I'll admit. But that's exactly where I want to end up professionally: understanding why a car behaves the way it does, and what you change to make it faster."
  },
  "skill5.titel": { de: "DTM & Formel 1", en: "DTM & Formula 1" },
  "skill5.text": {
    de: "Ich schaue nicht nur, wer gewinnt. Reifenphasen, Undercuts, Safety-Car-Timing — das ist der Teil, über den ich mich mit Freunden am längsten streiten kann.",
    en: "I don't just watch who wins. Tyre phases, undercuts, safety car timing — that's the part I can argue about with friends the longest."
  },
  "skill6.titel": { de: "Sprachen", en: "Languages" },
  "skill6.text": {
    de: "Deutsch als Muttersprache, Türkisch fließend, Englisch gut. Im Motorsport, wo an einem Wochenende drei Sprachen durchs Fahrerlager gehen, ist das ganz praktisch.",
    en: "German as a native speaker, fluent Turkish, good English. Handy in motorsport, where three languages cross the paddock in a single weekend."
  },

  /* === Sim-Racing ======================================================= */
  "sim.kicker": { de: "Am Simulator", en: "On the simulator" },
  "sim.titel":  { de: "Sim-Racing", en: "Sim racing" },
  "sim.lead": {
    de: "Kartzeit kostet Geld, Simzeit nicht. Deshalb passiert der größte Teil meiner Fahrerei am Simulator — und zwar in GT3-Autos, also genau der Klasse, die auch in der DTM fährt.",
    en: "Track time costs money, sim time doesn't. So most of my driving happens on the simulator — in GT3 cars, the same class that races in DTM."
  },
  "sim.plattform.titel": { de: "Plattformen", en: "Platforms" },
  "sim.plattform.text": {
    de: "iRacing und Assetto Corsa Competizione. Beides Simulationen, in denen Fahrfehler bestraft werden — genau darum geht es.",
    en: "iRacing and Assetto Corsa Competizione. Both punish mistakes, which is exactly the point."
  },
  "sim.p1": {
    de: "Auf die Kartbahn komme ich nicht so oft, wie ich gern würde — das kostet jedes Mal Geld. Am Simulator kostet eine Runde nichts. Deshalb passiert dort der größte Teil meiner Fahrerei.",
    en: "I don't get to the kart track as often as I'd like — it costs money every time. On the simulator a lap costs nothing. So that's where most of my driving happens."
  },
  "sim.p2": {
    de: "Gefahren wird fast ausschließlich GT3, und das nicht zufällig: Das sind genau die Autos, die auch in der DTM fahren. Wenn ich sonntags ein Rennen schaue, sitze ich unter der Woche im selben Auto.",
    en: "I drive almost nothing but GT3, and not by accident: those are exactly the cars that race in DTM. So when I watch a race on Sunday, during the week I'm sitting in the same car."
  },
  "sim.p3": {
    de: "Ein Abend sieht meistens so aus: ein paar Runden zum Reinkommen, danach ein Rennen gegen andere. Manchmal läuft es, manchmal bin ich in Runde zwei raus. Beides ist okay — auf einer echten Strecke wäre derselbe Fehler richtig teuer.",
    en: "An evening usually looks like this: a few laps to get into it, then a race against other people. Sometimes it works, sometimes I'm out on lap two. Both are fine — on a real track the same mistake would get expensive."
  },
  "sim.p4": {
    de: "Am spannendsten finde ich inzwischen gar nicht mehr nur das Fahren, sondern was danach in der Telemetrie steht. Wo verliere ich Zeit, und was ändert eine Setup-Anpassung wirklich? Genau das ist ja der Job, in den ich später will.",
    en: "These days the most interesting part isn't just the driving, it's what the telemetry says afterwards. Where am I losing time, and what does a setup change actually do? That's exactly the job I want to end up in."
  },
  "sim.rig.titel":  { de: "Mein Setup", en: "My rig" },
  "sim.rating.titel": { de: "Aktueller Stand", en: "Current status" },
  "sim.rating.label": { de: "iRating", en: "iRating" },
  "sim.hinweis": {
    de: "Liga-Ergebnisse trage ich hier ein, sobald ich meine erste Saison komplett gefahren bin. Vorher steht hier nichts — ausgedachte Platzierungen bringen niemandem etwas.",
    en: "League results will go here once I've completed my first full season. Until then this stays empty — invented results help nobody."
  },

  /* === Karting ========================================================== */
  "kart.kicker": { de: "Auf der Strecke", en: "On track" },
  "kart.titel":  { de: "Karting", en: "Karting" },
  "kart.lead": {
    de: "Der Teil, um den es eigentlich geht — auch wenn ich es seltener auf die Bahn schaffe, als mir lieb ist.",
    en: "The part it's actually all about — even if I get to the track less often than I'd like."
  },
  "kart.badge":  { de: "Freizeit-Karting · noch ohne Rennlizenz", en: "Leisure karting · no race licence yet" },
  "kart.p1": {
    de: "Ehrlich gesagt: Ich fahre bisher auf öffentlichen Kartbahnen, nicht in einer lizenzierten Rennserie. Ich habe keine Pokale im Regal und tue auch nicht so.",
    en: "Honestly: so far I drive on public kart tracks, not in a licensed race series. I have no trophies on the shelf and I'm not going to pretend otherwise."
  },
  "kart.p2": {
    de: "Was ich habe, ist Sitzzeit, ein Gefühl für das Fahrzeug und die Bereitschaft, den nächsten Schritt selbst zu organisieren. Die Lizenz und die ersten Clubrennen stehen weiter unten in meinem Plan — mit Zeitraum, nicht als vages „irgendwann\".",
    en: "What I do have is seat time, a feel for the kart, and the willingness to organise the next step myself. The licence and my first club races are in my plan below — with a timeframe, not a vague \"someday\"."
  },
  "kart.strecken.titel": { de: "Strecken, die ich kenne", en: "Tracks I know" },

  /* === Content ========================================================== */
  "content.kicker": { de: "Mein Kanal", en: "My channel" },
  "content.titel":  { de: "Videos", en: "Videos" },
  "content.lead": {
    de: "Mein Karting-Kanal. Drehen, schneiden, posten — mache ich alles allein.",
    en: "My karting channel. Shooting, editing, posting — I do all of it myself."
  },
  "content.p1": {
    de: "Angefangen habe ich mit dem Kanal, weil auf meinem privaten Account einfach zu viel anderes Zeug lag und die Kart-Videos da untergegangen sind. Hier liegt jetzt nur noch, was mit Motorsport zu tun hat.",
    en: "I started this channel because my private account had too much other stuff on it and the kart videos just disappeared in the mix. Now this one only has motorsport on it."
  },
  "content.p2": {
    de: "Meistens sind das Onboard-Clips von der Bahn: Runden, Überholmanöver, und auch mal eine verbremste Kurve, die ich absichtlich drin lasse. Dazu Sachen aus dem Simulator — wenn ein Rennen spannend war oder komplett schiefgegangen ist, wird daraus ein Video.",
    en: "Mostly onboard clips from the track: laps, overtakes, and the occasional blown braking point that I deliberately leave in. Plus sim stuff — if a race was exciting or went completely wrong, it becomes a video."
  },
  "content.p3": {
    de: "Gedreht wird mit dem, was ich habe: Handy, manchmal eine Action-Cam. Geschnitten wird alles selbst. Hochkant, kurz, und in den ersten zwei Sekunden muss was passieren — sonst wischt eh jeder weiter. Das war so ziemlich das Erste, was ich gelernt habe.",
    en: "Shot with what I have: a phone, sometimes an action cam. All edited by me. Vertical, short, and something has to happen in the first two seconds — otherwise people just swipe on. That was pretty much the first thing I learned."
  },
  "content.p4": {
    de: "Wie es gerade läuft, siehst du am besten direkt auf dem Kanal. Hier unten sind ein paar Videos, die ich selbst ganz gut finde.",
    en: "How it's going right now is best seen on the channel itself. Below are a few videos I'm happy with."
  },
  "kanal1.rolle":  { de: "Hauptkanal", en: "Main channel" },
  "kanal2.rolle":  { de: "Karting-Kanal", en: "Karting channel" },
  "kanal.follower": { de: "Follower", en: "Followers" },
  "kanal.likes":    { de: "Likes", en: "Likes" },
  "kanal.oeffnen":  { de: "Kanal ansehen", en: "View channel" },
  "kanal.stand":    { de: "Stand: {zahlenStand}", en: "As of {zahlenStand}" },
  "kanal.live":     { de: "Aktuelle Zahlen stehen direkt auf TikTok.", en: "Live numbers are on TikTok itself." },

  "videos.titel":  { de: "Ein paar Videos", en: "A few videos" },
  "videos.leer":   { de: "Hier kommen meine Videos rein.", en: "My videos will go here." },
  "videos.ansehen":{ de: "Bei TikTok ansehen", en: "Watch on TikTok" },
  "videos.nummer": { de: "Video", en: "Video" },

  /* === Mein Weg ========================================================= */
  "weg.kicker": { de: "Der Plan", en: "The plan" },
  "weg.titel":  { de: "Mein Weg", en: "My path" },
  "weg.lead": {
    de: "Ich bin {alter} und stehe ziemlich am Anfang. Statt so zu tun, als wäre ich weiter, schreibe ich lieber ehrlich auf, was als Nächstes dran ist.",
    en: "I'm {alter} and pretty much at the start. Rather than pretending otherwise, I'd rather write down honestly what's coming next."
  },
  "weg1.zeit":  { de: "Jetzt — Ende 2026", en: "Now — end of 2026" },
  "weg1.titel": { de: "Grundlagen legen", en: "Laying the groundwork" },
  "weg1.text": {
    de: "So oft auf die Bahn, wie es eben geht. Eine Sim-Racing-Saison einmal komplett durchfahren statt nach drei Rennen aufzuhören. Und rausfinden, was ich für die DMSB-Einsteigerlizenz überhaupt brauche.",
    en: "To the track as often as I can manage. Finishing one sim racing season properly instead of quitting after three races. And figuring out what I actually need for an entry-level DMSB licence."
  },
  "weg2.zeit":  { de: "2027", en: "2027" },
  "weg2.titel": { de: "Lizenz & erste Rennen", en: "Licence & first races" },
  "weg2.text": {
    de: "Lizenz machen und endlich mal ein richtiges Rennen fahren — erst mal Clubrennen im Kart. Und wenn sich nebenbei ein Praktikum in einem Team oder einer Werkstatt ergibt, wäre ich sofort dabei.",
    en: "Get a licence and finally drive a real race — club races in karting to start with. And if an internship with a team or a workshop comes up along the way, I'd be there in a heartbeat."
  },
  "weg3.zeit":  { de: "Nach der Schule", en: "After school" },
  "weg3.titel": { de: "Studium — Ziel Race Engineer", en: "University — aiming for race engineer" },
  "weg3.text": {
    de: "Das ist der eigentliche Plan: studieren und Race Engineer werden. Also der, der am Kommandostand sitzt, die Daten liest und dem Fahrer sagt, was das Auto braucht. Richtung Maschinenbau oder Fahrzeugtechnik — welche Hochschule genau, muss ich mir noch anschauen. Fahren will ich trotzdem weiter, so weit es eben geht.",
    en: "This is the actual plan: study and become a race engineer. The person on the pit wall reading the data and telling the driver what the car needs. Mechanical or automotive engineering — which university exactly is still to be figured out. I want to keep driving alongside it, as far as I can."
  },

  /* === Für Teams ======================================================== */
  "teams.kicker": { de: "Falls jemand fragt", en: "If anyone asks" },
  "teams.titel":  { de: "Wofür ich offen bin", en: "What I'm open to" },
  "teams.lead": {
    de: "Die Seite hier ist erstmal einfach meine. Aber falls jemand aus dem Motorsport zufällig vorbeischaut — hier steht, wobei ich nicht lange überlegen müsste.",
    en: "This page is just mine, first and foremost. But in case someone from motorsport happens to drop by — here's what I wouldn't have to think twice about."
  },
  "teams.p1": {
    de: "Ein Praktikum in einem Team oder einer Werkstatt, mal einen Tag am Kommandostand zugucken, oder einfach jemand, der den Job schon macht und Lust hat, mir zu erzählen, wie man da hinkommt — bei sowas müsste ich nicht lange überlegen.",
    en: "An internship with a team or a workshop, a day watching from the pit wall, or just someone already doing the job who feels like telling me how you get there — I wouldn't have to think twice about any of that."
  },
  "teams.p2": {
    de: "Wochenenden und Ferien habe ich frei. Und falls sich irgendwann was Richtung lizenzierter Rennsport ergibt: umso besser.",
    en: "Weekends and school holidays I'm free. And if something towards licensed racing ever comes up: all the better."
  },

  "teams.hinweis": {
    de: "Ich bin {alter}. Falls es mal um etwas Vertragliches geht, sind meine Eltern mit dabei — sagt einfach kurz Bescheid.",
    en: "I'm {alter}. If anything contractual ever comes up, my parents are involved — just say the word."
  },

  /* === Kontakt ========================================================== */
  "kontakt.kicker": { de: "Schreib mir", en: "Say hello" },
  "kontakt.titel":  { de: "Kontakt", en: "Contact" },
  "kontakt.lead": {
    de: "Schreib mir gern. Egal ob du eine Frage hast, einen Tipp, selbst Kart fährst oder einfach auch Motorsport magst — ich antworte auf jede ernst gemeinte Nachricht.",
    en: "Feel free to write. Whether you've got a question, a tip, drive karts yourself or just like motorsport — I reply to every genuine message."
  },
  "kontakt.direkt": { de: "Direkt per E-Mail", en: "Straight by email" },
  "kontakt.social": { de: "Oder auf meinen Kanälen", en: "Or on my channels" },

  "form.name":       { de: "Name", en: "Name" },
  "form.namePh":     { de: "Wie heißt du?", en: "Your name" },
  "form.email":      { de: "E-Mail", en: "Email" },
  "form.emailPh":    { de: "Wohin darf ich antworten?", en: "Where should I reply?" },
  "form.thema":      { de: "Worum geht es?", en: "What's it about?" },
  "form.thema1":     { de: "Einfach Hallo sagen", en: "Just saying hello" },
  "form.thema2":     { de: "Praktikum / Studium", en: "Internship / studies" },
  "form.thema3":     { de: "Sponsoring", en: "Sponsorship" },
  "form.thema4":     { de: "Content & Zusammenarbeit", en: "Content & collaboration" },
  "form.thema5":     { de: "Etwas anderes", en: "Something else" },
  "form.nachricht":  { de: "Nachricht", en: "Message" },
  "form.nachrichtPh":{ de: "Erzähl kurz, worum es geht.", en: "Tell me briefly what it's about." },
  "form.senden":     { de: "Nachricht senden", en: "Send message" },
  "form.sendet":     { de: "Wird gesendet …", en: "Sending …" },
  "form.danke":      { de: "Danke! Deine Nachricht ist angekommen. Ich melde mich.", en: "Thank you! Your message arrived. I'll get back to you." },
  "form.fehler":     { de: "Das hat leider nicht geklappt. Schreib mir gern direkt per E-Mail.", en: "That didn't work, unfortunately. Please just email me directly." },
  "form.nichtEingerichtet": {
    de: "Das Formular ist noch nicht eingerichtet. Bis dahin bitte die E-Mail-Adresse oben benutzen.",
    en: "The form isn't set up yet. Please use the email address above for now."
  },
  "form.datenschutz": {
    de: "Deine Angaben werden nur benutzt, um dir zu antworten. Mehr dazu in der Datenschutzerklärung.",
    en: "Your details are used only to reply to you. More in the privacy notice."
  },

  /* === Footer =========================================================== */
  "footer.claim":       { de: "Vom Kart in den Motorsport.", en: "From karting into motorsport." },
  "footer.impressum":   { de: "Impressum", en: "Legal notice" },
  "footer.datenschutz": { de: "Datenschutz", en: "Privacy" },
  "footer.kein_tracking": { de: "Diese Seite trackt dich nicht.", en: "This site does not track you." },
  "footer.nach_oben":   { de: "Nach oben", en: "Back to top" },

  /* === Rechtsseiten (gemeinsame Bausteine) ============================== */
  "recht.zurueck": { de: "Zurück zur Startseite", en: "Back to the homepage" }
};
