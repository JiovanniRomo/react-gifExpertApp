import React from 'react';
import PropTypes from 'prop-types';

//Este componente solo crea las cracteristicas de cada gif

export const GifGridItem = ({title, url}) => {

    return (
        <div className='card animate__animated animate__fadeInRight'>
            <img 
                src={url}
                alt={title}
            />
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propType = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
