# Sultan Racing — deine Website

Zweisprachige Website (Deutsch/Englisch) über dich: Karting, Sim-Racing,
dein TikTok-Kanal und was du vorhast.

Reines HTML, CSS und JavaScript. Kein Build, keine Installation, keine
Abhängigkeiten. Jede Datei lässt sich mit einem normalen Texteditor öffnen.

**Live:** https://sultan-racing.ibrhmclkc.workers.dev

> **Am schnellsten kommst du rein über `anleitung.html`.** Die zeigt dir mit
> Beispielen zum Kopieren, wie du Fotos, Videos, Texte und Farben änderst.
> Server starten (Punkt 1), dann `http://localhost:8123/anleitung.html` aufrufen.

---

## 1 · Lokal ansehen

```bash
python server.py
```

Dann `http://localhost:8123` im Browser. Nach jeder Änderung neu laden (F5).

> **Nimm `server.py`, nicht `python -m http.server`.** Der normale Server lässt
> den Browser die Dateien zwischenspeichern. Du änderst etwas in
> `data/inhalte.js`, lädst neu, siehst die alte Fassung — und suchst den Fehler
> an der falschen Stelle. `server.py` schaltet das ab.
>
> Sieht trotzdem mal etwas alt aus: **Strg+F5**.

---

## 2 · Die Seiten

| Datei | Inhalt |
|---|---|
| `index.html` | Startseite: Sultan auf der Strecke, Zahlen, Kacheln zu allen Seiten |
| `ueber-mich.html` | Deine Geschichte, Vorbilder, „Was ich so mache" |
| `karting.html` | Karting und die Strecken, die du kennst |
| `sim-racing.html` | iRacing, ACC, warum GT3 |
| `videos.html` | Dein Karting-Kanal und die Video-Kacheln |
| `mein-weg.html` | Zeitstrahl bis zum Studium Richtung Race Engineer |
| `kontakt.html` | E-Mail, Kanal, Kontaktformular |
| `impressum.html` · `datenschutz.html` | ausgefüllt |
| `anleitung.html` | nur für dich, nicht im Menü, für Google gesperrt |

**Kopf- und Fußzeile stehen in keiner dieser Dateien.** Die baut
`assets/js/main.js` auf jeder Seite automatisch. Menüpunkte änderst du dort
einmal in der Liste `SEITEN` — nicht neunmal.

---

## 3 · Texte und Zahlen ändern

Alles in **[`data/inhalte.js`](data/inhalte.js)**:

- oben **`DATEN`** — Name, Alter, Region, E-Mail, Kanal, Zahlen, Strecken,
  Videos, Formspree-ID
- darunter **`TEXTE`** — jeder Satz der Website, Deutsch und Englisch
  direkt untereinander. Ändere immer **beide**.

Leere Felder (`""`) blendet die Seite selbst aus. Es bleibt nie ein kaputter
Rest stehen. Steht irgendwo `AUSFÜLLEN`, erscheint das auf der Website in
Großbuchstaben — damit du es nicht übersiehst.

> **Dein privater Kanal steht absichtlich nirgends drin.** `data/inhalte.js`
> ist im Netz für jeden abrufbar — was dort steht, ist öffentlich, auch wenn
> es auf keiner Seite angezeigt wird.

---

## 4 · Fotos einbauen

Bild nach `assets/img/` legen (vorher auf ca. 1600 px Breite verkleinern),
dann in `karting.html` an der markierten Stelle:

```html
<h2 class="galerie__titel">Aus dem Kart</h2>
<div class="galerie">
  <figure class="foto">
    <img src="assets/img/kart-1.jpg" alt="Ich im Kart in Hildesheim" loading="lazy">
  </figure>
</div>
```

Der `alt`-Text ist kein Beiwerk — er beschreibt das Bild für Leute, die nicht
sehen können, und für Google.

**Nur eigene Fotos.** Bilder aus dem Netz gehören jemand anderem.

---

## 5 · Kontaktformular

Läuft über Formspree, ID `xyeykzod` steht in `data/inhalte.js`.

**Einmalig nötig:** Schick dir selbst eine Testnachricht über das Formular und
klick danach die Bestätigungsmail von Formspree an. Vorher gibt Formspree das
Formular nicht frei und fremde Nachrichten kommen nicht bei dir an.

---

## 6 · Farben

Ganz oben in `assets/css/style.css`, Block 1:

```css
--rot:      #A6132C;   /* Hauptrot */
--rot-tief: #7C0E20;   /* große Flächen */
--gold:     #B08D3C;   /* nur Schmuck */
--creme:    #FBFAF8;   /* Hintergrund */
--text:     #2E1015;   /* Schrift */
```

**Zwei Regeln:**

1. **Gold nie als Fläche.** Nur dünne Linien, Ränder, Kronen, kleine Zahlen.
   Flächiges Gold neben Rot sieht aus wie eine Fastfood-Kette — das war schon
   mal der Fall.
2. **Weiß fast neutral halten.** Wird es beige, kommt der Gelbstich zurück.

Das Sultan-Bild ändert sich davon nicht mit, das ist eine Bilddatei. Es liegt
als `sultan-kart.webp` (87 KB, laden alle heutigen Browser) und
`sultan-kart.png` (Rückfall) in `assets/img/`, jeweils freigestellt. Die
Streckenkulisse dahinter ist SVG und steht direkt in `index.html`.

---

## 7 · Schriften

Barlow Condensed und Inter liegen **lokal** in `assets/fonts/` und werden von
deinem eigenen Server ausgeliefert, nicht von Google. Dadurch geht keine
IP-Adresse deiner Besucher an Dritte — in Deutschland ein bekannter
Streitpunkt. Beide stehen unter der SIL Open Font License, das Mitliefern ist
erlaubt.

Die `@font-face`-Regeln stehen ganz oben in `assets/css/style.css`. Pro Schnitt
gibt es zwei Dateien: `latin` für normale Texte, `latin-ext` für Sonderzeichen
wie das türkische ğ. Der Browser lädt `latin-ext` nur, wenn er es braucht.

---

## 8 · Änderungen online stellen

```bash
git add -A && git commit -m "Was du geändert hast" && git push
npx wrangler deploy
```

Nach ein bis zwei Minuten ist es live.

Welche Dateien **nicht** ins Netz gehen, steht in `.assetsignore`: `.git`,
`server.py`, `anleitung.html`, das Sultan-Originalbild und die
Konfigurationsdateien.

> **Die Zeilen `.git` und `.wrangler` in `.assetsignore` niemals entfernen.**
> Ohne sie lädt wrangler das komplette `.git`-Verzeichnis mit ins Netz — damit
> könnte jeder die ganze Projekthistorie herunterladen.

### Eigene Domain

Wenn du später z.B. `sultan-racing.de` nimmst: bei Cloudflare unter
**Workers & Pages → sultan-racing → Settings → Domains** eintragen. Danach in
`index.html` bei `og:url` und `og:image` die neue Adresse setzen, sonst zeigt
die Linkvorschau beim Teilen auf die alte.

---

## 9 · Noch offen

- **Eigene Fotos** — die Seite hat bisher kein einziges echtes Foto von dir.
  Das ist die auffälligste Lücke, siehe Punkt 4.
- **Testnachricht über das Formular** — siehe Punkt 5.
- **Videotitel** für das dritte Video, falls du eins willst.
