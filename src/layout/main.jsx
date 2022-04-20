import React, { useState, useEffect } from "react";
import axios from "axios";
import GroupList from "../component/groupList";
import ImagesList from "../component/imagesList";

const Main = () => {
  const [images, setImages] = useState();
  const [selectedProf, setSelectedProf] = useState();
  const IMAGES_URL =
    "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=24";
  useEffect(() => {
    axios.get(IMAGES_URL).then((res) => setImages(res.data));
  }, []);
  let imagesFilter = ""
  const category = [
    { id: "101", name: "0-6" },
    { id: "102", name: "7-12" },
    { id: "103", name: "13-18" },
    { id: "104", name: "19-24" },
  ];

  const handleItemSelect = (item) => {
    setSelectedProf(item);
  };
  const clearFilter = () => {
    setSelectedProf();
  };
  if (selectedProf){
        if (selectedProf.name === "0-6"){
          imagesFilter = images.slice(0,6)}
        else if (selectedProf.name === "7-12"){
        imagesFilter = images.slice(6,12)}
        else if (selectedProf.name === "13-18"){
        imagesFilter = images.slice(12,18)}
        else if (selectedProf.name === "19-24"){
        imagesFilter = images.slice(18)}
  } else { imagesFilter = images}
  return (
    <div className="d-flex">
      <GroupList
        category={category}
        clearFilter={clearFilter}
        onItemSelect={handleItemSelect}
        selectedProf={selectedProf}
      />
      <ImagesList images = {imagesFilter}/>
    </div>
  );
};

export default Main;
