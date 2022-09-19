import GuestNav from "./GuestNav";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';import Link from "next/link";
const NavBar = () => {
    return (
        <div className="flex space-x-10">
            <div>
                <DensityMediumIcon />
                <Link href={'/'}>
                    <img src="dev.to.png" width={35} height={35} />
                </Link>
            </div>
            <GuestNav />
        </div>
    )
}

export default NavBar