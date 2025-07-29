
import { Routes, Route } from 'react-router-dom'; // ✅ Add Route here
 import { ToastContainer } from 'react-toastify';
import AddFood from './pages/AddFood/AddFood';
import ListFood from './pages/ListFood/ListFood';
import Orders from './pages/Orders/Orders';
import Sidebar from './components/Sidebar/Sidebar';
import Menubar from './components/Menubar/Menubar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {

   const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    
        }

    return (<div id="wrapper" className={!sidebarVisible ? "sb-sidenav-toggled" : ""}>
            <Sidebar sidebatVisible={sidebarVisible} />
            <div id="page-content-wrapper">
                <Menubar toggleSidebar={toggleSidebar} />
                <ToastContainer/>

                <div className="container-fluid">
                    <Outlet />
                </div>
                <Routes>
                    <Route path='/add' element={<AddFood />}>
                    </Route>

                    <Route path='/list' element={<ListFood />}>
                    </Route>
                    <Route path='/orders' element={<Orders />}>
                    </Route>
                    <Route path='/' element={<ListFood />}>
                    </Route>
                </Routes>
            </div>
        </div>
  


    )
}

export default App;