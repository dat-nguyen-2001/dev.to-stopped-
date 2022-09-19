
interface Props {
    bg: string,
    platform: string,
    logo: string
}

const RegisterForm = ({ bg, platform, logo }: Props) => {
    return (
        <div className={`w-[400px] h-[50px] bg-[#022830] text-white rounded flex items-center`}>
            <span>
                <img src={logo} width={40} height={40} />
            </span>
            <span>
                Continue with {platform}
            </span>
        </div>
    )
}

export default RegisterForm
