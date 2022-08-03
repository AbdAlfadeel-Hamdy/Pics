import React from "react";

const ImageList = (props) => {
  const images = props.images.map((img) => (
    <img alt="Car" src={img.urls.regular} />
  ));
  return <div>{images}</div>;
};

export default ImageList;
