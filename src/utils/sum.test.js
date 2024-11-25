import {describe,expect,it} from 'vitest';
import {sum} from './sum';

describe('Función suma', ()=> {
    it('Suma debe ser una función', () => {
        expect(typeof sum).toBe('function')
    })
    
    it('Suma debe retornar correctamente dos numeros positivos', () => {
        expect(sum(3,4)).toBe(26)
    })
    
});
