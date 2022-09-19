import GuestNav from "./GuestNav";
import DensityMediumIcon from '@mui/icons-material/DensityMedium'; import Link from "next/link";
const NavBar = () => {
    return (
        <div className="flex nav-wrapper w-screen h-[60px] px-5 bg-[red]">
            <div className="flex space-x-1 ">
                <DensityMediumIcon className="mt-[5px]" />
                <Link href={'/'}>
                    <img src="dev.to.png" width={40} height={40} />
                </Link>
            </div>
            <div className="flex">
                <GuestNav />
            </div>
        </div>
    )
}

export default NavBar