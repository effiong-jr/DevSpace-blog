import Head from 'next/head'
import Header from '@/components/Header'

const Layout = ({ title, children, description, keywords }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto md:my-7 sm:mt-0">{children}</main>
    </div>
  )
}

export default Layout

Layout.defaultProps = {
  title: 'Welcome to DevSpace',
  keywords: 'development, coding, programming,',
  description: 'The best info and new in software development',
}
