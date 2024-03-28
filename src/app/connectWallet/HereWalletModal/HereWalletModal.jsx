"use client";

import useStore from "@/app/store/store";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function HereWalletModal() {
  const dNone2 = useStore((state) => state.dNone2);
  const dis3 = useStore((state) => state.dis3);

  function closeModal2() {
    dis3("none");
  }

  const menuLi = useRef();
  const img = useRef();
  const instal = useRef();
  const y = ["", "", ""];

  function clickHere(e, x) {
    y.map((val, i) => {
      menuLi.current.children[i].style.display = "none";
      img.current.children[i].style.display = "none";
      instal.current.children[i].style.display = "none";
    });
    if (x == 0) {
      menuLi.current.children[0].style.display = "flex";
      img.current.children[0].style.display = "flex";
      instal.current.children[0].style.display = "flex";
    } else if (x == 1) {
      menuLi.current.children[1].style.display = "flex";
      img.current.children[1].style.display = "flex";
      instal.current.children[1].style.display = "flex";
    } else if (x == 2) {
      menuLi.current.children[2].style.display = "flex";
      img.current.children[2].style.display = "flex";
      instal.current.children[2].style.display = "flex";
    }
  }

  function inp(e){
     let val=e.target.value
     console.log(val);
     if(val>0){
      if(
      (val.search(/[a-z]/))>=0||
     (val.search(/[ا-ی]/))>=0
     ){
          e.target.value=val.slice(0,val.length-1)
     }
     }else{
      e.target.value=val.slice(0,val.length-1)

     }
     
     
  }
  return (
    <section
      style={{ display: dNone2 }}
      className="w-[100%] h-[100%] flex  fixed top-0 z-50  justify-center items-center"
    >
      <article className="w-[100%] md:w-[720px] h-[100%] lg:h-[550px] overflow-hidden rounded-xl bg-[rgb(243,235,234)] flex flex-wrap relative pt-5 pl-5 pr-5">
        <div className="w-[100%]  h-[12%] flex justify-between items-center">
          <ul
            ref={menuLi}
            className="group h-[100%] flex items-center relative"
          >
            <li
              style={{ display: "flex" }}
              className="w-[100%] cursor-pointer flex justify-center items-center px-1 rounded-lg hover:bg-[rgb(235,222,220)]"
            >
              <div className="flex justify-center items-center">
                <Image
                  src="/connectWallet/HereWallet.svg"
                  alt="Picture of the author"
                  width="300000"
                  height="400000"
                  className="bg-[rgb(235,222,220)] rounded-xl p-1"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    objectFit: "cover",
                  }}
                />
                <div className="mx-2">
                  <p className="text-[1rem] font-semibold">HERE Wallet</p>
                  <p className="text-[.7rem]">Connect 44'/397'/0'/0'/0'</p>
                </div>
                <Image
                  src="/HereWalletModal/cursor.svg"
                  alt="Picture of the author"
                  width="300000"
                  height="400000"
                  className="rounded-xl p-1"
                  style={{
                    width: "2rem",
                    height: "2rem",
                    objectFit: "cover",
                  }}
                />
              </div>
            </li>

            <li
              style={{ display: "none" }}
              className="w-[100%] cursor-pointer flex justify-center items-center px-1 rounded-lg hover:bg-[rgb(235,222,220)]"
            >
              <div className="flex justify-center items-center">
                <Image
                  src="/HereWalletModal/metamask.svg"
                  alt="Picture of the author"
                  width="300000"
                  height="400000"
                  className="bg-[rgb(235,222,220)] rounded-xl p-1"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    objectFit: "cover",
                  }}
                />
                <div className="mx-2">
                  <p className="text-[.9rem] font-semibold capitalize">
                    metamask wallet
                  </p>
                  <p className="text-[.7rem]">Connect 44'/397'/0'/0'/0'</p>
                </div>
                <Image
                  src="/HereWalletModal/cursor.svg"
                  alt="Picture of the author"
                  width="300000"
                  height="400000"
                  className="rounded-xl p-1"
                  style={{
                    width: "2rem",
                    height: "2rem",
                    objectFit: "cover",
                  }}
                />
              </div>
            </li>

            <li
              style={{ display: "none" }}
              className="w-[100%] cursor-pointer flex justify-center items-center px-1 rounded-lg hover:bg-[rgb(235,222,220)]"
            >
              <div className="flex justify-center items-center">
                <Image
                  src="/HereWalletModal/ledger.webp"
                  alt="Picture of the author"
                  width="300000"
                  height="400000"
                  className="bg-[rgb(235,222,220)] rounded-xl p-1"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    objectFit: "cover",
                  }}
                />
                <div className="mx-2">
                  <p className="text-[.9rem] font-semibold capitalize">
                    ledger wallet
                  </p>
                  <p className="text-[.7rem]">Connect 44'/397'/0'/0'/0'</p>
                </div>
                <Image
                  src="/HereWalletModal/cursor.svg"
                  alt="Picture of the author"
                  width="300000"
                  height="400000"
                  className="rounded-xl p-1"
                  style={{
                    width: "2rem",
                    height: "2rem",
                    objectFit: "cover",
                  }}
                />
              </div>
            </li>

            <li className="group-hover:flex hidden w-[120%] border border-zinc-400 rounded-2xl absolute top-[100%] left-0 bg-[rgb(243,235,234)]">
              <ul className="w-[100%] flex flex-wrap gap-2 p-3">
                <li
                  onClick={() => clickHere(event, 0)}
                  className="w-[100%] cursor-pointer py-1 flex justify-center items-center px-1 rounded-lg hover:bg-[rgb(235,222,220)]"
                >
                  <div className="flex justify-center items-center">
                    <Image
                      src="/connectWallet/HereWallet.svg"
                      alt="Picture of the author"
                      width="300000"
                      height="400000"
                      className="bg-[rgb(235,222,220)] rounded-xl p-1"
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        objectFit: "cover",
                      }}
                    />
                    <div className="mx-2">
                      <p className="text-[1rem] font-semibold">HERE Wallet</p>
                      <p className="text-[.7rem]">Connect 44'/397'/0'/0'/0'</p>
                    </div>
                    <Image
                      src="/HereWalletModal/cursor.svg"
                      alt="Picture of the author"
                      width="300000"
                      height="400000"
                      className="rounded-xl p-1"
                      style={{
                        width: "2rem",
                        height: "2rem",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </li>

                <li
                  onClick={() => clickHere(event, 1)}
                  className="w-[100%] cursor-pointer py-1 flex justify-center items-center px-1 rounded-lg hover:bg-[rgb(235,222,220)]"
                >
                  <div className="flex justify-center items-center">
                    <Image
                      src="/HereWalletModal/metamask.svg"
                      alt="Picture of the author"
                      width="300000"
                      height="400000"
                      className="bg-[rgb(235,222,220)] rounded-xl p-1"
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        objectFit: "cover",
                      }}
                    />
                    <div className="mx-2">
                      <p className="text-[.9rem] font-semibold capitalize">
                        metamask wallet
                      </p>
                      <p className="text-[.7rem]">Connect 44'/397'/0'/0'/0'</p>
                    </div>
                    <Image
                      src="/HereWalletModal/cursor.svg"
                      alt="Picture of the author"
                      width="300000"
                      height="400000"
                      className="rounded-xl p-1"
                      style={{
                        width: "2rem",
                        height: "2rem",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </li>

                <li
                  onClick={() => clickHere(event, 2)}
                  className="w-[100%] cursor-pointer py-1 flex justify-center items-center px-1 rounded-lg hover:bg-[rgb(235,222,220)]"
                >
                  <div className="flex justify-center items-center">
                    <Image
                      src="/HereWalletModal/ledger.webp"
                      alt="Picture of the author"
                      width="300000"
                      height="400000"
                      className="bg-[rgb(235,222,220)] rounded-xl p-1"
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        objectFit: "cover",
                      }}
                    />
                    <div className="mx-2">
                      <p className="text-[.9rem] font-semibold capitalize">
                        ledger wallet
                      </p>
                      <p className="text-[.7rem]">Connect 44'/397'/0'/0'/0'</p>
                    </div>
                    <Image
                      src="/HereWalletModal/cursor.svg"
                      alt="Picture of the author"
                      width="300000"
                      height="400000"
                      className="rounded-xl p-1"
                      style={{
                        width: "2rem",
                        height: "2rem",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </li>
              </ul>
            </li>
          </ul>

          <div className="w-[10%] h-[100%]">
            <button
              onClick={closeModal2}
              className="w-[100%] h-[100%] flex justify-center items-center text-[2.5rem] z-50 "
            >
              <i className="bi bi-x"></i>
            </button>
          </div>
        </div>
        {/* ******* */}
        <div className="w-[100%] h-[50%]  flex justify-center items-center">
          <div
            ref={img}
            className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] border-2 border-black rounded-2xl shadow1 p-2 bg-[rgb(235,222,220)]"
          >
            <Image
              src="/HereWalletModal/here.png"
              alt="Picture of the author"
              width="300000"
              height="400000"
              className="bg-[rgb(235,222,220)] rounded-xl p-1"
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            <figure
              style={{ display: "none" }}
              className="w-[100%] h-[100%] justify-center content-center flex-wrap cursor-pointer"
            >
              <Image
                src="/HereWalletModal/metamask.svg"
                alt="Picture of the author"
                width="300000"
                height="400000"
                className="bg-[rgb(235,222,220)] rounded-xl p-1 hover:scale-105 transition-all duration-100"
                style={{
                  width: "70%",
                  height: "70%",
                  objectFit: "cover",
                }}
              />
              <figcaption className="w-[100%] text-center">
                Top to open
              </figcaption>
            </figure>
            <figure
              style={{ display: "none" }}
              className="w-[100%] h-[100%] justify-center content-center flex-wrap"
            >
              <Image
                src="/HereWalletModal/ledger.webp"
                alt="Picture of the author"
                width="300000"
                height="400000"
                className="bg-[rgb(235,222,220)] rounded-xl p-1"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </figure>
          </div>
        </div>
        {/* ********* */}

        <div className="w-[100%] h-[38%] flex justify-center items-center">
          <div className="hidden w-[20%] h-[100%] md:flex justify-center items-center">
            <Image
              src="/HereWalletModal/nearhere.webp"
              alt="Picture of the author"
              width="300000"
              height="400000"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <div
            ref={instal}
            className="w-[60%] h-[100%] py-3 "
          >
            <div
              style={{ display: "flex" }}
              className="w-[100%] h-[100%] flex-wrap"
            >
              <div className="w-[100%] h-[50%] flex justify-center items-center gap-2 ">
                <Link href="https://accounts.google.com/v3/signin/confirmidentifier?authuser=0&continue=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.herewallet%26pli%3D1&followup=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.herewallet%26pli%3D1&ifkv=ARZ0qKKOPMYXi6nSqj2zJbuzukBL8XmeI24l2nByiZ2h_nF5Gn1vKPxZs5L-6W6fGYi01D_D_0yMsg&osid=1&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S101642705%3A1711512279843188&theme=mn&ddm=0">
                  <Image
                    src="/HereWalletModal/appstore.svg"
                    alt="Picture of the author"
                    width="300000"
                    height="400000"
                    className="hover:opacity-80"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Link>
                <Link href="https://accounts.google.com/v3/signin/confirmidentifier?authuser=0&continue=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.herewallet%26pli%3D1&followup=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.herewallet%26pli%3D1&ifkv=ARZ0qKIkf-3qaL7exY2s49pqwmKqSGdZiUbpRe6A4JJMKo4wMAwpycT9n2eZCjTgNalB03U8zJTQLg&osid=1&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-468945472%3A1711512305536381&theme=mn&ddm=0">
                  <Image
                    src="/HereWalletModal/googleplay.svg"
                    alt="Picture of the author"
                    width="300000"
                    height="400000"
                    className="hover:opacity-80"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Link>
              </div>

              <div className="w-[100%] h-[50%] flex justify-center items-center">
                <p className="w-[100%] flex justify-center items-center gap-1 text-[1rem]">
                Don’t have an account yet? Visit 
                <Link href='https://app.linearprotocol.org/account' className="text-[rgb(253,132,227)]">
                  herewallet.app
                </Link>
                </p>
              </div>
            </div>

            <div
              style={{ display: "none" }}
              className="w-[100%] h-[100%] fle flex-wrap "
            >
              <div className="w-[100%] h-[50%] flex justify-center items-center gap-2 ">
                <Link 
                className="w-[12rem] h-[3rem] font-semibold text-white gap-2 bg-black rounded-xl flex justify-center items-center hover:bg-[rgba(0,0,0,.8)]" 
                href="https://accounts.google.com/v3/signin/confirmidentifier?authuser=0&continue=https%3A%2F%2Fchromewebstore.google.com%2Fdetail%2Fmetamask%2Fnkbihfbeogaeaoehlefnkodbefgpgknn%3Futm_source%3Dmetamask.io&followup=https%3A%2F%2Fchromewebstore.google.com%2Fdetail%2Fmetamask%2Fnkbihfbeogaeaoehlefnkodbefgpgknn%3Futm_source%3Dmetamask.io&ifkv=ARZ0qKJ3ZXzfRkNYLeKMtIVD6dHlXUNdvyqNnRZ7uCtChZeFPzEW6a8HR5Cyn8Q6xaoI3BGGkt7wRQ&osid=1&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1023311429%3A1711513152622003&theme=mn&ddm=0">
                  <Image
                    src="/HereWalletModal/chrome.svg"
                    alt="Picture of the author"
                    width="300000"
                    height="400000"
                    style={{
                      width: "2rem",
                      height: "2rem",
                      objectFit: "cover",
                    }}
                  />
                  install Metamask
                </Link>
              </div>

              <div className="w-[100%] h-[50%] flex justify-center items-center">
                <p className="w-[100%] flex justify-center items-center gap-1 text-[1rem]">
                Don’t have an account yet? Visit 
                <Link href='https://app.linearprotocol.org/' className="text-[rgb(253,132,227)]">
                  my.herewallet.app
                </Link>
                </p>
              </div>

            </div>

            <div
              style={{ display: "none" }}
              className="w-[100%] h-[100%] flex-wrap"
            >
              <div className="w-[100%] h-[40%] flex flex-wrap">
                <p className="w-[100%] text-center text-[1.2rem] font-black">
                  Connect to your Ledger device

                </p>
                <p className="w-[100%] text-[.9rem] text-center">
                  Make sure your Ledger is connected securely, and that the NEAR app is open on your device.

                </p>
              </div>

              <div className="w-[100%] h-[60%] flex flex-wrap justify-center items-center gap-2 mt-2">
                <button className="px-3 text-[1rem] h-[2.5rem] border rounded-full border-zinc-400">Click to connect</button>
                <input onInput={()=>inp(event)} type="text" className="w-[3rem] h-[2.5rem] border rounded-full border-zinc-400 text-center cursor-pointer focusBorder bg-transparent"/>
              </div>

            </div>

          </div>

          <div className="hidden w-[20%] h-[100%] md:flex justify-center items-center">
            <Image
              src="/HereWalletModal/rock.webp"
              alt="Picture of the author"
              width="300000"
              height="400000"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </article>
    </section>
  );
}
