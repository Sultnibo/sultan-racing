# Sultan Racing — deine Website

Eine zweisprachige Website (Deutsch/Englisch) über dich: Karting, Sim-Racing,
deine Kanäle und was du vorhast.

Reines HTML, CSS und JavaScript. Kein Build, keine Installation, keine
Abhängigkeiten. Du kannst jede Datei mit einem normalen Texteditor öffnen.

> **Am schnellsten kommst du rein über die Seite `anleitung.html`.**
> Die zeigt dir bebildert, wie du Fotos, Videos, Texte und Farben änderst.
> Starte den Server (Punkt 1) und ruf `http://localhost:8123/anleitung.html` auf.

---

## 1 · Seite lokal ansehen

Im Ordner dieser Datei ein Terminal öffnen und starten:

```bash
python server.py
```

Dann im Browser `http://localhost:8123` aufrufen. Nach jeder Änderung
die Seite neu laden (F5).

> **Nimm `server.py`, nicht `python -m http.server`.** Der normale Server lässt
> den Browser die Dateien zwischenspeichern. Du änderst dann etwas in
> `data/inhalte.js`, lädst neu, siehst die alte Fassung — und suchst den Fehler
> an der falschen Stelle. `server.py` schaltet das ab.
>
> Wenn trotzdem mal etwas alt aussieht: **Strg+F5** lädt unter Umgehung des
> Caches neu. Auf GitHub Pages tritt das Problem nicht auf.

---

## 2 · Die Seiten

| Datei | Was drauf ist |
|---|---|
| `index.html` | Startseite: Hero mit der Kart-Illustration und Kacheln zu allen Seiten |
| `ueber-mich.html` | Deine Geschichte, Vorbilder, „Was ich so mache" |
| `karting.html` | Karting + Fotogalerie |
| `sim-racing.html` | iRacing, ACC, was du noch lernen willst |
| `videos.html` | Text über deinen Karting-Kanal und die Video-Kacheln |
| `mein-weg.html` | Zeitstrahl bis zum Studium Richtung Race Engineer + „Wofür ich offen bin" |
| `kontakt.html` | E-Mail, Kanäle, Kontaktformular |
| `impressum.html` | Vorlage — muss ausgefüllt werden |
| `datenschutz.html` | Vorlage — muss ausgefüllt werden |
| `anleitung.html` | Nur für dich. Vor dem Onlinegehen löschen |

**Kopfzeile und Fußzeile stehen in keiner dieser Dateien.** Die baut
`assets/js/main.js` auf jeder Seite automatisch. Wenn du einen Menüpunkt ändern
willst, änderst du ihn dort einmal in der Liste `SEITEN` — nicht zehnmal.

---

## 3 · Was du noch ausfüllen musst

Alles in **[`data/inhalte.js`](data/inhalte.js)**. Suche in der Datei nach
`AUSFÜLLEN` — jede Fundstelle gehört ersetzt. Auf der Website erscheinen diese
Stellen absichtlich in Großbuchstaben, damit du keine übersiehst.

Schon eingetragen: Name, Alter, Region, E-Mail, Karting-Kanal.

> **Dein privater Kanal steht absichtlich nirgends drin** — auch nicht versteckt
> im Quelltext. `data/inhalte.js` ist im Netz für jeden abrufbar; was dort steht,
> ist öffentlich, selbst wenn es auf keiner Seite angezeigt wird.

Offen:

- **Follower- und Like-Zahlen** (freiwillig — lässt du beide leer, verschwindet
  der Zahlenblock und die Seite verweist stattdessen auf TikTok)
- **Videolinks** (3–6 Stück) und optional Vorschaubilder
- **Kartbahnen**, auf denen du warst
- **Sim-Setup** und iRating (oder `""` lassen, dann wird es ausgeblendet)
- **Formspree-ID** für das Kontaktformular → Punkt 5
- **Fotos** → Punkt 4
- **Impressumsdaten** — bitte mit deinen Eltern

Was du leer lässt (`""`), blendet die Seite selbst aus oder zeigt „—". Es bleibt
also nie ein kaputter Rest stehen.

---

## 4 · Fotos

1. Bild nach `assets/img/` legen, z.B. `kart-1.jpg`, vorher auf ca. 1600 px
   Breite verkleinern.
2. In `karting.html` einen `<div class="foto foto--leer">…</div>` komplett
   ersetzen durch:

```html
<figure class="foto">
  <img src="assets/img/kart-1.jpg" alt="Ich im Kart auf der Bahn in Hannover" loading="lazy">
</figure>
```

Der `alt`-Text ist kein Beiwerk — er beschreibt das Bild für Leute, die nicht
sehen können, und für Google.

