import Link from "next/link"
import Image from 'next/image'

const PostsItem = ({post}) => {

  const {title, image, excerpt, date, slug} = post

  const formatedDate = new Date(date).toLocaleDateString('en-US', {
    day:'numeric',
    month: 'long',
    year: 'numeric'
  })

  const imagePath = `/images/posts/${slug}/${image}`
  const linkPath = `/posts/${slug}`
  
  return (
    <div className="col">
      <li className=" border-0 list-unstyled bg-dark rounded">
        <Link href={linkPath}>
          <a className="text-decoration-none text-white p-3">
            <div className="text-center">
              <Image
                src={imagePath}
                alt={title}
                width={300}
                height={200}
                
              />
            </div>
            <div className="text-center">
              <h3>{title}</h3>
              <time className="fw-light">{formatedDate}</time>
              <p>{excerpt}</p>
            </div>
          </a>
        </Link>
      </li>
    </div>
  )
}

export default PostsItem