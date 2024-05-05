import React from 'react';
import reactLogo from '../assets/react.svg'
import '../App.css'
import MainLayout from '../layouts/MainLayout';

const Home = () => {
    return (
        <>
        <MainLayout>

        <div className='container mx-auto py-40'>

        <div className=' flex justify-center'>
            <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react h-32" alt="React logo" />
            </a>
        </div>

        <div className='flex justify-center'>
            
            <div>
            <h1 className=' text-3xl font-semibold dark:text-white my-8 text-center'> React Meet </h1>
            
            <div className=''>
                <input type="text" 
                name="text" 
                className=" mt-1 px-3 py-2 bg-slate-700  border shadow-sm border-slate-700 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-full sm:text-sm focus:ring-1" placeholder="Add room id" />
                
                <div className=" flex justify-center my-5">
                <button className="btn-primary me-4">
                    Join meeting
                </button>
                <button className="btn-primary">
                    Create new meeting
                </button>
                </div>
            </div>

            </div>

        </div>

        </div>

        </MainLayout>
        </>
    )
}

export default Home