// /main_directory/web/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectPage from './webpage/ProjectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProjectPage />} />
      </Routes>
      
    </Router>
  );
}

export default App;
