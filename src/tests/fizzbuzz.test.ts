import {fizzBuzz}  from "../core/bizzbuzz";

describe("fizzBuzz", () => {
    it('returns number one as a string for number one', () => {
        expect(fizzBuzz(1)).toBe('1');
    });
    it('returns number one as a string for number two', () => {
        expect(fizzBuzz(2)).toBe('2');
    });
    it('returns string fizz as a string for number three', () => {
        expect(fizzBuzz(3)).toBe('fizz');
    });
    it('returns string buzz as a string for number five', () => {
        expect(fizzBuzz(5)).toBe('buzz');
    });
    it('returns string fizzbuzz as a string for number fifteen', () => {
        expect(fizzBuzz(15)).toBe('fizzbuzz');
    });
    it('returns string fizz as a string for any number divisible by three', () => {
        expect(fizzBuzz(9)).toBe('fizz');
    });
    it('returns string buzz as a string for any number divisible by five', () => {
        expect(fizzBuzz(25)).toBe('buzz');
    });
    it('returns string fizzbuzz as a string for any number divisible by fifteen', () => {
        expect(fizzBuzz(45)).toBe('fizzbuzz');
    });
    it('returns number as a string for any number that is not divisible by three of five ', () => {
        expect(fizzBuzz(43)).toBe('43');
    });

})