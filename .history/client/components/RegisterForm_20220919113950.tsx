
interface Props {
    bg: string,
    platform: string,
    logo: string
}

const RegisterForm = ({ bg, platform, logo }: Props) => {
    return (
        <div className={`w-[80vw] max-w-[500px] h-[50px] bg-inherit text-white font-bold rounded mx-auto flex items-center`}>
            <div className={`w-[210px] flex items-center mx-auto text-center`}>
                <img src={logo} width={40} height={40} />
                Continue with {platform}
            </div>
        </div>
    )
}

export default RegisterForm
