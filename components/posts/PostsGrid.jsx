import PostsItem from './PostsItem'

const PostsGrid = ({posts}) => {
  return (

    <ul className='row row-cols-2 row-cols-lg-3 g-2 pb-2'>
      {posts.map((post) => (
        <PostsItem key={post.slug} post={post} />
      ))}
    </ul>
  )
}

export default PostsGrid