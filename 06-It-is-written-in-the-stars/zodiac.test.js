const starSign = require('./zodiac');

describe('starSign', () => {
    it('returns "Aquarius" for January 21st', () => {
        // Arrange
        const date = new Date('2023-01-21');
        // Act
        const result = starSign(date);
        // Assert
        expect(result).toBe('Aquarius');
    });

    it('returns "Aquarius" for February 19th', () => {
        // Arrange
        const date = new Date('2023-02-19');
        // Act
        const result = starSign(date);
        // Assert
        expect(result).toBe('Aquarius');
    });

    // Add more test cases for other zodiac signs

    it('returns "Capricorn" for December 22nd', () => {
        // Arrange
        const date = new Date('2023-12-22');
        // Act
        const result = starSign(date);
        // Assert
        expect(result).toBe('Capricorn');
    });
});
