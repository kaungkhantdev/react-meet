import React from 'react';

const MainLayout = ({ children } : { children: React.ReactNode}) => {
    return (
        <>
        <div className='dark:bg-slate-800 h-screen'>
            { children }
        </div>
        </>
    )
}

export default MainLayout