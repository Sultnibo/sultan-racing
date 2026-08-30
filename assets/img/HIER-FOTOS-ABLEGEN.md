# Hier kommen deine Fotos rein

Lege deine eigenen Bilder in genau diesen Ordner, zum Beispiel:

```
kart-1.jpg
kart-2.jpg
portrait.jpg
og-bild.jpg
```

Danach in `index.html` (Abschnitt Karting) einen der Platzhalter
`<div class="foto foto--leer">…</div>` ersetzen durch:

```html
<figure class="foto">
  <img src="assets/img/kart-1.jpg" alt="Ich im Kart auf der Strecke XY" loading="lazy">
</figure>
```

## Drei Regeln

1. **Vorher verkleinern** auf etwa 1600 Pixel Breite. Ein 6-MB-Handyfoto
   lädt am Handy quälend langsam.
2. **Immer einen `alt`-Text schreiben.** Er beschreibt das Bild für Menschen,
   die nicht sehen können, und für Google.
3. **Nur eigene Fotos.** Bilder aus dem Netz gehören jemand anderem.

## Sonderfall `og-bild.jpg`

Das ist das Vorschaubild, das erscheint, wenn jemand deinen Link bei WhatsApp,
Discord oder LinkedIn teilt. Format 1200 × 630 Pixel. Ein gutes Foto von dir im
Kart funktioniert dafür bestens. Der Verweis darauf steht bereits in
`index.html` — sobald die Datei hier liegt, klappt es automatisch.

## Zu `.url`-Dateien

Eine `.url`-Datei ist nur eine Verknüpfung, kein Bild. Öffne den Link im
Browser, Rechtsklick auf das Bild, „Bild speichern unter" — und speichere die
echte Bilddatei hier ab.
