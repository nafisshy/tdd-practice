import all from './all';
const calculator= all.calculator;
const CaesarCipher = all.CaesarCipher;
const capitalize= all.capitalize;
const reverseString =all.reverseString;
test('add 1+2 to equal 3',()=>{
    expect(calculator.add(1,2)).toBe(3);
});

test('subtract 8-4 to equal 4',()=>{
    expect(calculator.subtract(8,4)).toBe(4);
});

test('subtract 4-8 to equal -4',()=>{
    expect(calculator.subtract(4,8)).toBe(-4);
});

test('divides 1/2 to result 0.5',()=>{
    expect(calculator.divide(1,2)).toBeCloseTo(0.5);
});

test('multiplies 4*5 to equal 20',()=>{
    expect(calculator.multiply(4,5)).toBe(20);
});

test('capitalizes first letter',()=>{
    expect(capitalize('water')).toEqual('Water');
});

test('reverse string Howdy',()=>{
 expect(reverseString('Howdy')).toBe('ydwoH');
});

test('encrypts String 1',()=>{
    expect(CaesarCipher.encrypt('attack at dawn fgf',13)).toEqual('nggnpx ng qnja sts');
});

test('encrypts String 2',()=>{
    expect(CaesarCipher.encrypt('xyz',13)).toEqual('klm');
});

test('decrypts String 1',()=>{
    expect(CaesarCipher.decrypt('nggnpx ng qnja sts',13)).toEqual('attack at dawn fgf');
});

test('decrypts String 2',()=>{
    expect(CaesarCipher.encrypt('klm',13)).toEqual('xyz');
});