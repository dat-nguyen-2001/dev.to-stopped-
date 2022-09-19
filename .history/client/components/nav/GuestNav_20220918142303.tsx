import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';

const GuestNav = () => {
    return (
        <div className='flex space-x-3'>
            <div className='w-5 h-'>
                <SearchIcon fontSize='large' />
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