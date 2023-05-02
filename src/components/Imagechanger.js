import React, { useRef, useState, useEffect } from "react";
import "./Imagechanger.css"

function ImageChanger() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://images.hindustantimes.com/img/2022/09/08/1600x900/ANI-20220908347-0_1662659270899_1662659270899_1662659283445_1662659283445.jpg",
    "https://www.sportsadda.com/static-assets/waf-images/28/af/fc/16-9/nWA9qdC9pF.jpg?v=1.3&w=420%20420w",
    "https://gumlet.assettype.com/swarajya%2F2020-08%2Fbbab0bff-d042-4a7e-bd93-3330f0b116ed%2FEfd9DtmUYAIaAyx.jpg?q=75&auto=format%2Ccompress&w=1200"
  ];
  
  const imageRef = useRef(null);

  useEffect(() => {
    imageRef.current.src = images[currentImageIndex];
    }, [currentImageIndex]);

  const handleImageChange = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <img ref={imageRef} alt="placeholder" />
      <button onClick={handleImageChange}>Change Image</button>
    </div>
  );
}

export default ImageChanger;


