import GuestNav from "./GuestNav";
import DensityMediumIcon from '@mui/icons-material/DensityMedium'; import Link from "next/link";
const NavBar = () => {
    return (
        <div className="flex">
            <div>
                <DensityMediumIcon />
                <Link href={'/'}>
                    <img src="dev.to.png" width={35} height={35} />
                </Link>
            </div>
            <div className="flex right-0">
                <GuestNav />
            </div>
        </div>
    )
}

export default NavBar