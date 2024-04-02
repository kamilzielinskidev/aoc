export default `
\`\`\`rust
fn solution(data: &str) -> Result<i32, Box<dyn std::error::Error>> {
    // The maximum number of cubes of each color that can be used in a single round
    let max_red_cubes = 12;
    let max_green_cubes = 13;
    let max_blue_cubes = 14;

    let parsed_lines_with_rounds = data
        // Split the input data into lines
        .lines()
        // Parse each line
        .map(|line| {
            let is_line_valid = regex::Regex::new(r"Game\s\d+:((\s\d+\s(blue|red|green)(,|;|$)))+")
                .unwrap()
                .is_match(line);

            // Check if the line is valid
            if !is_line_valid {
                return Err("Invalid line".to_string());
            }

            // Regexes to match the game id and the number of cubes of each color
            let game_id_regex = regex::Regex::new(r"Game\s\d+").unwrap();
            let red_match_regex = regex::Regex::new(r"\d+\sred").unwrap();
            let green_match_regex = regex::Regex::new(r"\d+\sgreen").unwrap();
            let blue_match_regex = regex::Regex::new(r"\d+\sblue").unwrap();

            // Unwraping is safe here because we already checked if the line is valid
            let game_id = game_id_regex
                .find(line)
                .unwrap()
                .as_str()
                .replace("Game ", "")
                .parse::<i32>()
                .unwrap();

            // Parse number of cubes of each color
            let parsed_rounds = line
                .split(";")
                .map(|round| {
                    let red_match = red_match_regex.find(round).map_or("0 red", |m| m.as_str());
                    let green_match = green_match_regex
                        .find(round)
                        .map_or("0 green", |m| m.as_str());
                    let blue_match = blue_match_regex
                        .find(round)
                        .map_or("0 blue", |m| m.as_str());

                    let red = red_match.replace(" red", "").parse::<i32>().unwrap();
                    let green = green_match.replace(" green", "").parse::<i32>().unwrap();
                    let blue = blue_match.replace(" blue", "").parse::<i32>().unwrap();

                    (red, green, blue)
                })
                .collect::<Vec<(i32, i32, i32)>>();

            Ok((game_id, parsed_rounds))
        })
        .collect::<Vec<Result<(i32, Vec<(i32, i32, i32)>), String>>>();

    // Return error if any of the lines is invalid
    if parsed_lines_with_rounds.iter().any(|line| line.is_err()) {
        return Err("Invalid line".to_string().into());
    }

    // Filter out all lines that cube counts are invalid
    let valid_lines = parsed_lines_with_rounds
        .iter()
        .filter(|line| {
            let (_, rounds) = line.as_ref().unwrap();
            rounds.iter().all(|(red, green, blue)| {
                *red <= max_red_cubes && *green <= max_green_cubes && *blue <= max_blue_cubes
            })
        })
        .collect::<Vec<&Result<(i32, Vec<(i32, i32, i32)>), String>>>();

    // Sum number of gameids for valid_lines
    let sum = valid_lines
        .iter()
        .map(|line| {
            let (game_id, _) = line.as_ref().unwrap();
            game_id
        })
        .sum();

    Ok(sum)
}
\`\`\`
`;
