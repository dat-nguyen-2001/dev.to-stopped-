
interface Props {
    bg: string,
    platform: string,
    logo: string
}

const RegisterForm = ({bg, platform, logo}: Props) => {
    return (
        <div className={`w-[400px] h-[50px] bg-[${bg}] text-white rounded flex items-center`}>
            <img src={logo} width={40} height={40} />
            <p>
                Continue with {platform}
                </p>
        </div>
    )
}

export default RegisterForm
