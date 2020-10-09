import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import { AddCategory } from '../components/AddCategory';


describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();

    let wrapper = shallow(<AddCategory setCategory={setCategories}/>); 

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategory={setCategories}/>); 
    });


    test('should correctly display the component', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('should change the text box ', () => {
        
        const input = wrapper.find('input');

        const value = 'Hola mundo'; //Esto es somo para simular el e.target.VALUE del handleInputChange, si no lo hicieramos, el value sería undefined

        input.simulate('change', { target: { value } }); //Aquí le asignamos el value al target

        expect(wrapper.find('p').text().trim()).toBe( value ); //Esto es solo para probar que funciona

    });

    test('shouldnt post the submit info', () => {
        
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('should call setCategories and clean the text box', () => {
        
        //1.Simular el inputChange
        const value = 'Hola mundo';
        wrapper.find('input').simulate('change', {target: { value }});

        //2.Simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        //3 setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); //esto evalua que se reciba cualquier tipo de FUNCIÓN

        //4 EL valor del input debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('');//Que el valor del input (obtenido desde los props) sea ''

    });

})