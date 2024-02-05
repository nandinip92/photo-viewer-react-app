//import React, { useState } from "react"; // import React (to provide access to TSX)
import "./image_selector.css";
import { getImageUrls } from "./get_image_urls";

interface ImageSelectorProps{
  onImageSelect:(image:string)=>void;
}
export function ImageSelector({onImageSelect}:ImageSelectorProps) {
  const urls = getImageUrls();
  //const [selectedImg, setSelectedImg] = useState<string>();

  // const handleClick=(event:React.MouseEvent<HTMLImageElement>)=>{
  //     console.log(event.target)
  //     // setSelectImg()
  // }
  return (
    <div className="thumbnails-container">
      {urls.map((image) => (
        <div className="thumbnails">
          <img src={image} onClick={() => onImageSelect(image)} />
        </div>
      ))}
    </div>
  );
}
