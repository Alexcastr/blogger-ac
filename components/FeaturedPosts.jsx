import PostsGrid from "./posts/PostsGrid"

const FeaturedPosts = ({posts}) => {
  
  return (
    <section className="bg-secondary">
      <h2 className="text-center py-2">Featured posts</h2>
      <PostsGrid posts={posts}/>
    </section>
  )
}

export default FeaturedPosts