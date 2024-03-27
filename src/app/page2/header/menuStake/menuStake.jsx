import Link from "next/link";


export default function MenuStake(){
    return(
        <ul className="hidden  w-[28%] h-[100%] xl:flex *:text-[1.1rem]  justify-between *:text-white *:capitalize *:font-bold items-center">
            <li>
                <Link href='../../../page4' className='text-zinc-400 hover:text-zinc-500 transition-all duration-300'>
                    🔥 airdrop
                </Link>
            </li>
            <li>
            <Link href='../../../page2' className='text-white hover:text-zinc-500 transition-all duration-300'>
                    stake
                </Link>
            </li>
            <li>
            <Link href='../../../page3' className='text-zinc-400 hover:text-zinc-500 transition-all duration-300'>
                    my account
                </Link>
            </li>
            <li>
            <Link href='https://docs.linearprotocol.org/' className='text-zinc-400 hover:text-zinc-500 transition-all duration-300'>
                    docs
                </Link>
            </li>

        </ul>
    )
}