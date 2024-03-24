import OmnichainLiquid from "./OmnichainLiquid/OmnichainLiquid";
import TotalValueLocked from "./TotalValueLocked/TotalValueLocked";
import TheSimplestWayToStakeNEAR from "./TheSimplestWayToStakeNEAR/TheSimplestWayToStakeNEAR";
import GovernanceToken$LNR from "./GovernanceToken$LNR/GovernanceToken$LNR";
import Slide from "./slide/slide";
import UseLiNEARAcrossTheEcoSystem from "./UseLiNEARAcrossTheEcoSystem/UseLiNEARAcrossTheEcoSystem";

export default function Home() {
  return (
    <main className="w-[100%]">
      <OmnichainLiquid />
      <TotalValueLocked />

      <section className="w-[100%] h-[250vh] bg-[rgb(9,9,17)]">
        <div className="w-[100%] h-[100%] relative">
          <div className="w-[100%] h-[100%] absolute top-0 flex justify-center overflow-hidden backdropBlur">
            <div className="w-[80vw] h-[80vw] rounded-tl-full rot colorBackground2 opacity-50 blur-[700px]"></div>
          </div>
          <div className="w-[100%] h-[100%] absolute top-0">
            <TheSimplestWayToStakeNEAR />
            <GovernanceToken$LNR/>
            <Slide/>
          </div>
        </div>
      </section>

      <UseLiNEARAcrossTheEcoSystem/>
    </main>
  );
}
