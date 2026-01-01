/**
 * Referenz auf das Input-Feld,
 * in dem das generierte Passwort angezeigt wird.
 */
const passwordBox = document.getElementById("password");

/**
 * Gewünschte Länge des generierten Passworts.
 */
const length = 12;

/**
 * Enthält alle Zeichensätze,
 * die für die Passwort-Generierung verwendet werden.
 */
const CHARSETS = {
  /** Großbuchstaben A–Z */
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",

  /** Kleinbuchstaben a–z */
  lower: "abcdefghijklmnopqrstuvwxyz",

  /** Ziffern 0–9 */
  numbers: "0123456789",

  /** Sonderzeichen */
  symbols: "@#$%^&*()_+~|}{[]></-=",
};

/**
 * Erstellt ein zufälliges Passwort mit fester Länge.
 *
 * Ablauf:
 * 1. Initialisiert ein leeres Passwort
 * 2. Fügt mindestens ein Zeichen aus jedem Zeichentyp hinzu
 *    (Großbuchstaben, Kleinbuchstaben, Zahlen, Symbole)
 * 3. Füllt das Passwort mit zufälligen Zeichen auf,
 *    bis die gewünschte Länge erreicht ist
 * 4. Schreibt das Ergebnis in das Input-Feld
 *
 * @returns {void}
 */
function createPassword() {
  /** Zwischenspeicher für das Passwort */
  let password = "";

  // Garantiert mindestens ein Zeichen aus jedem Zeichentyp
  //„Nimm einen zufälligen Großbuchstaben und hänge ihn an das Passwort an.“
  password += CHARSETS.upper[Math.floor(Math.random() * CHARSETS.upper.length)];
  password += CHARSETS.lower[Math.floor(Math.random() * CHARSETS.lower.length)];
  password +=
    CHARSETS.numbers[Math.floor(Math.random() * CHARSETS.numbers.length)];
  password +=
    CHARSETS.symbols[Math.floor(Math.random() * CHARSETS.symbols.length)];

  /**
   * Kombination aller erlaubten Zeichen
   * für die zufällige Auffüllung
   */
  const allChars =
    CHARSETS.upper + CHARSETS.lower + CHARSETS.numbers + CHARSETS.symbols;

  // Auffüllen, bis die gewünschte Passwortlänge erreicht ist
  while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // Ausgabe des generierten Passworts im Input-Feld
  passwordBox.value = password;
  console.log();
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy"); // Kopiert den markierten Text in die Zwischenablage.
}
