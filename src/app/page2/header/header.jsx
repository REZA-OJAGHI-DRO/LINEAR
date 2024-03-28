'use client'

import Image from "next/image";
import Link from "next/link";
import "../../globals.css";
import Logo from "@/app/header/LogeHeader/logo";
import Logo2 from "./logo2/logo2";
import Menu from "@/app/header/menu/menu";
import MenuStake from "./menuStake/menuStake";
import useStore from "@/app/store/store";
import Modal from "@/app/connectWallet/coonectWallet";
import HereWalletModal from "@/app/connectWallet/HereWalletModal/HereWalletModal";
import MenuList from "./menuList/menuList";

export default function Header() {

  const dis4 = useStore((state) => state.dis4);
  function clickMenuList(){
    dis4('flex')
  }

  return (
    <>
    <HereWalletModal/>
    <Modal/>
    <MenuList/>
    <header className="w-[100%] h-[10vh] md:h-[15vh] xl:h-[10vh] relative bgTheme z-30">
      <div className="w-[100%] h-[100%] absolute top-0 backdropBlur "></div>
      <div className="w-[100%] h-[100%] flex md:px-5 justify-between items-center absolute top-0">
        <div className=" w-[80%] md:w-[60%] xl:w-[20%] h-[100%] flex justify-center items-center gap-1 md:gap-4">
          <Logo />
          <Logo2 />
        </div>
        
        <div className="w-[28%] h-[100%] hidden xl:flex text-[1.1rem] ">
        <MenuStake />
        </div>

        <div className=" xl:w-[24%] h-[100%] flex  items-center px-5">

          <Menu />
          <Ul />

          <button onClick={()=>clickMenuList(event)} className="flex xl:hidden">
          <Image
          src="/header/menu.svg"
          alt="Picture of the author"
          width="400000"
          height="400000"
          style={{
            width: "1.65rem",
            height: "1.4rem",
            objectFit: "cover",
          }}
          />
          </button>
        </div>

      </div>
    </header>
    </>
  );
}

function Ul() {
  const dis2 = useStore((state) => state.dis2);
  function modal(e){
    dis2('flex')
  }
  return (
    <ul className="hidden xl:w-[50%] h-[100%] xl:flex *:flex *:justify-center *:items-center *:px-1">
      <li className="ms-5">
        <Link
          href=""
          className="w-[7.5rem] h-[2.5rem] rounded-full colorBackground flex justify-center items-center p-[.05rem] "
        >
          <div className="bgTheme w-[100%] h-[100%] rounded-full">
            <button onClick={()=>modal(event)} className="w-[100%] h-[100%] flex justify-center items-center colorText font-semibold text-[.9rem] capitalize">
              connect wallet
            </button>
          </div>
        </Link>
      </li>
    </ul>
  );
}



