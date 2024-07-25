import ThemeProvider from "../theme-provider";
import Navbar from "../defaultNavbar"
import {Input} from "@material-tailwind/react";
import {
  Button,
  Typography
} from "@material-tailwind/react";

export function HeroSectionFour() {
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-screen min-h-screen w-screen bg-white">
        <div className="relative h-screen flex align-center flex-col justify-center text-center bg-cover" style={{backgroundImage: `url('https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`}}>
          <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800"></span>
          <Typography
            variant="h1"
            color="white"
            className="mb-4 !leading-tight lg:text-7xl z-20"
          >
            Apply for a Loan
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 w-full opacity-80 md:w-10/12 lg:w-7/12 mx-auto px-28 z-10"
          >
            Enter your information below to find your rate.

          </Typography>

          <form action="#" className="mx-auto max-w-[24rem] text-left">
            <Input color="white" size="lg" label="Credit Score" type="cs" name="Credit Score" crossOrigin={undefined}/>
            <Input color="white" size="lg" label="Location" type="Location" name="Location" crossOrigin={undefined}/>
          </form>

          <div className="w-auto mx-auto">
            <div className="flex items-center">
                <Button color="blue-gray" className="w-full px-4">
                  Get Rate
                </Button>
                
            </div>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionFour;
