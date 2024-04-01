export default `
\`\`\`rust
fn solution(data: &str) -> i32 {
    // Convert the input data to a matrix of characters
    let matrix = data
        .lines()
        .map(|line| line.chars().collect::<Vec<char>>())
        .collect::<Vec<Vec<char>>>();

    // An array to store the numbers
    let mut numbers_with_neighbours = Vec::new();

    // A current processing number
    let mut current_number = 0;
    // A flag to check if the current number has a sign as a neighbour
    let mut has_sign_neighours = false;

    for (i, line) in data.lines().enumerate() {
        for (j, c) in line.chars().enumerate() {
            // Taking in consideration only the digits
            if c.is_digit(10) {
                // Modifying the current number so that it can be a multi-digit number, e.g. [1, 2, 3] -> 123
                current_number = current_number * 10 + c.to_digit(10).unwrap() as i32;

                let m = &matrix;

                // Checking all the neighbours of the current number
                if i > 0 && j > 0 && m[i - 1][j - 1] != '.' && !m[i - 1][j - 1].is_digit(10) {
                    has_sign_neighours = true;
                }

                if i > 0 && m[i - 1][j] != '.' && !m[i - 1][j].is_digit(10) {
                    has_sign_neighours = true;
                }

                if i > 0
                    && j < m[0].len() - 1
                    && m[i - 1][j + 1] != '.'
                    && !m[i - 1][j + 1].is_digit(10)
                {
                    has_sign_neighours = true;
                }

                if j > 0 && m[i][j - 1] != '.' && !m[i][j - 1].is_digit(10) {
                    has_sign_neighours = true;
                }

                if j < m[0].len() - 1 && m[i][j + 1] != '.' && !m[i][j + 1].is_digit(10) {
                    has_sign_neighours = true;
                }

                if i < m.len() - 1
                    && j > 0
                    && m[i + 1][j - 1] != '.'
                    && !m[i + 1][j - 1].is_digit(10)
                {
                    has_sign_neighours = true;
                }

                if i < m.len() - 1 && m[i + 1][j] != '.' && !m[i + 1][j].is_digit(10) {
                    has_sign_neighours = true;
                }

                if i < m.len() - 1
                    && j < m[0].len() - 1
                    && m[i + 1][j + 1] != '.'
                    && !m[i + 1][j + 1].is_digit(10)
                {
                    has_sign_neighours = true;
                }
            // If the current character is not a digit
            } else {
                if current_number != 0 {
                    // If the current number has a sign as a neighbour, add it to the array
                    if has_sign_neighours {
                        numbers_with_neighbours.push(current_number);
                    }
                    current_number = 0;
                    has_sign_neighours = false;
                }
            }
        }
    }

    // Sum all the numbers with neighbours
    numbers_with_neighbours.iter().sum()
}
\`\`\`
`;
