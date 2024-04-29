import { expect } from "chai";
import {it} from "mocha";
import sum from "../sumOfNumbers.js";

describe('Sum', ()=>{
    it('Return sum of elements', ()=>{
        const input = [1, 2, 3];
        const expected = 6;

        const actualResult = sum(input);

        expect(actualResult).to.equal(expected);
    });
    it('Return 0 when there are no elements', ()=>{
        const input = [];
        const expected = 0;

        const actualResult = sum(input);

        expect(actualResult).to.equal(expected);
    });

    it('Should throw an error when non-array argument is received', ()=>{
        expect(()=> sum(3)).to.throw();
    });
    it('Returns Error when there are no elements', ()=>{
        
        expect(()=> sum(null)).to.throw();
    });
    it('Return sum of elements with negative numbers', ()=>{
        const input = [-1, -2, -3];
        const expected = -6;

        const actualResult = sum(input);

        expect(actualResult).to.equal(expected);
    });
    it('Return a element when only one element is given', ()=>{
        const input = [5];
        const expected = 5;

        const actualResult = sum(input);

        expect(actualResult).to.equal(expected);
    });
    it('Return a element when element is string', ()=>{
        const input = "0";
        const expected = 0;

        const actualResult = sum(input);

        expect(actualResult).to.equal(expected);
    });
});