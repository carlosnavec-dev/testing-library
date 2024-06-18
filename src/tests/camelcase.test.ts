import {camelcase} from "../core/camelcase";

describe('camelcase converter', () => {
    it('returns an empty string when string is empty', () => {
        expect(camelcase('')).toBe('');
    });

    it ('returns same string if it starts with camelcase', () => {

        expect(camelcase('Foo')).toBe('Foo');
    });

    it('returns unique string with camelcase if string has spaces', () => {
        expect(camelcase('Foo Bar')).toBe('FooBar');
    });

    it('returns unique string with camelcase if string has hyphens ', () => {
        expect(camelcase('Foo_Bar-Foo')).toBe('FooBarFoo');
    });
    it('a word with the first letter lowercase the result must return the same word with the first letter uppercase', ()=>{
        expect(camelcase('foo')).toBe('Foo');
    });
    it('a text that contains lowercase words must transform each word to uppercase and join them', ()=> {
        expect(camelcase('foo_bar foo-bar')).toBe('FooBarFooBar');
    });
    it('if argument is null or undefined should be return an empty string', ()=> {
        expect(camelcase(null)).toBe('');
        expect(camelcase(undefined)).toBe('');
    })
})