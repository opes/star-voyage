import Head from 'next/head'

const Home = () => (
  <div className="container">
    <Head>
      <title>Star Voyage</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">Welcome to Star Voyage</h1>
      <h2 className="subheadline">A Citizen's Guide to the Universe</h2>
      <p className="social">
        <a href="https://github.com/opes/star-voyage">
          <img src="/github.svg" alt="GitHub" />
        </a>
      </p>
    </main>
  </div>
)

export default Home
