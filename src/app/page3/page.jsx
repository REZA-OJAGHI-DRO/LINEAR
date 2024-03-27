'use client'

import Image from "next/image";

import Header from "../page2/header/header";

import MenuList from "../page2/header/menuList/menuList";
import useStore from "../store/store";

export default function Page3() {
  const dis2 = useStore((state) => state.dis2);
  function modal(e){
    dis2('flex')
  }

  return (
    <main className="w-[100%] h-[100vh] sm:h-[100vh] xl:h-[100vh] bg-slate-900">
      <BackGround />
      <Header />
      <MenuList />
      <div className="w-[100%] h-[100%] absolute top-0 left-0 flex justify-center">
        <div className="w-[100%] h-[100%] 2xl:container flex justify-center items-center">
          <section className="w-[450px] p-7 rounded-xl bg-[rgb(13,12,24)]">
            <div className="w-[100%] flex justify-center py-7">
              <Image
                src="/page3MyAccount/wallet.svg"
                alt="Picture of the author"
                width="400000"
                height="400000"
                style={{
                  width: "4rem",
                  height: "4rem",
                  objectFit: "cover",
                }}
              />
            </div>
            <p className="w-[100%] flex justify-center text-[1rem] font-semibold text-white">
            Please connect a wallet first
            </p>

            <button onClick={()=>modal(event)} className="w-[100%] rounded-full text-[1.3rem] font-bold py-3 colorBackground capitalize mt-7">
            connect wallet
          </button>

          </section>
        </div>
      </div>
    </main>
  );
}

function BackGround() {
  return (
    <div className="w-[100%] h-[100%] absolute top-0 left-0 overflow-hidden">
      <div className="w-[100%] h-[80vh] sm:h-[80vh] lg:h-[80vh] bg-[rgb(9,9,17)] bgStake">
        <article className="w-[100%] h-[100%] overflow-hidden flex justify-center pt-[20vh]">
          {/* <div className="colorBackground  w-[60%] h-[20vh]  opacity-30 blur-[80px] "></div> */}
        </article>
      </div>

      <section className="w-[100%] h-[20vh] sm:h-[20vh] xl:h-[20vh] bg-[#0a0a10]">
        <div className="w-[100%] h-[100%] flex justify-center  backdropBlur">
          <div className="w-[35vw] h-[35vw] rounded-full translate-y-[0vh] colorBackground2 opacity-70 -rotate-[70deg] blur-[270px]"></div>
        </div>
      </section>
    </div>
  );
}
