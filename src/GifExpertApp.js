import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories(['HunterXHunter', ...categories]); // se agrega antes de los elementos
    //     // setCategories([...categories, 'HunterXHunter']); // se agrega despues de los elementos
    //     setCategories( cats => [...cats, 'HunterXHunter']); 
    // }

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                { 
                    categories.map( (category) => (
                        // <li key={ category } >{category}</li>
                        <GifGrid 
                            key={ category } 
                            category= { category } 
                        />
                    )) 
                }
            </ol>

        </>
    )
}

export default GifExpertApp
