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