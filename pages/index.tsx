import Head from 'next/head'
import { GoMarkGithub } from 'react-icons/go'
import { ThemeProvider } from 'emotion-theming'
import theme from '../themes/preset'

const Home = () => (
  <ThemeProvider theme={theme}>
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
            <GoMarkGithub size="2.4em" />
          </a>
        </p>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #111;
          color: #eee;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .subheadline {
          font-weight: 100;
          font-size: 2rem;
          font-style: italic;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BaMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  </ThemeProvider>
)

export default Home
