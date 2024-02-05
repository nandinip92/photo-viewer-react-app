import React from "react"; // import React (to provide access to TSX)
import "./photo_viewer.css";

interface ImageProps {
  src: string;
}

export function PhotoViewer(props: ImageProps) {
  // declare and export new function called 'PhotoViewer'
  return (
    <div className="large-display">
      <img src={props.src} />
    </div>
  );
}
