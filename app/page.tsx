import Image from "next/image";
import AlugaLookLogo from "./public/AlugaLook.svg";
import Hero from "./public/Hero.svg";
import LogoDior from "./public/logo-dior.svg";
import LogoGucci from "./public/logo-gucci.svg";
import LogoPrada from "./public/logo-prada.svg";
import LogoVogue from "./public/logo-vogue.svg";
import Marcas1 from "./public/marcas1.jpg";
import Marcas2 from "./public/marcas2.jpg";
import Marcas3 from "./public/marcas3.jpg";
import Star from "./public/Star.png";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-32 pb-72 overflow-x-hidden">
      <div className="flex flex-col p-16 gap-12 lg:flex-row">
        <div className="w-100 flex flex-col gap-32">
          <Image src={AlugaLookLogo} alt="logo aluga look" />
          <Image
            className="-ml-40 mt-10 absolute"
            src={Star}
            alt="logo aluga look"
          />

          <h2 className="text-3xl w-96 font-normal">
            Moda Inteligente <br></br> Alugue peças elegantes e modernas que
            refletem seu estilo pessoal sem a necessidade de compra.
          </h2>
          <button
            className="bg-pink text-white mx-auto p-4 border-2 
          border-black shadow-dark font-semibold text-2xl hover:shadow-pink hover:text-pink 
          hover:bg-white hover:border-pink transition-all active:shadow-none"
          >
            Experimente agora
          </button>
        </div>
        <Image className="w-full" src={Hero} alt="logo aluga look" />
      </div>

      <div className="flex gap-96 bg-white shadow-dark-0 border-t-2 border-black px-48 py-6">
        <Image src={LogoDior} alt="logo aluga look" />
        <Image src={LogoGucci} alt="logo aluga look" />
        <Image src={LogoPrada} alt="logo aluga look" />
        <Image src={LogoVogue} alt="logo aluga look" />
      </div>

      <div>
        <div className="flex flex-col lg:flex-row gap-16">
          <Image
            className="shadow-dark border-2 border-black"
            src={Marcas1}
            alt="logo aluga look"
          />
          <Image
            className="shadow-dark border-2 border-black"
            src={Marcas2}
            alt="logo aluga look"
          />
          <Image
            className="shadow-dark border-2 border-black"
            src={Marcas3}
            alt="logo aluga look"
          />
        </div>

        <div className="py-12 gap-12 flex flex-col w-[1100px]">
          <h3 className="text-4xl font-semibold mx-auto">
            Porque nos escolher?
          </h3>
          <p className="w-full text-justify text-2xl">
            Nossos produtos são de qualidade, oferecemos conveniência e
            flexibilidade cuidando e dando manutenção nas nossas peças enquanto
            você economiza dinheiro e espaço no seu guarda-roupas.
            <br></br>
            <br></br>
            Entregamos uma experiência completa de transformação.
          </p>
        </div>
      </div>
    </main>
  );
}
