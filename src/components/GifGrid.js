//import React, { useState, useEffect } from 'react'
//import { getGifs } from '../helpers/getGifs';
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    /*
    OPCION 1 - SUJETO A MEJORA
    const [images, setImages] = useState([])

    useEffect(()=>{
        getGifs( category ).then( setImages );
    },[category])
    */

    // opción 2 mejorada con manejo de hooks
    const {data: images, loading} = useFetchGifs( category );

    return (
        <>        
            <h3>{category}</h3>
            
            { loading && <p>Loading</p>}

            <div className="card-grid">
                {
                    images.map(img=>(
                        <GifGridItem 
                        key = {img.id}
                        { ...img }/>
                    ))
                }
            </div>
        </>
    )
}
