/* ==========================================================================
   SULTAN RACING — Skript
   Braucht data/inhalte.js (wird davor geladen).

   Kopfzeile und Fußzeile werden hier EINMAL gebaut und auf jeder Seite
   eingesetzt. Wenn du einen Menüpunkt ändern willst, änderst du ihn nur
   in der Liste SEITEN weiter unten — nicht in neun HTML-Dateien.

   Inhalt: 1 Seitenliste · 2 Sprache · 3 Kopf & Fuß · 4 Daten einsetzen
           5 Menü · 6 Animation · 7 Formular
   ========================================================================== */
(function () {
  "use strict";

  /* === 1 · SEITENLISTE =================================================== */
  // Reihenfolge hier = Reihenfolge im Menü.
  var SEITEN = [
    { id: "start",   datei: "index.html",      menue: "nav.start",   titel: null },
    { id: "ueber",   datei: "ueber-mich.html", menue: "nav.ueber",   titel: "ueber.titel" },
    { id: "karting", datei: "karting.html",    menue: "nav.kart",    titel: "kart.titel" },
    { id: "sim",     datei: "sim-racing.html", menue: "nav.sim",     titel: "sim.titel" },
    { id: "videos",  datei: "videos.html",     menue: "nav.content", titel: "content.titel" },
    { id: "weg",     datei: "mein-weg.html",   menue: "nav.weg",     titel: "weg.titel" },
    { id: "kontakt", datei: "kontakt.html",    menue: "nav.kontakt", titel: "kontakt.titel", cta: true }
  ];

  var LOGO =
    '<svg class="marke__zeichen" viewBox="0 0 48 48" aria-hidden="true" focusable="false">' +
      '<path d="M11 20V9.5l7 5.2L24 6l6 8.7 7-5.2V20z" fill="var(--gold)"/>' +
      '<path d="M10 30h4l2.6-4.4a3 3 0 0 1 2.6-1.6h9.6a3 3 0 0 1 2.6 1.6L34 30h4a2 2 0 0 1 0 4H10a2 2 0 0 1 0-4z" fill="currentColor"/>' +
      '<circle cx="15" cy="38" r="5" fill="currentColor"/>' +
      '<circle cx="33" cy="38" r="5" fill="currentColor"/>' +
    "</svg>";

  var aktuelleSeite = document.body.getAttribute("data-seite") || "start";

  /* === kleine Helfer ===================================================== */

  // Ein Wert gilt als "noch nicht ausgefüllt", wenn er leer ist oder AUSFÜLLEN enthält.
  function gesetzt(wert) {
    return typeof wert === "string" && wert.trim() !== "" && !wert.includes("AUSFÜLLEN");
  }
  function el(auswahl, wurzel) { return (wurzel || document).querySelector(auswahl); }
  function alle(auswahl, wurzel) {
    return Array.prototype.slice.call((wurzel || document).querySelectorAll(auswahl));
  }
  // {vorname}, {region} … aus DATEN einsetzen
  function fuellen(text) {
    return String(text).replace(/\{(\w+)\}/g, function (treffer, schluessel) {
      return Object.prototype.hasOwnProperty.call(DATEN, schluessel) ? DATEN[schluessel] : treffer;
    });
  }

  /* === 2 · SPRACHE ======================================================= */

  var SPEICHER = "sultan-sprache";
  var sprache = "de";

  try {
    var gemerkt = localStorage.getItem(SPEICHER);
    if (gemerkt === "de" || gemerkt === "en") {
      sprache = gemerkt;
    } else if (navigator.language && navigator.language.slice(0, 2).toLowerCase() !== "de") {
      sprache = "en";
    }
  } catch (e) {
    /* Privatfenster o.Ä. — dann bleibt es bei Deutsch. */
  }

  function t(schluessel) {
    var eintrag = TEXTE[schluessel];
    if (!eintrag) return "";
    return fuellen(eintrag[sprache] || eintrag.de || "");
  }

  /* === 3 · KOPF & FUSS BAUEN ============================================= */

  function menueHtml() {
    return SEITEN.map(function (s) {
      var klassen = [];
      if (s.cta) klassen.push("nav__cta");
      if (s.id === aktuelleSeite) klassen.push("aktiv");
      return '<a href="' + s.datei + '"' +
             (klassen.length ? ' class="' + klassen.join(" ") + '"' : "") +
             (s.id === aktuelleSeite ? ' aria-current="page"' : "") +
             ' data-i18n="' + s.menue + '"></a>';
    }).join("");
  }

  function kopfBauen() {
    var halter = el("#kopf-halter");
    if (!halter) return;
    halter.innerHTML =
      '<a class="skiplink" href="#inhalt" data-i18n="nav.skip"></a>' +
      '<header class="kopf">' +
        '<div class="huelle kopf__innen">' +
          '<a class="marke" href="index.html" aria-label="Sultan Racing">' + LOGO +
            '<span class="marke__text">Sultan<span class="marke__text--akzent">Racing</span></span>' +
          "</a>" +
          '<nav class="nav" id="nav" aria-label="Hauptnavigation">' + menueHtml() + "</nav>" +
          '<div class="kopf__werkzeuge">' +
            '<button type="button" class="sprache" id="sprache" data-i18n-aria-label="nav.sprache">' +
              '<span class="sprache__aktiv">DE</span><span class="sprache__trenn">/</span><span class="sprache__passiv">EN</span>' +
            "</button>" +
            '<button type="button" class="burger" id="burger" aria-expanded="false" aria-controls="nav" data-i18n-aria-label="nav.menue">' +
              "<span></span><span></span><span></span>" +
            "</button>" +
          "</div>" +
        "</div>" +
      "</header>";
  }

  function fussBauen() {
    var halter = el("#fuss-halter");
    if (!halter) return;
    halter.innerHTML =
      '<footer class="fuss">' +
        '<div class="huelle fuss__innen">' +
          '<div class="fuss__marke">' + LOGO +
            '<span class="fuss__claim" data-i18n="footer.claim"></span>' +
          "</div>" +
          '<nav class="fuss__nav" aria-label="Weitere Links">' +
            '<a href="index.html" data-i18n="nav.start"></a>' +
            '<a href="kontakt.html" data-i18n="nav.kontakt"></a>' +
            '<a href="impressum.html" data-i18n="footer.impressum"></a>' +
            '<a href="datenschutz.html" data-i18n="footer.datenschutz"></a>' +
          "</nav>" +
          '<p class="fuss__zeile">' +
            '<span id="fuss-copy"></span>' +
            '<span class="fuss__punkt">·</span>' +
            '<span data-i18n="footer.kein_tracking"></span>' +
          "</p>" +
        "</div>" +
      "</footer>";
  }

  /* === Sprache auf die Seite anwenden ==================================== */

  function spracheAnwenden() {
    document.documentElement.lang = sprache;

    alle("[data-i18n]").forEach(function (knoten) {
      var text = t(knoten.getAttribute("data-i18n"));
      if (text) knoten.textContent = text;
    });

    [
      ["data-i18n-placeholder", "placeholder"],
      ["data-i18n-aria-label", "aria-label"],
      ["data-i18n-title", "title"],
      ["data-i18n-alt", "alt"]
    ].forEach(function (paar) {
      alle("[" + paar[0] + "]").forEach(function (knoten) {
        var text = t(knoten.getAttribute(paar[0]));
        if (text) knoten.setAttribute(paar[1], text);
      });
    });

    // Seitentitel im Browser-Tab
    var seite = SEITEN.filter(function (s) { return s.id === aktuelleSeite; })[0];
    if (seite && seite.titel) {
      document.title = t(seite.titel) + " — Sultan Racing";
    } else if (seite) {
      document.title = t("meta.titel");
    }
    var beschreibung = el('meta[name="description"]');
    if (beschreibung) beschreibung.setAttribute("content", t("meta.beschreibung"));

    // Umschalter: links steht immer die aktive Sprache
    var aktiv = el(".sprache__aktiv");
    var passiv = el(".sprache__passiv");
    if (aktiv && passiv) {
      aktiv.textContent = sprache.toUpperCase();
      passiv.textContent = sprache === "de" ? "EN" : "DE";
    }

    datenEinsetzen();
  }

  /* === 4 · DATEN EINSETZEN =============================================== */

  function zahlOderStrich(wert) { return gesetzt(wert) ? wert : "—"; }

  function tiktokSymbol() {
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.83-2.48v-3.2a5.78 5.78 0 1 0 4.92 5.68V9.01a7.35 7.35 0 0 0 4.29 1.38V7.3a4.28 4.28 0 0 1-3.23-1.48z"/></svg>';
  }
  function instaSymbol() {
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.89 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.4a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>';
  }

  function datenEinsetzen() {
    /* --- Lebenslauf-Knopf --- */
    var cv = el("#cv-knopf");
    if (cv) {
      if (gesetzt(DATEN.lebenslaufDatei)) { cv.href = DATEN.lebenslaufDatei; cv.hidden = false; }
      else { cv.hidden = true; }
    }

    /* --- Sim-Racing --- */
    var irating = el("#irating-wert");
    if (irating) {
      if (gesetzt(DATEN.iRating)) {
        el(".wert-gross__zahl", irating).textContent = DATEN.iRating;
        irating.hidden = false;
      } else { irating.hidden = true; }
    }
    var rig = el("#rig-wert");
    if (rig) rig.textContent = zahlOderStrich(DATEN.simRig);

    /* --- Streckenliste --- */
    var strecken = el("#streckenliste");
    if (strecken) {
      strecken.innerHTML = "";
      (DATEN.strecken || []).forEach(function (name) {
        var li = document.createElement("li");
        li.textContent = name;
        strecken.appendChild(li);
      });
    }

    /* --- Kanäle --- */
    // Kanal 1 (privat) steht auf keiner Seite mehr — der Eintrag bleibt hier,
    // damit nichts kaputtgeht, falls du die Karte wieder einbaust.
    [
      { nr: 1, name: DATEN.tiktokHauptName, url: DATEN.tiktokHauptUrl, follower: DATEN.tiktokHauptFollower, likes: DATEN.tiktokHauptViews },
      { nr: 2, name: DATEN.tiktokKartName, url: DATEN.tiktokKartUrl, follower: DATEN.tiktokKartFollower, likes: DATEN.tiktokKartViews }
    ].forEach(function (k) {
      var name = el("#kanal" + k.nr + "-name");
      var link = el("#kanal" + k.nr + "-link");
      var zahlen = el("#kanal" + k.nr + "-zahlen");
      var fol = el("#kanal" + k.nr + "-follower");
      var lik = el("#kanal" + k.nr + "-likes");

      if (name) name.textContent = k.name;
      if (link) link.href = k.url;

      // Ohne Zahlen wird der ganze Block ausgeblendet. Ein einzelnes "—"
      // sieht nach vergessen aus, eine Karte ohne Zahlen nach Absicht.
      var hatZahlen = gesetzt(k.follower) || gesetzt(k.likes);
      if (zahlen) zahlen.hidden = !hatZahlen;
      if (hatZahlen) {
        if (fol) fol.textContent = zahlOderStrich(k.follower);
        if (lik) lik.textContent = zahlOderStrich(k.likes);
      }
    });

    // "Stand: März 2026" — nur wenn überhaupt Zahlen und ein Datum da sind
    var stand = el("#zahlen-stand");
    if (stand) {
      var irgendwelcheZahlen = [DATEN.tiktokKartFollower, DATEN.tiktokKartViews].some(gesetzt);
      if (irgendwelcheZahlen && gesetzt(DATEN.zahlenStand)) {
        stand.textContent = t("kanal.stand");
        stand.hidden = false;
      } else if (!irgendwelcheZahlen) {
        stand.textContent = t("kanal.live");
        stand.hidden = false;
      } else {
        stand.hidden = true;
      }
    }

    /* --- Videos --- */
    var videoliste = el("#videoliste");
    if (videoliste) {
      videoliste.innerHTML = "";
      var echte = (DATEN.videos || []).filter(function (v) { return gesetzt(v.url); });

      if (echte.length === 0) {
        var leer = document.createElement("li");
        leer.className = "video--leer";
        leer.textContent = t("videos.leer");
        videoliste.appendChild(leer);
      } else {
        echte.forEach(function (v, i) {
          var titel = (v.titel && (v.titel[sprache] || v.titel.de)) || "";
          var hatBild = gesetzt(v.bild);

          var li = document.createElement("li");
          var a = document.createElement("a");
          a.className = "video";
          a.href = v.url;
          a.target = "_blank";
          a.rel = "noopener noreferrer";

          // Ohne eigenes Vorschaubild bekommt die Kachel ein gestaltetes Muster,
          // damit die Reihe nie leer oder kaputt aussieht.
          a.innerHTML =
            '<span class="video__bild' + (hatBild ? "" : " video__bild--muster muster-" + ((i % 3) + 1)) + '">' +
              (hatBild ? '<img alt="" loading="lazy">' : '<span class="video__krone"></span>') +
              '<span class="video__spielen"><svg viewBox="0 0 12 14" aria-hidden="true"><path d="M0 0l12 7-12 7z"/></svg></span>' +
            "</span>" +
            '<span class="video__unten"><span class="video__titel"></span><span class="video__link"></span></span>';

          if (hatBild) el("img", a).src = v.bild;
          // Titel ist freiwillig. Ohne Titel bleibt nur die Kachel plus Link —
          // besser als eine leere Zeile oder ein erfundener Text.
          if (titel) el(".video__titel", a).textContent = titel;
          else el(".video__titel", a).remove();
          el(".video__link", a).textContent = t("videos.ansehen");

          // Ohne das hiessen alle Links gleich ("Bei TikTok ansehen") — für
          // Screenreader nicht unterscheidbar. Titel oder Nummer schafft Abhilfe.
          a.setAttribute("aria-label", (titel || t("videos.nummer") + " " + (i + 1)) + " — " + t("videos.ansehen"));

          li.appendChild(a);
          videoliste.appendChild(li);
        });
      }
    }

    /* --- E-Mail --- */
    var mail = el("#mail-link");
    if (mail) { mail.textContent = DATEN.email; mail.href = "mailto:" + DATEN.email; }

    /* --- Social-Links --- */
    var sozial = el("#sozial");
    if (sozial) {
      sozial.innerHTML = "";
      var eintraege = [
        { name: DATEN.tiktokKartName, url: DATEN.tiktokKartUrl, rolle: t("kanal2.rolle"), symbol: tiktokSymbol() }
      ];
      // Zweiter Kanal wird nur verlinkt, wenn in DATEN wirklich einer steht.
      if (gesetzt(DATEN.tiktokHauptUrl)) {
        eintraege.push({ name: DATEN.tiktokHauptName, url: DATEN.tiktokHauptUrl, rolle: t("kanal1.rolle"), symbol: tiktokSymbol() });
      }
      if (gesetzt(DATEN.instagramUrl)) {
        eintraege.push({ name: DATEN.instagramName || "Instagram", url: DATEN.instagramUrl, rolle: "Instagram", symbol: instaSymbol() });
      }
      eintraege.forEach(function (e) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = e.url; a.target = "_blank"; a.rel = "noopener noreferrer";
        a.innerHTML = e.symbol + "<span></span><span></span>";
        var felder = a.querySelectorAll("span");
        felder[0].textContent = e.name;
        felder[1].textContent = e.rolle;
        li.appendChild(a);
        sozial.appendChild(li);
      });
    }

    /* --- Fußzeile --- */
    var copy = el("#fuss-copy");
    if (copy) copy.textContent = "© " + new Date().getFullYear() + " " + fuellen("{vorname} {nachname}");
  }

  /* === 5 · MENÜ ========================================================== */

  function menueVerdrahten() {
    var burger = el("#burger");
    var nav = el("#nav");
    if (!burger || !nav) return;

    function schliessen() {
      nav.classList.remove("offen");
      burger.setAttribute("aria-expanded", "false");
    }

    burger.addEventListener("click", function () {
      var offen = nav.classList.toggle("offen");
      burger.setAttribute("aria-expanded", offen ? "true" : "false");
    });
    alle("a", nav).forEach(function (a) { a.addEventListener("click", schliessen); });
    document.addEventListener("keydown", function (ev) { if (ev.key === "Escape") schliessen(); });
    window.addEventListener("resize", function () { if (window.innerWidth > 900) schliessen(); });

    var knopf = el("#sprache");
    if (knopf) {
      knopf.addEventListener("click", function () {
        sprache = sprache === "de" ? "en" : "de";
        try { localStorage.setItem(SPEICHER, sprache); } catch (e) { /* nur für diesen Besuch */ }
        spracheAnwenden();
      });
    }
  }

  /* === 6 · EINBLENDEN BEIM SCROLLEN ====================================== */

  function animation() {
    var mag = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window) || mag.matches) return;

    var ziele = alle([
      ".abschnitt__kopf", ".karte", ".kachel", ".tafel", ".etappe", ".kanal",
      ".vorbilder", ".ueber__text", ".formular", ".kontakt__direkt",
      ".galerie", ".videos", ".teams__text", ".kart__gitter .fliess"
    ].join(","));

    ziele.forEach(function (k) { k.classList.add("reveal"); });

    var beobachter = new IntersectionObserver(
      function (eintraege, selbst) {
        eintraege.forEach(function (e, i) {
          if (!e.isIntersecting) return;
          e.target.style.transitionDelay = Math.min(i * 60, 240) + "ms";
          e.target.classList.add("sichtbar");
          selbst.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    ziele.forEach(function (k) { beobachter.observe(k); });
  }

  /* === 7 · FORMULAR ====================================================== */

  function formularVerdrahten() {
    var formular = el("#formular");
    if (!formular) return;

    var status = el("#formular-status");
    var senden = el("#senden");
    var warnung = el("#formular-warnung");
    var eingerichtet = gesetzt(DATEN.formspreeId);

    if (!eingerichtet) {
      if (warnung) warnung.hidden = false;
      if (senden) senden.disabled = true;
    } else {
      formular.action = "https://formspree.io/f/" + DATEN.formspreeId;
      formular.method = "POST";
    }

    function meldung(text, art) {
      if (!status) return;
      status.textContent = text;
      status.className = "formular__status" + (art ? " " + art : "");
    }

    function pruefen() {
      var okay = true;
      alle("input[required], textarea[required]", formular).forEach(function (feld) {
        var leer = !feld.value.trim();
        var mailFalsch = feld.type === "email" && feld.value.trim() &&
          !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(feld.value.trim());
        var fehler = leer || mailFalsch;
        feld.setAttribute("aria-invalid", fehler ? "true" : "false");
        if (fehler && okay) feld.focus();
        if (fehler) okay = false;
      });
      return okay;
    }

    formular.addEventListener("submit", function (ev) {
      ev.preventDefault();

      if (!eingerichtet) { meldung(t("form.nichtEingerichtet"), "fehler"); return; }
      if (!pruefen()) { meldung(t("form.fehler"), "fehler"); return; }

      var beschriftung = senden ? senden.textContent : "";
      if (senden) { senden.disabled = true; senden.textContent = t("form.sendet"); }
      meldung("", "");

      fetch(formular.action, {
        method: "POST",
        body: new FormData(formular),
        headers: { Accept: "application/json" }
      })
        .then(function (antwort) {
          if (!antwort.ok) throw new Error("Formspree: " + antwort.status);
          formular.reset();
          meldung(t("form.danke"), "ok");
        })
        .catch(function () { meldung(t("form.fehler"), "fehler"); })
        .then(function () {
          if (senden) { senden.disabled = false; senden.textContent = beschriftung || t("form.senden"); }
        });
    });

    alle("input, textarea", formular).forEach(function (feld) {
      feld.addEventListener("input", function () { feld.setAttribute("aria-invalid", "false"); });
    });
  }

  /* --- Los geht's ------------------------------------------------------- */
  kopfBauen();
  fussBauen();
  spracheAnwenden();
  menueVerdrahten();
  formularVerdrahten();
  animation();
})();
