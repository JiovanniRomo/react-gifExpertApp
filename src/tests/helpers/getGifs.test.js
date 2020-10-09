import { getGifs } from '../../helpers/getGifs';


describe('Pruebas con getGifs fetch', () => {

    test('should bring 10 images', async () => {
        
        const gifs = await getGifs('One punch');

        expect(gifs.length).toBe(10);

    });

    test('if theres no a category, should bring 0 images', async () => {
        
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);

    });


});
