
function format_name(firstName, lastName) {
    if (!firstName || !lastName) {
        throw new Error("Both first and last names are required");
    }

    const capitalize = (str) =>
        str.trim().toLowerCase().replace(/^\w/, (c) => c.toUpperCase());

    return `${capitalize(lastName)}, ${capitalize(firstName)}`;
}

module.exports = format_name;
