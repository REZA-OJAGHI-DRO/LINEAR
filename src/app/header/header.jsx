// import Image from "next/image";
import Link from "next/link";
import "./../globals.css";
import Logo from "./LogeHeader/logo";
import Menu from "./menu/menu";

export default function Header() {
  return (
    <header className="w-[100%] h-[10vh] md:h-[15vh] xl:h-[10vh] z-50 fixed top-0">
      <div className="w-[100%] h-[100%] absolute top-0 backdropBlur "></div>
      <div className="w-[100%] h-[100%] flex px-5 justify-between items-center absolute top-0">
        <Logo />
        <div className=" xl:w-[24%] h-[100%] flex  items-center px-1">
          <Menu />
          <Ul />
        </div>
      </div>
    </header>
  );
}



function Ul() {
  return (
    <ul className=" xl:w-[50%] h-[100%] flex *:flex *:justify-center *:items-center *:px-1">
      <li className="ms-5">
        <Link
          href="../page2"
          target="_blank"
          className="w-[6.5rem] h-[2.5rem] rounded-full colorBackground flex justify-center items-center p-[.05rem] "
        >
          <div className="bgTheme w-[100%] h-[100%] rounded-full">
            <button className="w-[100%] h-[100%] flex justify-center items-center colorText font-semibold text-[.9rem] capitalize">
              stake now
            </button>
          </div>
        </Link>
      </li>
    </ul>
  );
}
