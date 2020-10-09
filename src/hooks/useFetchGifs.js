import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";


//NO ES UN COMPONENTE
//es un custom Hook 
//Como tal, un hook es una funcion, en este caso, la funcion retorna los gifs y puede ser llamada
//en el componente en el que se requiera (aquí se llama en GifGrid)

export const useFetchGifs = (category) => {


    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })



    }, [category])

    return state;

}  