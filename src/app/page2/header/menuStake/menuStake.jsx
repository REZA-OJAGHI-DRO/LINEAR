import Link from "next/link";


export default function MenuStake(){
    return(
        
        <ul className="w-[100%] h-[100%] xl:flex *:my-4 xl:justify-between *:text-white *:capitalize *:font-bold items-center">
            <li>
                <Link href='../../../page4' className='xl:text-zinc-400 hover:text-zinc-500 transition-all duration-300'>
                    🔥 airdrop
                </Link>
            </li>
            <li>
            <Link href='../../../page2' className='xl:text-white hover:text-zinc-500 transition-all duration-300'>
                    stake
                </Link>
            </li>
            <li>
            <Link href='../../../page3' className='xl:text-zinc-400 hover:text-zinc-500 transition-all duration-300'>
                    my account
                </Link>
            </li>
            <li>
            <Link href='https://docs.linearprotocol.org/' className='xl:text-zinc-400 hover:text-zinc-500 transition-all duration-300'>
                    docs
                </Link>
            </li>

        </ul>
    )
}