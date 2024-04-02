export default `
\`\`\`kotlin
fun solution(data: String): Int {
    // Convert the input data to a matrix of characters
    val matrix = data.lines().map { it.toCharArray().toList() }.toList()

    // An array to store the numbers
    val numbersWithNeighbours = mutableListOf<Int>()

    // A current processing number
    var currentNumber = 0
    // A flag to check if the current number has a sign as a neighbour
    var hasSignNeighours = false

    for ((i, line) in data.lines().withIndex()) {
        for ((j, c) in line.withIndex()) {
            // Taking in consideration only the digits
            if (c.isDigit()) {
                // Modifying the current number so that it can be a multi-digit number, e.g. [1, 2,
                // 3] -> 123
                currentNumber = currentNumber * 10 + c.toString().toInt()

                val m = matrix

                // Checking all the neighbours of the current number
                if (i > 0 && j > 0 && m[i - 1][j - 1] != '.' && !m[i - 1][j - 1].isDigit()) {
                    hasSignNeighours = true
                }

                if (i > 0 && m[i - 1][j] != '.' && !m[i - 1][j].isDigit()) {
                    hasSignNeighours = true
                }

                if (
                    i > 0 &&
                        j < m[0].size - 1 &&
                        m[i - 1][j + 1] != '.' &&
                        !m[i - 1][j + 1].isDigit()
                ) {
                    hasSignNeighours = true
                }

                if (j > 0 && m[i][j - 1] != '.' && !m[i][j - 1].isDigit()) {
                    hasSignNeighours = true
                }

                if (j < m[0].size - 1 && m[i][j + 1] != '.' && !m[i][j + 1].isDigit()) {
                    hasSignNeighours = true
                }

                if (
                    i < m.size - 1 && j > 0 && m[i + 1][j - 1] != '.' && !m[i + 1][j - 1].isDigit()
                ) {
                    hasSignNeighours = true
                }

                if (i < m.size - 1 && m[i + 1][j] != '.' && !m[i + 1][j].isDigit()) {
                    hasSignNeighours = true
                }

                if (
                    i < m.size - 1 &&
                        j < m[0].size - 1 &&
                        m[i + 1][j + 1] != '.' &&
                        !m[i + 1][j + 1].isDigit()
                ) {
                    hasSignNeighours = true
                }

                // If the current character is not a digit
            } else {
                if (currentNumber != 0) {
                    // If the current number has a sign as a neighbour, add it to the array
                    if (hasSignNeighours) {
                        numbersWithNeighbours.add(currentNumber)
                    }
                    currentNumber = 0
                    hasSignNeighours = false
                }
            }
        }
    }

    // Sum all the numbers with neighbours
    return numbersWithNeighbours.sum()
}
\`\`\`
`;
