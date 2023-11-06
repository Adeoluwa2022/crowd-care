import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
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

const firebaseConfig = {
  apiKey: 'AIzaSyAPbi5-xdX8s3h7aK_0S38z1VjY4kfGSk4',
  authDomain: 'crowd-care.firebaseapp.com',
  projectId: 'crowd-care',
  storageBucket: 'crowd-care.appspot.com',
  messagingSenderId: '457828323552',
  appId: '1:457828323552:web:41c1a092b1b28b56a68085',
};

const app = initializeApp(firebaseConfig);

function App() {
  return (
    <Router>
    <UserAuthContextProvider>
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
    </UserAuthContextProvider>
    </Router>
  );
};

export default App;