export default `
\`\`\`typescript
const solution = (data: string) => {
  return (
    data
      // Split the data into lines
      .split("\\n")
      // For each line, find first and last digit
      .map((line) => {
        const digits = line.match(/\d/g);

        const first = digits?.at(0);
        const last = digits?.at(-1);

        if (first === undefined || last === undefined) {
          return null;
        }

        const parsedFirst = parseInt(first);
        const parsedLast = parseInt(last);

        if (isNaN(parsedFirst) || isNaN(parsedLast)) {
          return null;
        }

        return [parsedFirst, parsedLast] as [number, number];
      })
      // Filter out nulls for invalid lines
      .filter((x) => x !== null)
      // Casting to non-null array because filter does not change the type
      .map((x) => x as NonNullable<typeof x>)
      // Map two digits into one number
      .map(([first, last]) => parseInt(\`\${first}\${last}\`))
      // Sum all numbers
      .reduce((acc, x) => acc + x, 0)
  );
};
\`\`\`
`;
