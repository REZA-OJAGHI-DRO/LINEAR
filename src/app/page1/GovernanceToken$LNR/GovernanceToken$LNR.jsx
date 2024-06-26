import Link from "next/link";
import Image from "next/image";

export default function GovernanceToken$LNR() {
  return (
    <section className="w-[100%] h-[90vh] md:h-[150vh] xl:h-[70vh]">

      <article className="w-[100%] h-[20%] xl:h-[60%] flex content-end flex-wrap">
        <div className="w-[100%] h-[50%] flex justify-center items-center">
          <h3 className="w-[100%] flex justify-center colorTextTitle1 font-bold text-[2rem] lg:text-[2.5rem] xl:text-[3.5rem]">
            Governance Token $LNR
          </h3>
        </div>
        <div className="w-[100%] h-[50%] flex justify-center items-center md:gap-16 ">
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

      <article className="w-[100%] h-[80%] xl:h-[40%] flex flex-wrap justify-center items-start py-7 md:gap-5">
        
        <article className=" w-[90%] xl:w-[24%] h-[30%] xl:h-[90%] flex justify-center items-center border-[.005px] border-[rgba(255,255,255,.1)] rounded-2xl backdropBlur2">
          <div className="w-[100%] h-[60%] flex flex-wrap content-center text-center">
            <h4 className="w-[100%] text-[.9rem] h-[40%] sm:text-[1rem] xl:text-[1.2rem] colorTextTitle1">
            Total Supply
            </h4>
            <p className="w-[100%] text-[1.6rem] h-[40%] sm:text-[1.4rem] xl:text-[1.8rem] font-semibold colorTextParagraph2 ">
            1,000,000,000
            </p>
          </div>
        </article>

        <article className="w-[90%] xl:w-[24%] h-[30%] xl:h-[90%] flex justify-center items-center border-[.005px] border-[rgba(255,255,255,.1)] rounded-2xl backdropBlur2">
          <div className="w-[100%] h-[60%] flex flex-wrap items-center text-center">
            <h4 className="w-[100%] text-[.9rem] h-[40%] sm:text-[1rem] xl:text-[1.2rem] colorTextTitle1">
            NEAR NEP-141 Address
            </h4>
            <Link href='https://nearblocks.io/address/802d89b6e511b335f05024a65161bce7efc3f311.factory.bridge.near' className="w-[100%] h-[40%] text-[1.4rem] sm:text-[1.6rem] xl:text-[1.8rem] font-semibold colorTextParagraph2 ">
                802d89...bridge.near
            </Link>
          </div>
        </article>

        <article className="w-[90%] xl:w-[24%] h-[30%] xl:h-[90%] flex justify-center items-center border-[.005px] border-[rgba(255,255,255,.1)] rounded-2xl backdropBlur2">
          <div className="w-[100%] h-[60%] flex flex-wrap items-center text-center">
            <h4 className="w-[100%] text-[.9rem] sm:text-[1rem] h-[40%] xl:text-[1.2rem] colorTextTitle1">
            ETH ERC-20 Address
            </h4>
            <Link href='https://etherscan.io/token/0x802d89B6E511b335F05024a65161bcE7efc3f311' className="w-[100%] h-[40%] text-[1.4rem] sm:text-[1.6rem] xl:text-[1.8rem] font-semibold colorTextParagraph2 ">
                0x802d...c3f311
            </Link>
          </div>
        </article>
      </article>
    </section>
  );
}
