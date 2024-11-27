import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedDish from './components/FeaturedDish';
import LoginForm from './components/LoginForm';
import UploadDishForm from './components/UploadDishForm';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedDish />
      {showLogin && <LoginForm />}
      <UploadDishForm />
    </div>
  );
}

export default App;