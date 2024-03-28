export default function TheSimplestWayToStakeNEAR() {
  return (
    <section className="w-[100%] h-[170vh] sm:h-[240vh] lg:h-[120vh]">
      <h3 className="w-[100%] h-[20vh] lg:h-[30vh] flex justify-center items-center text-center font-semibold text-[1.5rem] sm:text-[2rem] lg:text-[3.5rem] colorTextTitle1">
        The simplest way to stake NEAR
      </h3>
      <Article />
    </section>
  );
}

function Article() {
  return (
    <article className="w-[100%] h-[150vh] sm:h-[220vh] lg:h-[80vh] flex flex-wrap justify-center lg:content-start lg:items-start py-3  lg:gap-20">
      <article className="w-[90%] lg:w-[25%] xl:w-[23%] h-[30%] lg:h-[82.5%] rounded-2xl backdropBlur2 bgBorder1 p-[1px]">
        <div className="w-[100%] h-[100%] bg-[rgb(27,26,39)] rounded-2xl">
          <div className="w-[100%] h-[40%] p-5 lg:p-10">
            <p className="text-[4.8rem] font-extrabold colorTextParagraph3">
              01
            </p>
          </div>
          <div className="w-[100%] h-[60%] p-5 lg:p-10">
            <h4 className="w-[100%] text-[1.5rem] font-semibold colorTextTitle1">
              Stake $NEAR
            </h4>
            <p className="w-[100%] text-[1rem] lg:text-[.9rem] xl:text-[1rem] colorTextParagraph2 pt-5">
              Enter the amount of $NEAR you want to stake on LiNEAR Liquid
              Staking Protocol
            </p>
          </div>
        </div>
      </article>

      <article className="w-[90%] lg:w-[25%] xl:w-[23%] h-[30%] lg:h-[82.5%] bgBorder2 p-[1px] rounded-2xl backdropBlur2">
        <div className="w-[100%] h-[100%] bg-[rgb(27,26,39)] rounded-2xl">
          <div className="w-[100%] h-[40%] p-5 lg:p-10">
            <p className="text-[4.8rem] font-extrabold colorTextParagraph3">
              02
            </p>
          </div>
          <div className="w-[100%] h-[60%] p-5 lg:p-10">
            <h4 className="w-[100%] text-[1.5rem] font-semibold colorTextTitle1">
              Receive $LiNEAR
            </h4>
            <p className="w-[100%] text-[1rem] lg:text-[.9rem] xl:text-[1rem] colorTextParagraph2 pt-5">
              Receive $LiNEAR in return, which increases in value relative to
              $NEAR from staking rewards after each epoch
            </p>
          </div>
        </div>
      </article>

      <article className="w-[90%] lg:w-[25%] xl:w-[23%] h-[30%] lg:h-[82.5%] bgBorder3 p-[1px] rounded-2xl backdropBlur2">
        <div className="w-[100%] h-[100%] bg-[rgb(27,26,39)] rounded-2xl">
          <div className="w-[100%] h-[40%] p-5 lg:p-10">
            <p className="text-[4.8rem] font-extrabold colorTextParagraph3">
              03
            </p>
          </div>
          <div className="w-[100%] h-[60%] p-5 lg:p-10">
            <h4 className="w-[100%] text-[1.5rem] font-semibold colorTextTitle1">
              Participate in DeFi
            </h4>
            <p className="w-[100%] text-[1rem] lg:text-[.9rem] xl:text-[1rem] colorTextParagraph2 pt-5">
              Use $LiNEAR in various DeFi protocols on NEAR and Aurora or swap
              back to $NEAR at any time. You can explore DeFi yields on top of
              your staking rewards
            </p>
          </div>
        </div>
      </article>
    </article>
  );
}
// rgb(6,131,152)
