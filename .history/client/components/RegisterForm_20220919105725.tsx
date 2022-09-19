
interface Props {
    bg: string,
    platform: string,
    logo: string
}

const RegisterForm = ({bg, platform, logo}: Props) => {
    return (
        <div className={`w-[250px] h-[40px] bg-[${bg}] text-white rounded flex items-center`}>
            <img src={logo} width={35} height={50} />
            Continue with {platform}
        </div>
    )
}

export default RegisterForm
