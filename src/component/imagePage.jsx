import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

const ImagePage = () => {
    const [image, setImage]=useState();
    const params = useParams()
    const id = params.photoId;
    const IMAGES_URL = `https://jsonplaceholder.typicode.com/photos/${id}`;
    useEffect(() => {
        axios.get(IMAGES_URL).then((res) => setImage(res.data));
    }, []);
    console.log(image);
    if (image){
       return (
        <div className="card m-5" style={{width: "30rem"}} >
            <img src={image.url} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">{image.title}</p>
            </div>
        </div>
        ); 
    } else {return (<h5>Loading...</h5>)}
    
}
 
export default ImagePage;