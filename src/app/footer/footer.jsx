import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-[100%] h-[17vh] z-50 bg-[#0a0a10] flex flex-wrap content-start gap-3">
      <p className="w-[100%] pt-2 text-center text-zinc-200">
        © Copyright 2024 LiNEAR DAO. All Rights Reserved.
      </p>
      <div className="w-[100%] flex justify-center">
        <Link
          href="https://github.com/linear-protocol/audits/blob/main/BlockSec%20-%20Security%20Audit%20Report%20for%20LiNEAR%20-%20202204.pdf"
          className="flex gap-1"
        >
          <p className="text-[.85rem] text-zinc-400">Audited by</p>
          <Image
            src="/footer/block.svg"
            alt="Picture of the author"
            width="300000"
            height="400000"
            style={{
              width: "5.2rem",
              height: "1rem",
              objectFit: "cover",
            }}
          />
        </Link>
      </div>
    </footer>
  );
}
