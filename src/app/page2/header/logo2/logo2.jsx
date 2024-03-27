import Image from "next/image";



export default function Logo2() {
    return (
      <div className=" h-[100%] flex items-center justify-center">
        <Image
          src="/header/phoenix.svg"
          alt="Picture of the author"
          width="400000"
          height="400000"
          style={{
            width: "9.4rem",
            height: "1.85rem",
            objectFit: "cover",
          }}
        />
      </div>
    );
  }