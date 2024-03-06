import './App.css';
import SignUp from './components/SignUp/SignUp';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList/BookList';

function App() {
  
  return (
    <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  </Router>
   
  )
}

export default App;
