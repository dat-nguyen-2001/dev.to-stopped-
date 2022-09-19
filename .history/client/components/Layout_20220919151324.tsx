import React, { ReactNode } from 'react'
import Head from 'next/head'
import Footer from './Footer'
import NavBar from './nav/NavBar'

interface Props {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="dev.to.png" />
    </Head>
    <NavBar />
    <body>
      <div className='mt-20'>
        {children}
      </div>
    </body>
    <div className='bg-[#e5e5e5] absolute bottom-0 w-full h-auto mt-[400px]'>
      <Footer />
    </div>
  </div>
)

export default Layout
