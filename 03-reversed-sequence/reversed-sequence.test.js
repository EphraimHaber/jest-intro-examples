const reverseSeq = require('./reversed-sequence');

test('reverseSeq', () => {
    expect(reverseSeq(5)).toStrictEqual([5, 4, 3, 2, 1]);
});