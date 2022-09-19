
interface Props {
    bg: string,
    platform: string,
    logo: string
}

const RegisterForm = ({ bg, platform, logo }: Props) => {
    return (
        <div className={``}>
            <div className={` flex items-center mx-auto`}>
                <img src={logo} width={40} height={40} />
                Continue with {platform}
            </div>
        </div>
    )
}

export default RegisterForm
