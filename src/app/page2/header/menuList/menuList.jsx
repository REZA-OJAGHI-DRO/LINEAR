"use client";
import useStore from "@/app/store/store";
import Logo from "@/app/header/LogeHeader/logo";
import Logo2 from "../logo2/logo2";
import MenuStake from "../menuStake/menuStake";
import Image from "next/image";
import Link from "next/link";

export default function MenuList() {
  const dNone3 = useStore((state) => state.dNone3);
  const dis4 = useStore((state) => state.dis4);

  function closeMenuList() {
    dis4("none");
  }

  const dis2 = useStore((state) => state.dis2);
  function modal(e){
    dis2('flex')
  }

  return (
    <section
      style={{ display: dNone3 }}
      className="w-[100%] h-[100vh] flex flex-wrap justify-center content-center fixed top-0 bgTheme z-30"
    >
      <div className="w-[100%] h-[10vh] flex justify-between">
        <div className="flex gap-4">
          <Logo />
          <Logo2 />
        </div>
        <button
          onClick={closeMenuList}
          className="text-[2.5rem] text-white"
        >
          <i className="bi bi-x"></i>
        </button>
      </div>

      <div className="w-[100%] h-[70%] flex flex-wrap justify-center overflow-y-scroll scrollMenuList">
         
        <div  onClick={closeMenuList} className="w-[95%] h-[200px] border-b border-zinc-700 text-[1.2rem]">
          <MenuStake />
        </div>
        <UlCommunity />
      </div>
      <div className="w-[100%] h-[10vh] flex justify-center py-1">
      <button 
      onClick={()=>modal(event)} 
      className="w-[90%] h-[50px] rounded-full text-[1.2rem] font-semibold colorBackground capitalize">
            connect wallet
          </button>
      </div>
    </section>
  );
}

function UlCommunity() {
  return (
    <ul className="w-[95%] h-[380px] border-b border-zinc-700 text-[1.4rem] content-center capitalize *:my-6 font-extrabold text-white">
      <li className="text-[1.2rem] font-normal">community</li>
      <li>
        <Link
          href="https://discord.com/invite/bkkvWwMf2T"
          className=" flex w-[100%] h-[100%] justify-between items-center"
        >
          <p>X</p>
          <Image
            src="/header/x.svg"
            alt="Picture of the author"
            width="300000"
            height="400000"
            style={{
              width: "3rem",
              height: "3rem",
              objectFit: "cover",
            }}
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://twitter.com/LinearProtocol"
          className="w-[100%] h-[100%] flex justify-between items-center"
        >
          <p>discord</p>
          <Image
            src="/header/discord.svg"
            alt="Picture of the author"
            width="300000"
            height="400000"
            style={{
              width: "3rem",
              height: "3rem",
              objectFit: "cover",
            }}
          />
        </Link>
      </li>
      <li>
        <Link href="https://medium.com/@LiNEAR_LSD" className="w-[100%] h-[100%] flex justify-between items-center">
          <p>medium</p>
          <Image
            src="/header/medium.svg"
            alt="Picture of the author"
            width="300000"
            height="400000"
            style={{
              width: "3rem",
              height: "3rem",
              objectFit: "cover",
            }}
          />
        </Link>
      </li>
      <li>
      <Link
            href="https://github.com/linear-protocol"
            className="w-[100%] h-[100%] flex justify-between items-center"
          >
              <p>github</p>
            <Image
              src="/header/github.svg"
              alt="Picture of the author"
              width="300000"
              height="400000"
              style={{
                width: "3rem",
                height: "3rem",
                objectFit: "cover",
              }}
            />
          </Link>
      </li>
    </ul>
  );
}
