import Image from "next/image";



export default function Logo() {
    return (
      <div className="xl:w-[14%] h-[100%] flex items-center justify-center">
        <Image
          src="/header/logoLinear.svg"
          alt="Picture of the author"
          width="400000"
          height="400000"
          style={{
            width: "6.4rem",
            height: "1.85rem",
            objectFit: "cover",
          }}
        />
      </div>
    );
  }