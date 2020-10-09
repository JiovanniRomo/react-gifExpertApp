import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//Este es el "componente general", podriamos verlo como el resultado de juntar todos los componentes, es la APP

export const GifExpertApp = ({defaultCategories = []}) => {

    const [categories, setCategory] = useState(defaultCategories);

    
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
