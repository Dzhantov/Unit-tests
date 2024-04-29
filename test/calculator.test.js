import { it } from 'mocha';
import { expect } from 'chai';
import * as calculator from '../calculator.js';

describe('Calculator sum', () => {


it('Should return positive number when two positive numbers are added', ()=>{
    //Arrange
    let firstNumber = 5;
    let secondNumber = 10;
    let expectedResult = 15

    //Act
    let actualResult = calculator.sum(firstNumber, secondNumber);

    //Assert
    expect(actualResult).to.equal(expectedResult);
});

it('Should return negative number when two negative numbers are given', ()=>{
    expect(calculator.sum(-1,-10)).to.be.below(0);
});

});