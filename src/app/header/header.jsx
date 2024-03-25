import Image from "next/image";
import Link from "next/link";
import "./../globals.css";
export default function Header() {
  return (
    <header className="w-[100%] h-[10vh] z-50 fixed top-0">
      <div className="w-[100%] h-[100%] absolute top-0 backdropBlur "></div>
     <div className="w-[100%] h-[100%] flex px-5 justify-between items-center absolute top-0">
      <Logo />
      <Menu />
     </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="xl:w-[14%] h-[100%] flex items-center justify-center">
      <Image
        src="/header/logoLinear.svg"
        alt="Picture of the author"
        width="400000"
        height="400000"
        style={{
          width: "6.4rem",
          height: "1.85rem",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

function Menu() {
  return (
    <ul className=" xl:w-[24%] h-[100%] flex *:flex *:justify-center *:items-center *:px-1">
      <li >
        <Link href="https://discord.com/invite/bkkvWwMf2T"  
        className="hidden sm:flex">
          <Image
            src="/header/discord.svg"
            alt="Picture of the author"
            width="300000"
            height="400000"
            style={{
              width: "2.2rem",
              height: "2.2rem",
              objectFit: "cover",
            }}
          />
        </Link>
      </li>
      <li>
        <Link href="https://twitter.com/LinearProtocol"
        className="hidden sm:flex">
          <Image
            src="/header/x.svg"
            alt="Picture of the author"
            width="300000"
            height="400000"
            style={{
              width: "2.2rem",
              height: "2.2rem",
              objectFit: "cover",
            }}
          />
        </Link>
      </li>
      <li>
        <Link href="https://medium.com/@LiNEAR_LSD"
        className="hidden sm:flex">
          <Image
            src="/header/medium.svg"
            alt="Picture of the author"
            width="300000"
            height="400000"
            style={{
              width: "2.2rem",
              height: "2.2rem",
              objectFit: "cover",
            }}
          />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/linear-protocol"
        className="hidden sm:flex">
          <Image
            src="/header/github.svg"
            alt="Picture of the author"
            width="300000"
            height="400000"
            style={{
              width: "2.2rem",
              height: "2.2rem",
              objectFit: "cover",
            }}
          />
        </Link>
      </li>
      <li className="ms-5">
        <Link
          href=""
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
