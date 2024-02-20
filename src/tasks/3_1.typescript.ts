export default `
\`\`\`typescript
  const solution = (data: string) => {
    type Coordinates = [number, number];
  
    // Possible signs that we are searching for as neighbours
    const listOfPossibleSigns = [
      "*",
      "#",
      "$",
      "@",
      "%",
      "&",
      "=",
      "+",
      "-",
      "/",
    ];
  
    // A matrix of all the values
    const matrix = data.split("\\n").map((line) => line.split(""));
  
    return (
      data
        // Split the data into lines
        .split("\\n")
        // Parse the input so it includes the values and its coordinates
        .map((line, row) => {
          return line.split("").reduce((acc, char, column) => {
            if (!/\\d/.test(char)) {
              return [...acc, { value: "", coordinates: [] }];
            }
  
            if (acc.length === 0) {
              return [
                { value: char, coordinates: [[row, column] as Coordinates] },
              ];
            }
  
            const copy = structuredClone(acc);
  
            const lastElement = copy.at(-1)!; // Asserting because we know that the array is not empty
  
            lastElement.value += char;
            lastElement.coordinates.push([row, column] as Coordinates);
  
            return copy;
          }, [] as { value: string; coordinates: Coordinates[] }[]);
        })
        // Flattening the lines
        .flat(1)
        // Filtering items with empty value
        .filter((item) => item.value !== "")
        // Adding the signs neighbours to each item
        .map((item) => {
          return {
            ...item,
            neighbours: item.coordinates
              .map(([row, column]) => {
                return [
                  matrix[row - 1]?.[column - 1],
                  matrix[row - 1]?.[column],
                  matrix[row - 1]?.[column + 1],
                  matrix[row]?.[column - 1],
                  matrix[row]?.[column + 1],
                  matrix[row + 1]?.[column - 1],
                  matrix[row + 1]?.[column],
                  matrix[row + 1]?.[column + 1],
                ]
                  .filter((value) => value !== undefined)
                  .filter((value) => listOfPossibleSigns.includes(value));
              })
              .flat(1),
          };
        })
        // Filtering items that have no neighbours
        .filter((item) => item.neighbours.length > 0)
        // Parsing the items values to numbers
        .map((item) => parseInt(item.value))
        // Summing the values
        .reduce((acc, value) => acc + value, 0)
    );
  };
\`\`\`
`;
