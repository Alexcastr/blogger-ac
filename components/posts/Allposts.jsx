import PostsGrid from "./PostsGrid"

const Allposts = ({posts}) => {
  return (
    <section className=" bg-secondary">
      <h1 className="text-center py-4">All posts</h1>
        <PostsGrid posts={posts} />
    </section>
  )
}

export default Allposts