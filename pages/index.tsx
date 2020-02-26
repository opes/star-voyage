import Head from 'next/head'
import { Divider, Icon } from 'semantic-ui-react'

const Home = () => (
  <div className="container">
    <Head>
      <title>Star Voyage</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">Welcome to Star Voyage</h1>
      <h2 className="subheadline">A Citizen's Guide to the Universe</h2>
      <p className="description">
        <a href="https://github.com/opes/star-voyage">
          <Divider horizontal />
          <Icon link name="github" size="big" />
        </a>
      </p>
    </main>
  </div>
)

export default Home
