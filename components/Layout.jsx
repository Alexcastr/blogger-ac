import Navbar from "./Navbar"



const Layout = ({children}) => {
  return (
    <div className="bg">
      <Navbar />
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

export default Layout