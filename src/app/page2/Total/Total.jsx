import Image from "next/image";
import Link from "next/link";

export default function Total() {
  return (
    <section className="w-[100%] h-[50vh]  flex justify-center items-center pt-16">
      <article className="w-[60%]  h-[80%] xl:h-[50%] flex flex-wrap justify-between items-center mt-3">

        <article className="w-[90%] xl:w-[24%] h-[30%] xl:h-[90%] border-[.005px] border-[rgba(255,255,255,.1)] rounded-2xl ">
          <div className="w-[100%] h-[100%]  colorBackgroundTotal rounded-2xl pl-[.5px]">
            <div className="w-[100%] h-[100%]  flex p-5 flex-wrap gap-1 bg-[rgba(46,46,46,0.83)] rounded-2xl">
              <h4 className="w-[100%] text-[.9rem] text-zinc-400 font-semibold">
                Total $NEAR Staked
              </h4>
              <p className="w-[100%] text-[1.3rem] text-white font-bold">
                - $NEAR
              </p>
              <p className="w-[100%] text-[.9rem] text-white font-bold">
                ~ $ -
              </p>
            </div>
          </div>
        </article>

        <article className="w-[90%] xl:w-[24%] h-[30%] xl:h-[90%] border-[.005px] border-[rgba(255,255,255,.1)] rounded-2xl">
          <div className="w-[100%] h-[100%] colorBackgroundTotal rounded-2xl">
            <div className="w-[100%] h-[100%] flex p-5 flex-wrap gap-1 bg-[rgba(46,46,46,0.83)] rounded-2xl">
            <h4 className="w-[100%] text-[.9rem] text-zinc-400 font-semibold">
              $LiNEAR / $NEAR Price
            </h4>
            <p className="w-[100%] text-[1.3rem] text-white font-bold">
              - $NEAR
            </p>
            <p className="w-[100%] text-[.9rem] text-white font-bold">~ $ -</p>
          </div>
          </div>
          
        </article>

        <article className="w-[90%] xl:w-[24%] h-[30%] xl:h-[90%] border-[.005px] border-[rgba(255,255,255,.1)] rounded-2xl ">
          <div className="w-[100%] h-[100%] colorBackgroundTotal rounded-2xl ">
          <div className="w-[100%] h-[100%] flex p-5 flex-wrap gap-1 bg-[rgba(46,46,46,0.83)] rounded-2xl">
            <h4 className="w-[100%] text-[.9rem] text-zinc-400 font-semibold flex justify-between">
              APY
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
                      APY is based on the 30 day average price of $LiNEAR
                    </p>
                  </div>
                </div>
              </span>
            </h4>
            <p className="w-[100%] text-[1.3rem] text-white font-bold">- %</p>
          </div>
          </div>
        </article>

        <article className="w-[90%] xl:w-[24%] h-[30%] xl:h-[90%] border-[.005px] border-[rgba(255,255,255,.1)] rounded-2xl ">
          <div className="w-[100%] h-[100%] colorBackgroundTotal rounded-2xl ">
           <div className="w-[100%] h-[100%] flex p-5 flex-wrap gap-1 bg-[rgba(46,46,46,0.83)] rounded-2xl">
            <h4 className="w-[100%] text-[.9rem] text-zinc-400 font-semibold flex justify-between">
              Validators Staked
              <span className="cursor-pointer  relative group">
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
                      This refers to the amount of validators chosen through the
                      automatic validator selection algorithm. By increasing the
                      number of validators selected, the NEAR blockchain
                      enhances its censorship resistance
                    </p>
                  </div>
                </div>
              </span>
            </h4>
            <p className="w-[100%] text-[1.3rem] text-white font-bold">-</p>
            <div className="w-[100%] flex justify-end">
              <Link
                href="https://bit.ly/linear-validator-analytics"
                className="w-[5.5rem] h-[1.8rem] text-[.8rem] border-zinc-400 text-white capitalize flex border rounded-full justify-center items-center gap-1 opacity-100 hover:opacity-80"
              >
                <Image
                  src="/page2Stake/Total/analytics.svg"
                  alt="Picture of the author"
                  width="300000"
                  height="400000"
                  style={{
                    width: ".9rem",
                    height: ".9rem",
                    objectFit: "cover",
                  }}
                />
                analytics
              </Link>
            </div>
          </div> 
          </div>
          
        </article>
      </article>
    </section>
  );
}
