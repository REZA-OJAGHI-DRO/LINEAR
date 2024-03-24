import Link from "next/link";
import Image from "next/image";

export default function GovernanceToken$LNR() {
  return (
    <section className="w-[100%] h-[70vh] ">
      <article className="w-[100%] h-[60%] flex content-end flex-wrap">
        <div className="w-[100%] h-[40%] flex justify-center items-center">
          <h3 className="w-[100%] flex justify-center text-white font-bold text-[3.5rem]">
            Governance Token $LNR
          </h3>
        </div>
        <div className="w-[100%] h-[40%] flex justify-center items-center gap-16 ">
          <Link href="https://coinmarketcap.com/currencies/linear-protocol-org/">
            <Image
              src="/GovernanceToken$LNR/cmc.svg"
              alt="Picture of the author"
              width="300000"
              height="400000"
              style={{
                width: "15rem",
                height: "2.5rem",
                objectFit: "cover",
              }}
            />
          </Link>
          <Link href="https://www.coingecko.com/en/coins/linear-protocol-lnr">
            <Image
              src="/GovernanceToken$LNR/coingecko.svg"
              alt="Picture of the author"
              width="300000"
              height="400000"
              style={{
                width: "9.5rem",
                height: "2.5rem",
                objectFit: "cover",
              }}
            />
          </Link>
        </div>
      </article>

      <article className="w-[100%] h-[40%] flex justify-center items-start py-7 gap-5">
        
        <article className="w-[24%] h-[90%] border-[.005px] border-[rgba(255,255,255,.1)] rounded-2xl backdropBlur2">
          <div className="w-[100%] h-[60%] p-5 text-center">
            <h4 className="w-[100%] text-[1.2rem] text-white">
            Total Supply
            </h4>
            <p className="w-[100%] text-[2rem] font-semibold text-zinc-300 ">
            1,000,000,000
            </p>
          </div>
        </article>

        <article className="w-[24%] h-[90%] border-[.005px] border-[rgba(255,255,255,.1)] rounded-2xl backdropBlur2">
          <div className="w-[100%] h-[60%] p-5 text-center">
            <h4 className="w-[100%] text-[1.2rem]  text-white">
            NEAR NEP-141 Address
            </h4>
            <Link href='https://nearblocks.io/address/802d89b6e511b335f05024a65161bce7efc3f311.factory.bridge.near' className="w-[100%] text-[2rem] font-semibold text-zinc-300 pt-5">
                802d89...bridge.near
            </Link>
          </div>
        </article>

        <article className="w-[24%] h-[90%] border-[.005px] border-[rgba(255,255,255,.1)] rounded-2xl backdropBlur2">
          <div className="w-[100%] h-[60%] p-5 text-center">
            <h4 className="w-[100%] text-[1.2rem]  text-white">
            ETH ERC-20 Address
            </h4>
            <Link href='https://etherscan.io/token/0x802d89B6E511b335F05024a65161bcE7efc3f311' className="w-[100%] text-[2rem] font-semibold text-zinc-300 pt-5">
                0x802d...c3f311
            </Link>
          </div>
        </article>
      </article>
    </section>
  );
}
