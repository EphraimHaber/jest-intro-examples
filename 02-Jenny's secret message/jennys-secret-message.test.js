const greet = require('./jennys-secret-message')

test("Jenny's greeting function", () => {
    expect(greet("Jim")).toStrictEqual("Hello, Jim!");
    expect(greet("Jane")).toStrictEqual("Hello, Jane!");
    expect(greet("Johnny")).toStrictEqual("Hello, my love!");
});