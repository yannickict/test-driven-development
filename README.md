# Test-Driven Development

Bearbeite die folgenden Übungen nach dem folgenden Vorgehen:

1. Schreibe keinen Produktivcode, bis es einen Test gibt, der aufgrund dieses fehlenden Produktivcodes scheitert.
2. Schreibe nicht mehr Testcode, als nötig ist, um den Test zum Scheitern zu bringen ‒ und ein Kompilierfehler gilt als Scheitern.
3. Schreibe nicht mehr Produktivcode, als nötig ist, um den Test zum Durchlaufen zu bringen.

## Aufgabe 0: Beispielcode betrachten

Betrachte den Testcode in `src/calc.test.ts`, welcher die beiden Funktionen `sum` und `sub` von `src/calc.ts` überprüft. 

Pro Funktion gibt es mehrere Testfälle. Mithilfe von [`describe`](https://jestjs.io/docs/api#describename-fn) werden die Testfälle gruppiert.

Der obere Test (`"adding up numbers"`) testet die Funktion `sum` und verwendet dazu mehrere einzelne Tests mit einer manuell definierten Beschreibung.

Der untere Test (`"subtracting numbers"`) testet die Funktion `sub` und verwendet dazu _parametrisierte Tests_ mit einer generierten Beschreibung.

Bei der oberen Variante ist im Code besser erkennbar, was der einzelne Testfall ausdrücken soll. Bei der unteren Variante ist die Erweiterung um weitere Testfälle wesentlich weniger aufwändig, solange alle Testfälle nach dem gleichen Schema funktionieren.

In der Praxis verwendet man oft eine Kombination der beiden Varianten: Parametrisierte Tests für reguläre Fälle, die laufend erweitert werden (z.B. bei der Korrektur von Fehlern) und einzelne Tests mit einer präzisen Beschreibung für Spezialfälle.

Probiere in den folgenden Aufgaben beide Varianten aus (z.B. einzelne Tests in Aufgabe 1, parametrisierte Tests in Aufgabe 2 und eine Kombination davon in Aufgabe 3).

## Aufgabe 1: Zeitdauer formatieren

Bearbeite diese Aufgabe in `src/duration.test.ts` (Testcode) und `src/duration.ts` (Produktivcode).

In dieser Aufgabe soll die Funktion `formatDuration` in `src/duration.ts` implementiert werden. Anhand einer gegebenen Anzahl Sekunden soll eine Zeitdauerangabe nach der Form `XXhYYmZZs` zurückgegeben werden. Beispiele:

- `33` wird zu `33s`.
- `123` wird zu `2m3s`.
- `500` wird zu `8m20s`.
- `3600` wird zu `1h`.
- `3999` wird zu `1h6m30s`.

Schreibe Tests und Produktivcode gemäss TDD-Vorgehen, indem du die obigen Fälle und folgende Spezialfälle testest und implementierst:

- `0` wird zu `0s`.
- Negative Zahlen führen zu einem `Error` mit aussagekräftiger Beschreibung. (Teste auf eine geworfene Exception!)
- Nachkommastellen von Sekundenangaben werden durch Rundung eliminiert (siehe [`Math.round`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)).

## Aufgabe 2: Schere, Stein, Papier

Bearbeite diese Aufgabe in `src/rock-paper-scissors.test.ts` (Testcode) und `src/rock-paper-scissors.ts` (Produktivcode).

Implementiere das Spiel [_Schere, Stein, Papier_](https://de.wikipedia.org/wiki/Schere,_Stein,_Papier) bzw. [_Rock, Paper, Scissors_](https://en.wikipedia.org/wiki/Rock_paper_scissors) in der Funktion `play`.

Die Funktion erwartet als Parameter die Spielzüge zweier Spieler als Zeichenkette:

- `"rock"`: Stein
- `"paper"`: Papier
- `"scissors"`: Schere

Die Gross- und Kleinschreibung sowie führende und anschliessende Leerzeichen sollen ignoriert werden.

Die Funktion soll den folgenden Wert zurückgeben:

- `1` wenn Spieler 1 gewinnt.
- `2` wenn Spieler 2 gewinnt.
- `0` bei einem Unentschieden.

Für ungültige Spielzüge wird eine Exception mit sprechender Fehlermeldung geworfen.

Schreibe die Testfälle und implementiere die Funktion `play` gemäss TDD-Vorgehen.

## Aufgabe 3: ISBN-13

Bearbeite diese Aufgabe in `src/isbn13.test.ts` (Testcode) und `src/isbn13.ts` (Produktivcode).

Bücher werden anhand einer [ISBN](https://de.wikipedia.org/wiki/Internationale_Standardbuchnummer) (internationale Standardbuchnummer) identifiziert. Früher war dies eine zehnstellige Zahl (ISBN-10). Heutzutage verwendet man die dreizehnstellige ISBN-13, um mit [EAN](https://de.wikipedia.org/wiki/European_Article_Number) (European Article Number) kompatibel zu sein. (Als Landespräfix wird die Zahl 978 oder 979 verwendet, welche für das fiktive Land _Buchland_ steht.)

Die letzte Stelle einer ISBN-13 ist eine sogenannte Prüfsumme, mithilfe welcher man mögliche Fehler beim Übermitteln einer ISBN-13 bzw. Fehler beim Scanvorgang des Barcodes erkennen kann. Der Algorithmus zur [Berechnung der ISBN-13-Prüfsumme](https://de.wikipedia.org/wiki/Internationale_Standardbuchnummer#ISBN-13) soll gemäss TDD-Vorgehen in `src/isbn13.ts` in der Funktion `isValid` umgesetzt werden.

Schreibe die Testfälle und implementiere die Funktion `play` gemäss TDD-Vorgehen.

Dieses mal musst du selber sinnvolle Testdaten und -fälle zusammenstellen.