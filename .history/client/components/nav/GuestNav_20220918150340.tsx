import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';

const GuestNav = () => {
    return (
        <div className='flex space-x-1'>
            <div className='w-10 h-10 bg-[#e5e5e5] rounded-lg cursor-pointer md:hidden'>
                <SearchIcon fontSize='large' className='my-auto pt-2 pl-2' />
            </div>
            <Link href={"/enter"}>
                <button className='w-full h-[40px] border-solid border-[#3e51e0] border-2 px-2 rounded-md text-[#3e51e0] hover:bg-[#3e51e0]/25 hover:text- hover:underline'>
                    Login
                </button>
            </Link>
            <Link href={"/register"}>
                <button className='min-w-[150px] h-[40px] border-solid border-[#3e51e0] border-2 px-2 rounded-md text-[#3e51e0] font-semibold hover:bg-[#3e51e0] hover:text-white hover:underline'>
                    Create Account
                </button>
            </Link>
        </div>
    )
}

export default GuestNav