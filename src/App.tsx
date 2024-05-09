import { useEffect, useState } from "react";
import { PhotoViewer } from "./components/photo_viewer/photo_viewer";
import { ImageSelector } from "./components/image_selector/image_selector";
import "./App.css";

function App() {
  const [selectedImg, setSelectedImg] = useState<string>("");
  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [selectedImg]);
  return (
    <div>
      <h1>React Photo Viewer</h1>
      {selectedImg!="" && <PhotoViewer src={selectedImg}/>}
      <ImageSelector selectedImage={selectedImg} onImageSelect={setSelectedImg}/>
    </div>
  );
}

export default App;
