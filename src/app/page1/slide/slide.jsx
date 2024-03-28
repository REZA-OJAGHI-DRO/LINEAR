'use client'

import Image from "next/image";
import { useRef } from "react";

export default function Slide() {
    const slider=useRef()
    const s1=useRef()
   
    const sl=['','','','']

    function slide (e,x){

        sl.map((val,i)=>{
            s1.current.children[i].style.background='rgb(63,63,70)'
        })

        if(x==1){
            slider.current.style.transform='translateX(10%)'
            s1.current.children[0].style.background='white'
        }else if(x==2){
            slider.current.style.transform='translateX(-16%)'
            s1.current.children[1].style.background='white'
        }else if(x==3){
            slider.current.style.transform='translateX(-43%)'
            s1.current.children[2].style.background='white'
        }else if(x==4){
            slider.current.style.transform='translateX(-70%)'
            s1.current.children[3].style.background='white'
        }
    }

  return (
    <section className="w-[100%] h-[60vh] md:h-[100vh] xl:h-[80vh] flex justify-center items-center">
      <div className="w-[90%] xl:w-[80%] h-[80%]">
        <div className="w-[100%] h-[80%] overflow-hidden">
          <div
          ref={slider}
            style={{ transform: "translateX(5%)" }}
            className="h-[100%] transition-all duration-500 w-[1100px] sm:w-[1300px] md:w-[1900px] xl:w-[2550px] flex justify-between gap-7"
          >
            {/* slide1 */}

            <div className="w-[30%] h-[100%] border-[.005px] border-[rgba(255,255,255,.1)] rounded-2xl backdropBlur2">
              <div className="w-[100%] h-[27%] p-4 xl:p-10">
                <figure className="w-[4.5rem] h-[4.5rem] border border-[rgba(255,255,255,.03)] backdropBlur2 opacity-70 rounded-xl flex justify-center items-center">
                  <Image
                    src="/slide/slider01.svg"
                    alt="Picture of the author"
                    width="300000"
                    height="400000"
                    style={{
                      width: "1.8rem",
                      height: "1.8rem",
                      objectFit: "cover",
                    }}
                  />
                </figure>
              </div>
              <div className="w-[100%] h-[73%] p-4 xl:px-10 pt-8 xl:pt-20">
                <h4 className="w-[100%] text-[1.5rem] font-semibold text-white">
                  Insurance Fund
                </h4>
                <p className="w-[100%] text-[.8rem] xl:text-[1rem] text-zinc-200 pt-2 xl:pt-5">
                  Stake $LNR into an insurance fund, designed to cover potential
                  losses incurred to liquid staking and restaking tokens.
                  Stakers receive $sLNR as a representation of their share of
                  the fund.
                </p>
              </div>
            </div>

            {/* slide2 */}

            <div className="w-[30%] h-[100%] border-[.005px] border-[rgba(255,255,255,.1)] rounded-2xl backdropBlur2">
              <div className="w-[100%] h-[27%] p-4 xl:p-10">
                <figure className="w-[4.5rem] h-[4.5rem] border border-[rgba(255,255,255,.03)] backdropBlur2 opacity-70 rounded-xl flex justify-center items-center">
                  <Image
                    src="/slide/slider02.svg"
                    alt="Picture of the author"
                    width="300000"
                    height="400000"
                    style={{
                      width: "1.8rem",
                      height: "1.8rem",
                      objectFit: "cover",
                    }}
                  />
                </figure>
              </div>
              <div className="w-[100%] h-[73%] p-4 xl:px-10 pt-8 xl:pt-20">
                <h4 className="w-[100%] text-[1.5rem] font-semibold text-white">
                  Governance
                </h4>
                <p className="w-[100%] text-[.8rem] xl:text-[1rem] text-zinc-200 pt-2 xl:pt-5">
                  The power to set rates for liquid staking and restaking pools,
                  manage delegation strategies, and oversee the protocol
                  treasury.
                </p>
              </div>
            </div>

            {/* slide3 */}

            <div className="w-[30%] h-[100%] border-[.005px] border-[rgba(255,255,255,.1)] rounded-2xl backdropBlur2">
              <div className="w-[100%] h-[27%] p-4 xl:p-10">
                <figure className="w-[4.5rem] h-[4.5rem] border border-[rgba(255,255,255,.03)] backdropBlur2 opacity-70 rounded-xl flex justify-center items-center">
                  <Image
                    src="/slide/slider03.svg"
                    alt="Picture of the author"
                    width="300000"
                    height="400000"
                    style={{
                      width: "1.8rem",
                      height: "1.8rem",
                      objectFit: "cover",
                    }}
                  />
                </figure>
              </div>
              <div className="w-[100%] h-[73%] p-4 xl:px-10 pt-8 xl:pt-20">
                <h4 className="w-[100%] text-[1.5rem] font-semibold text-white">
                  Revenue Sharing
                </h4>
                <p className="w-[100%] text-[.8rem] xl:text-[1rem] text-zinc-200 pt-2 xl:pt-5">
                  Gain a share of the protocol’s agreement revenue, with
                  potential increases as the ecosystem grows.
                </p>
              </div>
            </div>

            {/* slide4 */}

            <div className="w-[30%] h-[100%] border-[.005px] border-[rgba(255,255,255,.1)] rounded-2xl backdropBlur2">
              <div className="w-[100%] h-[27%] p-4 xl:p-10">
                <figure className="w-[4.5rem] h-[4.5rem] border border-[rgba(255,255,255,.03)] backdropBlur2 opacity-70 rounded-xl flex justify-center items-center">
                  <Image
                    src="/slide/slider04.svg"
                    alt="Picture of the author"
                    width="300000"
                    height="400000"
                    style={{
                      width: "1.8rem",
                      height: "1.8rem",
                      objectFit: "cover",
                    }}
                  />
                </figure>
              </div>
              <div className="w-[100%] h-[73%] p-4 xl:px-10 pt-8 xl:pt-20">
                <h4 className="w-[100%] text-[1.5rem] font-semibold text-white">
                  Incentive Program
                </h4>
                <p className="w-[100%] text-[.8rem] xl:text-[1rem] text-zinc-200 pt-2 xl:pt-5">
                  Additional $LNR tokens will periodically be introduced into
                  the insurance fund, promoting liquid restaking tokens
                  liquidity and strengthening governance.
                </p>
              </div>
            </div>

          </div>
        </div>
        <div ref={s1} className="w-[100%] h-[20%] flex justify-center items-center gap-5">
          <button onClick={()=>slide(event , 1)} className="w-[3.5rem] h-[.2rem] bg-white"></button>
          <button onClick={()=>slide(event , 2)} className="w-[3.5rem] h-[.2rem] bg-zinc-700"></button>
          <button onClick={()=>slide(event , 3)} className="w-[3.5rem] h-[.2rem] bg-zinc-700"></button>
          <button onClick={()=>slide(event , 4)} className="w-[3.5rem] h-[.2rem] bg-zinc-700"></button>
        </div>
      </div>
    </section>
  );
}
