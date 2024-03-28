"use client";
import Image from "next/image";
import useStore from "@/app/store/store";
import { useRef } from "react";

export default function StakeYour$NEAR() {
  return (
    <section className="w-[100%] h-[100vh] sm:h-[130vh] pt-[20vh] xl:pt-0">
      <article className="w-[100%] h-[12%] md:h-[25%] lg:h-[12%]">
        <h1 className="w-[100%] text-center text-[2rem] md:text-[3.5rem] text-white font-bold">
          Stake Your $NEAR
        </h1>
        <p className="w-[100%] text-center text-[.8rem] md:text-[1rem] text-zinc-400">
          Stake $NEAR and receive $LiNEAR while earning staking rewards
        </p>
      </article>
      <Article />
    </section>
  );
}

function Article() {
  const click = useRef();
  const stake = useRef();
  const unStake = useRef();
  function clickStake(e, x) {
    if (x == 0) {
      click.current.children[0].style.background = "rgb(74,76,80)";
      click.current.children[1].style.background = "transparent";
      stake.current.style.display = "flex";
      unStake.current.style.display = "none";
    } else if (x == 1) {
      click.current.children[0].style.background = "transparent";
      click.current.children[1].style.background = "rgb(74,76,80)";
      stake.current.style.display = "none";
      unStake.current.style.display = "flex";
    }
  }

  const dis2 = useStore((state) => state.dis2);
  function modal(e) {
    dis2("flex");
  }
  return (
    <article className="w-[100%] h-[88%] md:h-[75%] lg:h-[88%]">
      <div className="w-[100%] h-[15%] md:h-[25%] lg:h-[15%] flex justify-center items-center">
        <div
          ref={click}
          className="w-[22rem] h-[60%] md:h-[50%] lg:h-[45%] border-[.005px] p-1 border-[rgba(255,255,255,.1)] rounded-full bg-[rgb(13,12,18)] flex"
        >
          <button
            onClick={() => clickStake(event, 0)}
            className="w-[50%] h-[100%] rounded-full bg-[rgb(74,76,80)] text-white text-[1.2rem] font-bold capitalize flex justify-center items-center"
          >
            stake
          </button>
          <button
            onClick={() => clickStake(event, 1)}
            className="w-[50%] h-[100%] rounded-full text-white text-[1.2rem] font-bold capitalize flex justify-center items-center"
          >
            unstake
          </button>
        </div>
      </div>
      {/* stake */}
      <div
        ref={stake}
        className="w-[100%] h-[85%] flex justify-center items-start "
      >
        <div className="w-[100%] md:w-[550px] px-2 py-7 md:p-7 rounded-xl border-[.005px] border-[rgba(255,255,255,.01)] backdropBlur2">
          <div className="w-[100%] h-[130px] rounded-xl overflow-hidden bgStake1 flex flex-wrap justify-center">
            <div className="w-[100%] h-[50%] flex items-center justify-between">
              <div className="w-[20%] h-[100%] flex justify-center items-center gap-1 md:gap-2">
                <Image
                  src="/page2Stake/StakeYour$NEAR/near.svg"
                  alt="Picture of the author"
                  width="300000"
                  height="400000"
                  style={{
                    width: "1.9rem",
                    height: "1.9rem",
                    objectFit: "cover",
                  }}
                />
                <p className="text-[1rem] md:text-[1.2rem] text-white font-semibold ">NEAR</p>
              </div>

              <div className="w-[75%] md:w-[60%] h-[100%] flex justify-center items-center gap-2">
                <input
                  type="text"
                  placeholder="$NEAR amount to stake"
                  className="w-[70%] bg-transparent text-[1.2rem] text-white border-0 focusBorder"
                />
                <button className="px-4 py-1 uppercase text-[1rem] font-semibold text-white bg-zinc-800 rounded-full">
                  max
                </button>
              </div>
            </div>
            <div className="w-[90%] bg-zinc-800 h-[1%]"></div>

            <div className="w-[100%] h-[49%] flex items-center justify-between px-2">
              <p className="text-zinc-300 text-[1rem] font-bold">Balance:</p>
              <p className="text-zinc-300 text-[1rem] font-bold">- $NEAR</p>
            </div>
          </div>

          <button
            onClick={() => modal(event)}
            className="w-[100%] rounded-full text-[1.3rem] font-bold py-2 colorBackground capitalize mt-2"
          >
            connect wallet
          </button>

          <p className="w-[100%] text-[1rem] text-zinc-400 font-semibold text-center pt-4">
            You will receive: $LiNEAR
          </p>
        </div>
      </div>
      {/* unStake */}
      <div
        ref={unStake}
        style={{ display: "none" }}
        className="w-[100%] h-[85%] flex justify-center items-start "
      >
        <div className="w-[550px] p-5 rounded-xl border-[.005px] border-[rgba(255,255,255,.01)] backdropBlur2">
          {/* ****** */}
          <div className="w-[100%] h-[130px] rounded-xl overflow-hidden bgStake1 flex flex-wrap justify-center">
            <div className="w-[100%] h-[50%] flex items-center justify-between">
              <div className="w-[25%] h-[100%] flex justify-center items-center gap-1 md:gap-2">
                <Image
                  src="/page2Stake/StakeYour$NEAR/linear.svg"
                  alt="Picture of the author"
                  width="300000"
                  height="400000"
                  style={{
                    width: "1.9rem",
                    height: "1.9rem",
                    objectFit: "cover",
                  }}
                />
                <p className="text-[1rem] md:text-[1.2rem] text-white font-semibold ">NEAR</p>
              </div>

              <div className="w-[75%] md:w-[60%] h-[100%] flex justify-center items-center md:gap-2">
                <input
                  type="text"
                  placeholder="$NEAR amount to unstake"
                  className="w-[72%] bg-transparent text-[1rem] md:text-[1.2rem] text-white border-0 focusBorder"
                />
                <button className="px-4 py-1 uppercase text-[1rem] font-semibold text-white bg-zinc-800 rounded-full">
                  max
                </button>
              </div>
            </div>
            <div className="w-[90%] bg-zinc-800 h-[1%]"></div>

            <div className="w-[100%] h-[49%] flex items-center justify-between px-2">
              <p className="text-zinc-300 text-[1rem] font-bold">Balance:</p>
              <p className="text-zinc-300 text-[1rem] font-bold">- $LiNEAR</p>
            </div>
          </div>
          {/* ****** */}
          <div className="w-[100%] h-[220px] flex flex-wrap justify-between content-around sm:items-center">
            {/* ****** */}
            <div className="w-[100%] sm:w-[48%] h-[46%] sm:h-[80%] rounded-xl cursor-pointer colorBackground p-[.1rem] flex justify-center items-center">
              <div className="w-[100%] h-[100%] bgStake2 flex flex-wrap content-between rounded-xl p-2 sm:p-5">
                <div className="w-[100%] flex justify-between">
                  <p className="text-white text-[.8rem] uppercase">
                    instant unstake
                  </p>
                  <span className="cursor-pointer relative group">
                    <Image
                      src="/page2Stake/Total/tip.svg"
                      alt="Picture of the author"
                      width="300000"
                      height="400000"
                      style={{
                        width: "1.3rem",
                        height: "1.3rem",
                        objectFit: "cover",
                      }}
                    />
                    <div className="group-hover:flex hidden w-[300px] absolute top-100  right-0 translate-x-[50%] p-3 z-30">
                      <div className=" rounded-xl p-2 border-[.005px] border-[rgba(255,255,255,.1)] bg-[rgb(24,26,49)]">
                        <p className="text-white text-[.9rem] ">
                          The slippage and fee of instant unstake is based on
                          the LiNEAR/wNEAR StableSwap pool on Ref
                        </p>
                      </div>
                    </div>
                  </span>
                </div>
                <p className="w-[100%] text-[.8rem] text-white uppercase pb-3 sm:pb-7">
                  {" "}
                  -NEAR{" "}
                </p>
                <p className="w-[100%] text-[.9rem] text-zinc-400">
                  Unstake fee: 0.05%
                </p>
              </div>
            </div>
            {/* ****** */}
            <div className="w-[100%] sm:w-[48%] h-[46%] sm:h-[80%] rounded-xl cursor-pointer bgStake2 flex flex-wrap content-between p-2 sm:p-5">
              <div className="w-[100%] flex justify-between">
                <p className="text-white text-[.8rem] uppercase">
                  delayed unstake in ~2 days
                </p>
              </div>
              <p className="w-[100%] text-[.8rem] text-white uppercase pb-3 sm:pb-7">
                {" "}
                -NEAR{" "}
              </p>
              <p className="w-[100%] text-[.9rem] text-zinc-400">
                Unstake fee: 0
              </p>
            </div>
            {/* ***** */}
          </div>
          {/* ********* */}
          <button
            onClick={() => modal(event)}
            className="w-[100%] rounded-full text-[1.3rem] font-bold py-2 colorBackground capitalize"
          >
            connect wallet
          </button>
        </div>
      </div>
    </article>
  );
}
