import React, {useEffect, useState } from 'react'
import Sidebar from './component/Sidebar'
import Overview from './component/Overview'
import Insert from './component/Insert'

function Seller() {

    const fetch = ()=>{
      //
    }

    useEffect(()=>{
        fetch()
    },[])
    
    const [activeSection, setActiveSection] = useState("overview");
  
    return (

      <div className="lg:flex min-h-screen">
      <Sidebar setActiveSection={setActiveSection} ActiveSection={activeSection} />
      <div className="flex-grow p-8 relative bg-white m-3 shadow-lg rounded-sm shadow-slate-500">
      {activeSection === "overview" && <div>
          <Overview/>
        </div>}
        
        {activeSection === "insertProduct" && <div>
          <Insert/>
        </div>}

        {/* {activeSection === "deleteProduct" && <div></div>} */}
        {/* Add more sections as needed */}
      </div>
        {/* Add more sections as needed */}
    </div>
  )
}

export default Seller
