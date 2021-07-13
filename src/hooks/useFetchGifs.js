import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFecthGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

        // los efectos no pueden ser async por que esperan algo sincrono
    useEffect( () => {
        getGifs( category )
            .then( imgs => {

                    setState({
                        data: imgs,
                        loading: false 
                    });

            })
     // si la categoria cambia se vuelve a ejecutar el useEffect 
    }, [ category ]);

    return state; // { data: [], loading: true };

}