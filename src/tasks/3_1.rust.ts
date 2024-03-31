export default `
\`\`\`rust
    fn solution(data: &str) -> i32 {
        fn get_numbers_with_signs_non_dot_neighbors(data: &str) -> Vec<(i32, bool)> {
            let matrix = data
                .lines()
                .map(|line| line.chars().collect::<Vec<char>>())
                .collect::<Vec<Vec<char>>>();

            let mut numbers = Vec::new();
            let mut number = 0;
            let mut has_sign_neighours = false;

            for (i, line) in data.lines().enumerate() {
                for (j, c) in line.chars().enumerate() {
                    if c.is_digit(10) {
                        number = number * 10 + c.to_digit(10).unwrap() as i32;

                        let m = &matrix;

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
                    } else {
                        if number != 0 {
                            numbers.push((number, has_sign_neighours));
                            number = 0;
                            has_sign_neighours = false;
                        }
                    }
                }
            }

            return numbers;
        }

        let numbers = get_numbers_with_signs_non_dot_neighbors(data);
        let mut result = 0;

        for (number, has_sign_neighours) in numbers {
            if has_sign_neighours {
                result += number;
            }
        }

        return result;
    }
\`\`\`
`;
