import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach( () => {
        // Se llama para limpiar todo si en dado caso tenemos una simulación
        jest.clearAllMocks();

        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    })

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');

        const value = 'Hola Mundo';

        // evento onChange
        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);


    });

    test('NO debe de postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() {} });

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola Mundo';
        // 1. Simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } });

        // 2. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault() {} });

        // 3. SetCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled();
        // Se esperaba que se llamará una vez
        expect( setCategories ).toHaveBeenCalledTimes(1);
        // Se esperaba que se haya llamado con una función (de cualquier tipo) 
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        // 4. El valor del input debe de estar ''
        expect( wrapper.find('input').prop('value') ).toBe('');
    });

});