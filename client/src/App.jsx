import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import {Toaster} from 'react-hot-toast'
import LandingPage from './components/LandingPage'
import CMSpage from './components/Cms'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Toaster
        position="top-center"
        reverseOrder={false}
      />
    <Routes>
      <Route path='/' element={<LandingPage></LandingPage>} />
      <Route path='/cms' element={<CMSpage></CMSpage>}  />
    </Routes>
    </BrowserRouter>
  )
}

export default App
