import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";

import Container from '../components/container'
import Layout from '../components/layout'
import Intro from '../components/intro'

type Post = {
    title: string,
    author: string
}

type Props = {
    allPosts: Post[]
}

export default function Index({}: Props) {
    return (
        <>
            <Layout>
                <Head>
                    <title>Jake Snipes Personal Website Homepage</title>
                </Head>
                <Container>
                    <Intro></Intro>
                </Container>
            </Layout>
        </>
    )
}
