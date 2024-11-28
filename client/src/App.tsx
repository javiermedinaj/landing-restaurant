import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import FeaturedDish from './components/FeaturedDish';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import Testimonials from './components/Testimonials';
import About from './components/About';


function App() {
  const [token, setToken] = useState('');

  const handleLogin = (token: string) => {
    setToken(token);
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <FeaturedDish />
              <Testimonials />
            </>
          } />
          <Route 
            path="/dashboard" 
            element={token ? <Dashboard token={token} /> : <Navigate to="/login" />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;