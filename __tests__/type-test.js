import {type} from '../index.js';

test('type number', () => {
    expect(type(1)).toBe('number');
});

test('type formdata', () => {
    expect(type(new window.FormData())).toBe('formdata');
});

test('type string', () => {
    expect(type('string')).toBe('string');
});
