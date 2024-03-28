import { useRef } from "react";
import useStore from "../store/store";
import Image from "next/image";
import Link from "next/link";

export default function Modal() {
  const dNone = useStore((state) => state.dNone);
  const li = useRef();
  const y = ["", "", "", "", "", ""];
  const page = useRef();

  function pageWallet(e, x) {
    y.map((val, i) => {
      if (i < 5) {
        li.current.children[i].style.background = "rgb(22,20,36)";
      }
      page.current.children[i].style.display = "none";
      page.current.children[6].style.display = "none";
    });
    if (x == 0) {
      li.current.children[0].style.background = "rgb(79,124,209)";
      page.current.children[0].style.display = "flex";
    } else if (x == 1) {
      li.current.children[1].style.background = "rgb(79,124,209)";
      page.current.children[1].style.display = "flex";
    } else if (x == 2) {
      li.current.children[2].style.background = "rgb(79,124,209)";
      page.current.children[2].style.display = "flex";
    } else if (x == 3) {
      li.current.children[3].style.background = "rgb(79,124,209)";
      page.current.children[3].style.display = "flex";
    } else if (x == 4) {
      li.current.children[4].style.background = "rgb(79,124,209)";
      page.current.children[4].style.display = "flex";
    }
  }

  const dis2 = useStore((state) => state.dis2);
  function closeModal() {
    dis2("none");
  }

  function page1() {
    y.map((val, i) => {
      if (i < 5) {
        li.current.children[i].style.background = "rgb(22,20,36)";
      }
      page.current.children[i].style.display = "none";
    });
    page.current.children[5].style.display = "flex";
}

const dis3 = useStore((state) => state.dis3);

function HereWalletModal(){
    dis3('flex')

}

function getWallet(){
  page.current.children[6].style.display = "flex";
  page.current.children[5].style.display = "none";

}
function closeGetWallet(){
  page.current.children[6].style.display = "none";
  page.current.children[5].style.display = "flex";

}
  return (
    <section
      style={{ display: dNone }}
      className="w-[100%] h-[100%] flex backdropBlurModal fixed top-0 z-40  justify-center items-center"
    >
      <article className="w-[100%] md:w-[800px] h-[100%] lg:h-[580px] overflow-hidden rounded-xl bg-[rgb(14,13,31)] flex flex-wrap relative">
        <button
          onClick={closeModal}
          className="text-[2.5rem] z-50 colorTextButton1 absolute top-3 right-3 md:top-10 md:right-10"
        >
          <i className="bi bi-x"></i>
        </button>
{/* ****** */}
        <div className="w-[100%] md:w-[35%] h-[30%] md:h-[100%] px-5 py-5 lg:py-10 overflow-y-scroll scrollMenuList">
          <h3 className="w-[100%] colorTextTitle1 text-[1.3rem] py-2 lg:py-5 font-bold">
            Connect Your Wallet
          </h3>
          <ul ref={li} className="w-[100%] flex flex-wrap gap-2">
            <li
              onClick={() => pageWallet(event, 0)}
              className="w-[30%] md:w-[100%] flex justify-start items-center rounded-xl bg-[rgb(22,20,36)] hover:bg-[rgb(22,31,65)] transition-all duration-300 cursor-pointer"
            >
              <Link
                className="w-[100%] h-[100%] flex flex-wrap justify-center md:justify-start gap-4 items-center p-1 md:p-3"
                href=""
              >
                <Image
                  src="/connectWallet/MyNearWallet.png"
                  alt="Picture of the author"
                  width="300000"
                  height="400000"
                  className="bg-white rounded-xl p-1"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    objectFit: "cover",
                  }}
                />
                <p className="text-[.7rem] md:text-[.9rem] colorTextParagraph1 font-semibold">
                  MyNear Wallet
                </p>
              </Link>
            </li>
            <li
              onClick={() => pageWallet(event, 1)}
              className="w-[30%] md:w-[100%] flex justify-start items-center gap-4 rounded-xl bg-[rgb(22,20,36)] hover:bg-[rgb(22,31,65)] transition-all duration-300 cursor-pointer"
            >
              <Link
                className="w-[100%] h-[100%] flex flex-wrap justify-center md:justify-start gap-4 items-center p-1 md:p-3"
                target="_blank"
                href="https://wallet.meteorwallet.app/connect/mainnet/login?connectionUid=WVYWdIrCeLnRoHPsMbM7J&source=wpm"
              >
              <Image
                src="/connectWallet/MeteorWallet.png"
                alt="Picture of the author"
                width="300000"
                height="400000"
                className="bg-white rounded-xl p-1"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  objectFit: "cover",
                }}
              />
              <p className="text-[.7rem] md:text-[.9rem] colorTextParagraph1 font-semibold">
                Meteor Wallet
              </p>
              </Link>
            </li>
            <li
              onClick={() => pageWallet(event, 2)}
              className="w-[30%] md:w-[100%] flex justify-start items-center gap-4 rounded-xl bg-[rgb(22,20,36)] hover:bg-[rgb(22,31,65)] transition-all duration-300 cursor-pointer"
            >
                <button onClick={HereWalletModal} className="w-[100%] h-[100%] flex flex-wrap justify-center md:justify-start gap-4 items-center p-1 md:p-3">
              <Image
                src="/connectWallet/HereWallet.svg"
                alt="Picture of the author"
                width="300000"
                height="400000"
                className="bg-white rounded-xl p-1"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  objectFit: "cover",
                }}
              />
              <p className="text-[.7rem] md:text-[.9rem] colorTextParagraph1 font-semibold">
                Here Wallet
              </p>
              </button>
            </li>
            <li
              onClick={() => pageWallet(event, 3)}
              className="w-[30%] md:w-[100%] flex flex-wrap justify-center md:justify-start items-center gap-4 rounded-xl p-1 md:p-3 bg-[rgb(22,20,36)] hover:bg-[rgb(22,31,65)] transition-all duration-300 cursor-pointer"
            >
              <Image
                src="/connectWallet/WalletConnect.png"
                alt="Picture of the author"
                width="300000"
                height="400000"
                className="bg-white rounded-xl p-1"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  objectFit: "cover",
                }}
              />
              <p className="text-[.7rem] md:text-[.9rem] colorTextParagraph1 font-semibold">
                Wallet Connect
              </p>
            </li>
            <li
              onClick={() => pageWallet(event, 4)}
              className="w-[30%] md:w-[100%] flex flex-wrap justify-center md:justify-start items-center gap-4 rounded-xl p-1 md:p-3 bg-[rgb(22,20,36)] hover:bg-[rgb(22,31,65)] transition-all duration-300 cursor-pointer"
            >
              <Image
                src="/connectWallet/Sender.png"
                alt="Picture of the author"
                width="300000"
                height="400000"
                className="bg-white rounded-xl p-1"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  objectFit: "cover",
                }}
              />
              <p className="text-[.7rem] md:text-[.9rem] mx-2 md:mx-0 colorTextParagraph1 font-semibold">Sender</p>
            </li>
          </ul>
        </div>
{/* ******* */}
        <div ref={page} className="w-[100%] md:w-[65%] h-[70%] md:h-[100%]  bg-[rgb(16,12,37)] py-10 overflow-y-scroll scrollMenuList">
          {/* MyNearWallet */}
          <div
            style={{ display: "none" }}
            className="w-[100%] h-[100%] flex justify-center content-center gap-2 flex-wrap"
          >
            <div className="w-[100%]">
              <div className="w-[100%] flex justify-center items-center">
                <Image
                  src="/connectWallet/MyNearWallet.png"
                  alt="Picture of the author"
                  width="300000"
                  height="400000"
                  className="bg-white rounded-xl p-1"
                  style={{
                    width: "5rem",
                    height: "5rem",
                    objectFit: "cover",
                  }}
                />
              </div>
              <p className="w-[100%] text-center colorTextParagraph1 font-bold mt-2 text-[1rem]">
                MyNearWallet
              </p>
            </div>
            <p className="w-[100%] colorTextParagraph1 text-center">?</p>
            <p className="w-[60%] text-center colorTextParagraph1 mt-4 text-[.9rem]">
              Failed to sign in with Meteor Wallet: User closed the window
              before completing the action
            </p>
            <div className="w-[100%] flex justify-center items-center py-3">
              <button className="colorTextButton1 border px-7 rounded-lg text-[1rem] capitalize font-semibold py-2 bg-[rgb(29,33,68)] border-[rgb(44,50,109)]">
                retry
              </button>
            </div>
          </div>

          {/* MeteorWallet */}
          <div
            style={{ display: "none" }}
            className="w-[100%] h-[100%] flex justify-center content-center gap-2 flex-wrap"
          >
            <div className="w-[100%]">
              <div className="w-[100%] flex justify-center items-center">
                <Image
                  src="/connectWallet/MeteorWallet.png"
                  alt="Picture of the author"
                  width="300000"
                  height="400000"
                  className="bg-white rounded-xl p-1"
                  style={{
                    width: "5rem",
                    height: "5rem",
                    objectFit: "cover",
                  }}
                />
              </div>
              <p className="w-[100%] text-center colorTextParagraph1 font-bold mt-2 text-[1rem]">
                Meteor Wallet
              </p>
            </div>
            <p className="w-[100%] colorTextParagraph1 text-center">?</p>
            <p className="w-[60%] text-center colorTextParagraph1 mt-4 text-[.9rem]">
              Failed to sign in with Meteor Wallet: User closed the window
              before completing the action
            </p>
            <div className="w-[100%] flex justify-center items-center py-3">
              <button className="colorTextButton1 border px-7 rounded-lg text-[1rem] capitalize font-semibold py-2 bg-[rgb(29,33,68)] border-[rgb(44,50,109)]">
                retry
              </button>
            </div>
          </div>

          {/* HereWallet  */}
          <div
            style={{ display: "none" }}
            className="w-[100%] h-[100%] flex justify-center content-center gap-2 flex-wrap"
          >
            <div className="w-[100%]">
              <div className="w-[100%] flex justify-center items-center">
                <Image
                  src="/connectWallet/HereWallet.svg"
                  alt="Picture of the author"
                  width="300000"
                  height="400000"
                  className="bg-white rounded-xl p-1"
                  style={{
                    width: "5rem",
                    height: "5rem",
                    objectFit: "cover",
                  }}
                />
              </div>
              <p className="w-[100%] text-center colorTextParagraph1 font-bold mt-2 text-[1rem]">
                HereWallet
              </p>
            </div>
            <p className="w-[100%] colorTextParagraph1 text-center">?</p>
            <p className="w-[60%] text-center colorTextParagraph1 mt-4 text-[.9rem]">
              Failed to sign in with Here Wallet:
            </p>
            <div className="w-[100%] flex justify-center items-center py-3">
              <button className="colorTextButton1 border px-7 rounded-lg text-[1rem] capitalize font-semibold py-2 bg-[rgb(29,33,68)] border-[rgb(44,50,109)]">
                retry
              </button>
            </div>
          </div>

          {/* WalletConnect */}
          <div
            style={{ display: "none" }}
            className="w-[100%] h-[100%] flex justify-center content-center gap-2 flex-wrap"
          >
            <div className="w-[100%]">
              <div className="w-[100%] flex justify-center items-center">
                <Image
                  src="/connectWallet/WalletConnect.png"
                  alt="Picture of the author"
                  width="300000"
                  height="400000"
                  className="bg-white rounded-xl p-1"
                  style={{
                    width: "5rem",
                    height: "5rem",
                    objectFit: "cover",
                  }}
                />
              </div>
              <p className="w-[100%] text-center colorTextParagraph1 font-bold mt-2 text-[1rem]">
                Wallet Connect
              </p>
            </div>
            <p className="w-[100%] colorTextParagraph1 text-center">?</p>
            <p className="w-[60%] text-center colorTextParagraph1 mt-4 text-[.9rem] text-ellipsis overflow-hidden">
              Failed to sign in with WalletConnect: WebSocket connection failed
              for URL:
              wss://relay.walletconnect.com?auth=eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkaWQ6a2V5Ono2TWt1VW1ybmVKVkhGRmto
            </p>
            <div className="w-[100%] flex justify-center items-center py-3">
              <button className="colorTextButton2 border px-7 rounded-lg text-[1rem] capitalize font-semibold py-2 bg-[rgb(29,33,68)] border-[rgb(44,50,109)]">
                retry
              </button>
            </div>
          </div>

          {/* Sender */}
          <div
            style={{ display: "none" }}
            className="w-[100%] h-[100%] flex justify-center content-center gap-2 flex-wrap"
          >
            <div className="w-[100%] h-[10%]">
              <button
                onClick={page1}
                className="text-[2rem] z-50 text-[rgb(109,94,213)]"
              >
                <i className="bi bi-chevron-left"></i>
              </button>
            </div>
            <div className="w-[100%] h-[90%] flex justify-center content-center flex-wrap">
              <div className="w-[70%] flex items-center gap-4">
                <Image
                  src="/connectWallet/Sender.png"
                  alt="Picture of the author"
                  width="300000"
                  height="400000"
                  className=" rounded-xl p-1"
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    objectFit: "cover",
                  }}
                />
                <p className="text-[1rem] colorTextParagraph1 font-semibold">Sender</p>
              </div>

              <p className="w-[70%] colorTextParagraph1">
                You'll need to install Sender to continue. After installing{" "}
                <span className="text-[rgb(109,94,213)]">
                  refresh the page.
                </span>
              </p>

              <button className="w-[70%] rounded-full text-[1rem] font-bold py-3 colorBackground capitalize mt-10">
                <Link
                  target="_blank"
                  className="w-[100%] h-[100%] flex justify-center items-center"
                  href="https://accounts.google.com/v3/signin/confirmidentifier?authuser=0&continue=https%3A%2F%2Fchromewebstore.google.com%2Fdetail%2Fepapihdplajcdnnkdeiahlgigofloibg&followup=https%3A%2F%2Fchromewebstore.google.com%2Fdetail%2Fepapihdplajcdnnkdeiahlgigofloibg&ifkv=ARZ0qKKZ7zwAs1gkNFZBDunbcOAatIYdAA-5Gon5YjI82NEhx2GOpye86rCqHk1_O2DUb3hMro52UQ&osid=1&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1241454783%3A1711500398865845&theme=mn&ddm=0"
                >
                  open sender
                </Link>
              </button>
            </div>
          </div>
          
          <div
            style={{ display: "flex" }}
            className="w-[100%] h-[100%] flex-wrap justify-center"
          >
            <h3 className="w-[100%] colorTextTitle1 text-[1.3rem] py-5 font-bold text-center">
              What is a Wallet?
            </h3>
            <ul className="w-[100%]">
              <li className="w-[100%] p-10 flex gap-5">
                <div className="colorTextParagraph1 bg-[rgb(158,204,230)] p-2 flex justify-center items-center rounded-xl">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.5 1.83325L30.1666 5.16658M17.4818 17.8514C19.1406 19.5103 20.1666 21.8019 20.1666 24.3333C20.1666 29.3959 16.0626 33.4999 11 33.4999C5.93735 33.4999 1.8333 29.3959 1.8333 24.3333C1.8333 19.2706 5.93735 15.1666 11 15.1666C13.5313 15.1666 15.8229 16.1926 17.4818 17.8514ZM17.4818 17.8514L24.3333 10.9999M24.3333 10.9999L29.3333 15.9999L35.1666 10.1666L30.1666 5.16658M24.3333 10.9999L30.1666 5.16658"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="colorTextParagraph1 font-extrabold">
                    Secure & Manage Your Digital Assets
                  </p>
                  <p className="text-[rgb(109,94,213)] text-[.9rem]">
                    Safely store and transfer your crypto and NFTs.
                  </p>
                </div>
              </li>
              <li className="w-[100%] p-10 flex gap-5">
                <div className="colorTextParagraph1 bg-[rgb(158,204,230)] px-2 py-0 flex justify-center items-center rounded-xl">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 40 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="28.3333"
                      cy="23.8333"
                      r="1.66667"
                      fill="currentColor"
                    ></circle>
                    <path
                      d="M35 12.1667H7C5.89543 12.1667 5 11.2712 5 10.1667V7.5C5 6.39543 5.89543 5.5 7 5.5H31.6667"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M35 12.1667V35.5H7C5.89543 35.5 5 34.6046 5 33.5V8.83334"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="colorTextParagraph1 font-extrabold">
                    Log In to Any NEAR App
                  </p>
                  <p className="text-[rgb(109,94,213)] text-[.9rem]">
                    No need to create new accounts or credentials. Connect your
                    wallet and you are good to go!
                  </p>
                </div>
              </li>
            </ul>

            <button onClick={getWallet} className="w-[80%] rounded-full text-[1rem] font-bold  colorBackground capitalize py-1 md:py-3 lg:py-0 lg:mt-10">
              get a wallet
            </button>
          </div>

          <div style={{ display: "none" }} className="w-[100%] h-[100%] justify-start flex-wrap ">
            <div className="w-[60%] h-[10%] flex items-center justify-between px-2">

          <button
                onClick={closeGetWallet}
                className="text-[1.8rem] z-50 text-[rgb(109,94,213)]"
                >
                <i className="bi bi-chevron-left"></i>
              </button> 
          <h3 className=" colorTextTitle1 text-[1.3rem] py-5 font-semibold text-center capitalize">

              get a wallet
            </h3>
            </div>

            <div className="w-[100%] h-[90%] flex flex-wrap justify-start px-4 pt-4 gap-2 content-start">
              <div className="w-[150px] h-[100px] bg-[rgb(243,235,234)] rounded-xl hover:border hover:bg-[rgb(22,31,65)] transition-all duration-300 cursor-pointer">
               <Link target="_parent" className="w-[100%] h-[100%] " href='https://app.mynearwallet.com/'>
                <div className="w-[100%] h-[50%] flex justify-center items-end">
                <Image
                  src="/connectWallet/MyNearWallet.png"
                  alt="Picture of the author"
                  width="300000"
                  height="400000"
                  className="bg-white rounded-xl p-1"
                  style={{
                    width: "2rem",
                    height: "2rem",
                    objectFit: "cover",
                  }}
                />
                </div>
                <div className="w-[100%] h-[50%] flex flex-wrap justify-center content-center">
                  <p className="w-[100%] text-[.8rem] text-center font-black">MyNearWallet</p>
                  <p className="w-[100%] text-[.6rem] capitalize text-center">
                    browser wallet
                  </p>
                </div>
                </Link>
              </div>

              <div className="w-[150px] h-[100px] bg-[rgb(243,235,234)] rounded-xl hover:border hover:bg-[rgb(22,31,65)] transition-all duration-300 cursor-pointer">
              <Link target="_parent" className="w-[100%] h-[100%] " href='https://wallet.meteorwallet.app/'>
              
              <div className="w-[100%] h-[50%] flex justify-center items-end">
                <Image
                  src="/connectWallet/MeteorWallet.png"
                  alt="Picture of the author"
                  width="300000"
                  height="400000"
                  className="bg-white rounded-xl p-1"
                  style={{
                    width: "2rem",
                    height: "2rem",
                    objectFit: "cover",
                  }}
                />
                </div>
                <div className="w-[100%] h-[50%] flex flex-wrap justify-center content-center">
                  <p className="w-[100%] text-[.8rem] text-center font-black">
                    MeteorWallet
                    </p>
                  <p className="w-[100%] text-[.6rem] capitalize text-center">
                    wallet extension
                  </p>
                </div>
                </Link>
              </div>

              <div className="w-[150px] h-[100px] bg-[rgb(243,235,234)] rounded-xl hover:border hover:bg-[rgb(22,31,65)] transition-all duration-300 cursor-pointer">
              <Link target="_parent" className="w-[100%] h-[100%] " href='https://www.herewallet.app/'>
              
              <div className="w-[100%] h-[50%] flex justify-center items-end">
                <Image
                  src="/connectWallet/HereWallet.svg"
                  alt="Picture of the author"
                  width="300000"
                  height="400000"
                  className="bg-white rounded-xl p-1"
                  style={{
                    width: "2rem",
                    height: "2rem",
                    objectFit: "cover",
                  }}
                />
                </div>
                <div className="w-[100%] h-[50%] flex flex-wrap justify-center content-center">
                  <p className="w-[100%] text-[.8rem] text-center font-black">
                    HereWallet
                    </p>
                  <p className="w-[100%] text-[.6rem] capitalize text-center">
                    mobile wallet
                  </p>
                </div>
                </Link>
              </div>

              <div className="w-[150px] h-[100px] bg-[rgb(243,235,234)] rounded-xl hover:border hover:bg-[rgb(22,31,65)] transition-all duration-300 cursor-pointer">
              <Link target="_parent" className="w-[100%] h-[100%] " href='https://accounts.google.com/v3/signin/confirmidentifier?authuser=0&continue=https%3A%2F%2Fchromewebstore.google.com%2Fdetail%2Fepapihdplajcdnnkdeiahlgigofloibg&followup=https%3A%2F%2Fchromewebstore.google.com%2Fdetail%2Fepapihdplajcdnnkdeiahlgigofloibg&ifkv=ARZ0qKJ6SGFSjWE40k70WxlChUOhJq5eIacp2gf6D74DmQq1Wgev_XEgZUObK65FTyE6u5enwYmstw&osid=1&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S705232316%3A1711516820546175&theme=mn&ddm=0'>
             
              <div className="w-[100%] h-[50%] flex justify-center items-end">
                <Image
                  src="/connectWallet/Sender.png"
                  alt="Picture of the author"
                  width="300000"
                  height="400000"
                  className="bg-white rounded-xl p-1"
                  style={{
                    width: "2rem",
                    height: "2rem",
                    objectFit: "cover",
                  }}
                />
                </div>
                <div className="w-[100%] h-[50%] flex flex-wrap justify-center content-center">
                  <p className="w-[100%] text-[.8rem] text-center font-black">
                    Sender
                    </p>
                  <p className="w-[100%] text-[.6rem] capitalize text-center">
                  wallet extension
                  </p>
                </div>
                </Link>
              </div>
            </div>
          </div>

        </div>

      </article>
    </section>
  );
}
