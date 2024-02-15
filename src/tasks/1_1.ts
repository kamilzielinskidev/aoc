const task_en = `
Something is wrong with global snow production, and you've been selected to take a look. The Elves have even given you a map; on it, they've used stars to mark the top fifty locations that are likely to be having problems.

You've been doing this long enough to know that to restore snow operations, you need to check all _fifty stars_ by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants _one star_. Good luck!

You try to ask why they can't just use a weather machine ("not powerful enough") and where they're even sending you ("the sky") and why your map looks mostly blank ("you sure ask a lot of questions") and hang on did you just say the sky ("of course, where do you think snow comes from") when you realize that the Elves are already loading you into a [trebuchet](https://en.wikipedia.org/wiki/Trebuchet) ("please hold still, we need to strap you in").

As they're making the final adjustments, they discover that their calibration document (your puzzle input) has been _amended_ by a very young Elf who was apparently just excited to show off her art skills. Consequently, the Elves are having trouble reading the values on the document.

The newly-improved calibration document consists of lines of text; each line originally contained a specific _calibration value_ that the Elves now need to recover. On each line, the calibration value can be found by combining the _first digit_ and the _last digit_ (in that order) to form a single _two-digit number_.

For example:

    1abc2
    pqr3stu8vwx
    a1b2c3d4e5f
    treb7uchet

In this example, the calibration values of these four lines are \`12\`, \`38\`, \`15\`, and \`77\`. Adding these together produces \`142\`.

Consider your entire calibration document. _What is the sum of all of the calibration values?_
`;

const task_pl = `
Coś jest nie tak z globalną produkcją śniegu, i zostałeś wybrany, aby to sprawdzić. Elfy nawet dały ci mapę; na niej użyły gwiazd, aby oznaczyć pięćdziesiąt najpewniejszych lokalizacji, które prawdopodobnie mają problemy.

Robisz to wystarczająco długo, aby wiedzieć, że aby przywrócić produkcję śniegu, musisz sprawdzić wszystkie _pięćdziesiąt gwiazd_ do 25 grudnia.

Zbieraj gwiazdy, rozwiązując zagadki. Dwie zagadki będą dostępne w kalendarzu adwentowym każdego dnia; druga zagadka zostanie odblokowana, gdy ukończysz pierwszą. Każda zagadka przyznaje _jedną gwiazdkę_. Powodzenia!

Próbujesz zapytać, dlaczego nie mogą po prostu użyć maszyny pogodowej ("nie wystarczająco silna") i dokąd cię tak w ogóle wysyłają ("na niebo") i dlaczego twoja mapa wygląda na pustą ("naprawdę zadajesz dużo pytań") i zaczekaj, czy właśnie powiedziałeś niebo ("oczywiście, skąd myślisz, że pochodzi śnieg") kiedy zdajesz sobie sprawę, że Elfy już cię ładują do [trebusza](https://pl.wikipedia.org/wiki/Trebusz) ("proszę się trzymać, musimy cię przypiąć").

W trakcie ostatnich poprawek odkrywają, że ich dokument kalibracyjny (twoje dane wejściowe) został _zmieniony_ przez bardzo młodą Elfkę, która była wyraźnie podekscytowana pokazaniem swoich umiejętności artystycznych. W związku z tym Elfy mają problemy z odczytaniem wartości na dokumencie.

Nowo ulepszony dokument kalibracyjny składa się z linii tekstu; każda linia początkowo zawierała określoną _wartość kalibracji_, które Elfy teraz muszą odzyskać. W każdej linii wartość kalibracji można znaleźć, łącząc _pierwszą cyfrę_ i _ostatnią cyfrę_ (w tej kolejności), aby utworzyć pojedynczą _dwucyfrową liczbę_.

Na przykład:

    1abc2
    pqr3stu8vwx
    a1b2c3d4e5f
    treb7uchet

W tym przykładzie wartości kalibracji tych czterech linii to \`12\`, \`38\`, \`15\` i \`77\`. Ich dodanie daje \`142\`.

Rozważ cały swój dokument kalibracyjny. _Jaka jest suma wszystkich wartości kalibracji?_
`;

export default {
  task_en,
  task_pl,
};
