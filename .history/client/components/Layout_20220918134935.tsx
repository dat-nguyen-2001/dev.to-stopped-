import React, { ReactNode } from 'react'
import Head from 'next/head'
import Footer from './Footer'

interface Props {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="dev.to.png" />
    </Head>
    <Nav
    {children}
    <Footer />
  </div>
)

export default Layout