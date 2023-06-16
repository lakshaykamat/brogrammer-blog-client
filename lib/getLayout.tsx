// Define a function to determine the layout based on the current route
import  AdminLayout  from "./Layout/AdminLayout"
import  MainLayout  from "./Layout/MainLayout"

// AdminLayout.js
export const getLayout = (path:string, childern:React.ReactNode)=> {
    if (path.startsWith('/admin')) {
        return <AdminLayout>{childern} </AdminLayout>;
    } else {
        return <MainLayout>{childern} </MainLayout>;
    }
};



