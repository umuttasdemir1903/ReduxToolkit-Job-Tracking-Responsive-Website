import {BrowserRouter,Routes,Route} from 'react-router-dom';
import JobList from './pages/JobList';
import AddJob from './pages/AddJob';
import Header from './components/Header';
const App = () => {JobList
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<JobList/>}/>
      <Route path="/add-job" element={<AddJob/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
