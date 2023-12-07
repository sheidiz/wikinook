import Image from "next/image";
import HeroDesktop from "@/public/images/hero-desktop.png";
import HeroMobile from "@/public/images/hero-mobile.png";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row justify-center align-middle gap-0 
      lg:gap-5 mx-5 lg:mx-28 mt-3 lg:mt-20 mb-8 lg:mb-0">
      <div className="px-2 mx-auto">
        <Image src={HeroDesktop} alt="Celeste" className="hidden lg:block h-3/4 w-auto"/>
        <Image src={HeroMobile} alt="Celeste" className="block lg:hidden h-56 w-auto"/>
      </div>
      <div className="w-100 lg:w-1/2 text-center lg:text-start mx-2 lg:mx-10 flex flex-col gap-3 mt-0 lg:mt-8">
        <h1 className="text-lightgreen font-bold text-5xl">Welcome to WikiNook!</h1>
        <h2 className="text-gray-600 text-2xl">Explore the enchanting world of Animal Crossing with WikiNook.</h2>
        <p className="text-gray-400 text-lg">Explore villagers, events, and selling items at WikiNook. Discover personalities, event highlights, and valuable items like bugs and fossils.</p>
        <p className="text-gray-400 text-lg">Embark on an adventure into the delightful universe of Animal Crossing, where every discovery brings new excitement. WikiNook is your compass in this enchanting realm.</p>
      </div>
    </div>
  )
}
