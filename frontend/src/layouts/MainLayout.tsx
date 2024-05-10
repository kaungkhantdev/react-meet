import React from 'react';

const MainLayout = ({ children } : { children: React.ReactNode}) => {
    return (
        <>
        <div className='dark:bg-slate-800 min-h-lvh flex items-center justify-center'>
            { children }
        </div>
        </>
    )
}

export default MainLayout