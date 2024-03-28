import Link from "next/link";
import Image from "next/image";

export default function OmnichainLiquid() {
  return (
    <section className="w-[100%] h-[220vh] sm:h-[320vh] lg:h-[180vh]">

        <article className="w-[100%] h-[100%] flex justify-center items-center">
          <div className="2xl:container">
          <S1 />
          <S2 />
          </div>
        </article>
      </section>
  );
}

function S1() {
  return (
    <section className="w-[100%] h-[70vh] sm:h-[100vh] flex justify-center items-center ">
      <div className="w-[100%] sm:w-[90%] lg:w-[70%] h-[60%]">
        <div className="w-[100%] h-[63%] text-center flex ">
          <h1 className="w-[100%] h-[100%] flex justify-center items-center lineHeight text-[2.5rem] sm:text-[3rem] md:text-[3rem] xl:text-[6rem] font-extrabold text-white capitalize">
            omnichain liquid (re)staking
          </h1>
        </div>

        <div className="w-[100%] h-[37%]">
          <p className="w-[100%] h-[40%] pb-5 flex justify-center items-center text-[.9rem] md:text-[1.2rem] xl:text-[1.5rem] text-white font-semibold">
            Get the highest yield from staking $NEAR, $ETH and more
          </p>

          <div className="w-[100%] h-[60%] flex justify-center items-center gap-10">
            <Link
              href="../../page2"
              className="w-[9rem] sm:w-[10rem] h-[3rem] sm:h-[3.5rem] rounded-full colorBackground flex justify-center items-center p-[.05rem] "
            >
              <button className="w-[100%] h-[100%] flex justify-center items-center text-black font-semibold text-[1rem] sm:text-[1.1rem] capitalize">
                stake now
              </button>
            </Link>
            <Link
              href="https://docs.linearprotocol.org/"
              className="w-[9rem] sm:w-[10rem] h-[3rem] sm:h-[3.5rem] rounded-full colorBackground flex justify-center items-center p-[.05rem] "
            >
              <div className="bgTheme opacity-90 w-[100%] h-[100%] rounded-full">
                <button className="w-[100%] h-[100%] flex justify-center items-center colorText font-semibold text-[1rem] sm:text-[1.1rem] capitalize">
                  learn more
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function S2() {
  return (
    <section className="w-[100%] h-[150vh] sm:h-[220vh] lg:h-[80vh] flex flex-wrap justify-center items-start py-3 gap-10 xl:gap-20">
      <article className="w-[90%] lg:w-[30%] xl:w-[23%] h-[30%] lg:h-[82.5%] border-[.005px] border-[rgba(255,255,255,.03)] rounded-2xl backdropBlur2">
        <div className="w-[100%] h-[27%] p-5 lg:p-10">
          <Image
            src="/OmnichainLiquid/core-features-01.svg"
            alt="Picture of the author"
            width="300000"
            height="400000"
            style={{
              width: "2.8rem",
              height: "2.8rem",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="w-[100%] h-[73%] p-5 lg:p-10">
          <h4 className="w-[100%] text-[1.5rem] font-semibold text-white">
            Decentralization and Security
          </h4>
          <p className="w-[100%] text-[1rem] lg:text-[.9rem] xl:text-[1rem] text-zinc-400 pt-5">
            Delegate to up to 200 active nodes based on the Optimization
            Algorithm, significantly decentralizing and securing the network of
            NEAR. Partnering with [Redacted] to make Ethereum more
            decentralized.
          </p>
        </div>
      </article>
      <article className="w-[90%] lg:w-[30%] xl:w-[23%] h-[30%] lg:h-[82.5%] border-[.005px] border-[rgba(255,255,255,.03)] rounded-2xl backdropBlur2">
        <div className="w-[100%] h-[27%] p-5 lg:p-10">
          <Image
            src="/OmnichainLiquid/core-features-02.svg"
            alt="Picture of the author"
            width="300000"
            height="400000"
            style={{
              width: "2.8rem",
              height: "2.8rem",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="w-[100%] h-[73%] p-5 lg:p-10">
          <h4 className="w-[100%] text-[1.5rem] font-semibold text-white">
            The first Omnichain Liquid Restaking Token (bLiNEAR)
          </h4>
          <p className="w-[100%] text-[1rem] lg:text-[.9rem] xl:text-[1rem] text-zinc-400 pt-5">
            $NEAR, but natively restaked through $NEAR Restaking to earn higher
            and diversified yield. The first of its kind among all chains.
          </p>
        </div>
      </article>
      <article className="w-[90%] lg:w-[30%] xl:w-[23%] h-[30%] lg:h-[82.5%] border-[.005px] border-[rgba(255,255,255,.03)] rounded-2xl backdropBlur2">
        <div className="w-[100%] h-[27%] p-5 lg:p-10">
          <Image
            src="/OmnichainLiquid/core-features-03.svg"
            alt="Picture of the author"
            width="300000"
            height="400000"
            style={{
              width: "2.8rem",
              height: "2.8rem",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="w-[100%] h-[73%] p-5 lg:p-10">
          <h4 className="w-[100%] text-[1.5rem] font-semibold text-white">
            Amplified Yield
          </h4>
          <p className="w-[100%] text-[1rem] lg:text-[.9rem] xl:text-[1rem] text-zinc-400 pt-5">
            Enjoy multi-rewards through engaging with various DeFi protocols on
            both NEAR and Aurora, maximizing your yield from staked assets.
          </p>
        </div>
      </article>
    </section>
  );
}
