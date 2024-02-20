export default `
\`\`\`typescript
  const solution = (data: string) => {
    const maxRedCubes = 12;
    const maxGreenCubes = 13;
    const maxBlueCubes = 14;
  
    return (
      data
        // Split the data into lines
        .split("\\n")
        // Validate and parse the input
        .map((line) => {
          const isLineValid =
            /Game\\s\\d+:((\\s\\d+\\s(blue|red|green)(,|;|$)))+/.test(line);
  
          if (!isLineValid) {
            return null;
          }
  
          const gameId = line.match(/Game\\s\\d+/)!.at(0)!; // Non null assertions because we did check the validation
          const parsedGameId = parseInt(gameId.replace("Game ", ""));
  
          const rounds = line
            .replace(/Game\\s\\d+:\\s/, "")
            .split(";")
            .map((round) => round.trim());
  
          const parsedRounds = rounds.map((round) => {
            const redMatch = round.match(/\\d+\\sred/) ?? ["0 red"];
            const greenMatch = round.match(/\\d+\\sgreen/) ?? ["0 green"];
            const blueMatch = round.match(/\\d+\\sblue/) ?? ["0 blue"];
  
            const red = parseInt(redMatch.at(0)!.replace(" red", "")); // Non null assertions because we did check the validation
            const green = parseInt(greenMatch.at(0)!.replace(" green", "")); // Non null assertions because we did check the validation
            const blue = parseInt(blueMatch.at(0)!.replace(" blue", "")); // Non null assertions because we did check the validation
            return { red, green, blue };
          });
  
          return { game: parsedGameId, rounds: parsedRounds };
        })
        // Filter out invalid lines
        .filter((line) => line !== null)
        // Casting to the correct type because filter does not change the type
        .map((line) => line as NonNullable<typeof line>)
        // Filter out games with invalid rounds
        .filter((game) => {
          return game.rounds.every((round) => {
            return (
              round.red <= maxRedCubes &&
              round.green <= maxGreenCubes &&
              round.blue <= maxBlueCubes
            );
          });
        })
        // Sum the gameIds numbers
        .reduce((acc, game) => {
          return acc + game.game;
        }, 0)
    );
  };
\`\`\`
`;
