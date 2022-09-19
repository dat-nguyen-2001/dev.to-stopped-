
interface Props {
    bg: string,
    platform: string,
    logo: string
}

const RegisterForm = ({ bg, platform, logo }: Props) => {
    return (
        <div className={`w-[35vw] h-[50px] bg-[${bg}] text-white rounded flex items-center mx-auto`}>
            <div className="text-center">
            <span>
                <img src={logo} width={40} height={40} />
            </span>
            <span>
                Continue with {platform}
            </span>

            </div>
        </div>
    )
}

export default RegisterForm
