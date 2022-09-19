import SearchIcon from '@mui/icons-material/Search';

const GuestNav = () => {
    return (
        <div className='flex space-x-3'>
            <SearchIcon fontSize='large'/>
            <Link href={"/register"}>
            </Link>
        </div>
    )
}

export default GuestNav