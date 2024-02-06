// import React from 'react';
import { render } from '@testing-library/react';
//import { useState } from "react";
import App from './App';
import { PhotoViewer } from './components/photo_viewer/photo_viewer';
import { ImageSelector } from './components/image_selector/image_selector';
import { getImageUrls } from './components/image_selector/get_image_urls';

// test('renders Hello world text', () => {
//   const { getByText } = render(<App />);
//   const textElement = getByText(/Hello world/i);
//   expect(textElement).toBeInTheDocument();
// });

describe("Checking if the components are present or not", () => {
    it("Should render <App> without error", () => {
    render(<App/>);
    }); 
    it('renders Hello world text', () => {
        const { getByText } = render(<App />);
        const textElement = getByText(/React Photo Viewer/i);
        expect(textElement).toBeInTheDocument();
      });
 
   });

   describe("PhotoViewer component", () => {
    it("Should render <PhotoViewer> without error", () => {
        render(<PhotoViewer src="https://picsum.photos/id/600/1600/900.jpg"/>);
        const image= document.querySelector("img") as HTMLImageElement;
        expect(image.src).toContain("https://picsum.photos/id/600/1600/900.jpg")
        }); 
   });
   

describe("ImageSelector component", () => {
    const urls=getImageUrls();


    const requiredProps ={
        selectedImage:"",
        onImageSelect:()=>{}
    }
    it("Should render <ImageSelector> without error", () => {
        render(<ImageSelector {...requiredProps}/>);
        const allImages= document.querySelectorAll("img") as NodeListOf<HTMLImageElement>;
        allImages.forEach((image,index)=>{
            console.log(image.src)
            expect(image.src).toContain(urls[index])
        })
        // console.log("----->",image.src);
        // console.log("----->",urls[1])
        // expect(image.src).toContain(urls[1])
        }); 
   });