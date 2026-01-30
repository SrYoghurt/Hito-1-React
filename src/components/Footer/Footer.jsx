import { facebookLogo, twitterLogo, instagramLogo, whatsappLogo } from "../../assets/svg/iconos-svg";
export default function Footer() {
  return (
    <div>
      <footer className="flex justify-center content-end items-end mt-auto p-3">
        <p className="text-2xl">Sigue nuestras redes!</p>
        <img src={facebookLogo} alt="logo de facebook" className="h-7 p-1 hover:cursor-pointer" />
        <img src={twitterLogo} alt="logo de twitter" className="h-7 p-1 hover:cursor-pointer" />
        <img src={instagramLogo} alt="logo de instagram" className="h-7 p-1 hover:cursor-pointer" />
        <img src={whatsappLogo} alt="logo de whatsapp" className="h-7 p-1 hover:cursor-pointer" />
      </footer>
    </div>
  )
}
