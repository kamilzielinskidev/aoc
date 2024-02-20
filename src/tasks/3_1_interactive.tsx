"use client";
import { Runner } from "@/components/Runner";
import { delayPromise } from "@/utils/delayPromise";
import { FC, useEffect, useState } from "react";

const signs = [
  "*",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "+",
  "=",
  "_",
  "{",
  "}",
  "[",
  "]",
  "|",
  "\\",
  ":",
  ";",
  '"',
  "'",
  "<",
  ">",
  ",",
  "?",
  "/",
];

const checkIfArrayContainsSigns = (array: string[]) => {
  return array.some((item) => signs.includes(item));
};

const getValueNeighbours = (
  value: {
    value: string;
    coordinates: number[][];
  },
  matrix: string[][]
) => {
  return value.coordinates
    .map(([row, column]) => {
      return [
        [row - 1, column - 1],
        [row - 1, column],
        [row - 1, column + 1],
        [row, column - 1],
        [row, column + 1],
        [row + 1, column - 1],
        [row + 1, column],
        [row + 1, column + 1],
      ];
    })
    .flat(1)
    .filter(([row, column]) => {
      return !value.coordinates.some(([valueRow, valueColumn]) => {
        return row === valueRow && column === valueColumn;
      });
    })
    .filter(([row, column], index, array) => {
      return (
        array.findIndex((item) => {
          return item[0] === row && item[1] === column;
        }) === index
      );
    })
    .filter(([row, column]) => {
      return matrix[row] !== undefined && matrix[row][column] !== undefined;
    })
    .map(([row, column]) => {
      return matrix[row][column];
    });
};

const SingleRow: FC<{ row: { char: string; color: string }[] }> = ({ row }) => {
  return (
    <div>
      {row.map((cell, cellIndex) => {
        if (cell.color === "primary") {
          return (
            <span key={cellIndex} className="text-primary">
              {cell.char}
            </span>
          );
        }
        if (cell.color === "red") {
          return (
            <span key={cellIndex} className="text-red-500">
              {cell.char}
            </span>
          );
        }

        return <span key={cellIndex}>{cell.char}</span>;
      })}
    </div>
  );
};

const Animation: FC<{ data: string }> = ({ data }) => {
  const lines = data.split("\n");
  const matrix = lines.map((line) => line.split(""));
  const [matrixToDisplay, setMatrixToDisplay] = useState<
    { char: string; color: string }[][]
  >(matrix.map((row) => row.map((char) => ({ char, color: "white" }))));
  const [sum, setSum] = useState<number>(0);

  const values = lines
    .map((line, index) => {
      return line
        .split("")
        .reduce(
          (acc, char, charIndex) => {
            const parsedChar = parseInt(char);

            if (isNaN(parsedChar)) {
              return [
                ...acc,
                {
                  value: "",
                  coordinates: [],
                },
              ];
            }

            const copy = structuredClone(acc);
            const lastItem = copy[copy.length - 1];

            if (lastItem === undefined) {
              return [
                ...acc,
                {
                  value: char,
                  coordinates: [[index, charIndex]],
                },
              ];
            }

            lastItem.value += char;
            lastItem.coordinates.push([index, charIndex]);

            return copy;
          },
          [] as {
            value: string;
            coordinates: number[][];
          }[]
        )
        .filter((item) => item.value !== "");
    })
    .flat(1);

  const valuesWithNeighbours = values.map((value) => {
    return {
      ...value,
      neighbours: getValueNeighbours(value, matrix),
      doNeighoursWithSigns: checkIfArrayContainsSigns(
        getValueNeighbours(value, matrix)
      ),
    };
  });

  const run = async () => {
    for (let index = 0; index < valuesWithNeighbours.length; index++) {
      const value = valuesWithNeighbours[index];
      const doNeighoursWithSigns = value.doNeighoursWithSigns;

      if (doNeighoursWithSigns) {
        setMatrixToDisplay((prev) => {
          return prev.map((row, rowIndex) => {
            return row.map((item, itemIndex) => {
              if (item.char === ".") return item;
              if (signs.includes(item.char)) return item;

              if (
                value.coordinates.some(
                  ([row, column]) => row === rowIndex && column === itemIndex
                )
              ) {
                return { char: item.char, color: "primary" };
              }
              return item;
            });
          });
        });

        setSum((prev) => prev + parseInt(value.value));
      }

      if (!doNeighoursWithSigns) {
        setMatrixToDisplay((prev) => {
          return prev.map((row, rowIndex) => {
            return row.map((item, itemIndex) => {
              if (
                value.coordinates.some(
                  ([row, column]) => row === rowIndex && column === itemIndex
                )
              ) {
                return { char: item.char, color: "red" };
              }
              return item;
            });
          });
        });
      }

      await delayPromise(100);
    }
  };

  useEffect(() => {
    run();
  }, [run]);

  return (
    <pre>
      <div className="text-primary">{sum}</div>
      {matrixToDisplay.map((row, rowIndex) => (
        <SingleRow key={rowIndex} row={row} />
      ))}
    </pre>
  );
};

export const Interactive: FC<{ initialValue: string }> = ({ initialValue }) => {
  return (
    <Runner
      initialData={initialValue}
      animateComponent={(data) => <Animation data={data} />}
    />
  );
};

export default Interactive;
