// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from "react";
import { PhotoViewer } from "./components/photo_viewer/photo_viewer";
import { ImageSelector } from "./components/image_selector/image_selector";
import "./App.css";

function App() {
  const [selectedImg, setSelectedImg] = useState<string>();
  return (
    <div>
      <h1>React Photo Viewer</h1>
      {selectedImg && <PhotoViewer src={selectedImg}/>}
      <ImageSelector onImageSelect={setSelectedImg}/>
    </div>
  );
}

export default App;
