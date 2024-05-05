import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import reactLogo from '../src/assets/react.svg';


function App() {

  useEffect(() => {
    document.body.classList.add("dark");
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

const NoMatch = () => {
  return (
    <MainLayout>
       <div className='container mx-auto py-40'>

        <div className=' flex justify-center'>
            <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react h-32" alt="React logo" />
            </a>
        </div>

        <div className='flex justify-center'>
            
            <div>
            
            <div className=''>
                <p className=' text-white '>
                  There is noting. Please go back home.
                </p>
                <div className=" flex justify-center my-8">
                <Link to="/" className="btn-primary">
                    Go back
                </Link>
                </div>
            </div>

            </div>

        </div>

        </div>

    </MainLayout>
  );
}

export default App
