import Link from "next/link";

export default function LiNEARAirdrop() {
  return (
    <section className="w-[100%] h-[100vh] flex justify-center items-center">
      <div className="w-[100%] h-[85%] flex justify-center items-start ">
        <div className="w-[100%] md:w-[500px] px-2 py-7 md:p-7 rounded-xl border-[.005px] border-[rgba(255,255,255,.01)] backdropBlur2">
          <div className="w-[100%] flex flex-wrap justify-center gap-2">
            <h2 className="text-[2.4rem] colorTextTitle1 font-bold">
              LiNEAR Airdrop
            </h2>
            <p className="text-[.8rem] colorTextParagraph1 w-[100%] text-center">
              100,000,000 $LNR for $LiNEAR holders
            </p>
            <p className="text-[.8rem] colorTextParagraph1 w-[100%] text-center">
              Snapshot Period: Apr 5, 2022 ~ Dec 31, 2023
            </p>
          </div>

          <div className="w-[100%] flex flex-wrap justify-center gap-2 py-10">
            <div className="p-3 w-[100%] flex justify-between colorTextParagraph1 *:text-[.9rem]">
              <p>Total Points:</p>
              <p>47,162,150,018.48</p>
            </div>

            <div className="w-[95%] border-t border-zinc-700 h-[1%]"></div>

            <div className="p-3 w-[100%] flex justify-between colorTextParagraph1 *:text-[.9rem]">
              <p>Your Points:</p>
              <p>-</p>
            </div>

            <div className="w-[95%] border-t border-zinc-700 h-[1%]"></div>

            <div className="p-3 w-[100%] flex justify-between *:text-[1.3rem] *:font-semibold">
              <p className="colorTextParagraph1 ">Claimable $LNR</p>
              <p className="colorText ">- $LNR</p>
            </div>
          </div>
          <button className="w-[100%] cursor-not-allowed flex rounded-full text-[1.2rem] font-bold colorBackground capitalize mt-2 ">
            <span className="w-[100%] text-zinc-800 py-4 rounded-full bg-[rgba(0,0,0,.4)]">
              claim
            </span>
          </button>
          <div className="w-[100%] text-center pt-4">
            <Link
              href="https://medium.com/nearprotocol/linear-protocol-launches-lnr-governance-token-with-genesis-airdrop-4b7754e87357#:~:text=The%20genesis%20airdrop%20of%20%24LNR,receive%20%24LNR%20through%20the%20airdrop."
              className="colorTextParagraph1 text-[.9rem]"
            >
              More details about $LNR airdrop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
