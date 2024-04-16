const { add } = require("../arithmetica")

test('2 + 3 is equal to 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('6 + 9 is equal to 15', () => {
    expect(add(6, 9)).toBe(15);
});

test('67823567823568 + 3265823957 is equal to 5', () => {
    expect(add(2000, 15)).toBe(2015);
});