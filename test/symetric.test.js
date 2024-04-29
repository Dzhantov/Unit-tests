import {isSymmetric} from '../checkSymetric.js';
import {it} from 'mocha';
import {expect} from 'chai';

describe ('Symetric', ()=> {
    it('Should return symetric array when valid array is given', ()=>{
        const input = [1, 2, 3, 2, 1];
            
    
            const actualResult = isSymmetric(input);
    
            expect(actualResult).to.be.true;
    
    });
    it('Should return false when the given array is not symetric', ()=>{
        const nonSymetricArr = [1, 2, 2];
            
    
            const actualResult = isSymmetric(nonSymetricArr);
    
            expect(actualResult).to.be.false;
    
    });
    it('Should return false when input is not array', ()=>{
        const input = '1, 2, 3, 2, 1';
            
    
            const actualResult = isSymmetric(input);
    
            expect(actualResult).to.be.false;
    
    });
    it('Should return false when input is null', ()=>{
        const input = null;
            
    
            const actualResult = isSymmetric(input);
    
            expect(actualResult).to.be.false;
    
    });
    it('Should return true when input an empty array', ()=>{
            const input = [];
            
    
            const actualResult = isSymmetric(input);
    
            expect(actualResult).to.be.true;
    
    });
    it('Should return false when input is number', ()=>{
        const input = 6;
            
    
            const actualResult = isSymmetric(input);
    
            expect(actualResult).to.be.false;
    
    });

});


