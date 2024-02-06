//import React, { useState } from "react"; // import React (to provide access to TSX)
import "./image_selector.css";
import { getImageUrls } from "./get_image_urls";

interface ImageSelectorProps {
  selectedImage: string;
  onImageSelect: (image: string) => void;
}
export function ImageSelector({
  selectedImage,
  onImageSelect,
}: ImageSelectorProps) {
  const urls = getImageUrls();
  //console.log("--> Rendering ImageSelector");
  //console.log(urls);
  //const [selectedImg, setSelectedImg] = useState<string>();

  // const handleClick=(event:React.MouseEvent<HTMLImageElement>)=>{
  //     console.log(event.target)
  //     // setSelectImg()
  // }
  return (
    <div className="thumbnails-container">
      {urls.map((image,index) => (
        <div key={index}
          className={`${
            selectedImage === image ? "thumbnail-selected" : "thumbnail"
          }`}
        >
          <img src={image} onClick={() => onImageSelect(image)} />
        </div>
      ))}
    </div>
  );
}
