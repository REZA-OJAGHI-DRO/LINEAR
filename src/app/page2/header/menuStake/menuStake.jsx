import Link from "next/link";


export default function MenuStake(){
    return(
        
        <ul className="w-[100%] h-[100%] xl:flex *:my-4 xl:justify-between *:colorTextParagraph1 *:capitalize *:font-bold items-center">
            <li>
                <Link href='../../../page4' className='colorTextParagraph2 hover:text-zinc-500 transition-all duration-300'>
                    🔥 airdrop
                </Link>
            </li>
            <li>
            <Link href='../../../page2' className='colorTextParagraph1 hover:text-zinc-500 transition-all duration-300'>
                    stake
                </Link>
            </li>
            <li>
            <Link href='../../../page3' className='colorTextParagraph2 hover:text-zinc-500 transition-all duration-300'>
                    my account
                </Link>
            </li>
            <li>
            <Link href='https://docs.linearprotocol.org/' className='colorTextParagraph2 hover:text-zinc-500 transition-all duration-300'>
                    docs
                </Link>
            </li>

        </ul>
    )
}