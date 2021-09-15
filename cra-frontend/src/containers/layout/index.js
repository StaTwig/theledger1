import React from 'react'
import Header from '../../shared/header';
import Sidebar from '../../shared/sidebarMenu';

const Layout = (props) => {
    return (
        <div className="container-fluid p-0">
            <Header {...props} />
            <div className="d-flex">
                <Sidebar {...props} />
            </div>
        </div>
    )
}

export default Layout
