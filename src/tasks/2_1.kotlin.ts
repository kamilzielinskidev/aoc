export default `
\`\`\`kotlin
fun solution(data: String): Int {
    // The maximum number of cubes of each color that can be used in a single round
    val maxRedCubes = 12
    val maxGreenCubes = 13
    val maxBlueCubes = 14

    val parsedLinesWithRounds =
        data
            // Split the input data into lines
            .lines()
            // Parse each line
            .map { line ->
                val isLineValid =
                    Regex("Game\\s\\d+:((\\s\\d+\\s(blue|red|green)(,|;|$)))+").matches(line)

                // Check if the line is valid
                if (!isLineValid) {
                    throw Exception("Invalid line")
                }

                // Regexes to match the game id and the number of cubes of each color
                val gameIdRegex = Regex("Game\\s\\d+")
                val redMatchRegex = Regex("\\d+\\sred")
                val greenMatchRegex = Regex("\\d+\\sgreen")
                val blueMatchRegex = Regex("\\d+\\sblue")

                // Unwraping is safe here because we already checked if the line is valid
                val gameId = gameIdRegex.find(line)!!.value.replace("Game ", "").toInt()

                // Parse number of cubes of each color
                val parsedRounds =
                    line.split(";").map { round ->
                        val redMatch = redMatchRegex.find(round)?.value ?: "0 red"
                        val greenMatch = greenMatchRegex.find(round)?.value ?: "0 green"
                        val blueMatch = blueMatchRegex.find(round)?.value ?: "0 blue"

                        val red = redMatch.replace(" red", "").toInt()
                        val green = greenMatch.replace(" green", "").toInt()
                        val blue = blueMatch.replace(" blue", "").toInt()

                        Triple(red, green, blue)
                    }

                Pair(gameId, parsedRounds)
            }
            .toList()

    // Return error if any of the lines is invalid
    if (parsedLinesWithRounds.any { it is Exception }) {
        throw Exception("Invalid line")
    }

    // Filter out all lines that cube counts are invalid
    val validLines =
        parsedLinesWithRounds.filter { line ->
            val (_, rounds) = line
            rounds.all { (red, green, blue) ->
                red <= maxRedCubes && green <= maxGreenCubes && blue <= maxBlueCubes
            }
        }

    // Sum number of gameids for validLines
    return validLines
        .map { line ->
            val (gameId, _) = line
            gameId
        }
        .sum()
}
\`\`\`
`;
