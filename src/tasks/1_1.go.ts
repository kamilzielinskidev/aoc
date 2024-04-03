export default `
\`\`\`go
import (
	"errors"
	"fmt"
	"strconv"
	"strings"
	"unicode"
)

func solution(data string) (int, error) {
	sum := 0

	// Split the input into lines
	for _, line := range strings.Split(data, "\\n") {
		digits := []rune{}
		for _, c := range line {
			if unicode.IsDigit(c) {
				digits = append(digits, c)
			}
		}

		if len(digits) == 0 {
			return 0, errors.New("no digits found")
		}

		first := digits[0]
		last := digits[len(digits)-1]

		// Parse the first and last digit of each line
		parsedValue, err := strconv.Atoi(string(first) + string(last))
		if err != nil {
			return 0, err
		}

		// Add the parsed value to the sum
		sum += parsedValue
	}

	return sum, nil
}
\`\`\`
`;
