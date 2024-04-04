export default `
\`\`\`go
import (
	"fmt"
	"strconv"
	"strings"
	"unicode"
)

func solution(data string) (int, error) {
	// Convert the input data to a matrix of characters
	lines := strings.Split(data, "\\n")
	matrix := make([][]rune, len(lines))
	for i, line := range lines {
		matrix[i] = []rune(line)
	}

	// An array to store the numbers
	numbersWithNeighbours := []int{}

	// A current processing number
	currentNumber := 0
	// A flag to check if the current number has a sign as a neighbour
	hasSignNeighours := false

	for i, line := range lines {
		for j, c := range line {
			// Taking in consideration only the digits
			if unicode.IsDigit(c) {
				// Skipping the error since we know that the character is a digit
				parsed, _ := strconv.Atoi(string(c))

				// Modifying the current number so that it can be a multi-digit number, e.g. [1, 2, 3] -> 123
				currentNumber = currentNumber*10 + parsed

				// Checking all the neighbours of the current number
				if i > 0 && j > 0 && matrix[i-1][j-1] != '.' && !unicode.IsDigit(matrix[i-1][j-1]) {
					hasSignNeighours = true
				}

				if i > 0 && matrix[i-1][j] != '.' && !unicode.IsDigit(matrix[i-1][j]) {
					hasSignNeighours = true
				}

				if i > 0 && j < len(matrix[0])-1 && matrix[i-1][j+1] != '.' && !unicode.IsDigit(matrix[i-1][j+1]) {
					hasSignNeighours = true
				}

				if j > 0 && matrix[i][j-1] != '.' && !unicode.IsDigit(matrix[i][j-1]) {
					hasSignNeighours = true
				}

				if j < len(matrix[0])-1 && matrix[i][j+1] != '.' && !unicode.IsDigit(matrix[i][j+1]) {
					hasSignNeighours = true
				}

				if i < len(matrix)-1 && j > 0 && matrix[i+1][j-1] != '.' && !unicode.IsDigit(matrix[i+1][j-1]) {
					hasSignNeighours = true
				}

				if i < len(matrix)-1 && matrix[i+1][j] != '.' && !unicode.IsDigit(matrix[i+1][j]) {
					hasSignNeighours = true
				}

				if i < len(matrix)-1 && j < len(matrix[0])-1 && matrix[i+1][j+1] != '.' && !unicode.IsDigit(matrix[i+1][j+1]) {
					hasSignNeighours = true
				}

				// If the current character is not a digit
			} else {
				if currentNumber != 0 {
					// If the current number has a sign as a neighbour, add it to the array
					if hasSignNeighours {
						numbersWithNeighbours = append(numbersWithNeighbours, currentNumber)
					}
					currentNumber = 0
					hasSignNeighours = false
				}
			}
		}

	}

	// Sum all the numbers with neighbours
	sum := 0
	for _, number := range numbersWithNeighbours {
		sum += number
	}

	return sum, nil
}
\`\`\`
`;
