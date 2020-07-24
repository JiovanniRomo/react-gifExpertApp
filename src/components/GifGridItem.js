import React from 'react'

//Este comonente solo crea las cracteristicas de cada gif

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
