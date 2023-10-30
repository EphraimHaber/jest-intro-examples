const twoSum = require('./two-sum'); // Assuming the implementation is in a separate file

describe('Two Sum', () => {
    it('returns the indices of two numbers that add up to the target', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        const result = twoSum(nums, target);
        expect(result).toEqual([0, 1]);
    });

    it('returns empty array when no solution is found', () => {
        const nums = [2, 7, 11, 15];
        const target = 4;
        const result = twoSum(nums, target);
        expect(result).toEqual([]);
    });

    it('handles negative numbers correctly', () => {
        const nums = [-2, -7, 11, 15];
        const target = 9;
        const result = twoSum(nums, target);
        expect(result).toEqual([0, 2]);
    });

    it('handles duplicate numbers correctly', () => {
        const nums = [3, 1, 4, 3];
        const target = 6;
        const result = twoSum(nums, target);
        expect(result).toEqual([0, 3]);
    });
});
