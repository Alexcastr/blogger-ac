import Image from 'next/image'

const PostHeader = ({title, image}) => {

  return (
    <header className="d-flex container border bg-light py-2 rounded-top">
      <h1 className="flex-fill text-primary align-center my-auto">{title}</h1>
      <Image className='flex-fill' src={image} alt={title} width={200} height={150} />
      
    </header>
  )
}

export default PostHeader