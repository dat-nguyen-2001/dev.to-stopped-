
interface Props {
    bg: string,
    platform: string,
    logo: string
}

const RegisterForm = ({bg, platform, logo}: Props) => {
    return (
        <div className={`w-[250px] h-[40px] bg-[#1da1f2] text-white rounded flex items-center text-bold`}>
            {/* <img src={logo}/> */}
            Continue with {platform}
        </div>
    )
}

export default RegisterForm
