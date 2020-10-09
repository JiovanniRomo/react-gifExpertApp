import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en useFetchGifs', () => {

    test('Debe de retornar el estado inicial', async() => {
        

        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('SEO') ); //crea un componente para usar el hook

        const {data, loading} = result.current; //guarda el estado actual de result

        await waitForNextUpdate();
        expect( data ).toEqual([]);
        expect(loading).toBe(true);

    });

    test('debe retornar un arreglo de imagenes y loading en false', async() => {
        
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('SEO') ); //crea un componente para usar el hook
        await waitForNextUpdate();

        const {data, loading} = result.current; //guarda el estado actual de result

        expect( data.length ).toBe(10);
        expect( loading ).toBe(false);

    });

});