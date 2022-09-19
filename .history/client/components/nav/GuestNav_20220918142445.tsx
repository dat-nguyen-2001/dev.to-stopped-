import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';

const GuestNav = () => {
    return (
        <div className='flex space-x-5'>
            <div className='w-10 h-10 bg-[#e5e5e5] rounded'>
                <SearchIcon fontSize='large' className='m-auto' />
            </div>
            <Link href={"/register"}>
                <button className=''>
                    Create Account
                </button>
            </Link>
        </div>
    )
}

export default GuestNav