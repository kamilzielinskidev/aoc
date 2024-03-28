export default `
\`\`\`rust
    fn solution(data: &str) -> Result<i32, Box<dyn std::error::Error>> {
        let max_red_cubes = 12;
        let max_green_cubes = 13;
        let max_blue_cubes = 14;

        let sum = data
            .lines()
            .map(|line| {
                let is_line_valid =
                    regex::Regex::new(r"Game\s\d+:((\s\d+\s(blue|red|green)(,|;|$)))+")
                        .unwrap()
                        .is_match(line);

                if !is_line_valid {
                    return Err("Invalid line".to_string());
                }

                let game_id_regex = regex::Regex::new(r"Game\s\d+").unwrap();

                let game_id = game_id_regex.find(line).unwrap().as_str();

                let parsed_game_id = game_id.replace("Game ", "").parse::<i32>().unwrap();

                let binding = line.replace(game_id, "");

                let rounds = binding.split(";").map(|round| round.trim());

                let parsed_rounds = rounds
                    .map(|round| {
                        let red_match_regex = regex::Regex::new(r"\d+\sred").unwrap();
                        let green_match_regex = regex::Regex::new(r"\d+\sgreen").unwrap();
                        let blue_match_regex = regex::Regex::new(r"\d+\sblue").unwrap();

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

                Ok((parsed_game_id, parsed_rounds))
            })
            .filter(|line| line.is_ok())
            .map(|line| line.unwrap())
            .filter(|game| {
                game.1.iter().all(|round| {
                    round.0 <= max_red_cubes
                        && round.1 <= max_green_cubes
                        && round.2 <= max_blue_cubes
                })
            })
            .map(|game| game.0)
            .sum();

        Ok(sum)
    }
\`\`\`
`