
interface Props {
    bg: string,
    platform: string,
    logo: string
}

const RegisterForm = ({bg, platform, logo}: Props) => {
    return (
        <div className={`w-[150px] h-[40px] bg-${bg} text-${bg}`}>
            Continue with {}
        </div>
    )
}

export default RegisterForm
