import Image from "next/image";
import Link from "next/link";

export default function Menu() {
    return (
      <ul className=" xl:w-[100%] h-[100%] flex *:flex *:justify-center *:items-center *:px-1">
        <li>
          <Link
            href="https://discord.com/invite/bkkvWwMf2T"
          >
            <Image
              src="/header/discord.svg"
              alt="Picture of the author"
              width="300000"
              height="400000"
              style={{
                width: "2.2rem",
                height: "2.2rem",
                objectFit: "cover",
              }}
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://twitter.com/LinearProtocol"
          >
            <Image
              src="/header/x.svg"
              alt="Picture of the author"
              width="300000"
              height="400000"
              style={{
                width: "2.2rem",
                height: "2.2rem",
                objectFit: "cover",
              }}
            />
          </Link>
        </li>
        <li>
          <Link href="https://medium.com/@LiNEAR_LSD">
            <Image
              src="/header/medium.svg"
              alt="Picture of the author"
              width="300000"
              height="400000"
              style={{
                width: "2.2rem",
                height: "2.2rem",
                objectFit: "cover",
              }}
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/linear-protocol"
          >
            <Image
              src="/header/github.svg"
              alt="Picture of the author"
              width="300000"
              height="400000"
              style={{
                width: "2.2rem",
                height: "2.2rem",
                objectFit: "cover",
              }}
            />
          </Link>
        </li>
      </ul>
    );
  }