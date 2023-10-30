const zeroFuel = require('./zero-fuel')


describe('zeroFuel', () => {
    it('returns false when there is not enough fuel to reach the pump', () => {
        // Arrange
        const distanceToPump = 100;
        const mpg = 20;
        const fuelLeft = 4;
        // Act
        const result = zeroFuel(distanceToPump, mpg, fuelLeft);
        // Assert
        expect(result).toBe(false);
    });

    it('returns false when there is not enough fuel to reach the pump', () => {
        // Arrange
        const distanceToPump = 100;
        const mpg = 25;
        const fuelLeft = 3;
        // Act
        const result = zeroFuel(distanceToPump, mpg, fuelLeft);
        // Assert
        expect(result).toBe(false);
    });

    it('returns true when the distance to the pump is zero', () => {
        // Arrange
        const distanceToPump = 0;
        const mpg = 25;
        const fuelLeft = 0;
        // Act
        const result = zeroFuel(distanceToPump, mpg, fuelLeft);
        // Assert
        expect(result).toBe(true);
    });

    it('returns true when there is more than enough fuel to reach the pump', () => {
        // Arrange
        const distanceToPump = 100;
        const mpg = 25;
        const fuelLeft = 10;
        // Act
        const result = zeroFuel(distanceToPump, mpg, fuelLeft);
        // Assert
        expect(result).toBe(true);
    });
});