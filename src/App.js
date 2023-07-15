import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { AuthContext } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import Home from './components/Home';
import CourseListing from './components/CourseListing';
import CourseDetails from './components/CourseDetails';
import Login from './components/Login';

export const AuthContext = createContext();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <Routes>
          <Route path="/login" component={Login} />
          <PrivateRoute
            path="/courses/:id"
            component={CourseDetails}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute
            path="/courses"
            component={CourseListing}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute
            path="/"
            component={Home}
            isAuthenticated={isAuthenticated}
          />
        </Routes>
      </AuthContext.Provider>
    </Router>
  );
};

export default App;
