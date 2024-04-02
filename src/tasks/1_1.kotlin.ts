export default `
\`\`\`kotlin
fun solution(data: String): Int {
    // Split the input into lines
    return data.lines().map { line ->
        // Parse the first and last digit of each line
        line.filter { it.isDigit() }.let { digits ->
            val first = digits.firstOrNull()?.toString()?.toIntOrNull() ?: throw IllegalArgumentException("No first digit")
            val last = digits.lastOrNull()?.toString()?.toIntOrNull() ?: throw IllegalArgumentException("No last digit")
            // Parse the first and last digit and sum them
            "$first$last".toInt()
        }
    // Sum the parsed values
    }.sum()
}
\`\`\`
`;
