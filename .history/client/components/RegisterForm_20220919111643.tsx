
interface Props {
    bg: string,
    platform: string,
    logo: string
}

const RegisterForm = ({ bg, platform, logo }: Props) => {
    return (
        <div className={`w-[85vw] h-[50px] bg-[${bg}] text-white font-bold rounded flex items-center mx-auto px-[5vw]`}>
                <img src={logo} width={40} height={40} />
                Continue with {platform}
        </div>
    )
}

export default RegisterForm
