
interface Props {
    bg: string,
    platform: string,
    logo: string
}

const RegisterForm = ({ bg, platform, logo }: Props) => {
    return (
        <div className={`w-[35vw] h-[50px] bg-[${bg}] text-white font-bold rounded flex items-center mx-auto`}>
            <span className="flex items-center px-40">
                <img src={logo} width={40} height={40} />
                Continue with {platform}
            </span>
            <span>
            </span>
        </div>
    )
}

export default RegisterForm
