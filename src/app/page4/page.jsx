import Image from "next/image";

import Header from "../page2/header/header";
import LiNEARAirdrop from "./LiNEARAirdrop/LiNEARAirdrop";
import MenuList from "../page2/header/menuList/menuList";

export default function Page4() {
  return (
    <main className="w-[100%] h-[105vh] sm:h-[180vh] xl:h-[122vh] bgTheme">
      <BackGround />
      <Header />
      <MenuList />
      <div className="w-[100%] h-[100%] absolute top-0 left-0 flex justify-center">
        <div className="w-[100%] h-[100%] 2xl:container ">
          
          <article className="w-[100%] h-[20vh] md:h-[30vh] xl:h-[22vh] flex flex-wrap justify-start content-end px-10">
            <h2 className="w-[100%] colorTextTitle1 font-bold text-[1.5rem] md:text-[1.7rem]">
            Omnichain Liquid (Re)Staking
            </h2>
            <p className="w-[100%] colorTextParagraph1 text-[.8rem] md:text-[1rem]">
            Get the highest yield from staking $NEAR, $ETH and more
            </p>
          </article>

          <LiNEARAirdrop/>

        </div>
      </div>
    </main>
  );
}

function BackGround() {
  return (
    <div className="w-[100%] h-[100%] absolute top-0 left-0 pt-[5vh]">

      <section className="w-[100%] h-[20vh] sm:h-[30vh] xl:h-[20vh] bgTheme">
        <div className="w-[100%] h-[100%] flex justify-center  backdropBlur">
        <Image
                      src="/page4Airdrop/banner.svg"
                      alt="Picture of the author"
                      width="300000"
                      height="400000"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
        </div>
      </section>
      
      <section className="w-[100%] h-[80vh] sm:h-[145vh] xl:h-[97vh] overflow-hidden bgTheme">
        <div className="w-[100%] h-[100%] flex justify-center  backdropBlur">
          <div className="w-[35vw] h-[35vw] rounded-full translate-y-[0vh] colorBackground2 opacity-70 -rotate-[70deg] blur-[270px]"></div>
        </div>
      </section>

    </div>
  );
}