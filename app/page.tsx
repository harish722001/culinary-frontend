import Image from "next/image";
import LoginForm from "@/components/landingPage/LoginForm";
import logo from "../public/MainLogoLight.svg";

export default function Home() {
  return (
    <body>
      <div className="bg-[url('../public/landingBackground.jpg')] bg-contain bg-no-repeat">
        <div className="backdrop-brightness-50">
          <div className="flex pl-20 p-6 space-y-4 md:space-y-6 sm:pl-20">
            <Image src={logo} alt={"logo"} />
          </div>
          <div className="flex flex-col items-center md:flex-row md:h-screen">
            <div className="flex items-center justify-center md:w-1/2">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white">
                Home Cooked Meal.
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center w-full md:w-1/2">
              <LoginForm />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:h-screen bg-gray-400 dark:bg-gray-800"></div>
      </div>
    </body>
  );
}
