import PrimarySearchAppBar from "./Navbar"

const Layout = ({ children }: {children: React.ReactNode }) => { 
  return (
    <div>
      <PrimarySearchAppBar/>
      {children}
    </div>
  )
}

export default Layout
