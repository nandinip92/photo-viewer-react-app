// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { PhotoViewer } from "./components/photo_viewer/photo_viewer";
import { ImageSelector } from "./components/image_selector/image_selector";
import "./App.css";

function App() {
  return (
    <div>
      <h1>React Photo Viewer</h1>
      <PhotoViewer src={"https://picsum.photos/id/600/1600/900.jpg"} />
      <ImageSelector />
    </div>
  );
}

export default App;
