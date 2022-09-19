import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="About DEV - DEV Community 👩‍💻👨‍💻">
    <div className="px-10 mx-auto w-[85vw] max-w-[800px] bg-white rounded pt-10 pb-20">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">About DEV</h1>
      <br></br>
      <p>DEV is a community of software developers getting together to help one another out. The software industry relies on collaboration and networked learning. We provide a place for that to happen.</p>
      <br></br>
      <p>DEV is built on Forem: open source software designed to empower communities. Because our application is open source, you can inspect every little detail of the code, or chip in yourself! Forem is available for anyone interested in creating similar communities in any niche or passion. Visit our meta Forem, forem.dev for more information.</p>
      <br></br>
      <p>We believe in transparency and adding value to the ecosystem. We hope you enjoy poking around and participating!</p>
      <br></br>
      <h2 className='font-bold text-xl sm:text-2xl md:text-3xl'>Leadership</h2>
      <a className='mt-5'>
        <img src='leadership.jpg' />
      </a>
    </div>
  </Layout>
)

export default AboutPage
