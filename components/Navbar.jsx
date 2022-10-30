import Link from "next/link"



const Navbar = () => {
  return (
    <nav className="container pt-2">
      <ul className="row">
        <li className="col-auto me-auto list-unstyled">
          <Link href="/">
            <a className="text-white fs-3 fw-bold text-decoration-none">ALEX BLOG</a>
          </Link>
        </li>
        <li className="col-auto list-unstyled">
          <Link href="/posts" className="fs-3">
            <a className="text-white fs-3 text-decoration-none">Posts</a>
          </Link>
        </li>
        <li className="col-auto text-white list-unstyled">
          <Link href="/contact" className="text-white fs-3">
            <a className="text-white fs-3 text-decoration-none">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar