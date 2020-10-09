import React, { useState } from 'react'
import PropTypes from 'prop-types';

//Este componente solo nos ayuda a crear nuevas categorias

export const AddCategory = ({setCategory}) => {


    const [inputValue, setinputValue] = useState('');

    const handleInputCange = (e) => {
        setinputValue(e.target.value);
    }


    //Prevenimos el refresh del navegador
    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategory(cats => [inputValue, ...cats]);
            setinputValue(''); //esto es para no hacer una doble inserción, borra lo que el usuario ya escribio
        }


    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input
                type='text'
                value={inputValue}
                onChange={ handleInputCange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}
