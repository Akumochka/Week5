const format_name = require('../stringFormatter/stringFormatter');

describe('format_name', () => {
    test('formats standard names correctly', () => {
        expect(format_name('John', 'Smith')).toBe('Smith, John');
    });

    test('trims extra whitespace', () => {
        expect(format_name('  John  ', '  Smith ')).toBe('Smith, John');
    });

    test('normalizes incorrect casing', () => {
        expect(format_name('jOhN', 'sMiTh')).toBe('Smith, John');
    });

    test('handles names with mixed whitespace and casing', () => {
        expect(format_name('  jAnE  ', '  doE ')).toBe('Doe, Jane');
    });

    test('throws an error if first name is missing', () => {
        expect(() => format_name('', 'Smith')).toThrow('Both first and last names are required');
    });

    test('throws an error if last name is missing', () => {
        expect(() => format_name('John', '')).toThrow('Both first and last names are required');
    });

    test('throws an error if both names are missing', () => {
        expect(() => format_name('', '')).toThrow('Both first and last names are required');
    });

    test('handles names with special characters correctly', () => {
        expect(format_name('marie-claire', "o'connor")).toBe("O'connor, Marie-claire");
    });
});
