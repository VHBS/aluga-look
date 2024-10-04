import Image from "next/image";
// import AlugaLookLogo from "./public/AlugaLook.svg";
import AlugaLookLogo from "@/app/public/AlugaLook.svg";

export default function Navbar() {
  return (
    <div className="sticky top-0 w-full border-b-8 border-black py-4 flex px-8 justify-between bg-white z-50">
      <Image className="w-40" src={AlugaLookLogo} alt="logo aluga look" />

      <nav className="flex px-12 gap-16">
        <p className="text-2xl font-normal">Início</p>
        <p className="text-2xl font-normal">Closet</p>
        <p className="text-2xl font-normal">Sobre nós</p>
        <p className="text-2xl font-normal">Contato</p>
      </nav>

      <p className="text-2xl font-normal">Carrinnho</p>
    </div>
  );
}
