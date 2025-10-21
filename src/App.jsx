import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ResearchArticle from './pages/ResearchArticle';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research/:paperId" element={<ResearchArticle />} />
        </Routes>
      </Router>
      <Analytics />
    </>
  );
}

export default App;
