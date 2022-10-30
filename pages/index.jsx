import Head from 'next/head';
import FeaturedPosts from '../components/FeaturedPosts'
import Hero from '../components/Hero'
import { getFeaturedPosts } from '../lib/postsUtils'

export default function Home({ posts }) {
  return (
    <>
     <Head>
        <title>Alex' Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts,
    },
  }
}
