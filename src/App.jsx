import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import MeetupPage from './components/MeetupPage';
import ProfileSetting from './components/ProfileSetting';
import "./App.css";
import Searchbar from './components/Searchbar';
import LoginRegister from './pages/LoginRegister';

export default function App() {

  return (
    <Router>
      <div className='app-container'>
        <Navigation />  {/* Navigation bar is always visible */}
        <div className='content'>
          <Searchbar />
      <Routes>
     
          <Route path="/" element={<Dashboard />} />
          <Route path="/meetups" element={<MeetupPage />} />
          <Route path="/profile" element={<ProfileSetting />} />
          <Route path="/login" element={<LoginRegister />} />
       
      </Routes>
       </div>
      </div>
    </Router>
  );
}


