import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'

export default function Systems() {
  return (
    <Layout>
      <Head>
        <title>Systems</title>
      </Head>
      <h1>Systems</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
