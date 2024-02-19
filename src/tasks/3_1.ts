const task_en = `
You and the Elf eventually reach a [gondola lift](https://en.wikipedia.org/wiki/Gondola_lift) station; he says the gondola lift will take you up to the _water source_, but this is as far as he can bring you. You go inside.

It doesn't take long to find the gondolas, but there seems to be a problem: they're not moving.

"Aaah!"

You turn around to see a slightly-greasy Elf with a wrench and a look of surprise. "Sorry, I wasn't expecting anyone! The gondola lift isn't working right now; it'll still be a while before I can fix it." You offer to help.

The engineer explains that an engine part seems to be missing from the engine, but nobody can figure out which one. If you can _add up all the part numbers_ in the engine schematic, it should be easy to work out which part is missing.

The engine schematic (your puzzle input) consists of a visual representation of the engine. There are lots of numbers and symbols you don't really understand, but apparently _any number adjacent to a symbol_, even diagonally, is a "part number" and should be included in your sum. (Periods (\`.\`) do not count as a symbol.)

Here is an example engine schematic:

    467..114..
    ...*......
    ..35..633.
    ......#...
    617*......
    .....+.58.
    ..592.....
    ......755.
    ...$.*....
    .664.598..
    

In this schematic, two numbers are _not_ part numbers because they are not adjacent to a symbol: \`114\` (top right) and \`58\` (middle right). Every other number is adjacent to a symbol and so _is_ a part number; their sum is \`4361\`.

Of course, the actual engine schematic is much larger. _What is the sum of all of the part numbers in the engine schematic?_
`;

const task_pl = `
Ty i Elf w końcu docieracie do stacji [wyciągu gondolowego](https://pl.wikipedia.org/wiki/Wyci%C4%85g_gondolowy); mówi, że wyciąg gondolowy zabierze cię do _źródła wody_, ale to jest najdalej, jak cię może przyprowadzić. Wchodzisz do środka.

Nie trwa długo, zanim znajdujesz gondole, ale wydaje się, że jest problem: się nie poruszają.

"Aaah!"

Odwracasz się, aby zobaczyć lekko tłustego Elfa z kluczem francuskim i wyrazem zdziwienia. "Przepraszam, nie spodziewałem się nikogo! Wyciąg gondolowy nie działa; minie jeszcze trochę czasu, zanim będę mógł go naprawić." Oferujesz pomoc.

Inżynier wyjaśnia, że część silnika wydaje się brakować w silniku, ale nikt nie może zrozumieć, która to jest. Jeśli możesz _dodać wszystkie numery części_ w schemacie silnika, powinno być łatwo ustalić, która część brakuje.

Schemat silnika (twoje dane wejściowe) składa się z wizualnej reprezentacji silnika. Jest wiele liczb i symboli, których nie rozumiesz, ale _każda liczba przylegająca do symbolu_, nawet na ukos, jest "numerem części" i powinna być wliczona w sumę. (Kropki (\`.\`) nie są uważane za symbol.)

Oto przykładowy schemat silnika:

    467..114..
    ...*......
    ..35..633.
    ......#...
    617*......
    .....+.58.
    ..592.....
    ......755.
    ...$.*....
    .664.598..

W tym schemacie dwie liczby _nie_ są numerami części, ponieważ nie są przylegające do symbolu: \`114\` (góra po prawej) i \`58\` (środek po prawej). Każda inna liczba przylega do symbolu i _jest_ numerem części; ich suma to \`4361\`.

Oczywiście, rzeczywisty schemat silnika jest znacznie większy. _Jaka jest suma wszystkich numerów części w schemacie silnika?_
`;

const initialValue = `467..114..\n...*......\n..35..633.\n......#...\n617*......\n.....+.58.\n..592.....\n......755.\n...$.*....\n.664.598..`;

export default {
  task_en,
  task_pl,
  initialValue,
};
