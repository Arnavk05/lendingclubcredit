import ThemeProvider from "./theme-provider";
import Navbar from "./defaultNavbar"
 
import { Typography, Input, Button } from "@material-tailwind/react";

export function SignUp() {
  return (
    <ThemeProvider>
      <Navbar />
      <section className="grid h-screen items-center lg:grid-cols-2">
        <div className="text-center">
          <Typography variant="h3" color="blue-gray" className="mb-2">
            Join us 
          </Typography>
          <Typography className="font-bold mb-12 text-blue-gray-800" variant="h4">
            Enter your information below to register for a loan.
          </Typography>
          <form action="#" className="mx-auto max-w-[24rem] text-left">
            <Input color="black" size="lg" label="Email" type="email" name="email" crossOrigin={undefined}/>
            <Input color="black" size="lg" label="Password" type="password" name="password" crossOrigin={undefined}/>
            <Button color="blue-gray" size="lg" className="mt-4" fullWidth>
              get started
            </Button>
            
            <Typography
              color="gray"
              className="mt-6 text-center font-normal"
            >
              Already have an account?{" "}
              <a
                href="/astro-launch-ui/login"
                className="font-medium text-dark transition-colors hover:text-blue-700"
              >
                Log in
              </a>
            </Typography>
          </form>
        </div>
        <img
          src="https://cdn.duvine.com/wp-content/uploads/2016/03/17095355/Slides_new-cover-photo_FOR-WEB.jpg"
          alt="background image"
          className="hidden h-screen w-full object-cover lg:block"
        />
      </section>
    </ThemeProvider>
  );
}

export default SignUp;

