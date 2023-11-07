import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import LogIn from './pages/login';
import SignUp from './pages/signup';
import Book from './pages/book';
import ProfilePage from './pages/profile';
import ProtectedRoute from './components/Entry/ProtectedRoute';
import { UserAuthContextProvider } from './context/userAuthContext';
import './App.css';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';

function App() {
  return (
    <Router>
      <UserAuthContextProvider>
        <ErrorBoundary>
          <Routes>
          <Route
            path='/profile'
            element={
              <ProtectedRoute>
               <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          </Routes>
        </ErrorBoundary>
      </UserAuthContextProvider>
    </Router>
  );
};

export default App;