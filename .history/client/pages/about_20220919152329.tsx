import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="Welcome-DEV Community 👩‍💻👨‍💻">
            <div className="text-center mx-auto w-[85vw] max-w-[800px] bg-white rounded pt-10 pb-20">
                <h1 className="font-bold mb-2 text-xl sm:text-2xl md:text-3xl">Welcome to DEV Community 👩‍💻👨‍💻</h1>
                <p className="mb-10">
                    <span className="text-[#3e51e0] hover:underline text-sm md:text-base">
                        <Link href={'/'}>
                            DEV Community 👩‍💻👨‍💻
                        </Link>
                    </span> is a community of 912,692 amazing developers
                </p>
            </div>
        </Layout>
)

export default AboutPage
