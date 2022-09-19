import Layout from "../components/Layout"
import RegisterForm from "../components/RegisterForm"
import Link from "next/link"

const Register = () => {
    return (
        <Layout title="Welcome-DEV Community 👩‍💻👨‍💻">
            <div>
                <h1 className="font-bold text-3xl">Welcome to DEV Community 👩‍💻👨‍💻</h1>
                <p><span className="text-[#3e51e0] hover:underline text-sm">
                    <Link href={'/'}>
                        DEV Community 👩‍💻👨‍💻
                    </Link>
                </span> is a community of 912,692 amazing developers</p>
                <RegisterForm bg="black" platform="Apple" logo="apple_logo.png" />
                <RegisterForm bg="#0a3e4a" platform="Forem" logo="forem_logo.png" />
                <RegisterForm bg="black" platform="Github" logo="github_logo.png" />
                <RegisterForm bg="#1da1f2" platform="Twitter" logo="twitter_logo.png" />
            </div>
        </Layout>
    )
}

export default Register