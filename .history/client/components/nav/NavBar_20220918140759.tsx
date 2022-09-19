import GuestNav from "./GuestNav";
import DensityMediumIcon from '@mui/icons-material/DensityMedium'; import Link from "next/link";
const NavBar = () => {
    return (
        <div className="flex nav-wrapper w-screen h-[60px] px-5 bg-[red]">
            <div className="flex space-x-3 h-[60%] my-auto">
                <DensityMediumIcon className="my-auto cursor-pointer" />
                <Link href={'/'}>
                    <img src="dev.to.png" width={50} height={50} />
                </Link>
            </div>
            <div className="flex">
                <GuestNav />
            </div>
        </div>
    )
}

export default NavBar