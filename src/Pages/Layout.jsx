import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";



const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Navbar/>
        <div style={{minHeight:"100vh"}}>
         <div><Sidebar/></div>
         <div className="column has-background-light">
          <main>{children}</main>
         </div>
        </div>
    </React.Fragment>
  )
}

export default Layout;