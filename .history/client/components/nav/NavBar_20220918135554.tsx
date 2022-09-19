import GuestNav from "./GuestNav";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';import Link from "next/link";
const NavBar = () => {
    return (
        <div>
            <div>
                <DensityMediumIcon />
                <Link href={'/'}>
                    <img src="dev.to" />
                </Link>
            </div>
            <GuestNav />
        </div>
    )
}

export default NavBar