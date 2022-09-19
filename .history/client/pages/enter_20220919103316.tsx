import Layout from "../components/Layout"
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
                <RegisterForm />
            </div>
        </Layout>
    )
}

export default Register