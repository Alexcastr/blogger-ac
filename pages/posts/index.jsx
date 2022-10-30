import Head from 'next/head';
import Allposts from "../../components/posts/Allposts"
import { getAllPosts } from "../../lib/postsUtils"


function AllPostsPage({posts}){
 return (
   <>
     <Head>
       <title>All Posts</title>
       <meta
         name="description"
         content="A list of all programming-related tutorials and posts!"
       />
     </Head>
     <Allposts posts={posts} />
   </>
 )

 
}

export function getStaticProps(){

  const allPosts = getAllPosts()

  return{
    props:{
      posts: allPosts,
    }
  }
}

export default AllPostsPage