import { FormEvent, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import reactLogo from '../assets/react.svg'
import '../App.css'
import MainLayout from '../layouts/MainLayout';

const Home = () => {
    const navigate = useNavigate();
    const [joinMeeting, setJoinMeeting] = useState<string>('');

    const createNewMeet = (e: FormEvent) => {
        e.preventDefault();
        const roomId = uuidV4();
        navigate('/'+roomId)
    }

    return (
        <>
        <MainLayout>

        <div className='container mx-auto'>

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
                    className="dark:text-white mt-1 px-3 py-2 bg-slate-700  border shadow-sm border-slate-700 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-full sm:text-sm focus:ring-1" 
                    placeholder="Add room id"
                    onChange={(e) => setJoinMeeting(e.target.value)} />
                
                <div className=" flex justify-center my-5">
                    <Link to={joinMeeting} className="btn-primary me-4">
                        Join meeting
                    </Link>
                    <button onClick={createNewMeet} className="btn-primary">
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