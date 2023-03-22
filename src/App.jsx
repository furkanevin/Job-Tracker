import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JobList from './pages/JobList';
import AddJob from './pages/AddJob';
import Header from './components/Header';
import Welcome from './pages/Welcome';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/job-list" element={<JobList />} />
        <Route path="/add-job" element={<AddJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
