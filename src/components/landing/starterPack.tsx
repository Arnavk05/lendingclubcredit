import { Typography, Button } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import React, { useState } from 'react';


const image1='/public/image1.png';
const image2='/public/image2.png';
const image3='/public/image3.png';

export function ContentSectionOne() {
  const [currentImage, setCurrentImage] = useState(image1);
  return (
    <ThemeProvider>
      <section className="py-16 px-8 lg:py-28">
        <div className="flex bg-white text-dark-blue p-8">
      <div className="w-1/2 space-y-6">
        <h1 className="text-2xl font-bold hover:text-blue-700" >
          How to Apply for a Loan with Lending Club
        </h1>
        <ul className="space-y-4">
          <li
            className="hover:text-blue-700 cursor-pointer"
            onMouseEnter={() => setCurrentImage(image1)}
          >
            <strong>Apply In Minutes</strong>
            <p>Get customized loan options based on what you tell us.</p>
          </li>
          <li
            className="hover:text-blue-700 cursor-pointer"
            onMouseEnter={() => setCurrentImage(image2)}
          >
            <strong>Choose a Loan Offer</strong>
            <p>Select the rate, term, and payment options you like best.</p>
          </li>
          <li
            className="hover:text-blue-700 cursor-pointer"
            onMouseEnter={() => setCurrentImage(image3)}
          >
            <strong>Get Funded</strong>
            <p>
              Once your loan is approved, we’ll send the money straight to your
              bank account or pay your creditors directly.
            </p>
          </li>
        </ul>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <img src={currentImage} alt="Current display" className="w-1/2 h-full" />
      </div>
    </div>

            <div className="inline-flex flex-wrap gap-3">
              <a href="/astro-launch-ui/apply">
              <Button variant="outlined" color="blue-gray" size="lg">
                Get Started
              </Button>
              </a>
            </div>
      </section>
      </ThemeProvider>
  );
}

export default ContentSectionOne;
