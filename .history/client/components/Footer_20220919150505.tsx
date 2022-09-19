import Link from "next/link"



const Footer = () => {

    return (
        <div className="bg-inherit text-sm">
            <div className="max-w-[1024px] m-auto text-center my-12 flex flex-col space-y-1">
                <p className="mb-5">
                    <span className="text-[#3e51e0] font-bold hover:underline">
                        <Link href={'/'}>
                            DEV Community 👩‍💻👨‍💻
                        </Link>
                    </span>
                    — A constructive and inclusive social network for software developers. With you every step of your journey.
                </p>
                <p>
                    Built on
                    <span> </span>
                    <span className="text-[#3e51e0] hover:underline">
                        <Link href={'https://forem.com/'}>
                            <a target="_blank" rel="noopener noreferrer">
                                Forem
                            </a>
                        </Link>
                    </span> — the open source software that powers
                    <span> </span>
                    <span className="text-[#3e51e0] hover:underline">
                        <Link href={'/'}>
                            Dev
                        </Link>
                    </span> and other inclusive communities.
                </p>
                <p>
                    Made with love and
                    <span> </span>
                    <span className="text-[#3e51e0] hover:underline">
                        <Link href={'https://rubyonrails.org/'}>
                            <a target="_blank" rel="noopener noreferrer">
                                Ruby on Rails.
                            </a>
                        </Link>
                    </span> DEV Community 👩‍💻👨‍💻 © 2016 - 2022.
                </p>
            </div>
        </div>)
}

export default Footer