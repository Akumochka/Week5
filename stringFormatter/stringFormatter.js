
function format_name(first, last) {
    if (!first || !last) {
        throw new Error("Both first and last names are required");
    }

    const capitalize = (str) =>
        str.trim().toLowerCase().replace(/^\w/, (c) => c.toUpperCase());

    return `${capitalize(last)}, ${capitalize(first)}`;
}

module.exports = format_name;
