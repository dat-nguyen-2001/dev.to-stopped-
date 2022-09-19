import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';

const GuestNav = () => {
    return (
        <div className='flex space-x-3'>
            <SearchIcon fontSize='large'/>
            <Link href={"/register"}>
                <button>
                    
                </button>
            </Link>
        </div>
    )
}

export default GuestNav