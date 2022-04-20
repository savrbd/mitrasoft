import React from 'react';
import "./button.css"
import { Link } from "react-router-dom";

const ImageCard = ({image}) => {
    return (
        <div className="card m-2 abc" style={{width: "18rem"}}>
            <Link  to={`/photos/${image.id}`}><button type="button" className="abc btn btn-primary">Подробнее</button></Link>
            <img src={image.url} className="card-img-top" alt="..."/>
        </div>
    );
}
 
export default ImageCard;