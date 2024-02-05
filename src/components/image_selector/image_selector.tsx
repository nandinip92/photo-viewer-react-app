import React, { useState } from "react"; // import React (to provide access to TSX)
import "./image_selector.css";
import { getImageUrls } from "./get_image_urls";
import { PhotoViewer } from "../photo_viewer/photo_viewer";

export function ImageSelector() {
  const urls = getImageUrls();
  const [selectedImg, setSelectedImg] = useState<string>();

  // const handleClick=(event:React.MouseEvent<HTMLImageElement>)=>{
  //     console.log(event.target)
  //     // setSelectImg()
  // }
  return (
    <div>
      {selectedImg && <PhotoViewer src={selectedImg}/>}
      <div className="thumbnails-container">
        {urls.map((image) => (
          <div className="thumbnails">
            <img src={image} onClick={() => setSelectedImg(image)} />
          </div>
        ))}
      </div>
    </div>
  );
}
