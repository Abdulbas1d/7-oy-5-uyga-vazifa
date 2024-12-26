import React from 'react'
import './index.css'

function MainLayout({ children }) {
    return (
        <div className='container'>
            <header className="header"></header>

            {children}
        </div>
    )
}

export default MainLayout
