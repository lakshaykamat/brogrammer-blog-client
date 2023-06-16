import Footer from "@/app/components/Footer"
import Navbar from "@/app/components/Navbar"

const MainLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <div>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}
export default MainLayout