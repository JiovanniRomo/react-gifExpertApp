import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../components/GifGridItem';


describe('Pruebas en GifGridItem', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/imagen.jpg';
    const wrapper = shallow( <GifGridItem title={title} url={url} /> );
    

    test('should display the component correctly', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('should had a p with the title', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    });

    test('should had the img = to the url and alt to the props', () => {

        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    });

    test('should had animate__fadeInRight', () => {
        const div = wrapper.find('div');
        const clase = div.prop('className');

        expect(clase.includes('animate__fadeInRigh')).toBe(true);
        // se espera que clase tenga 'animate__fadeInRigh' y sea true, es decir, que sí la incluya

    });

});



