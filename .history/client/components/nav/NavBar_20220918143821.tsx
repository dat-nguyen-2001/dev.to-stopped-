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
                <div className="">
                    <SearchIcon className="cursor-pointer w-5 lg:w-6 left-1 absolute" onClick={() => setIsSearching(false)} />
                    <input
                        placeholder="Titles, Peoples, Genres"
                        className="absolute top-0 left-10 bg-black/0 w-[80%] h-[100%] outline-none" />
                </div>
            </div>
            <div className="flex items-center">
                <GuestNav />
            </div>
        </div>
    )
}

export default NavBar