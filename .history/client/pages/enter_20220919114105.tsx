import Layout from "../components/Layout"
import RegisterForm from "../components/RegisterForm"
import Link from "next/link"

const Register = () => {
    return (
        <Layout title="Welcome-DEV Community 👩‍💻👨‍💻">
            <div className="text-center mx-auto w-[85vw] max-w-[600px]">
                <h1 className="font-bold text-xl">Welcome to DEV Community 👩‍💻👨‍💻</h1>
                <p><span className="text-[#3e51e0] hover:underline text-sm">
                    <Link href={'/'}>
                        DEV Community 👩‍💻👨‍💻
                    </Link>
                </span> is a community of 912,692 amazing developers</p>
                <div className="flex flex-col space-y-2 mt-[20px]">
                    <div className="bg-[#d4ded3] rounded">
                        <RegisterForm bg="#d4ded3" platform="Apple" logo="apple-logo.jpg"/>
                    </div>
                    <div className="bg-[#022830] rounded"></div>
                    <RegisterForm bg="#022830" platform="Forem" logo="forem_logo.png" />
                    <RegisterForm bg="#000000" platform="Github" logo="github_logo.png" />
                    <RegisterForm bg="#1da1f2" platform="Twitter" logo="twitter_logo.png" />
                </div>
            </div>
        </Layout>
    )
}

export default Register