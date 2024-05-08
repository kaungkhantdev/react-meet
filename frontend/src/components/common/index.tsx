import { Link } from 'react-router-dom';
import { CopyIcon, LoadingIcon } from '../icons';

export const Loading = () => {
    return (
        <div className='flex items-center justify-center h-full'>
            <div className=' flex flex-col items-center'>
                <div className=' flex justify-center my-4'>
                    <LoadingIcon w={40} h={40} className=' animate-spin '/>
                </div>
                <p className=' text-white mb-5'>Please wait, loading.</p>
                <Link to={'/'} className='btn-primary'>
                    go back
                </Link>
            </div>
        </div>
    )
}


export const ERRMsg = ({msg}: { msg: string}) => {
    return (
        <div className=' flex flex-col items-center'>
            <p className=' text-white mb-5 text-center'>{msg}</p>
            <Link to={'/'} className='btn-primary'>
                go back
            </Link>
        </div>
    )
}


export const NoOneMsg = () => {
    return (
        <div className=' flex flex-col items-center'>
            <p className=' text-white mb-5 text-center'>There're no one here.</p>
        </div>
    )
}


export const CopyId = ({id}: {id: string | undefined}) => {
    return (
        <div className='dark:bg-slate-700 rounded-lg py-3 px-6'>
           <div className='my-4 flex items-center'>
                <span className='text-white me-5'>Meet Link</span>
                <button onClick={() =>  navigator.clipboard.writeText(window.location.href)}>
                    <CopyIcon className=' cursor-pointer'/>
                </button>
            </div>
            <div className='my-4 flex items-center'>
                <span className='text-white me-5'>Room Id</span>
                <button onClick={() =>  navigator.clipboard.writeText(id??'')}>
                    <CopyIcon className=' cursor-pointer'/>
                </button>
            </div>
            
        </div>
    )
}