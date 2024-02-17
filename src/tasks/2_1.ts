const task_en = `
You're launched high into the atmosphere! The apex of your trajectory just barely reaches the surface of a large island floating in the sky. You gently land in a fluffy pile of leaves. It's quite cold, but you don't see much snow. An Elf runs over to greet you.

The Elf explains that you've arrived at _Snow Island_ and apologizes for the lack of snow. He'll be happy to explain the situation, but it's a bit of a walk, so you have some time. They don't get many visitors up here; would you like to play a game in the meantime?

As you walk, the Elf shows you a small bag and some cubes which are either red, green, or blue. Each time you play this game, he will hide a secret number of cubes of each color in the bag, and your goal is to figure out information about the number of cubes.

To get information, once a bag has been loaded with cubes, the Elf will reach into the bag, grab a handful of random cubes, show them to you, and then put them back in the bag. He'll do this a few times per game.

You play several games and record the information from each game (your puzzle input). Each game is listed with its ID number (like the \`11\` in \`Game 11: ...\`) followed by a semicolon-separated list of subsets of cubes that were revealed from the bag (like \`3 red, 5 green, 4 blue\`).

For example, the record of a few games might look like this:

    Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
    Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
    Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
    Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
    Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
    

In game 1, three sets of cubes are revealed from the bag (and then put back again). The first set is 3 blue cubes and 4 red cubes; the second set is 1 red cube, 2 green cubes, and 6 blue cubes; the third set is only 2 green cubes.

The Elf would first like to know which games would have been possible if the bag contained _only 12 red cubes, 13 green cubes, and 14 blue cubes_?

In the example above, games 1, 2, and 5 would have been _possible_ if the bag had been loaded with that configuration. However, game 3 would have been _impossible_ because at one point the Elf showed you 20 red cubes at once; similarly, game 4 would also have been _impossible_ because the Elf showed you 15 blue cubes at once. If you add up the IDs of the games that would have been possible, you get \`8\`.

Determine which games would have been possible if the bag had been loaded with only 12 red cubes, 13 green cubes, and 14 blue cubes. _What is the sum of the IDs of those games?_
`;

// same as task_en but translated to polish
const task_pl = `
Zostajesz wystrzelony wysoko w atmosferę! Apogeum twojej trajektorii ledwo dotyka powierzchni dużej wyspy unoszącej się w powietrzu. Delikatnie lądujesz w puszystym stosie liści. Jest dość zimno, ale nie widzisz zbyt dużo śniegu. Elf biegnie, aby cię przywitać.

Elf wyjaśnia, że przybyłeś na _Wyspę Śnieżną_ i przeprasza za brak śniegu. Chętnie wyjaśni sytuację, ale to trochę spaceru, więc masz trochę czasu. Nie ma tu zbyt wielu odwiedzających; chciałbyś zagrać w grę w międzyczasie?

Podczas spaceru Elf pokazuje małą torbę i kilka kostek, które są czerwone, zielone lub niebieskie. Za każdym razem, gdy grasz w tę grę, ukryje on w torbie tajną liczbę kostek każdego koloru, a Twoim celem jest znalezienie informacji o liczbie kostek.

Aby uzyskać informacje, po załadowaniu torby kostkami Elf sięgnie do torby, weźmie garść losowych kostek, pokaże je graczowi, a następnie włoży je z powrotem do torby. Zrobi to kilka razy w ciągu gry.

Grasz w kilka gier i zapisujesz informacje z każdej z nich (dane wejściowe łamigłówki). Każda gra jest wymieniona z jej numerem ID (jak \`11\` w \`Game 11: ...\`), po którym następuje oddzielona średnikami lista podzbiorów kostek, które zostały ujawnione z worka (jak \`3 czerwone, 5 zielonych, 4 niebieskie\`).

Na przykład, zapis kilku gier może wyglądać następująco:

    Gra 1: 3 niebieskie, 4 czerwone; 1 czerwony, 2 zielone, 6 niebieskich; 2 zielone
    Gra 2: 1 niebieski, 2 zielone; 3 zielone, 4 niebieskie, 1 czerwony; 1 zielony, 1 niebieski
    Gra 3: 8 zielonych, 6 niebieskich, 20 czerwonych; 5 niebieskich, 4 czerwone, 13 zielonych; 5 zielonych, 1 czerwony
    Gra 4: 1 zielony, 3 czerwone, 6 niebieskich; 3 zielone, 6 czerwonych; 3 zielone, 15 niebieskich, 14 czerwonych
    Gra 5: 6 czerwonych, 1 niebieski, 3 zielone; 2 niebieskie, 1 czerwony, 2 zielone

W pierwszej grze trzy zestawy kostek są odkrywane z woreczka (a następnie odkładane z powrotem). Pierwszy zestaw to 3 niebieskie kostki i 4 czerwone kostki; drugi zestaw to 1 czerwona kostka, 2 zielone kostki i 6 niebieskich kostek; trzeci zestaw to tylko 2 zielone kostki.

Elf chciałby najpierw wiedzieć, które gry byłyby możliwe, gdyby worek zawierał _tylko 12 czerwonych kostek, 13 zielonych kostek i 14 niebieskich kostek_?

W powyższym przykładzie gry 1, 2 i 5 byłyby _możliwe_, gdyby worek był załadowany w takiej konfiguracji. Jednak gra 3 byłaby _niemożliwa_, ponieważ w pewnym momencie Elf pokazał ci 20 czerwonych kostek naraz; podobnie gra 4 byłaby _niemożliwa_, ponieważ Elf pokazał ci 15 niebieskich kostek naraz. Jeśli zsumujesz identyfikatory gier, które byłyby możliwe, otrzymasz \`8\`.

Określ, które gry byłyby możliwe, gdyby worek zawierał tylko 12 czerwonych kostek, 13 zielonych kostek i 14 niebieskich kostek. Jaka jest suma identyfikatorów tych gier?
`;

const initialValue = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\nGame 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\nGame 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\nGame 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\nGame 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

export default {
  task_en,
  task_pl,
  initialValue,
};