**Nur eigene Fotos.** Bilder aus Google oder von fremden Accounts gehören
jemand anderem, und das kann teuer werden.

### Das Bild aus Discord

Eine `.url`-Datei ist **nur eine Verknüpfung**, kein Bild — damit kann die Seite
nichts anfangen. Dazu laufen Discord-Anhang-Links nach ein paar Tagen ab.
Öffne den Link im Browser, Rechtsklick auf das Bild → „Bild speichern unter",
und speichere die echte Datei in `assets/img/`. Die `.url`-Datei danach löschen.

---

## 5 · Kontaktformular aktivieren

1. Kostenloses Konto auf [formspree.io](https://formspree.io) anlegen.
2. Formular erstellen — du bekommst eine ID wie `xayzbqwe`.
3. Die ID in `data/inhalte.js` bei `formspreeId` eintragen.
4. Seite neu laden und dir selbst eine Testnachricht schicken.

Solange dort `AUSFÜLLEN` steht, zeigt das Formular einen Hinweis und lässt sich
nicht absenden. Es kann also nichts stillschweigend im Nichts landen.

---

## 6 · Vor dem Veröffentlichen

- [ ] Alle `AUSFÜLLEN`-Stellen ersetzt (auch in `impressum.html` und `datenschutz.html`)
- [ ] Impressum und Datenschutz **gemeinsam mit deinen Eltern** ausgefüllt
- [ ] Beide Sprachen einmal durchgeklickt (Umschalter oben rechts)
- [ ] Alle Links getestet: TikTok, E-Mail, Impressum, Datenschutz
- [ ] Testnachricht über das Formular geschickt und angekommen
- [ ] Auf dem Handy angeschaut
- [ ] `anleitung.html` gelöscht
- [ ] Angaben über Ayhancan Güven kurz gegengecheckt
- [ ] **Ehrlichkeits-Check:** Steht irgendwo etwas, das du in einem Gespräch nicht
      belegen könntest? Dann raus damit.

---

## 7 · Online stellen mit GitHub Pages

```bash
git init
git add .
git commit -m "Sultan Racing website"
```

Dann auf [github.com](https://github.com) ein neues, leeres Repository anlegen
(z.B. `sultan-racing`) und die dort angezeigten Befehle zum Hochladen ausführen.

Anschließend im Repository: **Settings → Pages → Source: Deploy from a branch →
Branch: `main`, Ordner `/ (root)` → Save.**

Nach ein bis zwei Minuten läuft die Seite unter
`https://DEINNAME.github.io/sultan-racing/`.

Eine eigene Domain trägst du später unter **Settings → Pages → Custom domain**
ein. Kostet je nach Anbieter 10–20 Euro im Jahr.

Die Datei `.nojekyll` muss im Ordner bleiben.

---

## 8 · Farben

Ganz oben in `assets/css/style.css`, Block 1:

```css
--rot:      #B41229;   /* Hauptrot */
--rot-tief: #8A0D1F;   /* große Flächen */
--gold:     #C9A227;   /* nur Schmuck */
--creme:    #FDF9F1;   /* Hintergrund */
--text:     #3B1119;   /* Schrift */
```

Diese Werte steuern die ganze Website.

Das Sultan-Kart-Bild auf der Startseite ist eine Bilddatei und ändert sich davon
**nicht** mit. Es liegt in zwei Formaten in `assets/img/`: `sultan-kart.webp`
(87 KB, das laden alle heutigen Browser) und `sultan-kart.png` als Rückfall.
Der weiße Hintergrund ist freigestellt — deshalb sieht man auf dem Creme keinen
Kasten. Willst du ein anderes Bild, ersetze beide Dateien und passe den alt-Text
in `data/inhalte.js` bei `hero.bild.alt` an.

**Eine Regel:** Gold hat auf hellem Hintergrund zu wenig Kontrast für Fließtext.
Deshalb ist Gold überall nur Schmuck — Linien, Kronen, große Zahlen. Gelesen
wird Rot oder Dunkelrot.

---

## 9 · Noch offen

**Google Fonts.** Die Schriften (Barlow Condensed und Inter) werden von
Google-Servern geladen. In Deutschland ist das ein bekannter Streitpunkt, weil
dabei die IP-Adresse der Besucher an Google übertragen wird. Sauberer wäre es,
die Schriftdateien lokal in `assets/fonts/` abzulegen — beide stehen unter der
Open Font License, das Mitliefern ist also erlaubt. Sag Bescheid, wenn ich das
umbauen soll; dann kann auch der entsprechende Abschnitt in der
Datenschutzerklärung wieder raus.
