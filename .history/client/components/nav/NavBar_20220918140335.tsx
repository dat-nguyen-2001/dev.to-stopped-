import GuestNav from "./GuestNav";
import DensityMediumIcon from '@mui/icons-material/DensityMedium'; import Link from "next/link";
const NavBar = () => {
    return (
        <div className="flex nav-wrapper w-screen bg-[red]">
            <div className="flex space-x-1">
                <DensityMediumIcon className="mt-[4px]" />
                <Link href={'/'}>
                    <img src="dev.to.png" width={35} height={35} />
                </Link>
            </div>
            <div className="flex">
                <GuestNav />
            </div>
        </div>
    )
}

export default NavBar