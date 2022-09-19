import GuestNav from "./GuestNav";
import DensityMediumIcon from '@mui/icons-material/DensityMedium'; import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';

const NavBar = () => {
    return (
        <div className="flex nav-wrapper w-screen h-[60px] px-2">
            <div className="flex space-x-3 h-[70%] my-auto md:space-x-0">
                <DensityMediumIcon className="my-auto cursor-pointer md:hidden" />
                <Link href={'/'}>
                    <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" width={52} />
                </Link>
                <div className="md:right-32 lg:relative lg:right-2 w-[250px] right-[15vw] flex items-center h-[35px] border-white border-[1.5px]">
                <SearchIcon fontSize='large' className='my-auto pt-2 pl-2' />
                    <input
                        placeholder="Search ..."
                        className="top-0 left-10 bg-black/0 w-[80%] h-[100%] outline-none" />
                </div>
            </div>
            <div className="flex items-center">
                <GuestNav />
            </div>
        </div>
    )
}

export default NavBar