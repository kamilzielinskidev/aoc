export default `
\`\`\`rust
fn solution(data: &str) -> Result<i32, Box<dyn std::error::Error>> {
    let sum = data
        // Split the input into lines
        .lines()
        // Parse the first and last digit of each line
        .map(|line| {
            let digits = line.chars().filter(|c| c.is_digit(10)).collect::<Vec<_>>();

            let first = digits.first().ok_or("No first digit")?;
            let last = digits.last().ok_or("No last digit")?;

            let parsed_value = format!("{}{}", first, last).parse::<i32>()?;

            Ok(parsed_value)
        })
        // Sum the parsed values
        .try_fold(0, |acc, x: Result<i32, Box<dyn std::error::Error>>| {
            x.map(|x| acc + x)
        })?;

    Ok(sum as i32)
}
\`\`\`
`;
