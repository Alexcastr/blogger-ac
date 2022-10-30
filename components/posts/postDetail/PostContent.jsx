import PostHeader from "./PostHeader"
import ReactMarkdown from "react-markdown"
import Image from 'next/image'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'


SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('css', css)

const PostContent = ({post}) => {

  const imagePath =`/images/posts/${post.slug}/${post.image}`
  // toDo hay un problema con la imagen que no carga cuando es creada con el contenido markdown
  // los archivos .md deben tener el mismo nombre que la ruta donde se encuentra la imagen importante markdown !
  const customRenderers = {
    //  img(image) {
    //    return (
    //      <Image
    //        src={`/images/posts/${post.slug}/${image.properties.src}`}
    //        alt={image.alt}
    //        width={600}
    //        height={300}
    //      />
    //    ) // data are  available in the file.md content
    //  },
    p(paragraph) {
      const { node } = paragraph

      if (node.children[0].tagName === 'img') {
        const image = node.children[0]

        return (
          <div>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        )
      }

      return <p>{paragraph.children}</p>
    },
    // cuando usas codigo en markdown pa que se muestre tal cual hay que instalar react-syntax-highlighter t add la funcion siguiente: 
    code(code) {
      const { className, children } = code
      const language = className.split('-')[1] // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      )
    },
  }

  return (
    <article >
      <PostHeader title={post.title} image={imagePath} />
      <div className="bg-light container py-4 rounded-bottom">
        <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
      </div>
      
    </article>
  )
}

export default PostContent