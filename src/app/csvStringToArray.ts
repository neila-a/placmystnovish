export default function csvStringToArray(strings: TemplateStringsArray) {
    return strings[0].split("\n")
        .map(line => line.trim())
        .map(line => line.split(","))
        .map(line => line
            .map(word => word.trim())
        )
}