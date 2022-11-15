import all from './sum';
const sum = all.sum;
const capitalize= all.capitalize;
const reverseString =all.reverseString;
test('add 1+2 to equal',()=>{
    expect(sum(1,2)).toBe(3);
});

test('capitalizes first letter',()=>{
    expect(capitalize('water')).toEqual('Water');
});

test('reverse string',()=>{
 expect(reverseString('Howdy')).toBe('ydwoH');
});