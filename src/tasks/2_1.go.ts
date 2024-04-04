export default `
\`\`\`go
import (
	"errors"
	"fmt"
	"regexp"
	"strconv"
	"strings"
)

func solution(data string) (int, error) {
	// The maximum number of cubes of each color that can be used in a single round
	maxRedCubes := 12
	maxGreenCubes := 13
	maxBlueCubes := 14

	// Split the input data into lines
	lines := strings.Split(data, "\\n")
	sum := 0

	// Iterate over each line
LINES_LOOP:
	for _, line := range lines {

		// Check if the line is valid
		isValidLine := regexp.MustCompile(\`Game\s\d+:((\s\d+\s(blue|red|green)(,|;|$)))+\`).MatchString(line)

		if !isValidLine {
			// Return error if the line is invalid
			return 0, errors.New("invalid line")
		}

		// Regexes to match the game id and the number of cubes of each color
		gameIDRegex := regexp.MustCompile(\`Game\s\d+\`)
		redMatchRegex := regexp.MustCompile(\`\d+\sred\`)
		greenMatchRegex := regexp.MustCompile(\`\d+\sgreen\`)
		blueMatchRegex := regexp.MustCompile(\`\d+\sblue\`)

		// Find the game id
		gameID := gameIDRegex.FindString(line)
		gameID = strings.Replace(gameID, "Game ", "", -1)
		gameIDInt, _ := strconv.Atoi(gameID)

		rounds := strings.Split(line, ";")

		// Iterate over each round
		for _, round := range rounds {
			redMatch := redMatchRegex.FindString(round)
			greenMatch := greenMatchRegex.FindString(round)
			blueMatch := blueMatchRegex.FindString(round)

			red := strings.Replace(redMatch, " red", "", -1)
			green := strings.Replace(greenMatch, " green", "", -1)
			blue := strings.Replace(blueMatch, " blue", "", -1)

			// Parse the number of cubes of each color
			redInt, _ := strconv.Atoi(red)
			greenInt, _ := strconv.Atoi(green)
			blueInt, _ := strconv.Atoi(blue)

			// Check if the number of cubes of each color is valid, if not skip the line
			if redInt > maxRedCubes || greenInt > maxGreenCubes || blueInt > maxBlueCubes {
				continue LINES_LOOP
			}
		}

		// Add the game id to the sum
		sum += gameIDInt
	}

	return sum, nil
}
\`\`\`
`;
