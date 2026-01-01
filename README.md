# 🔐 Passwort-Generator

Ein einfacher **Passwort-Generator** mit HTML, CSS und JavaScript.  
Das Projekt erzeugt zufällige, sichere Passwörter und erlaubt es, diese mit einem Klick zu kopieren.

---

## 📌 Funktionen

- Generiert ein zufälliges Passwort mit fester Länge (12 Zeichen)
- Enthält:
  - Großbuchstaben (A–Z)
  - Kleinbuchstaben (a–z)
  - Zahlen (0–9)
  - Sonderzeichen
- Garantiert mindestens **ein Zeichen aus jeder Kategorie**
- Passwort kann per Klick in die Zwischenablage kopiert werden
- Einfache und übersichtliche Benutzeroberfläche

---

## Verwendete Technologien

- **HTML** – Struktur der Webseite  
- **CSS** – Layout & Styling  
- **JavaScript** – Logik zur Passwort-Generierung und Kopierfunktion  

---


## Funktionsweise (Kurz erklärt)

1. Beim Klick auf **„Passwort generieren“**:
   - wird ein leeres Passwort erstellt
   - jeweils ein zufälliges Zeichen aus:
     - Großbuchstaben
     - Kleinbuchstaben
     - Zahlen
     - Sonderzeichen
     hinzugefügt
   - das Passwort wird mit zufälligen Zeichen aufgefüllt, bis die gewünschte Länge erreicht ist

2. Das generierte Passwort wird im Input-Feld angezeigt.

3. Mit dem Copy-Icon kann das Passwort in die Zwischenablage kopiert werden.

---

## Beispiel-Code (Zufälliges Zeichen)

```js
string[Math.floor(Math.random() * string.length)]



