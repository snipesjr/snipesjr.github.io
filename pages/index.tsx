import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";

import { GithubIcon, LinkedInIcon} from "../components/icons";


const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Jake Snipes</title>
                <meta name="description" content="Jake Snipes Homepage"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Jake Snipes
                </h1>
                <p className={styles.description}>
                    Data Leader | Fintech
                </p>
                <div className={styles.socials}>
                    <div className={styles.card}>
                        <a
                            href="https://www.linkedin.com/in/jake-snipes-93256737/"
                            className={styles.link}
                            aria-label="LinkedIn Profile Link"
                            title="LinkedIn Profile Link"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <LinkedInIcon/>
                        </a>
                    </div>
                    <div className={styles.card}>
                        <a
                            href="https://github.com/snipesjr"
                            className={styles.link}
                            aria-label="GitHub Profile Link"
                            title="Github Profile"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <GithubIcon/>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home
