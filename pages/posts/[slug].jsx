import Head from 'next/head';
import PostContent from "../../components/posts/postDetail/PostContent"
import {getPostData, getPostsFiles} from '../../lib/postsUtils'

function PostsDetailPage({ post }){

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  )
  
}

export function getStaticProps(context){
  const {params} = context

  const {slug} = params
  const postData = getPostData(slug)

  return {
    props: {
      post: postData
    },
    revalidate: 600
  }
}

export function getStaticPaths(){

  const postFilenames = getPostsFiles()
  const slugs = postFilenames.map(filename => filename.replace(/\.md$/, ''))
  return{
    paths: slugs.map(slug => ({params: {slug: slug}})),
    fallback: true
  }
}


export default PostsDetailPage;