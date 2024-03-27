import Header from "./header/header";
import Total from "./Total/Total";
import StakeYour$NEAR from "./StakeYour$NEAR/StakeYour$NEAR";
import MenuList from "./header/menuList/menuList";
export default function Page2() {
  return (
    <main className="w-[100%] h-[110vh] sm:h-[180vh] xl:h-[165vh] bg-slate-900">
      <BackGround />
      <Header />
      <MenuList />
      <div className="w-[100%] h-[100%] absolute top-0 left-0 flex justify-center">
        <div className="w-[100%] h-[100%] 2xl:container">
          <Total />
          <StakeYour$NEAR/>
        </div>
      </div>
    </main>
  );
}

function BackGround() {
  return (
    <div className="w-[100%] h-[100%] absolute top-0 left-0">
      <div className="w-[100%] h-[80vh] sm:h-[80vh] lg:h-[80vh] bg-[rgb(9,9,17)] bgStake">
        <article className="w-[100%] h-[100%] overflow-hidden flex justify-center pt-[20vh]">
          <div className="colorBackground  w-[60%] h-[20vh]  opacity-30 blur-[80px] "></div>
        </article>
      </div>

      <section className="w-[100%] h-[30vh] sm:h-[100vh] xl:h-[85vh] bg-[#0a0a10]">
        <div className="w-[100%] h-[100%] flex justify-center overflow-hidden backdropBlur">
          <div className="w-[35vw] h-[35vw] rounded-full translate-y-[60vh] colorBackground2 opacity-70 -rotate-[70deg] blur-[270px]"></div>
        </div>
      </section>
    </div>
  );
}
