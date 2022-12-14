import GuestNav from "./GuestNav";
import DensityMediumIcon from '@mui/icons-material/DensityMedium'; import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';

const NavBar = () => {
    return (
        <div className="flex nav-wrapper w-screen h-[60px] px-2 lg:px-36 bg-white fixed top-0 border-b-">
            <div className="flex items-center space-x-3 h-[70%] w-full my-auto md:space-x-reverse md:space-x-4">
                <DensityMediumIcon className="my-auto cursor-pointer md:hidden" />
                <Link href={'/'} >
                    <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" width={50} className="cursor-pointer" />
                </Link>
                <div className="hidden w-[400px] md:flex items-center text-center h-[40px] border-[1.5px] border-black/50 rounded">
                    <input
                        placeholder="Search..."
                        className=" w-[90%] h-[100%] outline-none ml-3" />
                    <SearchIcon fontSize='large' />
                </div>
            </div>
            <div className="flex items-center">
                <GuestNav />
            </div>
        </div>
    )
}

export default NavBar