import OmnichainLiquid from "./OmnichainLiquid/OmnichainLiquid";
import TotalValueLocked from "./TotalValueLocked/TotalValueLocked";
import TheSimplestWayToStakeNEAR from "./TheSimplestWayToStakeNEAR/TheSimplestWayToStakeNEAR";
import GovernanceToken$LNR from "./GovernanceToken$LNR/GovernanceToken$LNR";
import Slide from "./slide/slide";
import UseLiNEARAcrossTheEcoSystem from "./UseLiNEARAcrossTheEcoSystem/UseLiNEARAcrossTheEcoSystem";

export default function Home() {
  return (
    <main className="w-[100%] h-[920vh] sm:h-[950vh] md:h-[920vh] lg:h-[649vh] xl:h-[649vh] relative left-0 top-0 bg-[rgb(9,9,17)]">
     
      <BackGround/>

      <div className="w-[100%] h-[100%] absolute top-0 left-0 flex justify-center">
        <div className="w-[100%] h-[100%] 2xl:container">
          <OmnichainLiquid />

          <TotalValueLocked />

          <section className="w-[100%] h-[390vh] md:h-[400vh] lg:h-[270vh]">
            <div className="w-[100%] h-[100%]">
              <TheSimplestWayToStakeNEAR />
              <GovernanceToken$LNR />
              <Slide />
            </div>
          </section>

          <UseLiNEARAcrossTheEcoSystem />
        </div>
      </div>
    </main>
  );
}


function BackGround (){
  return(
    <div className="w-[100%] h-[100%] absolute top-0 left-0">

        <div className="w-[100%] h-[290vh] sm:h-[320vh] lg:h-[180vh] bg-[rgb(9,9,17)] bgOmnichainLiquid">
          <article className="w-[100%] h-[100%] overflow-hidden">
            <div className="colorBackground  w-[100%] h-[80vh] -translate-x-40 opacity-30 blur-[140px] rotate-45"></div>
          </article>
        </div>

        <section className="w-[100%] h-[60vh] bg-[#0a0a10]">
          <div className="w-[100%] h-[100%] flex justify-center overflow-hidden backdropBlur">
            <div className="w-[30vw] h-[30vw] border rounded-full translate-y-96 colorBackground opacity-80 blur-[200px]"></div>
          </div>
        </section>

        <section className="w-[100%] h-[390vh] md:h-[400vh] lg:h-[270vh] bg-[rgb(9,9,17)]">
          <div className="w-[100%] h-[100%] flex justify-center overflow-hidden">
            <div className="w-[80vw] h-[80vw] rounded-tl-full rot colorBackground2 opacity-50 blur-[700px]"></div>
          </div>
        </section>

        <section className="w-[100%] h-[180vh] md:h-[140vh] lg:h-[140vh] bg-[#0a0a10]">
        <div className="w-[100%] h-[100%] flex justify-center overflow-hidden">
          <div className="w-[100%] h-[100%] rounded-tl-full rot2 colorBackground3 opacity-90 blur-[800px]"></div>
        </div>
        </section>

      </div>
  )
}
