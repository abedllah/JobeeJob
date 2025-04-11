import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CommunityPage from "./pages/CommunityPage";
import InternshipPage from './pages/InternshipPage';
import JobPage from './pages/JobPage';
import CoursPage from './pages/CoursPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<CommunityPage />} />
            <Route path="/internships" element={<InternshipPage />} />
            <Route path="/jobs" element={<JobPage />} />
            <Route path="/courses" element={<CoursPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;