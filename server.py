#!/usr/bin/env python3
"""
Lokaler Vorschau-Server für die Website.

    python server.py

Danach im Browser http://localhost:8123 aufrufen.

Warum nicht einfach "python -m http.server"?
Weil der Browser die Dateien dann zwischenspeichert. Du änderst etwas in
data/inhalte.js, lädst neu — und siehst trotzdem die alte Fassung. Dieser
Server sagt dem Browser bei jeder Datei "nicht speichern", damit du beim
Neuladen immer wirklich deinen aktuellen Stand siehst.

Auf GitHub Pages spielt das keine Rolle, das regelt GitHub selbst richtig.
"""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import os
import sys

PORT = 8123


class OhneCache(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def log_message(self, format, *args):
        # Nur Fehler anzeigen, nicht jede einzelne Datei
        if not args or not str(args[0]).startswith(("GET", "HEAD")):
            super().log_message(format, *args)


if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    try:
        server = ThreadingHTTPServer(("", PORT), OhneCache)
    except OSError as fehler:
        print(f"Port {PORT} ist belegt: {fehler}")
        print("Entweder läuft der Server schon, oder du änderst PORT oben in dieser Datei.")
        sys.exit(1)

    print(f"Website läuft auf http://localhost:{PORT}")
    print("Zum Beenden: Strg+C")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer beendet.")
