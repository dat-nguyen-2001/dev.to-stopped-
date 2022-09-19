import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';

const GuestNav = () => {
    return (
        <div className='flex space-x-3'>
            <SearchIcon fontSize='large' className=''/>
            <Link href={"/register"}>
                <button className=''>
                    Create Account
                </button>
            </Link>
        </div>
    )
}

export default GuestNav