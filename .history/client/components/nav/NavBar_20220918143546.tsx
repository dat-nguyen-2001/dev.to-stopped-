import GuestNav from "./GuestNav";
import DensityMediumIcon from '@mui/icons-material/DensityMedium'; import Link from "next/link";
const NavBar = () => {
    return (
        <div className="flex nav-wrapper w-screen h-[60px] px-2">
            <div className="flex space-x-3 h-[70%] my-auto md:space-x-0">
                <DensityMediumIcon className="my-auto cursor-pointer md:hidden" />
                <Link href={'/'}>
                    <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" width={52} />
                </Link>
            </div>
            <div className="flex items-center">
                <GuestNav />
            </div>
        </div>
    )
}

export default NavBar