import analyzeArray from "./analyzeArray";

test('Analyzes array and returns a valid object',()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
});

test('if not array returns false',()=>{
    expect(analyzeArray('water')).toBeFalsy();
});

test('if not array of numbers returns false',()=>{
    expect(analyzeArray(['s','a','l','t'])).toBeFalsy();
});