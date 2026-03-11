
import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/Home/Home';
import '../styles/index.css'
import Resume from '../pages/Resume/Resume';
import Projects from '../pages/Projects/Projects';
import ProjectDetailPage from '../pages/Projects/[id]';


const App: React.FC = ()=> {
  const location = useLocation();
  return (
  
      <MainLayout>
        <div
          key={location.pathname}
          className='animate-fade'
        >
          <Routes location={location}>
            <Route path='/' element={<Home />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/:id' element={<ProjectDetailPage />}/>
          </Routes>
        </div>
    </MainLayout>

  )
}

export default App
