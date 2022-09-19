
interface Props {
    bg: string,
    platform: string,
    logo: string
}

const RegisterForm = ({bg, platform, logo}: Props) => {
    return (
        <div className={`w-[250px] h-[50px] bg-[${bg}] text-white rounded flex items-center`}>
            <img src={logo} width={30} height={30} />
            Continue with {platform}
        </div>
    )
}

export default RegisterForm
