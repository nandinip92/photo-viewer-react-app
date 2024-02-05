import React from "react"; // import React (to provide access to TSX)
import "./image_selector.css";
import { getImageUrls } from "./get_image_urls";

export function ImageSelector() {
  const urls = getImageUrls();
  return (
    <div className="thumbnails-container">
      {urls.map((image) => (
        <div className="thumbnails">
          <img src={image} />
        </div>
      ))}
    </div>
  );
}
