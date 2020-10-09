import React from 'react';
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

//Este componente recopila todos los items para mostrarlos

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    
    return (
        //Como ya estamos retornando 2 objetos(h3, div) , usamos fragment
        //! ES IMPORTANTE USAR CLASSNAME PARA DEFINIR LAS CLASES    
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGridItem 
                            key={img.id}
                            {...img}  //esto hace que las propiedades sean independientes
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propType = {
    category: PropTypes.string.isRequired
}