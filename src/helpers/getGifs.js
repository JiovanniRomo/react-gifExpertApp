

//Esto es un helper, o una funcion que puede ser llamada en el componente que se requiera
//En este caso realiza la peticion y retorna los gifs como una promesa que tratamos en useFetchGifs

export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Ciyl70tjCZXUd1qZ2WffqFetXRmXaKuJ`;
    const response = await fetch(url); 
    const {data} = await response.json();

    //Ordenamos las propiedades en un nuevo objeto
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}