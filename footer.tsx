import React, { useState } from 'react';
import {Input} from "@material-tailwind/react";
import {
  Button,
  Typography
} from "@material-tailwind/react";

export function FooterTwo() {
  return (
    <footer className="mt-10 px-8 pt-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography className="font-bold mb-12 text-blue-gray-800" variant="h4">
              Get in touch with
              24/7 customer support.
          </Typography>
          <form action="#" className="mx-auto max-w-[24rem] text-left">
            <Input color="black" size="sm" label="Email" type="email" name="email" crossOrigin={undefined}/>
            <Input color="black" size="lg" label="Text" type="text" name="Text" crossOrigin={undefined}/>
            <Button color="blue-gray" size="lg" className="mt-4" fullWidth>
              Send
            </Button>
          </form>
          </div>
      </div>
    </footer>
  );
}

export default FooterTwo;
