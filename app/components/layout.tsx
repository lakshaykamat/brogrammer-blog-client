"use client"
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { usePathname } from 'next/navigation'

type Props = {}
export const Main = ()=>{
    const router = usePathname()
    // export const determineLayout = (path:String) => {
    //     const currentRoute = path; // Implement the logic to determine the current route
    //   console.log(path);
    
    //     // Return the layout component based on the current route
    //     if (currentRoute === '/admin') {
    //       return AdminLayout;
    //     }else{
    
    //         return MainLayout;
    //     }
      
    // }
    router == "/admin" ? AdminLayout : MainLayout;

}
 const AdminLayout = (props: Props) => {
  return (
    <div>layout</div>
    )
}
 const MainLayout = (props: Props):React.JSX.Element => {
  return (
    <>
    <Navbar/>
<div>layout</div>
    <Footer/>
    </>
  )
}