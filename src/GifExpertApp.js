import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//Este es el "componente general", podriamos verlo como el resultado de juntar todos los componentes, es la APP

export const GifExpertApp = ({defaultCategories = []}) => {

    const [categories, setCategory] = useState(defaultCategories);

    /*
    //Esto indica a React que el estado cambio y debe renderizar todo de nuevo
    const handleadd = () => {
        //Extraemos las categorias que ya teniamos y despues añadimos una nueva categoria
        // setCategory([...categories, 'Hola 3 xd']);

        //Recuerda que el callback es el estado anterior y después de la funcion de flecha sera el nuevo estado
        setCategory(cats => [...cats, 'Hola 3 xd']);
    }
    */


    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategory={setCategory} />
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                        key={category}
                        category={category}
                        />

                    ))
                }
            </ol>
        </>
    )
}
