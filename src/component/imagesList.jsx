import React from 'react';
import ImageCard from './imageCard';
const ImagesList = ({images}) => {
    if(images) {
        return (
        <div className="d-flex flex-wrap p-3 shadow">
            {images.map((item)=>(
                <ImageCard image={item} key={item.id}/>
            ))}
        </div>
    );
    } else {return (<h4>Loading...</h4>)}
    
}
 
export default ImagesList;