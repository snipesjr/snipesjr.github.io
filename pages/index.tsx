import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jake Snipes</title>
        <meta name="description" content="Jake Snipes Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Jake Snipes
        </h1>

        <p className={styles.description}>
          Data Leader | Fintech
        </p>

        <div className={styles.grid}>
          <a href="https://www.linkedin.com/in/jake-snipes-93256737/" className={styles.card}>
            <h2>LinkedIn &rarr;</h2>
            <p>Go to my LinkedIn Profile</p>
          </a>

          <a href="https://github.com/snipesjr" className={styles.card}>
            <h2>GitHub &rarr;</h2>
            <p>Go to my GitHub Profile</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>Jake Snipes</span>
      </footer>
    </div>
  )
}

export default Home
