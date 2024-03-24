export default function TheSimplestWayToStakeNEAR() {
  return (
    <section className="w-[100%] h-[100vh]">
      <h3 className="w-[100%] h-[30%] flex justify-center items-center font-semibold text-[3.5rem] text-white">
        The simplest way to stake NEAR
      </h3>
      <Article />
    </section>
  );
}

function Article() {
  return (
    <article className="w-[100%] h-[80vh] flex justify-center items-start py-7 gap-20">
     
      <article className="w-[23%] h-[82.5%] border-[.005px] border-[rgba(255,255,255,.03)] rounded-2xl backdropBlur2">
        <div className="w-[100%] h-[40%] p-10">
          <p className="text-[4.8rem] font-extrabold text-zinc-600">01</p>
        </div>
        <div className="w-[100%] h-[60%] p-10">
          <h4 className="w-[100%] text-[1.5rem] font-semibold text-white">
            Stake $NEAR
          </h4>
          <p className="w-[100%] text-[1rem] text-zinc-300 pt-5">
            Enter the amount of $NEAR you want to stake on LiNEAR Liquid Staking
            Protocol
          </p>
        </div>
      </article>

      <article className="w-[23%] h-[82.5%] border-[.005px] border-[rgba(255,255,255,.03)] rounded-2xl backdropBlur2">
        <div className="w-[100%] h-[40%] p-10">
          <p className="text-[4.8rem] font-extrabold text-zinc-600">02</p>
        </div>
        <div className="w-[100%] h-[60%] p-10">
          <h4 className="w-[100%] text-[1.5rem] font-semibold text-white">
            Receive $LiNEAR
          </h4>
          <p className="w-[100%] text-[1rem] text-zinc-300 pt-5">
            Receive $LiNEAR in return, which increases in value relative to
            $NEAR from staking rewards after each epoch
          </p>
        </div>
      </article>

      <article className="w-[23%] h-[82.5%] border-[.005px] border-[rgba(255,255,255,.03)] rounded-2xl backdropBlur2">
        <div className="w-[100%] h-[40%] p-10">
          <p className="text-[4.8rem] font-extrabold text-zinc-600">03</p>
        </div>
        <div className="w-[100%] h-[60%] p-10">
          <h4 className="w-[100%] text-[1.5rem] font-semibold text-white">
            Participate in DeFi
          </h4>
          <p className="w-[100%] text-[1rem] text-zinc-300 pt-5">
            Use $LiNEAR in various DeFi protocols on NEAR and Aurora or swap
            back to $NEAR at any time. You can explore DeFi yields on top of
            your staking rewards
          </p>
        </div>
      </article>
    </article>
  );
}
